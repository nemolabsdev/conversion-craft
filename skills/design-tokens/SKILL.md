---
name: design-tokens
description: Design token system for sales websites - color scales with contrast roles, spacing grid, type scale, radii, shadows, durations. Use before building anything and whenever a raw value tempts you.
---

# Design Tokens

The token layer every other skill builds on. Nothing in a build references a raw hex, px, rem, or ms value — it references a token, and the token traces back to a rule below.

## When to use

- Before building any component, page, or template — the token set must exist before the first pixel ships, not get retrofitted after.
- Whenever a raw hex, px, rem, or ms value tempts you inside component CSS — that's the signal to add or reuse a token instead of hand-writing the literal.
- When establishing or auditing a brand's OKLCH color ramp, spacing scale, type scale, radius/shadow set, or dark-mode variant.
- Before wiring `tools/spacing-lint.mjs` / `tools/contrast-check.mjs` into review or CI — both tools assume the conventions below, not arbitrary CSS.
- When reviewing a PR that touches CSS — a lint/contrast failure here blocks merge, it isn't a style nit.

## Rules

**tokens.css structure & tooling**

1. [FRAMEWORK] Ship exactly one `tokens.css` file per project as the sole source of custom-property declarations; every other stylesheet only consumes `var(--…)`. `tools/spacing-lint.mjs` enforces this at the property level — a guarded property outside `:root` written as a raw literal is a lint error. — tools/spacing-lint.mjs
2. [LAW] Structure tokens in three layers: primitive (`--blue-9: #3b82f6`) → semantic (`--color-action-primary: var(--blue-9)`) → component (`--button-primary-bg: var(--color-action-primary)`); product/page CSS references semantic or component tokens only, never a primitive directly. — color-systems.md R12
3. [LAW] Name semantic and component tokens by function, not appearance (`--color-danger`, not `--color-red`) so the name still makes sense after a rebrand or a dark-mode remap changes the underlying hex. — color-systems.md R13
4. [FRAMEWORK] `tools/contrast-check.mjs` resolves hex literals and `var()` alias chains (its own doc comment specs one-hop aliasing — keep chains shallow) but never parses `oklch()`/`color-mix()`. Generate ramps in OKLCH, but commit the computed hex as the primitive value, or any `@contrast` assertion built on it reports "token missing" instead of a real pass/fail. — tools/contrast-check.mjs
5. [LAW] Inside `:root`, every token named `*space*`/`*spacing*`/`*gap*` must be a multiple of 4px — `spacing-lint.mjs` flags any non-multiple (`--space-sm: 6px` fails, `8px` passes). — tools/spacing-lint.mjs; layout-spacing.md R1
6. [FRAMEWORK] `/* lint-allow */` is a one-line escape hatch, not a default; every use needs a written justification in review — leaning on more than a couple means the scale has a gap to fix, not a rule to suppress. — tools/spacing-lint.mjs

**Color scale (OKLCH ramps, 11–12 steps)**

7. [LAW] Build every brand color and neutral as an ordered 11–12 step ramp, never a single hex value. Choosing WHICH hue to ramp (category audit, ownable color, accent relationships) happens first and belongs to the `visual-identity` skill — this skill starts once the hue is chosen. — color-systems.md R9; visual-identity
8. [LAW] Generate the ramp in OKLCH, not RGB/HSL interpolation — equal lightness deltas must look like equal visual steps across every hue in the palette; this is why Tailwind v4 rebuilt its default palette in OKLCH. — color-systems.md R10
9. [LAW] Fix semantic roles to specific steps and hold them across every color in the system: steps 1–2 page/canvas background, 3–5 interactive component background (rest/hover/active), 6–8 borders (subtle → interactive → focus ring), 9–10 solid/saturated fills (primary button default/hover), 11–12 text (secondary, primary). — color-systems.md R9 (Radix Colors)
10. [LAW] Reserve the solid/saturated step (~9) for large filled UI elements and the darkest steps (11–12) for running text — a mid-saturation ~500-level swatch routinely fails 4.5:1 against white and must never be body-text color. — color-systems.md R11
11. [LAW] Adopt P3 wide-gamut values for the most saturated ramp steps where the rendering stack supports it — sRGB clips the brightest reds/yellows on modern wide-gamut displays; treat as baseline tooling, not a stylistic choice. — color-systems.md R14
12. [LAW] The primary CTA's fill token must be the single most saturated color in the viewport and clear ≥3:1 non-text contrast against its 1–2 nearest surrounding fills (page background, adjacent card) — the checkable form of "make the CTA pop." — color-systems.md R17
13. [LAW] Only one button per screen resolves to the primary (filled, most-saturated) component token; every other action uses an outline/ghost/lower-step token — co-equal saturated buttons destroy the isolation that makes a CTA read as the one thing to click. — color-systems.md R18

