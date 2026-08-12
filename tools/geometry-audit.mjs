#!/usr/bin/env node
// geometry-audit.mjs — measures RENDERED pixels, not source CSS.
// Complements spacing-lint (source discipline) and contrast-check (declared
// contrast): this is the gate that catches what only a browser can show —
// misaligned form rows, horizontal overflow, undersized touch targets,
// inconsistent button heights, squished images — at every viewport.
//
// Zero dependencies: drives system Chrome headless over raw CDP using
// Node >= 22 (built-in WebSocket + fetch).
//
// Usage:
//   node tools/geometry-audit.mjs <url> [--viewports 375x812,768x1024,1280x800] [--shots <dir>]
// Exit codes: 0 clean, 1 findings, 2 usage/environment error.
import { spawn } from 'node:child_process'
import { mkdirSync, writeFileSync, mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const CHROME_PATHS = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium-browser',
]

const args = process.argv.slice(2)
const url = args.find((a) => !a.startsWith('--'))
if (!url) {
  console.error('usage: node tools/geometry-audit.mjs <url> [--viewports 375x812,1280x800] [--shots <dir>]')
  process.exit(2)
}
const vpArg = args.includes('--viewports') ? args[args.indexOf('--viewports') + 1] : '375x667,560x800,640x800,768x1024,1280x800'
const shotsDir = args.includes('--shots') ? args[args.indexOf('--shots') + 1] : null
// --assert "selector:property:expected" (repeatable) — computed-style regression
// guards; catches silent CSS parse breakage (a stray */ once dropped the whole
// .btn rule while every source-level gate passed).
const styleAsserts = args.flatMap((a, i) => (a === '--assert' ? [args[i + 1]] : []))
  .map((s) => { const [sel, prop, expected] = s.split(':'); return { sel, prop, expected } })
// --fold-selector ".hero .btn-primary" — the element must sit fully inside the
// first viewport at scroll 0, at EVERY tested viewport.
const foldSelector = args.includes('--fold-selector') ? args[args.indexOf('--fold-selector') + 1] : null
const viewports = vpArg.split(',').map((s) => {
  const [w, h] = s.split('x').map(Number)
  return { width: w, height: h || 900 }
})

const { existsSync } = await import('node:fs')
const chrome = CHROME_PATHS.find((p) => existsSync(p))
if (!chrome) {
  console.error('ERROR: Chrome/Chromium not found. Install Google Chrome or adjust CHROME_PATHS.')
  process.exit(2)
}

// ---------- CDP plumbing ----------
const profile = mkdtempSync(join(tmpdir(), 'geometry-audit-'))
const proc = spawn(chrome, [
  '--headless=new',
  '--remote-debugging-port=0',
  '--no-first-run',
  '--no-default-browser-check',
  '--disable-gpu',
  `--user-data-dir=${profile}`,
  'about:blank',
])

const wsUrl = await new Promise((resolve, reject) => {
  let buf = ''
  const onData = (d) => {
    buf += d.toString()
    const m = buf.match(/DevTools listening on (ws:\/\/[^\s]+)/)
    if (m) { proc.stderr.off('data', onData); resolve(m[1]) }
  }
  proc.stderr.on('data', onData)
  proc.on('exit', () => reject(new Error('Chrome exited before DevTools was ready')))
  setTimeout(() => reject(new Error('Timed out waiting for Chrome DevTools')), 15000)
})

const ws = new WebSocket(wsUrl)
await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej })

let msgId = 0
const pending = new Map()
const eventWaiters = []
ws.onmessage = (e) => {
  const msg = JSON.parse(e.data)
  if (msg.id && pending.has(msg.id)) {
    const { resolve, reject } = pending.get(msg.id)
    pending.delete(msg.id)
    msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result)
  } else if (msg.method) {
    for (let i = eventWaiters.length - 1; i >= 0; i--) {
      const w = eventWaiters[i]
      if (w.method === msg.method && (!w.sessionId || w.sessionId === msg.sessionId)) {
        eventWaiters.splice(i, 1)
        w.resolve(msg.params)
      }
    }
  }
}
function send(method, params = {}, sessionId) {
  const id = ++msgId
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject })
    ws.send(JSON.stringify({ id, method, params, ...(sessionId ? { sessionId } : {}) }))
  })
}
function waitEvent(method, sessionId, timeoutMs = 20000) {
  return new Promise((resolve, reject) => {
    const w = { method, sessionId, resolve }
    eventWaiters.push(w)
    setTimeout(() => {
      const i = eventWaiters.indexOf(w)
      if (i >= 0) { eventWaiters.splice(i, 1); reject(new Error(`timeout waiting for ${method}`)) }
    }, timeoutMs)
  })
}

