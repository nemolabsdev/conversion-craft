---
name: typography-craft
description: Typography rules for premium sales websites - scale, pairing, measure, fluid type, font loading. Use when choosing fonts or setting any text.
---

# Typography Craft

## When to use

- Choosing a font family or building a font pairing for a new site or section.
- Setting any font-size, line-height, line-length, or letter-spacing value.
- Building or auditing a fluid type scale with `clamp()`.
- Deciding a font-loading strategy — `font-display`, preload, variable-font subsetting.
- Judging whether a typeface choice reads as premium or generic on a high-ticket sales page.
- Reviewing kinetic or interactive typography before it ships.

## Rules

**Type scale & hierarchy**

1. [FRAMEWORK] Pick the modular-scale ratio by context, not preference: **1.2** (Minor Third) for dense dashboards/content apps, **1.25–1.333** (Major Third–Perfect Fourth) for marketing/landing pages, **1.5–1.618** (Perfect Fifth–Golden Ratio) for hero-driven/editorial pages with few hierarchy levels. Craft convention, not a measured usability finding — a strong default, not a proven optimum. — Imperavi
2. [FRAMEWORK] Named-ratio reference for building a custom scale: Minor 2nd 1.067 · Major 2nd 1.125 · Minor 3rd 1.2 · Major 3rd 1.25 · Perfect 4th 1.333 · Aug. 4th 1.414 · Perfect 5th 1.5 · Golden 1.618 · Major 6th 1.667 · Minor 7th 1.778 · Major 7th 1.875 · Octave 2.0. — modularscale.com
3. [FRAMEWORK] Never carry hierarchy on font-size alone — pair every scale step with a weight and/or color-contrast change. An oversized primary next to an illegibly small secondary is a diagnosable failure of this rule. — Refactoring UI
4. [FRAMEWORK] Body/UI weight range 400–500 for running text, 600–700 for emphasis; weights below 400 are reserved for display headlines ≥32px — they lose legibility at body/UI sizes. — Refactoring UI
5. [FRAMEWORK] Cap the hierarchy levels actually in play on one screen/section at 4–6 (eyebrow, H1, H2, body, caption) even if the generated scale runs 7–12 steps — past that, the importance signal collapses.

**Line length & line height**

6. [LAW] Target **45–90 characters per line (CPL)** including spaces, **50–75 CPL** sweet spot, **66 CPL** the single best target for long-form body. Hard cap: never exceed 80 CPL (40 CPL for CJK). Cross-corroborated — Butterick, UXPin, Refactoring UI, WCAG.
7. [LAW] Line-height **120–150%** of font size for body text — Butterick's range is 120–145%, WCAG's floor is 150% — ship **140–150%** as the default that satisfies both.
8. [FRAMEWORK] Invert line-height with size as it climbs: **~1.1–1.2** for display headlines ≥48px, **~1.5** for body text at 16px. — Refactoring UI
9. [FRAMEWORK] Separate paragraphs with **4–10pt spacing** *or* a first-line indent of **1–4× point size** — never both on the same block; combining them is a redundant, fragmenting signal. — Butterick

**Base size & accessibility floors**

10. [LAW] Minimum web body text is **16px (1em)** — never below 16px; the range extends up to 25px for larger typefaces or hero-style body copy, depending on x-height.
11. [LAW] Keep body text within **16–19px** across every breakpoint in a fluid system — never let mobile body text drop below 16px.
12. [LAW] Contrast ≥**4.5:1** for normal text, ≥**3:1** for large text (≥24px regular or ≥18.7px/14pt bold). — WCAG
13. [LAW] Every font-size declaration uses **rem/em**, never fixed px on the root — required for the page to honor 200% browser resize and OS text-size preferences. — WCAG 1.4.4
14. [LAW] The layout must survive WCAG 1.4.12 text-spacing floors without breaking: letter-spacing ≥0.12× font-size, word-spacing ≥0.16×, line-height ≥1.5×, paragraph-spacing ≥2× font-size.
15. [LAW] Any tappable text element (inline link, footnote marker, breadcrumb crumb) ships at the team's **44×44 CSS px** floor with ≥8px clearance between adjacent targets; WCAG 2.2 AA's legal minimum is 24×24px — state both in review, ship 44. — Apple HIG/Material; WCAG 2.2 SC 2.5.8