**Contrast assertions**

14. [FRAMEWORK] Declare every foreground/background pair actually used on the page as a `/* @contrast --fg on --bg >= N */` comment beside the tokens involved, e.g. `/* @contrast --color-text on --color-bg >= 4.5 */`. — tools/contrast-check.mjs
15. [LAW] Thresholds by role: normal text (below 24px regular / 18.66px bold) ≥4.5:1; large text (≥24px regular or ≥18.66px/14pt bold) ≥3:1; non-text UI — icon outlines, input borders, an outline/ghost button's visible boundary — ≥3:1 against its adjacent fill, not the 4.5:1 text threshold. — color-systems.md R1-2, R5
16. [LAW] Reserve AAA thresholds (7:1 normal / 4.5:1 large) for regulated verticals (health, finance, legal) or an explicit internal stretch goal; AA is the shipped baseline everywhere else. — color-systems.md R3
17. [FRAMEWORK] A tokens.css with zero `@contrast` assertions is itself a FAIL — `contrast-check.mjs` treats "no assertions declared" as a failure, not a silent pass. Write the assertion the moment a pairing ships, not retroactively at QA. — tools/contrast-check.mjs

**Spacing scale (4px / 8px grid)**

18. [LAW] Use 8px as the base spacing unit; every section margin, padding, and gutter is a multiple of 8 (8/16/24/32/40/48/64/80/96). Declared fluid exception: a `--flow-*` token (Rules 40-41) whose two written bounds land on this grid may interpolate between them at intermediate viewports. — layout-spacing.md R1
19. [LAW] Reserve the 4px sub-grid for internal component spacing only (icon-to-label gap, button internal padding, inline badge spacing) — never for section-level layout. — layout-spacing.md R2
20. [LAW] Fix the spacing scale as a token set, not arbitrary values: `--space-1: 4px`, `--space-2: 8px`, then 12/16/24/32/48/64/96/128px — 7–10 steps total, every layout value pulled from this list or expressed as a `--flow-*` clamp between two of these steps (Rules 40-41). — layout-spacing.md R3
21. [LAW] Set `--leading-*` (line-height) tokens to multiples of 4px so text baselines stay locked to the spacing grid. — layout-spacing.md R4
22. [LAW] Ship `--target-min: 44px` as the touch/click-target design floor (Apple HIG 44×44pt; Material 48×48dp) with ≥8px clearance between adjacent targets. WCAG 2.2 SC 2.5.8's legal AA minimum is 24×24px — state both in review, ship 44. — layout-spacing.md R6-7; WCAG 2.2 SC 2.5.8

**Type scale (modular ratio)**

23. [FRAMEWORK] Declare one modular-scale ratio per project as its own token (`--type-ratio: 1.333`), chosen by context: 1.2 dense dashboards, 1.25–1.333 marketing/landing pages, 1.5–1.618 hero-driven/editorial pages with few hierarchy levels. Craft convention, not a measured usability finding — a strong default, not an evidence-backed optimum. — typography-craft.md R1
24. [FRAMEWORK] Generate 7–12 size steps from that ratio (`--text-xs` … `--text-6xl`); don't hand-pick sizes outside the generated set. — typography-craft.md R1-2
25. [LAW] Body text floor is 16px (`1rem`) at every breakpoint; declare every `font-size` token in `rem`/`em`, never fixed px, so the scale honors 200% browser zoom and OS text-size settings. — typography-craft.md R10-13
26. [LAW] Pair each scale step with its own `--leading-*` token, inverse to size: ~1.1–1.2 for display steps ≥48px, 140–150% for body-range steps (16–19px). — typography-craft.md R7-8
27. [LAW] Build one `clamp()` per scale step, not one clamp for the whole scale: `font-size: clamp(MIN_REM, PREFERRED, MAX_REM)`, bounds always in `rem` — a bare-`vw` preferred value with no rem floor/ceiling breaks WCAG 1.4.4's 200%-zoom requirement. — typography-craft.md R15-19
28. [LAW] Derive PREFERRED from two anchor points (min size y1 at viewport x1, max size y2 at viewport x2): vw-coefficient `v = 100×(y2−y1)/(x2−x1)`, rem-offset `r = (x1·y2 − x2·y1)/(x1−x2)`. — typography-craft.md R16