const { targetId } = await send('Target.createTarget', { url: 'about:blank' })
const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true })
await send('Page.enable', {}, sessionId)
await send('Runtime.enable', {}, sessionId)

// ---------- In-page audit ----------
const AUDIT_PARAMS = JSON.stringify({ styleAsserts, foldSelector })
const AUDIT_JS = `(async () => {
  const PARAMS = ${AUDIT_PARAMS};
  await document.fonts.ready;
  await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
  const findings = [];
  const vw = window.innerWidth;
  const label = el => {
    const id = el.id ? '#' + el.id : '';
    const cls = el.classList.length ? '.' + [...el.classList].slice(0,2).join('.') : '';
    return el.tagName.toLowerCase() + id + cls;
  };
  const visible = el => {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) return false;
    const cs = getComputedStyle(el);
    return cs.visibility !== 'hidden' && cs.display !== 'none';
  };

  // 1. Horizontal overflow — the page body must never scroll sideways.
  const overflowPx = document.documentElement.scrollWidth - vw;
  if (overflowPx > 1) {
    let worst = null;
    document.querySelectorAll('body *').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.right > vw + 1 && (!worst || r.right > worst.right)) worst = { right: r.right, el };
    });
    findings.push({ check: 'overflow', detail: 'page scrolls horizontally by ' + overflowPx + 'px' + (worst ? '; widest: ' + label(worst.el) + ' reaches ' + Math.round(worst.right) + 'px' : '') });
  }

  // 2. Form rows — when an input and its submit button share a row, their
  //    rendered top AND bottom must match within 1px.
  document.querySelectorAll('form').forEach(form => {
    const input = form.querySelector('input:not([type=hidden]):not([type=checkbox]):not([type=radio])');
    const btn = form.querySelector('button[type=submit]');
    if (!input || !btn || !visible(input) || !visible(btn)) return;
    const ir = input.getBoundingClientRect(), br = btn.getBoundingClientRect();
    const sameRow = br.top < ir.bottom && br.bottom > ir.top;
    if (!sameRow) return; // stacked layout (mobile) is fine
    const dt = Math.abs(br.top - ir.top), db = Math.abs(br.bottom - ir.bottom);
    if (dt > 1 || db > 1) findings.push({ check: 'form-row-alignment', detail: label(form) + ': button vs input off by top ' + dt.toFixed(1) + 'px / bottom ' + db.toFixed(1) + 'px' });
  });

  // 3. Touch targets — interactive elements >= 44px in both dimensions.
  //    Inline text links inside prose are exempt (WCAG 2.5.8 inline exception).
  document.querySelectorAll('a[href], button, input:not([type=hidden]), select, textarea, summary').forEach(el => {
    if (!visible(el)) return;
    const cs = getComputedStyle(el);
    if (el.tagName === 'A' && cs.display === 'inline') return;
    const r = el.getBoundingClientRect();
    if (r.height < 43.5 || (el.tagName !== 'A' && r.width < 43.5)) {
      findings.push({ check: 'touch-target', detail: label(el) + ' is ' + Math.round(r.width) + 'x' + Math.round(r.height) + 'px (need >=44px)' });
    }
  });

  // 4. Button consistency — all buttons sharing a style class render the
  //    same height (per viewport).
  ['btn-primary', 'btn-secondary'].forEach(cls => {
    const hs = new Map();
    document.querySelectorAll('.' + cls).forEach(el => {
      if (!visible(el)) return;
      const sizeCls = [...el.classList].find(c => /^btn-(sm|lg)$/.test(c)) || 'base';
      const h = Math.round(el.getBoundingClientRect().height);
      if (!hs.has(sizeCls)) hs.set(sizeCls, new Map());
      const g = hs.get(sizeCls);
      g.set(h, (g.get(h) || []).concat(label(el)));
    });
    hs.forEach((g, sizeCls) => {
      if (g.size > 1) findings.push({ check: 'button-consistency', detail: '.' + cls + ' (' + sizeCls + ') renders at ' + [...g.keys()].join('px, ') + 'px — mixed heights: ' + [...g.values()].flat().join(', ') });
    });
  });

  // 5. Computed-style regression guards (--assert selector:property:expected).
  for (const a of PARAMS.styleAsserts) {
    const el = document.querySelector(a.sel);
    if (!el) { findings.push({ check: 'style-assert', detail: a.sel + ' matched no element' }); continue; }
    const got = getComputedStyle(el)[a.prop.replace(/-([a-z])/g, (m, c) => c.toUpperCase())];
    if (String(got) !== a.expected) findings.push({ check: 'style-assert', detail: a.sel + ' ' + a.prop + ' = ' + got + ' (expected ' + a.expected + ')' });
  }

  // 6. Fold contract — the declared element sits fully inside the first viewport.
  if (PARAMS.foldSelector) {
    const el = document.querySelector(PARAMS.foldSelector);
    if (!el) findings.push({ check: 'fold', detail: PARAMS.foldSelector + ' matched no element' });
    else {
      const r = el.getBoundingClientRect();
      if (r.bottom > window.innerHeight + 0.5 || r.top < -0.5) {
        findings.push({ check: 'fold', detail: PARAMS.foldSelector + ' spans ' + Math.round(r.top) + '-' + Math.round(r.bottom) + 'px vs viewport ' + window.innerHeight + 'px — below the fold' });
      }
    }
  }

  // 7. Real CPL — counted PER RENDERED LINE via per-character Range rects,
  //    not an average-advance estimate: lines that pack narrow glyphs
  //    (i l t f, spaces) run longest, and a whole-paragraph average
  //    under-reports exactly those worst lines (caught in audit round 3:
  //    the average said 76 CPL where the worst rendered line held 81).
  document.querySelectorAll('p, li, blockquote').forEach(el => {
    if (!visible(el)) return;
    const total = (el.innerText || '').trim().length;
    if (total < 60 || total > 2000) return;
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const lineCounts = new Map();
    const range = document.createRange();
    let node;
    while ((node = walker.nextNode())) {
      const len = node.textContent.length;
      for (let i = 0; i < len; i++) {
        range.setStart(node, i); range.setEnd(node, i + 1);
        const r = range.getClientRects()[0];
        if (!r || r.width === 0) continue;
        const key = Math.round(r.top);
        let hit = false;
        for (const [top, n] of lineCounts) {
          if (Math.abs(top - key) <= 2) { lineCounts.set(top, n + 1); hit = true; break; }
        }
        if (!hit) lineCounts.set(key, 1);
      }
    }
    const worst = Math.max(0, ...lineCounts.values());
    if (worst > 80) findings.push({ check: 'cpl', detail: label(el) + ' [' + Math.round(el.clientWidth) + 'px @ ' + getComputedStyle(el).fontSize + '; text: "' + (el.innerText||'').trim().slice(0, 40) + '…"]: worst rendered line holds ' + worst + ' characters — body ceiling is 80' });
  });

  // 8. Image integrity — rendered aspect ratio must match intrinsic (no squish).
  document.querySelectorAll('img').forEach(img => {
    if (!visible(img) || !img.naturalWidth) return;
    const r = img.getBoundingClientRect();
    if (getComputedStyle(img).objectFit === 'cover') return;
    const intrinsic = img.naturalWidth / img.naturalHeight;
    const rendered = r.width / r.height;
    if (Math.abs(intrinsic - rendered) / intrinsic > 0.02) {
      findings.push({ check: 'image-squish', detail: label(img) + ': intrinsic ratio ' + intrinsic.toFixed(3) + ' vs rendered ' + rendered.toFixed(3) });
    }
  });

  return findings;
})()`

