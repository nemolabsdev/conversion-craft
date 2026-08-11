---
name: pixel-qa
description: Mechanical QA protocol - lint tools, accessibility checklist, performance hygiene. The final gate; use after art-director approval.
---

# Pixel QA

Mechanical verification only. The Art Director judges taste; this skill measures. No opinions,
no partial credit — a check either passes a number or it doesn't.

## When to use

- After the Art Director has approved a build's hierarchy/spacing/color craft — this is the gate
  that runs next, before anything ships or hands off to engineering.
- On every change that touches CSS tokens, form markup, images/video, fonts, or animation —
  not just at final sign-off.
- Never skip this because a page "looks done." Looking done and measuring clean are different
  claims; only the second one ships.

## Rules

**Lint protocol — run first, before any manual check**

1. Run `node tools/spacing-lint.mjs <css files>` and `node tools/contrast-check.mjs <tokens.css>`.
   Both must exit `0`. A non-zero exit is an automatic FAIL regardless of how the page looks. [LAW] — tools/spacing-lint.mjs, tools/contrast-check.mjs; layout-spacing.md R1-3, color-systems.md R1-2
2. Every token file under review must declare at least one `/* @contrast --fg on --bg >= N */`
   assertion for every foreground/background pairing actually used on the page. A tokens file
   with zero assertions is itself a FAIL — `contrast-check.mjs` treats "no assertions" as a
   failure, not a pass-by-default. [LAW] — contrast-check.mjs; WCAG 2.2 SC 1.4.3/1.4.11
3. Outside `:root`, every guarded property (margin, padding, gap, inset, font-size, line-height,
   letter-spacing, border-radius, transition/animation duration) must resolve through a
   `var(--…)` token, never a raw px/rem/em/ms literal. Inside `:root`, spacing/gap tokens must
   sit on the 4px grid. `/* lint-allow */` is an escape hatch, not a default — every use needs a
   written justification in the QA report. [LAW] — tools/spacing-lint.mjs; layout-spacing.md R1-3
4. Run `node tools/geometry-audit.mjs <served url>` (requires system Chrome; serve the page
   first, e.g. `python3 -m http.server 4173 --directory demo`). This measures RENDERED pixels
   at 375/768/1280 and fails on: horizontal page overflow, input-vs-button row misalignment
   >1px, touch targets under 44px, mixed rendered heights within one button class, and
   squished images. Source lint passing does NOT imply this passes — an 18px form
   misalignment and 40px nav links have both shipped through source-only checks. [LAW] —
   tools/geometry-audit.mjs; layout-spacing.md R6-7

**Accessibility checklist — unified across keyboard, structure, and content**

4. Exactly one `<main>` per page, plus `<header>`/`<nav>`/`<footer>` landmarks; if more than one
   `<nav>` exists, each carries a unique `aria-label` (not one that just repeats the role name). [LAW] — forms-accessibility.md R28
5. Heading levels never skip (h1→h2→h3, not h1→h3) and exactly one `<h1>` exists per page. [LAW] — WCAG 1.3.1
6. `<html lang="…">` is declared. This single omission sits on 15.8% of the top 1M home pages
   tested. [LAW] — WCAG 3.1.1; forms-accessibility.md R29
7. Every `<img>` carries alt text describing purchase-relevant content (type, material, color,
   pattern) — or `alt=""` if purely decorative. Icon-only buttons/links get alt/aria-label text
   describing the action performed, not the icon's appearance. Missing/inadequate alt text is
   present on 55.5% of tested home pages — the single most common image defect measured. [LAW] — WCAG 1.1.1; forms-accessibility.md R30
8. Every form input has a programmatically associated `<label>` (`for`/`id` or wrapping) —
   never placeholder-only. Unlabeled inputs are the most common forms-specific defect measured
   (48.2% of pages, 34.2% of all inputs). [LAW] — WCAG 1.3.1/3.3.2; forms-accessibility.md R5, R7
9. Every touch/click target measures **≥44×44 CSS px** with **≥8px clearance** to the next
   target — this is the design floor the team ships, not a suggestion. WCAG 2.2 SC 2.5.8's
   **24×24 CSS px** is the legal compliance minimum only; flag anything under 44px as a finding
   even when it clears 24px. [LAW] — WCAG 2.2 SC 2.5.8; Apple HIG 44pt; Material 48dp; forms-accessibility.md R31; layout-spacing.md R6-7
10. Full keyboard traversal reaches every interactive element in an order matching visual/DOM
    order — nothing is mouse-only. [LAW] — WCAG 2.1.1
11. A "skip to main content" link is the **first** focusable element on every page, hidden until
    it receives focus — present-but-not-first in the DOM does not satisfy this. [LAW] — WCAG 2.4.1; forms-accessibility.md R26
12. The visible keyboard-focus indicator is never fully covered, at any scroll position, by a
    sticky header, sticky footer, or consent banner. [LAW] — WCAG 2.2 SC 2.4.11; forms-accessibility.md R25
