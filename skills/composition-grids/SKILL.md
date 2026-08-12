---
name: composition-grids
description: Compositional canon for sales-page layouts - column/modular grid structure, the full Gestalt set beyond proximity (figure-ground, similarity, common region, closure, continuity), text-over-photo contrast and scrims, optical vs. mathematical alignment, and visual balance/weight distribution. Use when building or auditing a grid's column spans, placing text over a photographic hero or section image, checking whether an icon/glyph is actually centered by eye, or judging whether a hero split or asymmetric composition reads as balanced.
---

# Composition & Grids

## When to use

- Defining or auditing a page's column grid: span counts, cross-section alignment, when to break it.
- Placing headline/CTA text over a photograph — hero, section banner, card overlay.
- Auditing Gestalt grouping beyond simple proximity: figure-ground pop, similarity, common region, closure, continuity.
- Nudging an icon, glyph, or play-triangle that measures centered but reads off.
- Judging whether a two-column hero split or an asymmetric composition is actually balanced, not just eyeballed.
- `layout-composition` owns spacing rhythm, the 8pt token scale, section order, and Gestalt *proximity*; this skill owns the compositional canon layered on top — grid structure, the rest of Gestalt, optical correction, and weight/balance.

## Rules

**Column & modular grids**

1. [FRAMEWORK] Default to a 12-column grid: 12 divides cleanly by 2, 3, 4, and 6, so it supports halves, thirds, quarters, and sixths with no fractional columns. — gridmakerpro
2. [LAW] Tie column count to breakpoint tier, not a squeezed-down fixed 12: 4 columns at 360dp (mobile), 8 at 600dp (tablet), 12 at desktop, margins stepping 16dp→24dp at those same breakpoints. — Material Design
3. [LAW] Draw grid gutters from `layout-composition`'s 8pt token scale — 24px default inside `layout-composition`'s 1140-1320px container (its Rule 13), 16px on smaller viewports, 32px only on canvases wider than that container — so grid structure and spacing rhythm stay one system, with no independent container-width figure introduced here. — gridmakerpro, cross-verified against Material's 24dp tablet gutter and `layout-composition` Rule 13
4. [FRAMEWORK] Build every section from column spans that sum to 12 (sidebar+main as 3+9 or 4+8; three-card rows as 4+4+4; four-card rows as 3+3+3+3) so sections share column boundaries with each other, not just internally. — gridmakerpro
5. [LAW] Enforce cross-section alignment: a testimonial band, pricing table, and footer with unrelated content must still share the hero's left/right gutter edges and column boundaries — a grid's authority comes from consistency across the whole page. — Müller-Brockmann, *Grid Systems in Graphic Design*
6. [FRAMEWORK] Treat the grid as an alignment/rhythm tool, not a replacement for compositional judgment: a full page or section showing zero optical corrections (Rules 21-27) and zero deliberate grid breaks (Rule 7) is a red flag for over-reliance on the grid, not evidence of a clean layout — audit it before shipping. — Refactoring UI (Wathan & Schoger)
7. [TREND-2026] Break the grid only for elements that must announce themselves as exceptional (a pull-quote crossing a column line, a full-bleed hero image, a headline jumping two type-scale steps) — keep breaks rare enough to register as deliberate. Documented rising 2024-2026 pattern (Apple, Spotify, Gucci). — gridmakerpro; HubSpot "Broken Grid Layouts"
8. [FRAMEWORK] When breaking the grid for an overlap or full-bleed effect, keep at least one axis (a shared baseline, one shared margin, a shared column start) locked to the underlying grid — escaping every axis at once reads as broken, not intentional. — Secret Stache/HubSpot broken-grid synthesis

**Gestalt beyond proximity**

9. [LAW] Figure-ground: give any element that must read as "the figure" (modal, tooltip, hero focal point) a genuine contrast break from its ground — value/color contrast, shadow, or blur on the background. Z-index/stacking order alone does not trigger the foreground split. — NN/g, Figure/Ground
10. [LAW] Similarity: every interactive element performing the same role (all primary CTAs, all card headers, all nav items) must share identical shape, color, and size treatment — a CTA styled differently from its siblings reads as a different *kind* of action, not an emphasized one. — NN/g Similarity
11. [LAW] Common region: add a bounding container (card border, background panel) only when whitespace alone fails to group unlike-shaped elements, or testing shows users missing the grouping — decorative boxes used "just in case" create clutter and measurably discourage scroll continuation. — NN/g, "The Principle of Common Region"
12. [FRAMEWORK] Closure: an icon or logomark can omit a meaningful share of its strokes and still read instantly if the remaining strokes preserve the silhouette's key vertices (the three-line hamburger is the canonical proof) — use deliberate partial shapes, don't mistake vague icons for elegant closure. — UX Tigers, NN/g Closure
13. [LAW] Continuity: arrange sequential content (numbered steps, a stat sequence, a timeline) along one visual line or curve and let that line terminate at the next CTA — the eye keeps traveling along an established line rather than jumping. — NN/g Continuation

