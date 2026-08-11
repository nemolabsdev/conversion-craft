#!/usr/bin/env node
// contrast-check.mjs — verifies WCAG contrast assertions declared in CSS.
// Declare assertions next to your tokens:
//   /* @contrast --color-text on --color-bg >= 4.5 */
//   /* @contrast --color-cta-text on --color-cta >= 4.5 */
// The script resolves token values (one level of var() aliasing supported),
// computes the WCAG 2.x contrast ratio, and fails if any assertion does not hold.
// A tokens file with NO assertions is itself a failure — contrast must be declared.
// Exit codes: 0 all pass, 1 failures or no assertions, 2 usage error.
import { readFileSync } from 'node:fs'

const files = process.argv.slice(2)
if (!files.length) {
  console.error('usage: node tools/contrast-check.mjs <tokens.css> [more.css …]')
  process.exit(2)
}

function hexToRgb(hex) {
  let h = hex.replace('#', '')
  if (h.length === 3) h = [...h].map((c) => c + c).join('')
  if (h.length === 8) h = h.slice(0, 6) // ignore alpha
  if (h.length !== 6) return null
  const num = parseInt(h, 16)
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255]
}

function luminance([r, g, b]) {
  const chan = (c) => {
    const s = c / 255
    return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4)
  }
  return 0.2126 * chan(r) + 0.7152 * chan(g) + 0.0722 * chan(b)
}

function ratio(rgb1, rgb2) {
  const l1 = luminance(rgb1)
  const l2 = luminance(rgb2)
  const [hi, lo] = l1 >= l2 ? [l1, l2] : [l2, l1]
  return (hi + 0.05) / (lo + 0.05)
}

const tokens = new Map()
const assertions = []

for (const file of files) {
  let src
  try {
    src = readFileSync(file, 'utf8')
  } catch (e) {
    console.error(`ERROR cannot read ${file}: ${e.message}`)
    process.exit(2)
  }

  for (const m of src.matchAll(/(--[\w-]+)\s*:\s*(#[0-9a-fA-F]{3,8}|var\(\s*(--[\w-]+)\s*\))/g)) {
    tokens.set(m[1], m[3] ? { alias: m[3] } : { hex: m[2] })
  }

  const lines = src.split('\n')
  lines.forEach((line, i) => {
    const a = line.match(
      /@contrast\s+(--[\w-]+)\s+on\s+(--[\w-]+)\s*>=\s*(\d+(?:\.\d+)?)/
    )
    if (a) assertions.push({ file, line: i + 1, fg: a[1], bg: a[2], min: parseFloat(a[3]) })
  })
}

function resolve(name, seen = new Set()) {
  if (seen.has(name)) return null
  seen.add(name)
  const t = tokens.get(name)
  if (!t) return null
  if (t.hex) return t.hex
  return resolve(t.alias, seen)
}

if (!assertions.length) {
  console.log('FAIL — no @contrast assertions found. Declare which text sits on which background.')
  process.exit(1)
}

let failures = 0
for (const a of assertions) {
  const fgHex = resolve(a.fg)
  const bgHex = resolve(a.bg)
  if (!fgHex || !bgHex) {
    console.log(`FAIL ${a.file}:${a.line}  ${a.fg} on ${a.bg} — token missing or not a resolvable hex`)
    failures++
    continue
  }
  const fg = hexToRgb(fgHex)
  const bg = hexToRgb(bgHex)
  if (!fg || !bg) {
    console.log(`FAIL ${a.file}:${a.line}  ${a.fg} on ${a.bg} — unparseable hex`)
    failures++
    continue
  }
  const r = ratio(fg, bg)
  const ok = r >= a.min
  console.log(
    `${ok ? 'PASS' : 'FAIL'} ${a.file}:${a.line}  ${a.fg} (${fgHex}) on ${a.bg} (${bgHex}) = ${r.toFixed(2)}:1 (need ≥ ${a.min}:1)`
  )
  if (!ok) failures++
}

if (failures) {
  console.log(`\nFAIL — ${failures} contrast assertion(s) failed.`)
  process.exit(1)
} else {
  console.log(`\nPASS — all ${assertions.length} contrast assertions hold.`)
}