13. Every open modal traps focus (Tab/Shift+Tab cycle and wrap inside it only), sets
    `role="dialog"` (or `alertdialog`) + `aria-modal="true"` + `aria-labelledby`, hides
    background content (`inert` or `aria-hidden="true"`), and returns focus to the trigger on
    Escape/close. [LAW] — W3C WAI-ARIA APG; forms-accessibility.md R22-24
14. Every text/background pair clears its role's contrast ratio, verified via
    `contrast-check.mjs` assertions: body/label/error text ≥4.5:1; large text (≥24px regular or
    ≥18.66px/14pt bold) ≥3:1; input/button borders and other non-text UI ≥3:1. Low contrast is
    the single most common defect measured on the open web (79.1% of pages). [LAW] — WCAG 1.4.3/1.4.11; color-systems.md R1-2, R5
15. Validation errors are never color-only (pair the red state with an icon and text), are
    linked to their field with `aria-describedby` and `aria-invalid="true"`, and route keyboard
    focus to the first invalid field (or a linked error summary) on failed submit. [LAW] — WCAG 1.4.1; forms-accessibility.md R10-14

**Performance hygiene**

16. Every `<img>`, `<video>`, and embed declares explicit `width`/`height` or CSS
    `aspect-ratio` — including inside `srcset` sets — so the browser reserves space before load.
    Applies even to correctly lazy-loaded, below-fold images. [LAW] — motion-performance.md R28
17. `loading="lazy"` is applied only to images below the initial viewport. The LCP-candidate
    image (hero/above-fold) uses default eager loading plus `fetchpriority="high"` — never
    `loading="lazy"`. [LAW] — motion-performance.md R26-27
18. Above-fold body webfonts pair `<link rel="preload" as="font" crossorigin>` with
    `font-display: optional`. Using `swap` instead is only valid with a written justification in
    the QA report (same escape-hatch pattern as `/* lint-allow */` in R3) — an undocumented
    `swap` is a FAIL. [LAW] — motion-performance.md R29-30
19. Core Web Vitals budget, all three simultaneously: LCP < 2.5s, CLS < 0.1, INP < 200ms. A page
    failing any one of the three fails the performance gate — there is no partial pass. [LAW] — motion-performance.md R19
20. Animations touch only `transform`/`opacity`. Any animation driving `width`, `height`, `top`,
    `left`, `margin`, or `padding` is a FAIL regardless of how smooth it looks in isolation — it
    will drop frames under real page weight. [LAW] — motion-performance.md R1-2
21. Scroll-triggered reveals are native/CSS-driven and never override native scroll position or
    speed — JS scroll-hijacking is an automatic FAIL. `prefers-reduced-motion: reduce` swaps
    scale/parallax/large-translate for opacity/color transitions; it does not delete the content
    path. [LAW] — motion-performance.md R16-18, R35 (reconciliation: native scroll-driven reveal allowed, scroll-hijacking forbidden)
22. Third-party scripts (analytics, chat, pixels, session replay) are enumerated and each one
    justified against the page's performance budget — an unaudited third-party payload is a
    finding even if CWV numbers currently pass. [TREND-2026] — motion-performance.md R32, R34
23. Any above-the-fold video uses a static-thumbnail, click-to-load facade — never a live
    iframe embed, which can block the main thread up to 4.5s on slow mobile. [TREND-2026] — motion-performance.md R33

**Reporting protocol**