**Text-over-photo contrast & scrims**

14. [LAW] Measure text-over-photo contrast at the single worst-case pixel neighborhood the text overlaps — lightest region under dark text, darkest region under light text — never against the image's average color. — WCAG SC 1.4.3 methodology via NN/g
15. [LAW] Text over a photo must still clear WCAG SC 1.4.3 at that worst-case point: ≥4.5:1 for body/UI text, ≥3:1 for large text (≥18pt regular ≈18.5px, or ≥14pt bold ≈24px). — W3C WCAG 2.1 Understanding SC 1.4.3
16. [LAW] Scrim opacity starting ranges: dark scrim over a light/busy photo sits at 20-40% black; light scrim over a dark photo sits at 40-60% white; tune within the band per image, then re-verify contrast at the actual text block (Rule 14). — Google Material Design, m1.material.io/style/imagery.html
17. [FRAMEWORK] Prefer a gradient scrim over a flat full-image overlay whenever only part of the photo needs protection: run roughly 85% opaque at the text edge to fully transparent at the far edge, using multiple eased stops instead of one hard linear stop. — Ahmad Shadeed; Smashing Magazine Part 2
18. [FRAMEWORK] Validate any scrim/overlay by swapping in a solid white rectangle behind the same text block and confirming it stays legible — if the technique only works against one specific photo, the contrast margin is too thin for real photo variation. — ishadeed.com, corroborated by NN/g's worst-case warning
19. [LAW] When a photo can't be reliably darkened without damaging it, move the headline off the photo entirely into a flat-color panel beside or below it ("frame the image") rather than forcing a marginal overlay — preserves real, zoomable, screen-reader-legible text over an image-of-text. — Smashing Magazine Part 2 (WCAG 1.4.5)
20. [FRAMEWORK] When a hero photo carries overlaid text, place its subject on a rule-of-thirds vertical line (left or right third), not centered — this frees the opposite two-thirds as negative space for the headline/CTA. — Shorthand, "The Rule of Thirds in Photography"

**Optical vs. mathematical alignment**

21. [LAW] Round or pointed glyphs (circles, triangles, diamonds) must overshoot the bounding box of straight-edged neighbors by roughly 1-5% of the shared dimension to read as equal size: ~1-3% for round shapes, ~3-5% for pointed shapes. — Overshoot (typography), citing Peter Karow
22. [FRAMEWORK] A play-triangle inside a circular button is not correctly centered by bounding-box math — its visual mass sits left-of-center. Nudge it right by roughly 5-10% of the icon's width until it optically balances, verified by rotation/inversion rather than trusting coordinates. A competing method argues for the triangle's true geometric center via a circumscribed circle instead of an eyeballed nudge; both produce visually similar results — test in-file before hard-coding either as a token. — ringcentral-ux; competing view via erqiudao
23. [LAW] Treat geometric centering as a starting point, not the destination, for asymmetric icon shapes: adjust padding manually until the icon reads as optically centered inside its keyline/grid shape, verified by eye. — Apple Human Interface Guidelines, Foundations > Icons
24. [FRAMEWORK] Expect a residual offset whenever `align-items: center` places an icon next to text, since that API centers boxes, not visual mass — nudge pointed/triangular icons ~1px up and heavy/filled icons ~1px down; purely circular icons typically need no correction. Single-source practitioner heuristic — corroborate against your own icon set before hard-coding. — baraa.app
25. [FRAMEWORK] Nested border-radius does not scale linearly with padding: if an outer container has radius R and P px of padding before an inner rounded element, set the inner radius to R − P, not also R — matching values produces a visibly tighter, more-squared inner corner. — baraa.app
26. [FRAMEWORK] Split icon+label padding inside a button asymmetrically, not evenly — an icon reads visually heavier than equal-width text, so give the icon side less padding and the text side more (e.g. ~16px icon-side vs. ~24px text-side) so the pair feels centered as a unit. — baraa.app
27. [FRAMEWORK] Run a "squint test" (blur your eyes, or blur the screenshot) on any composition before shipping — it erases fine detail and exposes optical-weight imbalances that pixel-perfect measurement misses. — baraa.app, consistent with Smashing Magazine's judge-by-eye framing

