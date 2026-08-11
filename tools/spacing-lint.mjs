#!/usr/bin/env node
// spacing-lint.mjs — enforces pixel discipline:
//  1. Outside :root, guarded properties must use design tokens (var(--…)), never raw px/rem/em/ms.
//  2. Inside :root, spacing/gap tokens must sit on the 4px grid.
// Escape hatch: append /* lint-allow */ on a line to skip it (use sparingly, justify in review).
// Exit codes: 0 clean, 1 violations, 2 usage error.
import { readFileSync } from 'node:fs'

const files = process.argv.slice(2)
if (!files.length) {
  console.error('usage: node tools/spacing-lint.mjs <file.css> [more.css …]')
  process.exit(2)
}

const GUARDED =
  /^(margin|padding|gap|row-gap|column-gap|inset|top|right|bottom|left|font-size|line-height|letter-spacing|border-radius|transition-duration|animation-duration|transition|animation)(-(top|right|bottom|left|block|inline|start|end))?$/

let errors = 0

for (const file of files) {
  let src
  try {
    src = readFileSync(file, 'utf8')
  } catch (e) {
    console.error(`ERROR cannot read ${file}: ${e.message}`)
    errors++
    continue
  }

  const lines = src.split('\n')
  let depth = 0
  let inRoot = false
  let rootDepth = 0

  lines.forEach((raw, i) => {
    const n = i + 1
    if (/\/\*\s*lint-allow\s*\*\//.test(raw)) return
    const line = raw.replace(/\/\*.*?\*\//g, '')

    if (/:root\b[^{]*\{/.test(line)) {
      inRoot = true
      rootDepth = depth
    }

    const m = line.match(/^\s*(--[\w-]+|[a-zA-Z-]+)\s*:\s*([^;{}]+);?\s*$/)
    if (m) {
      const prop = m[1]
      const value = m[2].trim()

      if (prop.startsWith('--')) {
        if (/^--flow-/.test(prop)) {
          // Fluid-space tokens: clamp() whose min/max bounds must land exactly
          // on the 8px section grid; preferred value must carry a rem term
          // (zoom coherence). Interpolated in-between values are off-grid by
          // design — only the written bounds are checked.
          const cm = value.match(/clamp\(([^)]*)\)/)
          if (!cm) {
            console.log(`ERROR ${file}:${n}  token ${prop}: --flow-* tokens must be a clamp() between two grid-step bounds`)
            errors++
          } else {
            const parts = cm[1].split(',')
            if (parts.length !== 3) {
              console.log(`ERROR ${file}:${n}  token ${prop}: clamp() needs exactly 3 arguments`)
              errors++
            } else {
              const toPx = (s) => {
                const m = s.trim().match(/^(-?\d*\.?\d+)(px|rem)$/)
                return m ? (m[2] === 'rem' ? parseFloat(m[1]) * 16 : parseFloat(m[1])) : null
              }
              const mn = toPx(parts[0])
              const mx = toPx(parts[2])
              if (mn === null || mx === null) {
                console.log(`ERROR ${file}:${n}  token ${prop}: clamp() min/max must be plain px or rem literals`)
                errors++
              } else {
                for (const [label, v] of [['min', mn], ['max', mx]]) {
                  if (v % 8 !== 0) {
                    console.log(`ERROR ${file}:${n}  token ${prop}: ${label} bound ${v}px is not on the 8px section grid`)
                    errors++
                  }
                }
              }
              if (!/rem/.test(parts[1])) {
                console.log(`ERROR ${file}:${n}  token ${prop}: preferred value needs a rem term (pure vw/vi ignores browser zoom)`)
                errors++
              }
            }
          }
        } else if (/(space|spacing|gap)/i.test(prop)) {
          for (const mm of value.matchAll(/(-?\d*\.?\d+)px/g)) {
            const v = parseFloat(mm[1])
            if (v !== 0 && Math.abs(v) % 4 !== 0) {
              console.log(`ERROR ${file}:${n}  token ${prop}: ${v}px is not on the 4px grid`)
              errors++
            }
          }
        }
      } else if (GUARDED.test(prop) && !inRoot) {
        const cleaned = value.replace(/var\(--[\w-]+(\s*,[^)]*)?\)/g, '')
        for (const mm of cleaned.matchAll(/(-?\d*\.?\d+)(px|rem|em|ms|s)\b/g)) {
          const v = parseFloat(mm[1])
          if (v === 0) continue
          console.log(
            `ERROR ${file}:${n}  ${prop}: raw value "${mm[0]}" — use a design token (var(--…))`
          )
          errors++
        }
      }
    }

    for (const ch of line) {
      if (ch === '{') depth++
      else if (ch === '}') {
        depth--
        if (inRoot && depth <= rootDepth) inRoot = false
      }
    }
  })
}

if (errors) {
  console.log(`\nFAIL — ${errors} violation(s). Not one pixel off the system.`)
  process.exit(1)
} else {
  console.log('PASS — pixel discipline clean.')
}