**Fluid type (clamp)**

16. [FRAMEWORK] Fluid formula: `font-size: clamp(MIN_REM, PREFERRED, MAX_REM)`, PREFERRED mixes `vw`+`rem` — e.g. `clamp(2.25rem, 2vw + 1.5rem, 3.25rem)` scales 36px→52px between 600–1400px viewport. — Smashing Magazine
17. [FRAMEWORK] Derive PREFERRED from two anchor points (min size `y1` at viewport `x1`, max size `y2` at viewport `x2`): vw-coefficient `v = 100×(y2−y1)/(x2−x1)`, rem-offset `r = (x1·y2 − x2·y1)/(x1−x2)`. — Smashing Magazine
18. [LAW] Clamp min/max bounds are always **rem**, never px — a `vw`-only preferred value wrapped in rem floor/ceiling is what preserves WCAG 1.4.4's 200%-zoom requirement; pure-vw sizing with no floor/ceiling breaks it.
19. [FRAMEWORK] Build one `clamp()` **per modular-scale step**, not one clamp for the whole scale — every heading/body level gets its own min/preferred/max triplet. — Smashing Magazine
20. [LAW] Manually test every clamp()-based step at 200% browser zoom before shipping — automated Lighthouse/axe checks don't catch a vw-dominant clamp that silently caps effective zoom.

**Font pairing**

21. [FRAMEWORK] Cap the palette at **2–3 font families** per site (1 display/heading, 1 body, optional 1 accent/mono) — beyond 3 reads as cluttered regardless of individual font quality. — Typewolf
22. [FRAMEWORK] When a pairing isn't obvious, default to a **superfamily** (matched serif+sans from one type system — Adelle/Adelle Sans, Calluna/Calluna Sans, Questa/Questa Sans) to guarantee compatible x-height, proportions, and voice. — Typewolf
23. [FRAMEWORK] Reserve a third font only for a genuinely distinct content type neither heading nor body serves (code/data → monospace; pull-quote/signature accent) — never add one for decoration alone. — Typewolf
24. [FRAMEWORK] Assign each font a fixed role (logo/nav, headline, body) and hold it everywhere — don't swap fonts section-by-section. — Typewolf

**Tracking / letter-spacing**

25. [FRAMEWORK] Apply negative letter-spacing at large display sizes to counter optical looseness: roughly **-0.01em to -0.02em** on headlines ≥48px, expressed in `em` so it scales with font-size; keep tracking at 0 or slightly positive below ~24px. Long-standing craft convention — no primary-source numeric standard, treat as a default, not a precise constant.
26. [FRAMEWORK] All-caps or small-caps text needs **+5–12% extra letterspacing** to stay legible — capitals at normal spacing read as cramped. — Butterick
27. [FRAMEWORK] Restrict full-caps runs to **under one line** of text — multi-line all-caps paragraphs measurably slow reading. — Butterick

**Variable fonts**

28. [FRAMEWORK] A single variable font file typically replaces 4–8 static weight/width/italic files — evaluate adoption on any page currently loading 3+ static weights of the same family. Directional claim, not a precise constant — validate file-size savings per actual family before quoting a number to a client. — 618Media
29. [LAW] Variable-font axis support (`font-variation-settings`, `wght`/`wdth`/`slnt`) has shipped in all major evergreen browsers since roughly 2018–2020 — safe as progressive enhancement with a static-weight `@font-face` fallback for older contexts.
30. [FRAMEWORK] Load only the weight/width instances actually used in the design via `font-variation-settings` value ranges — shipping the full axis range when only 2–3 instances appear on the page cancels out the payload benefit variable fonts exist to provide.

**Font loading (FOUT/FOIT)**

