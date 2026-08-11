---
name: layout-composition
description: Layout and composition for sales pages - grid, spacing rhythm, above-fold anatomy, section order, hierarchy. Use when structuring any page or section.
---

# Layout & Composition

## When to use

- Setting up a spacing/grid system, token scale, or container width for a new site or component.
- Laying out any hero or above-the-fold section that must work with zero scrolling.
- Choosing container max-width, breakpoints, or a mobile-first column structure.
- Ordering sections on a sales/landing/product page, or auditing an existing order.
- Deciding whether a bento/modular grid fits a section, or reviewing one already shipped.
- Auditing whitespace, Gestalt grouping, or visual-hierarchy levels on a drafted layout.

## Rules

**8pt grid, spacing scale & touch targets**

1. [FRAMEWORK] Use 8px as the base spacing unit for every section margin, padding, and gutter; build from a fixed token scale (4/8/12/16/24/32/48/64/96/128px, 7-10 steps), never arbitrary values. The 8/4pt dual grid scales without fractional-pixel breakage across 1x-3x display densities — the practical reason to hold it on any site serving both desktop and mobile. — Medium/MacTavish, Prototypr, Figma
2. [FRAMEWORK] Reserve the 4px sub-grid for internal component spacing only (icon-to-label gap, button internal padding, badge spacing) — never for section-level margins or gutters.
3. [FRAMEWORK] Set line-height values as multiples of 4px so text baselines stay locked to the grid (vertical rhythm). — Figma
4. [LAW] Ship touch/click targets at a 44x44 CSS px design floor (Apple HIG; Material 48dp) with >=8px clearance between adjacent targets — including inside dense/bento tiles, where compressing a grid must never compress a target below floor. WCAG 2.2 AA's legal minimum is 24x24 CSS px; state both in review, ship 44. — Apple HIG, m1.material.io, WCAG 2.5.8

**Gestalt proximity & grouping**

5. [LAW] Keep inter-group spacing at roughly 2x (or more) of intra-group spacing so grouping reads from spacing alone, with no border or background needed. — NN/g Gestalt Proximity
6. [LAW] Tighten the whitespace between a value-proposition/copy block and its CTA relative to the whitespace surrounding them — this frames copy+CTA as one decision unit and measurably raised click-through in a direct A/B test. — Smashing Magazine
7. [LAW] Re-verify every proximity relationship at each breakpoint — spacing that correctly groups a label with its field, or a value prop with its CTA, at desktop width can drift apart or collide with an unrelated element once the layout reflows. — NN/g
8. [LAW] Never let grid tidiness create false proximity: don't cluster a critical action among visually adjacent but functionally unrelated buttons just because they fit a row, and don't isolate a related nav/content element from what it belongs to just to fit a grid slot. — NN/g (documented Kayak/Hulu failures)

**Above-the-fold anatomy (zero scroll)**

9. [LAW] Render the core value proposition, a supporting visual, and the primary CTA inside the first viewport with zero scrolling, verified at both a standard desktop width and a 375px mobile width — 57% of page-viewing time and 74% of attention concentrate in the first two screenfuls. — NN/g Scrolling and Attention (2018)
10. [LAW] On ecommerce product pages specifically: product image, name, price, and a visible add-to-cart/buy CTA all render above the fold on desktop and mobile — the baseline checklist, not an aspiration. — Baymard, Kissmetrics
11. [TREND-2026] Design to a ~3-second stay-or-leave window before any scroll: headline, visual, and primary action must be legible at a glance, not discovered. Single-source industry framing, directionally consistent with NN/g's attention data — treat as a heuristic, not a hard research number. — ConvertCart
12. [LAW] Treat "the fold" as a fuzzy attention gradient, not one fixed pixel line — viewport heights vary too much across devices for a single cutoff. Test the zero-scroll checklist at realistic heights (~375x667 mobile, ~1366x768 laptop), never a hardcoded px value.

**Container widths, breakpoints & measure**

13. [FRAMEWORK] Set the desktop container max-width to 1140-1320px for the primary content column; 1200-1280px is the converged default for a generous-whitespace, premium-feel layout. — Bootstrap convention via Framer
14. [FRAMEWORK] Design mobile-first: base styles stacked/unstyled for narrow viewports, layer in multi-column/grid treatment at wider breakpoints. Never design desktop-first and squeeze down. — Framer
15. [TREND-2026] Use `clamp()` for fluid type and spacing between breakpoints instead of discrete jumps — the standard 2026 technique for avoiding visible layout "steps."
16. [TREND-2026] Use container queries for component-level responsive spacing (e.g. a pricing card that reflows on its own column width, not the viewport) — Baseline-supported (~93% global browser usage) and now preferred over viewport media queries for component-driven layout.
17. [LAW] Hold body-text columns to 45-75 characters per line (66 optimum), never exceeding 80 — this is what actually constrains a readable content-column width inside any container, independent of the container's own max-width. — Baymard/Bringhurst, WCAG

**Section persuasion order (Shapiro layout scaffold)**