**Visual balance & weight distribution**

28. [LAW] Visual weight compounds from five factors, not size alone: size, color/value contrast, texture/density, isolation (a lone element gains weight by standing apart), and distance from the composition's center — an element near the edge needs less mass than the same element near the center to exert equal pull, like a lever. — Smashing Magazine, "Compositional Balance"
29. [LAW] Choose symmetrical vs. asymmetrical balance deliberately per section rather than defaulting to centered-everything: symmetrical balance reads formal/stable/static; asymmetrical balance (unequal-but-compensated weight) reads dynamic/energetic and is the default for modern hero sections. — Smashing Magazine
30. [LAW] Judge whether an asymmetric composition is balanced or merely lopsided by eye, not by formula: it reads intentional when removing or resizing any single element visibly tips the whole composition, and accidental when elements could be nudged freely with no perceptible change. — Smashing Magazine
31. [FRAMEWORK] For a two-column hero (copy vs. product visual), a 60/40 split toward the copy side is the practical, buildable approximation of the golden ratio (61.8/38.2) and the most common SaaS hero pattern — the dominant 60% carries headline + subhead + CTA, the 40% carries one supporting visual that doesn't compete for the first read. — Elegant Themes, cross-referenced against Orizon Design's hero-pattern catalog
32. [FRAMEWORK] Judging any dominant/secondary hero split by area ratio alone is not enough: the smaller side must carry enough visual weight (saturation, size, contrast, isolation — Rule 28) to act as a genuine counterweight — a 70/30 split with a pale, low-contrast thumbnail reads unbalanced despite a textbook-correct ratio. No primary source validates a fixed 70/30 target; treat it as one point on a weight-compensation continuum, not a rule to hit. — synthesis of Rule 28 applied to Rule 31's hero-ratio convention

**Section occupancy (the void rule)**

33. [FRAMEWORK] On viewports >=1024px, no section may leave more than 40% of the container's
width empty at its widest content row. A heading + prose + card stacked in one narrow
left-anchored column with a dead right half is a formatted document, not a composed
section — compose into columns (heading-column | content-column on the page grid), give
the void a deliberate counterweight, or narrow the section intentionally and say why.
Alignment discipline is necessary but not sufficient: a page can hold one perfect left
line and still have no composition. — synthesis of R5/R30 applied to the conversion-craft demo post-mortem (2026-08-12)

## Anti-patterns

- **Averaging instead of worst-casing contrast**: sampling a photo's "average" color to compute text contrast instead of the single lightest/darkest neighborhood the text overlaps — passes a design-file checker and fails on the real photo. Violates Rules 14-15.
- **One fixed scrim opacity for every hero image**: hard-coding a single overlay percentage across a whole site's rotating photography instead of tuning per-image inside the documented band. Violates Rule 16.
- **Leaving pointed/asymmetric icons at their mathematical center and calling it done**: play triangles, arrows, checkmarks, logomarks that visibly lean because no optical pass was ever run. Violates Rules 21-24.
- **Zero grid breaks or optical corrections, ever**: a page so grid-devout and mathematically "correct" that nothing escapes the column edges and no icon or element ever gets an optical nudge — indistinguishable from a wireframe, and itself a failure mode (Rule 6).
- **Over-bordering ("false floors")**: wrapping every card, stat, and paragraph in its own bordered box "just in case" — the opposite of common region's intent (Rule 11), and documented to discourage scroll continuation.
- **Baking a headline into a raster image to dodge a contrast problem**: solves the visual issue but breaks zoom and screen readers, and violates WCAG 1.4.5. Use a scrim plus real text, or frame the image instead (Rule 19).
- **Treating symmetric 50/50 as automatically "safe"**: a mirrored hero split isn't inherently balanced or unbalanced — it's a formal/static choice that needs to be deliberate (Rule 29), not a hedge against getting asymmetry "wrong."
- **Escaping every axis on a "broken grid" hero**: copying an award-site asymmetric layout with no shared margin, baseline, or column start left anywhere on the page — reads as sloppy rather than as the intentional break it's imitating (Rule 8).
- **Judging a hero split purely by area percentage**: measuring only the pixel-width ratio and ignoring whether the smaller side carries enough weight to counterbalance the larger (Rule 32) — common when a design is built to a ratio spec without a squint-test pass.

