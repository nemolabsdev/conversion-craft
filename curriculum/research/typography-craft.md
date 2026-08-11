# Web Typography Craft for Premium Sales Websites

## Sources

| Source | Contribution |
|---|---|
| [Butterick's Practical Typography — Summary of Key Rules](https://practicaltypography.com/summary-of-key-rules.html) | Core numeric print/web rules: point size, line spacing %, line length, paragraph spacing, letterspacing, caps, punctuation. Verified by direct fetch. |
| [Imperavi — UI Typography: Modular Scale Principles](https://imperavi.com/books/ui-typography/principles/modular-scale/) | Ratio-to-context mapping: which modular scale ratio suits dashboards vs. marketing/landing pages. |
| [Modular Scale (modularscale.com) via search corroboration](https://www.modularscale.com/) | Full named-ratio table (minor second through octave) used to build custom type scales. |
| [Smashing Magazine — Modern Fluid Typography Using CSS Clamp](https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/) | Exact `clamp()` syntax, the two-point formula for deriving the vw-coefficient and rem-offset, and the WCAG 1.4.4 zoom caveat. Verified by direct fetch. |
| [LogRocket — Fluid vs. Responsive Typography with CSS Clamp](https://blog.logrocket.com/fluid-vs-responsive-typography-css-clamp/) | Fluid type replaces breakpoints; optimal body-text floor across all viewports. |
| [UXPin — Optimal Line Length for Readability](https://www.uxpin.com/studio/blog/optimal-line-length-for-readability/) | 50–75 CPL sweet-spot data, novice vs. experienced reader CPL, WCAG hard caps (80 CPL / 40 CPL CJK). |
| [Typewolf — Lookbooks (pairing methodology)](https://www.typewolf.com/lookbooks) | 2–3 font-family ceiling, role-assignment discipline across logo/nav/headline/body. |
| [Typewolf — Recommendations 2026](https://www.typewolf.com/recommendations) | Live popularity ranking (Apercu, GT America, Futura, Founders Grotesk lead) across 3,000+ tracked sites. Verified by direct fetch. |
| [Fontfabric — 10 Design & Typography Trends for 2026](https://www.fontfabric.com/blog/10-design-trends-shaping-the-visual-typographic-landscape-in-2026/) | "Strategic imperfection" and typographic-maximalism framing for 2026. |
| [Font-Converters — Font Loading Strategies Guide 2025](https://font-converters.com/guides/font-loading-strategies) | `font-display: swap` vs `optional`, preload guidance, measured 200–800ms savings. |
| [618Media — Variable Fonts for Flexible Web Design 2026](https://618media.com/en/blog/use-variable-fonts-for-flexible-web-design/) | Variable-font file-size/performance rationale; Inter's screen-optimized design history. |
| [Fontfabric — Fonts for Luxury Branding](https://www.fontfabric.com/blog/fonts-for-luxury-branding/) | Heritage-serif vs. contemporary-geometric-sans luxury poles, named brand examples (Didot/Armani, Futura/LV). |
| [Design Shack — Elegant Luxury Fonts for Premium Brands](https://designshack.net/articles/inspiration/elegant-luxury-fonts/) | Luxury typeface characteristics (ligatures, alternates) and the white-space/monochrome context dependency. |
| [DigitalA11y — Choosing Accessible Fonts](https://www.digitala11y.com/choosing-accessible-fonts-enhancing-readability-and-inclusivity/) | WCAG numeric floors: 16px min, 1.5× line-height, 0.12×/0.16× letter/word spacing, 4.5:1 / 3:1 contrast, 200% resize. |
| Refactoring UI (Wathan & Schoger) — synthesized via [includeJS notes](https://includejs.dev/notes/design-typography/) and corroborating summaries | Hierarchy via weight/color (not size alone), font-weight ranges, inverse size/line-height relationship, 45–75 CPL. |
| [MadeGoodDesigns — Font Trends 2026](https://madegooddesigns.com/font-trends-2026/) | The 12 named 2026 type movements with specific typefaces and adopting brands (variable serifs, bouba grotesks, luxury wide-caps tracking values, etc.). Verified by direct fetch. |
| [MadeGoodDesigns — Popular Fonts Designers Actually Use 2026](https://madegooddesigns.com/popular-fonts/) | Neo-grotesque-displaces-geometric-sans trend statement, sourced to Typewolf/Fonts In Use/Awwwards tracking. |
| [FullStop360 — SaaS Typography Playbook](https://fullstop360.com/blog/insights/branding/saas-typography-playbook-what-leading-companies-use) | Brand-by-brand typeface attributions (Stripe=Söhne, Vercel=Geist, GitHub=Mona Sans, etc.) — secondary source, unverified against primary brand docs. |
| [Fonts In Use](https://fontsinuse.com/) | Editorial-archive methodology: fonts shown in real production context, not isolated specimens — the practice this curriculum should emulate when citing examples. |
| [Creative Pro / WebDesignerDepot / TotallyType — tracking & leading guides](https://creativepro.com/the-ins-and-outs-of-tracking/) | Negative-tracking convention for display type, inverse size/tracking relationship. |
| [Abmatic.ai — Impact of Website Typography on Conversion Rates](https://abmatic.ai/blog/impact-of-website-typography-on-conversion-rates) | Standard 16px desktop / 14px mobile baseline claim — flagged as qualitative, no hard conversion data (see Open Questions). |

## Rules

**Type scale & hierarchy**

1. Choose the modular-scale ratio by context, not preference: **1.2 (Minor Third)** for dense dashboards/content apps, **1.25 (Major Third)** or **1.333 (Perfect Fourth)** for marketing/landing pages, **1.5 (Perfect Fifth)–1.618 (Golden Ratio)** for hero-driven editorial/luxury pages with few hierarchy levels. [LAW] — Imperavi
2. Full named-ratio reference for building a custom scale: Minor Second 1.067 · Major Second 1.125 · Minor Third 1.2 · Major Third 1.25 · Perfect Fourth 1.333 · Augmented Fourth 1.414 · Perfect Fifth 1.5 · Golden Ratio 1.618 · Major Sixth 1.667 · Minor Seventh 1.778 · Major Seventh 1.875 · Octave 2.0. [LAW] — modularscale.com
3. Do not carry hierarchy on font-size alone; pair each scale step with a font-weight and/or color-contrast change. A page where the primary text is oversized and the secondary text is illegibly small is a diagnosable failure of this rule. [LAW] — Refactoring UI
4. Body/UI weight range: 400–500 for running text, 600–700 for emphasis; weights below 400 are reserved for large display headlines (≥32px) — they lose legibility at body/UI sizes. [LAW] — Refactoring UI

**Line length & line height**

5. Target line length **45–90 characters per line (CPL)** including spaces, with a **50–75 CPL** sweet spot and **66 CPL** as the single best target for long-form body copy. [LAW] — Butterick; UXPin
6. Hard cap: never exceed **80 CPL** for non-CJK body text; cap CJK text at **40 CPL**. [LAW] — UXPin/WCAG
7. Set line-height to **120–150% of font size** for body text (Butterick's range is 120–145%; WCAG's floor is 150%) — use 140–150% as the default that satisfies both. [LAW] — Butterick; DigitalA11y
8. Invert line-height with size: as font-size goes up, line-height (as a multiplier) goes down. Target **~1.1–1.2** for large display headlines (≥48px) and **~1.5** for body text (16px). [LAW] — Refactoring UI
9. Use paragraph spacing of **4–10pt** *or* a first-line indent of **1–4× the point size** to separate paragraphs — never both on the same block; combining them is a redundant, fragmenting signal. [LAW] — Butterick

**Base size & accessibility floors**

10. Minimum web body text size is **16px (1em)**; Butterick's full acceptable web range is 15–25px depending on typeface x-height and context. [LAW] — Butterick; DigitalA11y
11. Keep body text within **16–19px across all breakpoints** in a fluid system — do not let mobile body text drop below 16px. [LAW] — LogRocket
12. Maintain contrast of **≥4.5:1** for normal text and **≥3:1** for large text (≥24px regular or ≥18.7px/14pt bold). [LAW] — WCAG/DigitalA11y
13. Use **relative units (rem/em)** for every font-size declaration, never fixed px on the root — required for the page to honor 200% browser resize and OS font-size preferences. [LAW] — WCAG/DigitalA11y
14. WCAG 1.4.12 text-spacing floors the layout must survive without breaking: letter-spacing ≥ **0.12×** font-size, word-spacing ≥ **0.16×** font-size, line-height ≥ **1.5×**, paragraph-spacing ≥ **2×** font-size. [LAW] — WCAG/DigitalA11y

**Fluid type (clamp)**

15. Fluid formula: `font-size: clamp(MIN_REM, PREFERRED, MAX_REM)` where PREFERRED mixes `vw` and `rem`, e.g. `clamp(2.25rem, 2vw + 1.5rem, 3.25rem)` scales 36px→52px between 600px and 1400px viewport widths. [LAW] — Smashing Magazine
16. To derive PREFERRED from two anchor points (min size `y1` at viewport `x1`, max size `y2` at viewport `x2`): vw-coefficient `v = 100×(y2−y1)/(x2−x1)`, rem-offset `r = (x1·y2 − x2·y1)/(x1−x2)`. [LAW] — Smashing Magazine
17. Always express the clamp min/max bounds in **rem**, never px — a `vw`-only preferred value with rem-based floor/ceiling is what preserves WCAG 1.4.4's 200%-zoom requirement; pure-vw sizing without floor/ceiling breaks it. [LAW] — Smashing Magazine
18. Build one `clamp()` declaration **per modular-scale step**, not one clamp for the whole scale — each heading/body level needs its own min/preferred/max triplet. [LAW] — Smashing Magazine (methodology)
19. Manually test every clamp()-based scale at 200% browser zoom before shipping; automated Lighthouse/axe checks do not catch a vw-dominant clamp that silently caps effective zoom. [LAW] — Smashing Magazine

**Font pairing**

20. Cap the palette at **2–3 font families** per site (1 display/heading, 1 body, optional 1 accent/mono); beyond 3 reads as cluttered regardless of individual font quality. [LAW] — Typewolf
21. When a pairing isn't obvious, default to a **superfamily** (matched serif+sans from one type system — e.g. Adelle/Adelle Sans, Calluna/Calluna Sans, Questa/Questa Sans) to guarantee compatible x-height, proportions, and voice. [LAW] — Typewolf
22. Reserve a third font only when a genuinely distinct content type exists that neither the heading nor body font serves (code/data → monospace; a pull-quote/signature accent) — never add a third font for decoration alone. [LAW] — Typewolf
23. Assign each font a fixed, consistent role across the system (logo/nav vs. headline vs. body) and hold that assignment everywhere — don't swap fonts section-by-section. [LAW] — Typewolf lookbook methodology

**Tracking / letter-spacing**

24. Apply negative letter-spacing at large display sizes to counter optical looseness — roughly **-0.01em to -0.02em** on headlines ≥48px, expressed in `em` so it scales proportionally with font-size; keep tracking at 0 or slightly positive below ~24px. [TREND-2026, long-standing craft convention with no primary-source numeric standard — see Open Questions]
25. All-caps or small-caps text needs **+5–12% extra letterspacing** to stay legible; capitals set at normal spacing look cramped. [LAW] — Butterick
26. Restrict full-caps runs to **under one line of text** — multi-line all-caps paragraphs measurably slow reading. [LAW] — Butterick

**Variable fonts**

27. A single variable font file typically replaces 4–8 static weight/width/italic files, cutting font payload and HTTP requests — evaluate variable-font adoption on any page currently loading 3+ static weights of the same family. [LAW, directional — see Open Questions on precision] — 618Media
28. Variable-font axis support (`font-variation-settings`, `wght`/`wdth`/`slnt`) has shipped in all major evergreen browsers since roughly 2018–2020; safe to use as a progressive enhancement with a static-weight `@font-face` fallback for older contexts. [LAW]
29. Load only the weight/width **instances actually used in the design** via `font-variation-settings` value ranges — shipping the full axis range (e.g. 100–900 weight × full width axis) when only 2–3 instances appear on the page cancels out the file-size benefit variable fonts exist to provide. [LAW]

**Font loading (FOUT/FOIT)**

30. Default to **`font-display: swap`** — it shows the fallback font immediately and swaps in the webfont on arrival (FOUT), which is preferable to the invisible-text flash (FOIT) produced by `block`/unset `auto` on most browsers. [LAW] — font-converters.com
31. Use **`font-display: optional`** only once a metric-adjusted fallback (matched via `size-adjust`/`ascent-override`/`descent-override`) is tuned — it's the only setting that can hit a first-visit CLS of 0, but it silently skips the webfont if it doesn't arrive within roughly a 100ms budget. [LAW]
32. Preload only the **1–2 most critical font files** (above-the-fold headline weight + primary body weight) with `<link rel="preload" as="font" crossorigin>` — this alone is reported to save 200–800ms to first correctly-styled text; do not preload an entire family. [LAW] — font-converters.com
33. Pair `font-display: swap` with a metric-adjusted fallback font as the current best-practice combination — it minimizes both invisible-text time and layout shift simultaneously, rather than trading one for the other. [LAW]

**Typeface choice trends (2024–2026)**

34. Neo-grotesques (Söhne, Neue Haas Grotesk, Aktiv Grotesk, Suisse Int'l) have displaced geometric sans-serifs (Futura, Poppins, Circular) as the default premium/professional pick as of 2025–2026, driven by "geometric-sans fatigue." [TREND-2026] — MadeGoodDesigns, corroborated by Typewolf's live popularity ranking (Apercu, GT America, Founders Grotesk in its current top-4)
35. High-contrast editorial serifs (Editorial New, Canela, Ogg, Noe Display, Reckless, Fraunces) are in their strongest moment in decades on premium/fashion/hospitality sites — used at large display sizes for a sophistication signal; never set body paragraphs in one (see Anti-patterns). [TREND-2026] — MadeGoodDesigns
36. Custom/proprietary typefaces (GitHub Mona Sans, Vercel Geist, Slack Larsseit/Circular, Airbnb Cereal, Netflix Sans, Stripe's Söhne license) remain the top-tier premium signal for funded/category-leading brands — a licensed or custom face outranks an unmodified stock Google Font as a maturity cue on a premium sales page. [TREND-2026, secondary-sourced — see Open Questions] — FullStop360

## Trends 2024–2026

- **Neo-grotesque takeover of "premium default."** Söhne, Neue Haas Grotesk, Aktiv Grotesk, Suisse Int'l replacing Futura/Poppins/Circular-style geometric sans as the safe premium choice. **Shelf life: 2–4 years** — this is a typeface-generation swing that has historically cycled roughly every few years since geometric sans itself displaced humanist sans circa 2015–2018.
- **Editorial/high-contrast serif revival.** Editorial New, Canela, Ogg, Noe Display, Fraunces, Reckless used at large display sizes on fashion/hospitality/premium editorial sites. **Shelf life: 2–3 years** before rotating to the next serif movement — high-contrast display serifs are cyclical, not a permanent state change.
- **"Bouba" soft/rounded grotesks as a warmth counter-trend.** General Sans, Switzer, Cabinet Grotesk adopted by Stripe/Notion-style brands wanting approachable-but-credible tone against clinical neo-grotesks. **Shelf life: 2–3 years.**
- **Expressive variable serifs as display type.** Söhne Schmal, Reckless, Migra, Fraunces spanning hairline-to-ultrabold in one file, enabling extreme weight contrast without multiple static files. **Shelf life: durable as a technique** (variable-font tooling itself isn't a fad) even as the specific named faces rotate.
- **Luxury wide-tracking all-caps display.** Söhne Breit, Editorial New set with 0.05em–0.15em positive tracking, generous line-height, near-monochrome palette on fashion/hospitality sites. **Shelf life: durable** — this is a decades-old luxury convention re-skinned with current typefaces, not a fad.
- **Inter fatigue.** Inter remains the single most-deployed variable sans in SaaS/product UI, but by 2025–2026 it reads as the generic/default choice among funded and premium brands; skilled use is now either fully intentional (leaning into its neutrality) or a deliberate swap to Geist, Satoshi, Switzer, or a custom face. **Shelf life: the backlash is current and likely to keep intensifying through 2026–2027** as more brands differentiate away from it.
- **"Strategic imperfection" / anti-AI handwriting accents.** Restrained single-weight handwriting faces (Caveat, Reenie Beanie) used sparingly as human-authenticity signals against AI-generated design polish; part of a broader 2026 "typographic maximalism" framing (type as UI performer, not just text carrier). **Shelf life: least certain of all trends listed — weakly corroborated (2 secondary sources), watch before betting curriculum weight on it.**
- **Multilingual/CJK-aware sans as baseline expectation.** Noto Sans, IBM Plex, Source Han Sans normalized as the default rather than an afterthought for global premium brands. **Shelf life: durable/structural** — driven by genuine internationalization need, not aesthetic fashion.

## Anti-patterns

- **Low-contrast "ghost text" hero copy** (light-gray-on-white, thin weights) chosen for aesthetic minimalism on award-style sites — passes design-jury eyeballing but fails WCAG's 4.5:1 floor and real-world legibility on mobile/outdoor screens. Check with a contrast calculator, never by eye.
- **More than 3 typeface families on one page** — reads as unfocused regardless of how good each individual font is (Typewolf's ceiling).
- **Body copy set in a high-contrast display/Didone serif** (Editorial New, Didot) at paragraph sizes — hairline strokes optically vanish at small sizes and on lower-DPI/mobile screens. Reserve high-contrast serifs for ≥32px display use only; pair with a plain, robust body font.
- **Justified body text on the web without hyphenation** — browsers lack print-grade line-breaking, so justification creates uneven word-gaps ("rivers"); prefer left-aligned/ragged-right for web body copy.
- **FOIT left as the default** (`font-display: block` or unset `auto` on some browsers) on the critical rendering path — produces up to several seconds of fully invisible text on slow connections; always override with `swap` or a tuned `optional`.
- **Loading a webfont's entire variable-axis range** (full 100–900 weight × full width axis) when the design only ever uses 2–3 instances — this negates the payload savings variable fonts exist to deliver.
- **`vw`-only fluid type with no rem-based floor/ceiling** — breaks WCAG 1.4.4 because the text never stops scaling down/up in lockstep with viewport width regardless of the user's OS/browser zoom setting.
- **Oversized ultra-bold hero headlines at default (non-negative) letter-spacing** — looks loose and amateurish above ~60px, and is frequently the first element to overflow or wrap badly on mobile when it isn't wired into a fluid clamp.
- **Multi-line all-caps paragraphs** — fine for nav labels, eyebrow text, and badges; measurably slows reading once it runs past one line (Butterick).
- **Unmodified Inter at default weights with no type-scale customization on a premium/high-ticket sales page** — a strong 2024–2026 signal of "generic SaaS template" that undercuts the premium positioning the page is trying to sell. Not a universal rule (Inter-by-choice is legitimate), but Inter-by-default on a page charging premium prices is a red flag worth auditing.
- **Combining first-line paragraph indents *and* extra paragraph spacing** — redundant separators that visually fragment a text block instead of clarifying it (Butterick).
- **Shipping `font-display: swap` without a metric-adjusted fallback** — causes a visible, jarring layout shift the instant the webfont swaps in; "cinematic" font-loading intros on award sites often make this worse, not better, for a sales page where every second of instability costs trust.

## Open questions

- **Ratio-to-context mapping is craft convention, not a measured usability finding.** The claim that 1.2 suits dashboards while 1.333–1.618 suits marketing pages recurs across secondary sources (Imperavi and similar) but no primary controlled study surfaced in this pass proving one ratio out-converts another. Treat rule #1 as a strong design-craft default, not an evidence-backed optimum.
- **Line-length ranges diverge at the edges between sources.** Butterick allows 45–90 CPL; UXPin's sweet spot is 50–75 (66 optimal); WCAG's hard cap is 80. Safest operating range for a premium sales site: **50–75 CPL**, never exceeding 80 — but the sources don't agree on the lower bound (45 vs 50).
- **Brand-by-brand typeface attributions (FullStop360's "SaaS Typography Playbook") are single-source and secondary.** Stripe=Söhne, Vercel=Geist, GitHub=Mona Sans, etc. are plausible and match public knowledge for some (GitHub's Mona Sans and Vercel's Geist are self-published by those companies), but the full list wasn't cross-checked against each brand's own brand guidelines or live computed styles. Spot-check via view-source/computed-style before citing any specific brand's typeface in client-facing material — rebrands make these stale fast.
- **No primary A/B-test or conversion-rate data was found linking a specific typography change to a measured conversion lift.** Abmatic.ai and comparable CRO-typography articles are qualitative/directional ("hard-to-read text loses visitors") with no cited percentages or controlled tests. Any future "typography X% lifts conversion" claim in this curriculum needs a primary source before it's stated as fact.
- **Negative-tracking values for display type (-0.01em to -0.02em) and the variable-font file-size-savings claim are widely repeated across design blogs but not traced to a primary type-foundry, W3C, or benchmarking source in this pass.** Treat both as reasonable engineering/design defaults, not precise constants — validate file-size savings per actual font family before quoting a number to a client.
- **"Strategic imperfection" / anti-AI handwriting-accent trend is the weakest-corroborated 2026 item in this research** — appears in only two secondary sources (Fontfabric, MadeGoodDesigns) with no named site examples. Lowest confidence of everything listed under Trends; don't anchor curriculum guidance heavily on it without further corroboration.