**Radius, shadow & duration tokens**

29. [FRAMEWORK] Define radius as a fixed scale, not a per-component pick: `--radius-sm` 4px (inputs/chips), `--radius-md` 8px (cards/buttons), `--radius-lg` 16px (modals/panels), `--radius-full` 9999px (pills/avatars); `spacing-lint.mjs` guards `border-radius` outside `:root`. — practitioner scale-token convention (Radix/Tailwind/Material); tools/spacing-lint.mjs
30. [FRAMEWORK] Define shadow as elevation tiers, not ad hoc `box-shadow` values: `--shadow-1` resting card, `--shadow-2` hover/raised, `--shadow-3` dropdown/popover, `--shadow-4` modal — each generated once and reused, never authored per component.
31. [FRAMEWORK] Define duration tokens on Material Design 3's scale: `--duration-short` 50–200ms (micro-interactions: toggles, hover/press feedback), `--duration-medium` 250–400ms (cards, sheets, dropdowns), `--duration-long` 450–500ms (large-surface/full-screen transitions) — never exceed ~500ms for a single-step transition on a sales page. — motion-performance.md R3 (m3.material.io)
32. [FRAMEWORK] Pair duration tokens with named easing tokens: `--ease-standard` for on-screen morphs, `--ease-decelerate` (`cubic-bezier(0,0,0,1)`) for elements entering, `--ease-accelerate` (`cubic-bezier(0.3,0,1,1)`) for elements exiting. — motion-performance.md R4
33. [FRAMEWORK] `transition-duration`, `animation-duration`, `transition`, and `animation` are guarded properties under `spacing-lint.mjs` — every declaration outside `:root` resolves through a duration/easing token, never a raw `ms`/`s` literal. — tools/spacing-lint.mjs

**Dark mode (rebuilt, not inverted)**

34. [LAW] Never generate dark mode by inverting the light palette; rebuild each semantic token (background, surface, border, text, accent) independently on the dark theme's own scale. — color-systems.md R30
35. [LAW] Re-run every `@contrast` assertion against the dark-mode token values — a pair safe at 4.5:1 in light mode is not guaranteed safe after the rebuild; naive inversion routinely breaks contrast on mid-saturation brand colors. — color-systems.md R30
36. [TREND-2026] Default cart, checkout, and payment screens to light mode (or exact system match) even on sites offering dark mode elsewhere — lighter UI reads as more trustworthy at the payment-trust moment. Direction is corroborated across sources; specific abandonment percentages are not — don't cite a number. — color-systems.md R28
37. [TREND-2026] If dark mode is supported, make it a persistent saved user toggle, not OS-detection-only — the cited driver of dissatisfaction is a mismatch between expectation and rendered theme, which a persistent toggle resolves directly. — color-systems.md R29
38. [TREND-2026] If shipping partial-dark, segment by module type: imagery-heavy modules (hero, product gallery, lifestyle photography) read fine or better on dark surfaces; data-dense modules (pricing tables, spec comparisons, forms) read better on light. — color-systems.md R31
39. [TREND-2026] Implement the dark-mode rebuild (Rule 34) through `light-dark()` paired unconditionally with `color-scheme: light dark` (or an explicit `light`/`dark` value) declared on `:root`/`html` — `light-dark()` is Baseline **newly available since 2024-05-13** (not yet widely available, ~2026-11-13 projected) and resolves light-only if the paired `color-scheme` declaration is missing. This is a mechanism choice layered on top of Rule 34, not a substitute for it: each `light-dark(#lightHex, #darkHex)` pair is still two independently rebuilt values, never a light value with the dark half derived by inversion. `contrast-check.mjs` cannot resolve a `light-dark()` call any more than it resolves `oklch()` (Rule 4) — commit both arguments as literal hex, and Rule 35's dark-mode `@contrast` re-verification runs against the resolved dark-branch hex specifically. — modern-baseline-css.md R23-24; web-features `light-dark`, `color-scheme`