31. [LAW] Default to **`font-display: swap`** — shows the fallback font immediately and swaps in the webfont on arrival (FOUT), preferable to the invisible-text flash (FOIT) produced by `block`/unset `auto` on most browsers.
32. [LAW] Graduate to **`font-display: optional`** once a metric-adjusted fallback (`size-adjust`/`ascent-override`/`descent-override`) is tuned — the only setting that can hit a first-visit CLS of 0, but it silently skips the webfont if it misses roughly a 100ms budget. This is `motion-performance.md`'s target state (its font rule defaults to `optional`) — ship `swap` as the interim default until the fallback metrics are tuned, then graduate.
33. [LAW] Preload only the **1–2 most critical font files** (above-fold headline weight + primary body weight) with `<link rel="preload" as="font" crossorigin>` — never preload an entire family. Reported to save 200–800ms to first correctly-styled text (single-source figure — treat as directional).

**Typeface direction (2024–2026)**

34. [TREND-2026] Neo-grotesques (Söhne, Neue Haas Grotesk, Aktiv Grotesk, Suisse Int'l) have displaced geometric sans (Futura, Poppins, Circular) as the default premium/professional pick as of 2025–2026, driven by "geometric-sans fatigue." Shelf life 2–4 years. — MadeGoodDesigns, corroborated by Typewolf's live popularity ranking
35. [TREND-2026] High-contrast editorial serifs (Editorial New, Canela, Ogg, Noe Display, Reckless, Fraunces) are in their strongest moment in decades on premium/fashion/hospitality sites, used at large display sizes for a sophistication signal — never set body paragraphs in one (see Anti-patterns). Shelf life 2–3 years. — MadeGoodDesigns
36. [TREND-2026] Custom/proprietary typefaces (GitHub Mona Sans, Vercel Geist, Slack Larsseit/Circular, Airbnb Cereal, Netflix Sans, Stripe's Söhne license) remain the top premium signal for funded/category-leading brands — a licensed or custom face outranks an unmodified stock Google Font as a maturity cue. Secondary-sourced brand attributions — spot-check against live computed styles before citing a specific brand in client-facing material. — FullStop360
37. [TREND-2026] Inter remains the most-deployed variable sans in SaaS/product UI, but by 2025–2026 it reads as the generic/default choice among funded and premium brands; skilled use is either fully intentional (leaning into its neutrality) or a deliberate swap to Geist, Satoshi, Switzer, or a custom face. — Typewolf/MadeGoodDesigns

**Kinetic & interactive typography (award-circuit, lower confidence)**

38. [TREND-2026] State-driven kinetic type — letterforms that encode scroll position, hover, or data ("position = state," with scroll reversibility restoring prior states) — reads as premium on the current award circuit; decorative-only load-in type animation does not. Ship it on native scroll only, no scroll-hijacking (see `motion-performance.md`), content reachable without JS, and `prefers-reduced-motion` respected. Single-source/snippet-verified, lower confidence. — awards-visual-language.md
39. [TREND-2026] Confident, editorial, single-typeface hierarchy — large type doing the work imagery used to do — scores better with judges than illustrated/decorated templates in the current cycle; variable-font hover/interaction weight-width morphing is validated only where typography itself is the product (type foundries, brand-identity microsites), not for general product-listing typography. Single-source/snippet-verified, lower confidence. — awards-visual-language.md

**Text wrapping (`text-wrap: balance` / `pretty`)**

40. [TREND-2026] Apply `text-wrap: balance` only to short blocks — headlines, pull-quotes, captions — never body copy, capped at **6 lines in Chromium** and **10 lines in Firefox**; past those line counts the browser silently falls back to normal wrapping (the balancing algorithm is computationally expensive per recalculation, which is why the value is gated by line count at all). Baseline **newly available since 2024-05-13**, not yet widely available (projected ~2026-11-13) — safe to ship, but verify the line count on the actual rendered headline, not just the design comp, since a long localized string can silently exceed the cap. — modern-baseline-css.md R15; MDN `text-wrap`
41. [TREND-2026] Apply `text-wrap: pretty` to body copy as a harmless progressive enhancement only — never as the sole orphan-prevention mechanism on traffic with meaningful Firefox share. Firefox ships **no implementation** at all (the feature doesn't clear Baseline "newly available" status in the current dataset), and Chromium/WebKit disagree on scope even where both support it: **Chromium rebalances only the last 4 lines** of a paragraph, **WebKit evaluates the entire paragraph**. Don't assume identical visual output across engines, and don't rely on it for correctness on any layout where an orphaned word would break the design. — modern-baseline-css.md R16-17; WebKit blog (webkit.org/blog/16547)

## Checklist

**Type scale & hierarchy**
- [ ] Modular ratio chosen by context and declared as one token (Rule 1)
- [ ] Hierarchy carried by weight/color as well as size, never size alone (Rule 3)
- [ ] Body/UI weight sits inside 400–700; nothing below 400 at body/UI sizes (Rule 4)
- [ ] No more than 6 active hierarchy levels on one screen/section (Rule 5)

**Line length & line height**
- [ ] Body copy measures 50–75 CPL and never exceeds 80 CPL / 40 CJK (Rule 6)
- [ ] Body line-height is 140–150% (Rule 7)
- [ ] Display line-height drops to ~1.1–1.2 as size climbs past 48px (Rule 8)
- [ ] Paragraphs separated by spacing OR indent, never both (Rule 9)

**Base size & accessibility**
- [ ] Body text ≥16px at every breakpoint, mobile included (Rules 10–11)
- [ ] Contrast ≥4.5:1 normal / ≥3:1 large verified with a contrast tool, not by eye (Rule 12)
- [ ] All font-size declarations use rem/em, none in fixed px (Rule 13)
- [ ] Layout tested with a WCAG 1.4.12 text-spacing bookmarklet/devtools override (letter-spacing 0.12×, word-spacing 0.16×, line-height 1.5×, paragraph-spacing 2×) — no clipped or overlapping text (Rule 14)
- [ ] Tappable text elements meet 44×44px with 8px clearance (Rule 15)

**Fluid type**
- [ ] Every scale step has its own `clamp()` with rem-only min/max bounds (Rules 16, 18–19)
- [ ] Recomputing `v = 100×(y2−y1)/(x2−x1)` and `r = (x1·y2 − x2·y1)/(x1−x2)` from the declared min/max breakpoints matches the shipped clamp() values (Rule 17)
- [ ] Screenshot at 200% browser zoom shows no clipped or overlapping text for every clamp()-based step (Rule 20)

**Font pairing**
- [ ] ≤3 font families total on the site (Rule 21)
- [ ] If heading and body are not a matched superfamily, a written rationale (x-height/proportion match, or distinct content-type need) exists (Rule 22)
- [ ] Any third font serves a distinct content type, not decoration (Rule 23)
- [ ] Font roles fixed and consistent site-wide (Rule 24)

**Tracking**
- [ ] Display headlines ≥48px carry -0.01em to -0.02em tracking (Rule 25)
- [ ] All-caps/small-caps runs get +5–12% extra letterspacing (Rule 26)
- [ ] No all-caps run exceeds one line (Rule 27)

**Variable fonts & loading**
- [ ] Any page loading 3+ static weights of one family uses a variable font, or has a written reason it doesn't (Rule 28)
- [ ] Static-weight fallback present for older browser contexts (Rule 29)
- [ ] Only the weight/width instances actually used are loaded, not the full axis (Rule 30)
- [ ] `font-display: swap` shipped as the default (Rule 31)
- [ ] `font-display: optional` used only with a tuned metric-adjusted fallback (Rule 32)
- [ ] Only 1–2 critical font files preloaded, never a whole family (Rule 33)

**Typeface direction & kinetic type**
- [ ] Primary typeface is not unmodified default-configuration Inter or a stock geometric sans (Futura/Poppins/Circular) — or if it is, weight/tracking/scale is deliberately customized (Rules 34, 37)
- [ ] High-contrast editorial serif, if used, appears only at ≥32px display sizes (Rule 35)
- [ ] Any brand-specific typeface claim spot-checked against live computed styles before citing in client material (Rule 36)
- [ ] Any kinetic type is state-driven (scroll/hover/data), never decorative-only, and runs on native scroll with reduced-motion respected (Rule 38)
- [ ] Variable-font hover-morph restricted to type-led brand microsites (Rule 39)

**Text wrapping**
- [ ] `text-wrap: balance` used only on headlines/pull-quotes/captions, never body copy, and the rendered line count is checked against the 6-line (Chromium) / 10-line (Firefox) cap on real content, not just the comp (Rule 40)
- [ ] `text-wrap: pretty` on body copy is shipped as a progressive enhancement only, with no layout correctness depending on it for Firefox traffic (Rule 41)

## Anti-patterns

- **Low-contrast "ghost text" hero copy** (light-gray-on-white, thin weights) chosen for aesthetic minimalism. Passes design-jury eyeballing but fails WCAG's 4.5:1 floor and real-world legibility on mobile/outdoor screens. Instead: check every hero pairing with a contrast calculator, never by eye.
- **More than 3 typeface families on one page.** Reads as unfocused regardless of how good each individual font is. Instead: hold the 2–3 family ceiling and use weight/size/color for further differentiation.
- **Body copy set in a high-contrast display/Didone serif** (Editorial New, Didot) at paragraph sizes. Hairline strokes optically vanish at small sizes and on lower-DPI/mobile screens. Instead: reserve high-contrast serifs for ≥32px display use only; pair with a plain, robust body font.
- **Justified body text on the web without hyphenation.** Browsers lack print-grade line-breaking, so justification creates uneven word-gaps ("rivers"). Instead: left-aligned/ragged-right for web body copy.
- **FOIT left as the default** (`font-display: block` or unset `auto` on some browsers) on the critical rendering path. Produces up to several seconds of fully invisible text on slow connections. Instead: always override with `swap` or a tuned `optional`.
- **Loading a webfont's entire variable-axis range** (full 100–900 weight × full width axis) when the design only ever uses 2–3 instances. Negates the payload savings variable fonts exist to deliver. Instead: constrain `font-variation-settings` to the instances actually used.
- **`vw`-only fluid type with no rem-based floor/ceiling.** Breaks WCAG 1.4.4 because the text never stops scaling in lockstep with viewport width regardless of the user's OS/browser zoom setting. Instead: always wrap the preferred `vw` value in rem-based min/max bounds.
- **Oversized ultra-bold hero headlines at default (non-negative) letter-spacing.** Looks loose and amateurish above ~60px, and is often the first element to overflow or wrap badly on mobile when it isn't wired into a fluid clamp. Instead: apply -0.01em to -0.02em tracking on any headline ≥48px.
- **Multi-line all-caps paragraphs.** Fine for nav labels, eyebrow text, and badges; measurably slows reading once it runs past one line. Instead: cap all-caps treatment at a single line and drop to mixed-case for anything longer.
- **Unmodified Inter at default weights with no type-scale customization on a premium/high-ticket page.** A strong 2024–2026 signal of "generic SaaS template" that undercuts the premium positioning the page is trying to sell. Instead: either customize Inter deliberately (weight, tracking, scale) or swap to Geist, Satoshi, Switzer, or a custom face.
- **Combining first-line paragraph indents *and* extra paragraph spacing.** Redundant separators that visually fragment a text block instead of clarifying it. Instead: pick one paragraph-separation method per block.
- **Shipping `font-display: swap` without a metric-adjusted fallback.** Causes a visible, jarring layout shift the instant the webfont swaps in — "cinematic" font-loading intros on award sites often make this worse for a sales page, where every second of instability costs trust. Instead: tune `size-adjust`/`ascent-override`/`descent-override` on the fallback before shipping `swap`, or graduate to `optional`.
- **Kinetic type that's purely decorative** (animates once on load, doesn't encode scroll/hover/data state). The award-winning version ties type animation functionally to interaction state; a version with no functional tie-in is closer to the decorative-motion anti-pattern than to the pattern that actually wins. Instead: either wire the animation to real state or cut it.
- **Applying `text-wrap: balance` to a long body paragraph** instead of a headline/pull-quote/caption. Past ~6 lines (Chromium) or ~10 (Firefox) it silently no-ops back to normal wrap, so it looks like it "isn't working" when it's simply out of its supported range — and it was never meant to run that long in the first place. Instead: reserve `balance` for short display blocks only.
- **Treating `text-wrap: pretty` as a cross-browser orphan-prevention fix.** Firefox implements none of it, so any layout depending on it for correctness — not just enhancement — breaks for the entire Firefox user base; Chromium and WebKit also disagree on how much of the paragraph gets rebalanced. Instead: ship it as a no-risk enhancement only, never the mechanism a layout actually depends on.