24. Report every check as **PASS** or **FAIL** — never "mostly," "looks fine," or "should be
    okay." Every FAIL cites `file:line` (or a CSS selector/DOM path if no line number applies)
    and the rule number it violates. [LAW] — internal protocol (tools/*.mjs, qa-inspector.md)
25. Paste raw lint-tool output into the report verbatim. Summarizing a failure away, or
    reporting "ran clean" without the actual console output attached, is itself a QA failure. [LAW] — internal protocol
26. A single FAIL anywhere routes the build back to the UI Craftsman. QA does not average
    scores, weigh severity against deadline pressure, or grant partial credit for being close. [LAW] — internal protocol; qa-inspector.md

Report template (fill per build):

```
PIXEL QA REPORT — <page/component>

[spacing-lint]  PASS|FAIL  (paste raw output)
[contrast-check] PASS|FAIL  (paste raw output)
[geometry-audit] PASS|FAIL  (paste raw output, all viewports)

R4  landmarks            PASS|FAIL  file:line — note
R5  heading order         PASS|FAIL  file:line — note
...
R23 video facade          PASS|FAIL  file:line — note

RESULT: PASS (0 failures) | FAIL (N failures, listed above)
```

## Checklist

- [ ] R1 — `spacing-lint.mjs` exits 0 on every changed CSS file
- [ ] R2 — `contrast-check.mjs` exits 0; every used fg/bg pair has an `@contrast` assertion
- [ ] R3 — no raw px/rem/em/ms outside `:root`; `:root` spacing tokens on the 4px grid
- [ ] R4 — one `<main>`, unique `aria-label` per `<nav>` when there's more than one
- [ ] R5 — heading levels sequential, exactly one `<h1>`
- [ ] R6 — `<html lang>` present
- [ ] R7 — every image/icon has correct alt text or `alt=""`
- [ ] R8 — every input has a programmatically associated label, no placeholder-only fields
- [ ] R9 — touch targets ≥44×44px with ≥8px clearance (note if anything sits between 24–44px)
- [ ] R10 — full keyboard traversal in logical order, nothing mouse-only
- [ ] R11 — skip-to-content link present and is the first focusable element
- [ ] R12 — focus indicator never obscured by sticky header/footer/consent banner
- [ ] R13 — modals trap focus, correct ARIA, Escape closes and returns focus to trigger
- [ ] R14 — contrast verified per role: text ≥4.5:1, large text/borders ≥3:1
- [ ] R15 — errors are icon+text (not color-only), `aria-describedby`/`aria-invalid` present, focus routes to first error
- [ ] R16 — image/video dimensions or `aspect-ratio` declared everywhere, including in `srcset`
- [ ] R17 — `loading="lazy"` only below the fold; LCP image eager + `fetchpriority="high"`
- [ ] R18 — above-fold font preloaded + `font-display: optional` (or `swap` with written justification in the report)
- [ ] R19 — CWV budget met: LCP < 2.5s, CLS < 0.1, INP < 200ms
- [ ] R20 — animations use only `transform`/`opacity`
- [ ] R21 — scroll reveals are native (not hijacked); `prefers-reduced-motion` respected
- [ ] R22 — third-party scripts enumerated and justified
- [ ] R23 — above-fold video (if any) is a click-to-load facade
- [ ] R24 — every line item reported PASS/FAIL with `file:line`
- [ ] R25 — raw tool output pasted verbatim into the report
- [ ] R26 — any single FAIL routes the build back to the UI Craftsman

## Anti-patterns

- **Summarizing a lint failure as "looks fine, minor stuff"** instead of pasting the actual
  `spacing-lint.mjs`/`contrast-check.mjs` output. Hides regressions from whoever reads the
  report next. Do instead: paste the raw console output, always, pass or fail.
- **Treating 24×24px (the WCAG legal floor) as the design target.** It's the minimum that keeps
  you out of a lawsuit, not a usable tap target. Do instead: ship 44×44px with 8px clearance;
  cite 24px only when explaining the compliance floor, never as the shipped number.
- **Placeholder text standing in for a visible label.** Fails memory recall, error recovery, and
  screen-reader announcement simultaneously. Do instead: require a persistent visible `<label>`;
  placeholders may only carry a format hint (e.g., "MM/YY"), never the field's identity.
- **Color-only error states** (a red border, no icon or text). Invisible in grayscale or to
  color-blind users. Do instead: pair every error color with an icon and explicit copy stating
  what's wrong and how to fix it.
- **Scroll-jacking dressed up as "immersive storytelling."** Overriding native scroll position/
  speed measurably disorients users (cited relaunch: +40% bounce, −50% form conversion). Do
  instead: use native scroll-driven reveals (`animation-timeline`/IntersectionObserver) that
  never touch scroll position or speed — this pattern stays allowed.
- **Lazy-loading the hero/LCP image "for consistency" with the rest of the page.** Directly
  delays the exact resource Core Web Vitals measures. Do instead: eager-load the LCP candidate
  with `fetchpriority="high"`; reserve `loading="lazy"` for below-fold images only.
- **Animating `width`/`height`/`top`/`left` because it "looks smooth in the demo."** Forces
  layout recomputation every frame and drops frames under real page weight, especially on
  mid-tier mobile. Do instead: animate `transform`/`opacity` equivalents exclusively.
- **Modals with no real focus trap**, where Tab still reaches background content. A keyboard
  user can silently leave the dialog without knowing it. Do instead: verify Tab/Shift+Tab cycle
  and wrap inside the open modal only, with background marked `inert`/`aria-hidden`.
- **Citing unsourced conversion-lift stats (bento-grid dwell time, CTA-color lift percentages)
  inside a QA report as if they were a compliance requirement.** This gate checks laws and
  measurements, not marketing trend claims — leave trend commentary to the Art Director/CRO
  Specialist. Do instead: cite only WCAG/CWV thresholds and this skill's own numbered rules.
- **Passing a build because it's "close enough" or the deadline is tight.** QA has no partial
  credit and no averaging across checks. Do instead: any single FAIL sends the build back —
  report the FAIL and stop.

## Plugin context

Installed as the `conversion-craft` plugin, the lint tools live at `${CLAUDE_PLUGIN_ROOT}/tools/spacing-lint.mjs` and `${CLAUDE_PLUGIN_ROOT}/tools/contrast-check.mjs`; inside this repo they are at `tools/`. Both must exit 0 either way.

## Addendum: coverage rules (learned from AURI demo)

- Rendered-coverage check: capture/inspect EVERY section including the footer at 375px and 1280px before declaring PASS. Unrendered = unreviewed.
- Undeclared-pair check: list every section background token used in styles (`grep "background-color" styles`); every text token that sits on a non-default background must appear in a `@contrast` assertion in tokens.css. Missing assertion = FAIL.