**Fluid-space tokens (clamp within the grid)**

40. [TREND-2026] `--flow-*` tokens are a fluid-space option layered on top of the fixed 8px scale (Rule 20), for section-level rhythm that must not visibly "jump" at a breakpoint: declare each as `clamp()` between two bounds that are themselves grid-step values from Rule 20's scale, e.g. `--flow-md: clamp(1rem, 0.9rem + 0.5vi, 2rem)` where the 1rem (16px) floor and 2rem (32px) ceiling both land on the fixed scale. Component-internal spacing stays on the 4px sub-grid (Rule 19) and is never expressed as a `--flow-*` token. — modern-baseline-css.md R27-29 (Utopia methodology)
41. [FRAMEWORK] `spacing-lint.mjs` enforces the `--flow-*` contract mechanically: each such token must be a `clamp()` whose written min/max bounds are plain px/rem literals landing exactly on the 8px section grid (Rule 18), and whose preferred value carries a `rem` term — a pure-`vw`/`vi` middle ignores browser zoom (for text clamps that is a WCAG 1.4.4 failure per modern-baseline-css R28; for space it breaks zoom coherence, same discipline, no legal ratio constraint applies). The clamp's interpolated output at intermediate viewports is off-grid by design (Rule 40's declared tradeoff) — flagging those values in review is noise, not rigor. — tools/spacing-lint.mjs; modern-baseline-css.md R28-29

## Checklist

**Structure & tooling**
- [ ] Exactly one `tokens.css`; all other CSS consumes `var(--…)` only (R1)
- [ ] Primitive → semantic → component layering held; no component references a primitive directly (R2)
- [ ] Token names are function-based, not appearance-based (R3)
- [ ] Every primitive feeding a `@contrast` assertion resolves to a committed hex, even if authored in OKLCH (R4)
- [ ] `:root` spacing/gap tokens are all multiples of 4px (R5)
- [ ] Any `/* lint-allow */` has a written justification attached (R6)

**Color**
- [ ] Every brand/neutral color is an 11–12 step ramp, not a single hex (R7)
- [ ] Ramp generated in OKLCH (R8)
- [ ] Step-to-role mapping matches R9 exactly (bg / component-bg / border / solid / text)
- [ ] No mid-saturation solid-step color used as body-text color (R10)
- [ ] P3 values used for saturated steps where the stack supports it (R11)
- [ ] Primary CTA fill is the most saturated element on screen, ≥3:1 vs. neighbors (R12)
- [ ] Only one primary-treatment button per screen (R13)

**Contrast**
- [ ] Every used fg/bg pair has a `@contrast` assertion in tokens.css (R14)
- [ ] Correct threshold applied per role: 4.5 / 3 / 3 (text / large text / non-text UI) (R15)
- [ ] AAA (7:1/4.5:1) applied only where the vertical requires it (R16)
- [ ] `node tools/contrast-check.mjs tokens.css` exits 0 (R17)

**Spacing & type**
- [ ] All layout spacing is a multiple of 8; 4px reserved for component internals (R18-19)
- [ ] Spacing token set matches the fixed 7–10 step scale (R20)
- [ ] Line-height tokens are multiples of 4px (R21)
- [ ] Touch targets ≥44×44px with ≥8px clearance (24×24px legal floor noted, not shipped) (R22)
- [ ] `--type-ratio` declared and every size step derived from it (R23-24)
- [ ] Body text never drops below 16px/1rem; all sizes in rem/em (R25)
- [ ] Line-height inverse to size (~1.1–1.2 display, 140–150% body) (R26)
- [ ] Each scale step has its own `clamp()` with rem floor/ceiling (R27-28)
- [ ] Any `--flow-*` fluid-space token's two `clamp()` bounds both land on the fixed 4/8px-grid scale; the interpolated mid-range value is not lint-chased (R40-41)

**Radius, shadow, duration**
- [ ] `border-radius` values resolve through the 4-step radius scale (R29)
- [ ] Shadows are elevation tiers, not per-component values (R30)
- [ ] Duration tokens match the short/medium/long M3 bands (R31)
- [ ] Easing tokens paired with duration tokens by entrance/exit/morph context (R32)
- [ ] `transition`/`animation` declarations use tokens, never raw ms/s (R33)