18. [FRAMEWORK] Default section-order scaffold for a primary sales page: Nav -> Hero (headline + subhead + primary CTA) -> Social proof -> secondary CTA -> Feature/benefit blocks -> repeat CTA -> FAQ/objections -> Footer. This skill owns the layout scaffold; the positioning and objection-mapping work that fills each slot belongs to `marketing-strategy.md` and `copy-chief.md`. Record any deviation as deliberate, not silent. — Shapiro (julian.com)
19. [TREND-2026] Budget 6-9 total sections for a full page; single-offer/simple-tool pages can convert acceptably at 4-5. Audit anything past 9 sections for content that isn't earning its place. — ConvertCart (industry benchmark)
20. [FRAMEWORK] Keep the primary CTA reachable within roughly one viewport-height of scroll from any point on the page — repeat it after the hero, after social proof/features, and again at the FAQ/footer boundary, matching the scaffold in Rule 18.

**Bento / modular grid usage limits**

21. [TREND-2026] Treat bento/modular grids as one layout option, not a default template — reach for it only when content is genuinely non-sequential and comparable (feature tiles, plan comparisons), never for content that carries the page's persuasion sequence (hero -> proof -> CTA). By mid-2026 the pattern shows overuse fatigue, with a brutalist/anti-grid counter-trend emerging as a direct reaction. — Apple/Notion popularization; mockuuups.studio, wearetenet
22. [TREND-2026] Cite only the qualitative bento claim (a real, Apple/Notion-popularized 2024-2026 aesthetic pattern) in client or curriculum material. The commonly repeated "+47% dwell time / +38% CTR" figures trace to a source with no study, sample size, or methodology behind them (verified by direct fetch) — never present them as measured results.

**Whitespace for premium feel**

23. [TREND-2026] More whitespace per content block reads as premium/luxury positioning (the Apple/Chanel-style DTC pattern); the direction is durable, but no source in current research gives a validated whitespace-to-content ratio — treat any specific number, including the one below, as an operating default, not a proven constant. — qualitative, multiple premium-DTC sources
24. [FRAMEWORK] Operational anchor until a better number exists: inter-section vertical spacing of 64-128px (from the token scale in Rule 1) for premium-positioned pages, 32-64px for content-dense/commodity ecommerce pages. Never buy information density — more tiles, tighter grids — at the cost of hierarchy clarity or tap accuracy; premium reads as edited, not merely dense.

**Visual hierarchy cap**

25. [FRAMEWORK] Cap page/section-level visual hierarchy at 3 contrast levels (combinations of size and value/saturation contrast used to signal importance) — past 3 tiers, nothing reads as more important than anything else. This caps overall visual-weight tiers, distinct from `typography-craft.md`'s 4-6 active type-scale steps: a heading can sit on scale step 4 while still occupying hierarchy tier 2 of the page's 3 tiers. — MasterClass
26. [FRAMEWORK] Drive hierarchy primarily through size and value/saturation contrast against the background, not hue alone — hue-only differences are a weak, often-inaccessible hierarchy signal. — MasterClass

**Award-circuit layout risk**

27. [LAW] Avoid scroll-jacking, heavy WebGL hero showpieces, and experimental/non-standard primary navigation on a sales-page layout — documented award-circuit favorites correlated with visitor confusion and mobile failure, regardless of design-award performance. Native scroll-driven reveals are fine (content reachable without JS, respects `prefers-reduced-motion`); the hijack-vs-reveal mechanics live in `motion-performance.md` — this skill's stake is structural: every layout element must be reachable through normal document flow and scroll. — wearetenet, corroborated by awards-visual-language.md's own award-judging analysis
28. [LAW] Never use "featured on Awwwards/FWA/CSSDA" or award-site aesthetics as a proxy for conversion-safe layout — award judging explicitly weights Design 40% + Creativity 20% vs. Content 10%, structurally skewed away from usability. Validate any award-inspired layout pattern against your own funnel before reuse. — wearetenet

## Checklist

**8pt grid & touch targets**
- [ ] All margins/padding/gutters are multiples of 8, drawn from one declared token scale (Rule 1)
- [ ] 4px sub-grid used only for component-internal spacing, never section layout (Rule 2)
- [ ] Line-heights are multiples of 4px (Rule 3)
- [ ] Every tap target is >=44x44 CSS px with >=8px clearance, including inside bento tiles (Rule 4)

**Gestalt proximity**
- [ ] Inter-group spacing measures >=2x intra-group spacing (Rule 5)
- [ ] Whitespace between value-prop copy and its CTA is visibly tighter than surrounding whitespace (Rule 6)
- [ ] Grouping relationships (label-to-field, value-prop-to-CTA) hold correctly in screenshots at mobile (375px), tablet, and desktop widths, not desktop only (Rule 7)
- [ ] No unrelated elements grouped by grid convenience; no related elements isolated by it (Rule 8)

**Above-the-fold**
- [ ] Value prop + visual + primary CTA render with zero scroll at desktop and 375px (Rule 9)
- [ ] PDP above-fold shows image, name, price, and buy CTA (Rule 10)
- [ ] In the above-fold screenshot, headline, supporting visual, and primary CTA are readable with no scrolling, hovering, or clicking (Rule 11)
- [ ] Zero-scroll check re-verified in screenshots at both ~375x667 (mobile) and ~1366x768 (laptop), not one assumed height (Rule 12)