## Checklist

**Grid**
- [ ] All sections built from column spans summing to 12; spans documented (Rules 1, 4)
- [ ] Column count steps with breakpoint tier (4/8/12), not a squeezed fixed 12 (Rule 2)
- [ ] Grid gutters (24/16/32px) and any container reference trace to `layout-composition`'s 1140-1320px container and 8pt token scale, not an independent number (Rule 3)
- [ ] Hero, proof, pricing, and footer share left/right gutter edges and column boundaries (Rule 5)
- [ ] At least one deliberate optical correction or grid break exists somewhere on the page — zero of either gets flagged and reviewed, not assumed clean (Rule 6)
- [ ] Any grid break is rare, deliberate, and keeps at least one axis locked to the grid (Rules 7-8)

**Gestalt**
- [ ] Every "figure" element (modal, tooltip, focal point) has a real contrast break from its ground, not just z-index (Rule 9)
- [ ] All same-role elements (CTAs, card headers, nav items) share identical shape/color/size (Rule 10)
- [ ] Bounding containers used only where whitespace grouping genuinely fails (Rule 11)
- [ ] Icons/logomarks relying on closure still preserve the silhouette's key vertices at shipped size — checked at actual render size, not just at full scale (Rule 12)
- [ ] Sequential content (steps, stats, timeline) sits on one line/curve that terminates at a CTA (Rule 13)

**Text over photo**
- [ ] Contrast checked at the worst-case pixel neighborhood under the text, not the image average (Rule 14)
- [ ] Text-over-photo contrast clears 4.5:1 (body) / 3:1 (large) at that point (Rule 15)
- [ ] Scrim opacity tuned per image inside the 20-40% dark / 40-60% light band (Rule 16)
- [ ] Where only part of the photo needs protection, a multi-stop gradient scrim (~85% opaque at the text edge to transparent at the far edge) is used instead of one flat overlay (Rule 17)
- [ ] White-rectangle swap test passes behind any scrim/overlay treatment (Rule 18)
- [ ] If a photo can't be reliably darkened without damage, the headline moved off it into a flat-color panel instead of a marginal overlay (Rule 19)
- [ ] Hero photo subject sits on a rule-of-thirds line, leaving negative space for text (Rule 20)

**Optical alignment**
- [ ] Round/pointed glyphs overshoot straight-edged neighbors by 1-5% (Rule 21)
- [ ] Play-triangles and asymmetric icons verified by eye/rotation, not left at mathematical center (Rules 22-23)
- [ ] Icons centered against text via `align-items: center` get a manual ~1px nudge if pointed/filled; circular icons left uncorrected (Rule 24)
- [ ] Nested rounded corners use inner-radius = outer-radius − padding, never a matching radius value (Rule 25)
- [ ] Icon+label padding split asymmetrically, not evenly (Rule 26)
- [ ] A squint test (or blurred screenshot) run on the composition before ship (Rule 27)

**Balance**
- [ ] Visual weight judged on all five factors — size, color/value contrast, texture/density, isolation, distance from center — not size alone (Rule 28)
- [ ] Symmetrical vs. asymmetrical balance chosen deliberately per section, not defaulted (Rule 29)
- [ ] Asymmetric compositions pass the "remove one element and it visibly tips" test (Rule 30)
- [ ] Two-column hero split lands near 60/40 toward copy, or deviation is deliberate (Rule 31)
- [ ] Any hero split's smaller side carries real counterweight (saturation/contrast/isolation), not just correct area (Rule 32)

## Cross-references

- `layout-composition` — spacing rhythm, the 8pt token scale, Gestalt *proximity*, above-fold anatomy, section order, container widths.
- `typography-craft` — type scale, tracking, and the letterform-level detail underlying overshoot (Rule 21).
- `demo-assets` — sourcing and art-directing the photography that Rules 14-20 apply contrast and composition rules to.
- `art-director-review` — the squint test (Rule 27) and balance judgment (Rule 30) are exactly the adversarial pass that skill runs before QA.
- `pixel-qa` / `design:accessibility-review` — mechanical contrast-ratio verification tools for Rules 14-15.