**Dark mode**
- [ ] Dark theme tokens rebuilt per-role, not inverted from light (R34)
- [ ] Dark-mode fg/bg pairs re-verified through `@contrast` (R35)
- [ ] Any `light-dark()` token is paired with a `color-scheme` declaration on `:root`/`html`, and both hex arguments are committed literals, not `var()`/`oklch()` (R39)
- [ ] Checkout/cart/payment default light or system-match (R36)
- [ ] Dark mode is a persistent toggle, not OS-detection-only (R37)
- [ ] Partial-dark (if used) segmented by module type (R38)

**Tooling gate**
- [ ] `node tools/spacing-lint.mjs <css files>` exits 0
- [ ] `node tools/contrast-check.mjs tokens.css` exits 0

## Anti-patterns

- **A single hex value standing in for a color** (`--brand-blue: #2563eb` and nothing else). Breaks the moment a hover state, border, or disabled variant is needed — you'll invent ad hoc darken/lighten values instead of using the ramp. Instead: generate the full 11–12 step OKLCH ramp up front and assign every UI state to a fixed step.
- **Authoring primitives in raw `oklch()` with no hex output.** `contrast-check.mjs` can't resolve it, so every `@contrast` assertion built on that token silently reports "token missing" instead of a real pass/fail — a false sense of coverage. Instead: commit the computed hex as the primitive value; keep OKLCH generation in tooling, not in tokens.css.
- **Component CSS with raw px/rem/em/ms values outside `:root`.** Defeats the point of a token system and is exactly what `spacing-lint.mjs` catches — don't `lint-allow` it away as noise. Instead: add the missing token to the scale if one doesn't exist yet.
- **Shipping tokens.css with zero `@contrast` assertions "because the colors look fine."** `contrast-check.mjs` fails this by design — an unverified pairing is not a passing pairing. Instead: write the assertion for every fg/bg pair the moment it's added.
- **Using a mid-saturation solid-step swatch as running body text.** Reads fine on a bright monitor, fails 4.5:1 in a contrast checker, and is a common real-world AA failure. Instead: pull text color from the dedicated text steps (11–12); reserve solid steps for large filled elements only.
- **Generating dark mode with a CSS filter or hue-rotate/invert on the light palette.** Produces fg/bg pairs never checked against 4.5:1/3:1 in the new combination. Instead: define an independently-tuned dark-theme value per semantic role and re-run every `@contrast` assertion against it.
- **One-off `border-radius`/`box-shadow` values per component** ("this card gets 10px, that modal gets 14px"). Produces a system that looks hand-tuned-inconsistent rather than designed. Instead: pick from the fixed radius/shadow scale; if nothing fits, add a scale step deliberately.
- **`vw`-only fluid type with no rem floor/ceiling on the `clamp()`.** Breaks WCAG 1.4.4 because text never stops scaling in lockstep with viewport width, regardless of browser zoom. Instead: always wrap the preferred `vw` value in rem-based min/max bounds.
- **Forcing dark-mode-only on checkout/payment regardless of saved preference.** Repeatedly flagged as a trust/abandonment risk at the exact moment trust matters most. Instead: default transactional screens to light or system-match; let dark mode elsewhere be an explicit, persistent user choice.
- **Shipping `light-dark()` with no `color-scheme` declaration on `:root`/`html`.** The function silently resolves to its light branch only — a dark-mode toggle appears to do nothing. Instead: always declare `color-scheme` and `light-dark()` together, never one without the other.
- **Chasing a `--flow-*` clamp()'s intermediate viewport-width value to force it onto the 4px grid.** The interpolated value between the two bounds is off-grid by design; only the clamp's own min/max literals need to land on 4px multiples. Instead: grid-check the two bounds, accept the fluid interpolation between them.
- **Multiple co-equal saturated "primary" buttons on one screen.** Re-creates the no-isolation condition that makes a CTA fail to stand out, independent of hue. Instead: exactly one component token (`--button-primary-*`) per screen gets the solid/saturated treatment.

## Plugin context

Installed as the `conversion-craft` plugin, the lint tools live at `${CLAUDE_PLUGIN_ROOT}/tools/spacing-lint.mjs` and `${CLAUDE_PLUGIN_ROOT}/tools/contrast-check.mjs`; inside this repo they are at `tools/`. Both must exit 0 either way.