**Container & breakpoints**
- [ ] Desktop container max-width sits in 1140-1320px, 1200-1280px for premium positioning (Rule 13)
- [ ] Base CSS (no media query) styles the narrow viewport; wider layouts are added via `min-width` media queries, not `max-width` overrides (Rule 14)
- [ ] Fluid type/spacing uses `clamp()` instead of stepped breakpoint jumps (Rule 15)
- [ ] Component-level spacing uses container queries where applicable (Rule 16)
- [ ] Body-text columns stay in 45-75 CPL, hard cap 80 (Rule 17)

**Section order**
- [ ] Section order matches the Nav->Hero->proof->CTA->features->CTA->FAQ->footer scaffold, or the deviation is documented (Rule 18)
- [ ] Total section count is 6-9 (4-5 for a single-offer page), audited if over 9 (Rule 19)
- [ ] Primary CTA is reachable within ~1 viewport-height of scroll from anywhere on the page (Rule 20)

**Bento usage**
- [ ] Bento/modular grid used only for non-sequential, comparable content — not the core persuasion sequence (Rule 21)
- [ ] No unverified bento dwell-time/CTR statistics appear anywhere in the deliverable (Rule 22)

**Whitespace & hierarchy**
- [ ] Whitespace density matches the page's positioning (premium vs. commodity) using the 64-128px / 32-64px anchor (Rules 23-24)
- [ ] Page/section hierarchy uses 3 or fewer contrast tiers (Rule 25)
- [ ] Hierarchy is carried by size/value contrast, not hue alone (Rule 26)

**Award-circuit risk**
- [ ] No scroll-jacking, all-over WebGL hero, or experimental nav on the page; every element reachable via normal scroll (Rule 27)
- [ ] Any layout pattern copied from an Awwwards/FWA/CSSDA-featured site has a written conversion rationale on file, not just "it won an award" (Rule 28)

## Anti-patterns

- **Arbitrary spacing values outside the token scale** (13px here, 22px there) picked by eye instead of pulled from the 4/8/12/16/24/32/48/64/96/128 scale. Breaks vertical rhythm and produces visible misalignment at different pixel densities. Instead: every spacing value traces to one declared token.
- **Using the 4px sub-grid for section-level layout** (e.g. a 20px section margin) instead of reserving it for icon/label/badge-scale internals. Instead: section margins and gutters stay on the 8px scale; only sub-component spacing drops to 4px.
- **A spacing relationship that groups correctly at desktop but drifts apart on mobile** — a form label that reads as attached to its field at 1280px but floats free at 375px once the layout stacks. Instead: check Gestalt proximity at every breakpoint, not just the design-file width.
- **Cramming a critical action into false proximity with unrelated buttons** (Add-to-cart sitting in a row with Save/Cancel/Next) because it fit the grid — or the inverse, isolating a real nav element far from its content so it goes unnoticed. Instead: let logical grouping drive placement; adjust the grid to fit the relationship, not the other way around.
- **Treating "above the fold" as an exact pixel number** and designing to one fixed height across all devices. Viewport heights vary too much for a single cutoff to hold. Instead: test the zero-scroll checklist at multiple realistic device heights.
- **Award-circuit hero patterns that delay the value proposition** — abstract animation, oversized WebGL, or scroll-jacking before any headline renders. Confuses visitors, fails on mobile, and inflates load time regardless of how it scores on a design jury. Instead: value prop, visual, and CTA render immediately, with any motion added as a native, non-hijacking scroll reveal.
- **Compressing a bento grid until its tap targets fall under 44px** to fit more tiles above the fold. Trades accessibility for density. Instead: hold the 44px floor first, then decide how many tiles actually fit.
- **Citing the "+47% dwell time / +38% CTR" bento statistics** in a deck or spec as if they were measured research. The originating source has no study, sample size, or methodology behind it. Instead: cite bento as a real, qualitative 2024-2026 aesthetic trend only — no numbers attached.
- **Calling a dense, tile-packed layout "premium"** without the whitespace to back it up. Density and premium positioning pull in opposite directions. Instead: match whitespace to positioning — wider inter-section spacing for premium, tighter for commodity/content-dense pages.
- **Stacking more than 3 hierarchy tiers** (5-6 different size/weight/color combinations competing for attention on one screen) so nothing reads as clearly more important than anything else. Instead: cap contrast levels at 3 and drive them with size + value/saturation, not a proliferation of hue variants.
- **Building a bento or asymmetric layout for the page's core persuasion sequence** (hero, social proof, primary CTA) instead of reserving it for genuinely comparable, non-sequential content like a feature grid or plan comparison. Instead: keep the persuasion spine in a straightforward stacked/scaffolded order; use bento only where the content itself is naturally parallel.
- **Shipping a layout pattern because it won an Awwwards/FWA/CSSDA award**, without checking it against this site's own funnel. Award judging weights Design and Creativity far above Content, so award-winning layout choices are not pre-validated for conversion. Instead: treat any award-inspired pattern as a hypothesis to test, not a proof.