let totalFindings = 0
if (shotsDir) mkdirSync(shotsDir, { recursive: true })

for (const vp of viewports) {
  await send('Emulation.setDeviceMetricsOverride', {
    width: vp.width, height: vp.height, deviceScaleFactor: 2, mobile: vp.width < 768,
  }, sessionId)
  const loaded = waitEvent('Page.loadEventFired', sessionId)
  await send('Page.navigate', { url }, sessionId)
  await loaded
  await new Promise((r) => setTimeout(r, 400))

  const { result, exceptionDetails } = await send('Runtime.evaluate', {
    expression: AUDIT_JS, awaitPromise: true, returnByValue: true,
  }, sessionId)
  if (exceptionDetails) {
    console.error(`ERROR ${vp.width}x${vp.height}: audit script threw: ${exceptionDetails.text}`)
    totalFindings++
    continue
  }
  const findings = result.value
  const tag = `${vp.width}x${vp.height}`
  if (findings.length === 0) {
    console.log(`PASS ${tag} — rendered geometry clean`)
  } else {
    findings.forEach((f) => console.log(`FAIL ${tag} [${f.check}] ${f.detail}`))
    totalFindings += findings.length
  }

  if (shotsDir) {
    const { data } = await send('Page.captureScreenshot', { format: 'png' }, sessionId)
    const file = join(shotsDir, `audit-${tag}.png`)
    writeFileSync(file, Buffer.from(data, 'base64'))
    console.log(`  shot: ${file}`)
  }
}

ws.close()
proc.kill()
try { rmSync(profile, { recursive: true, force: true }) } catch {}

if (totalFindings) {
  console.log(`\nFAIL — ${totalFindings} rendered-geometry finding(s). Pixels do not lie.`)
  process.exit(1)
} else {
  console.log(`\nPASS — zero rendered-pixel findings across ${viewports.length} viewports.`)
}
