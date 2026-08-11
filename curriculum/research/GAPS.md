# Gaps found by completeness critic (Faza 1)

## Filled in round 2 (Faza 2 gap researchers)
- Navigation/IA + site search + PLP faceted filtering → `navigation-search.md`
- Forms outside checkout + unified accessibility checklist → `forms-accessibility.md`
- Footer trust surface, cookie consent, email capture, post-purchase → `trust-peripheral.md`
- SEO/structured data, product variants UX, pricing table layout → `seo-variants.md`

## Reconciliations (applied during skill distillation)
1. **Touch targets**: design floor = 44×44 CSS px (Apple HIG; Material uses 48dp) with ≥8px clearance. WCAG 2.2 AA legal minimum = 24×24 px. Skills state both; team ships 44.
2. **Scroll motion**: native scroll-driven reveals are ALLOWED (high-consideration storytelling; content reachable without JS; respects `prefers-reduced-motion`). Scroll-HIJACKING (overriding scroll position/speed) is FORBIDDEN on sales pages.
3. **Tag rigor**: `[LAW]` only for WCAG/regulatory or multi-source replicated findings. Practitioner frameworks (Dunford, Shapiro, Schwartz) = `[FRAMEWORK]`. Dated trends = `[TREND-2026]`.
4. **awards-visual-language.md** is snippet-verified only (WebFetch was unavailable in that session) — treat as lower confidence than the other files.

## Deferred (not blocking; candidates for a future research round)
- B2B sales-page patterns (demo-request, gated content, buying committees)
- Post-purchase email flows in depth
- A/B testing methodology (sample size, significance, peeking)
- Dedicated pricing-page deep dive beyond layout basics
