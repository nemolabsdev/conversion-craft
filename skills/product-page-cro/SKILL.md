---
name: product-page-cro
description: Product page anatomy and conversion - gallery, price, CTA, social proof, variants, structured data. Use when building or reviewing any product/landing page.
---

# Product Page CRO — PDP Anatomy & Structured Data

## When to use

- Building or reviewing a product detail page (PDP): above-fold layout, image gallery, price block, buy box.
- Deciding what belongs near the Add-to-Cart button: shipping/returns info, trust content, review count, order-cost estimate.
- Designing variant selectors (size/color/style) or out-of-stock states.
- Building or reviewing a sticky/persistent add-to-cart bar.
- Implementing or auditing `Product`, `Offer`, `AggregateRating`, `Review`, or `BreadcrumbList` structured data.
- Adding urgency, scarcity, or live-activity messaging to a PDP and needing to check it against dark-pattern risk.
- Building or reviewing a pricing page or tier-comparison table.
- Setting title tags, meta descriptions, canonicals on facet/variant URLs, or the og:image/twitter:card for any sales page.
- For headline/CTA wording, testimonial copy, and pricing-psychology tactics (charm pricing, anchoring, decoys), pair this with `copy-chief`. For cart/checkout flow and footer trust, pair with `checkout-trust`.

## Rules

**Above-fold PDP anatomy**

1. [FRAMEWORK] Render the primary product image, product name, price, and a visible Add-to-Cart/Buy CTA within the first viewport with zero scrolling, on both desktop and mobile — corroborated independently by two sources. — Baymard, Kissmetrics
2. [FRAMEWORK] Place at least one social-proof or legitimacy signal (rating badge, review count, or trust badge) within that same first screen, per the standard sales-page structure (hero → social proof → CTA). — Shapiro, Baymard

**Image gallery**

3. [FRAMEWORK] Stock a minimum of 5 product images/angles — pages with 5+ images convert roughly 60% higher than single-image pages, a figure corroborated independently by two sources. — Kissmetrics, Command C
4. [FRAMEWORK] Put gallery navigation (arrows, dots, swipe affordance) in an immediately visible spot, not below other content — 56% of users' first action on any PDP is browsing the image gallery before reading text. — Command C (citing Baymard)
5. [FRAMEWORK] Support pinch-to-zoom and double-tap-to-zoom on every product image on mobile — roughly 40% of ecommerce sites still fail to support this. — Command C
6. [FRAMEWORK] Test and fix landscape-orientation image scaling specifically — 52% of retailers fail to scale images proportionally in landscape, and half of users who find an image too small rotate their phone rather than pinch-zoom. — Command C
7. [FRAMEWORK] Build the mobile gallery as swipeable/gesture-driven, not a small hero image with a static thumbnail strip underneath — the thumbnail-strip pattern is a documented mobile failure mode. — Command C

**Price display**

8. [FRAMEWORK] Show the full price as plain, correctly-formatted text next to the product name/CTA — never behind a "Contact us" gate on a self-serve/off-the-shelf product (see `copy-chief` for the copy-level treatment of pricing psychology). — practitioner consensus
9. [FRAMEWORK] Show price-per-unit next to the total price for anything sold by weight, volume, or count — 81% of sites currently omit it. — Baymard 2026
10. [TREND-2026] When showing a reference/strikethrough price, render both the original and current price simultaneously, never behind a rollover or tooltip — a visible anchor is associated with roughly a 32% lift in perceived value. — SHNO.co

**Shipping & returns visibility**

11. [FRAMEWORK] Display shipping cost and delivery timeframe on the product page itself, near the buy button — not only in cart/checkout. Unexpected shipping cost is the single most-cited cause of cart abandonment across independent surveys (40-48% of abandoners; the range reflects differing denominators across sources, not a contradiction). — Baymard, Kissmetrics
12. [FRAMEWORK] Show an estimated order-cost line (shipping + tax, even as a range) near the Buy button — 67% of sites omit this near-CTA cost estimate. — Baymard 2026
13. [FRAMEWORK] Show free-shipping eligibility directly on the PDP when applicable — associated with a 7-12% lift in add-to-cart rate. — Kissmetrics
14. [FRAMEWORK] Make the return policy visible on the product page itself, not a footer link only — visible return policy is associated with 5-15% higher conversion, and 44% of sites still have deficient return-policy visibility as of the 2026 benchmark. — Kissmetrics, Baymard 2026
15. [FRAMEWORK] Place guarantee/returns/security-badge trust content physically adjacent to the CTA, not in the footer — 57% of researched sites already do this as a deliberate risk-reversal placement. — Crazy Egg

**Social proof placement**

16. [FRAMEWORK] Surface review count and average rating near the price/CTA cluster, not only on a separate reviews tab further down the page. — Crazy Egg
17. [FRAMEWORK] Treat visible reviews as a major conversion lever: two independent sources report a large lift from displaying reviews (roughly +270% for everyday goods, up to +380% for higher-consideration items). — Crazy Egg, Spiegel Research Center
18. [TREND-2026] Label verified purchases where the platform supports it — 67% of researched sites already do, directly addressing fake-review skepticism. — Crazy Egg
19. [FRAMEWORK] Don't stack redundant proof types back-to-back in the same scroll position (e.g., rating badge directly above three testimonials directly above a logo bar) — spread proof across the page: rating/count above the fold, fuller reviews/testimonials mid-page. — Shapiro, WiserNotify
20. [FRAMEWORK] Don't ship a suspiciously perfect 5.0-star rating with zero visible negative or mixed reviews — a few visible critical reviews reads as more credible than a flawless score. Treat this as a qualitative principle, not a specific numeric target; a commonly-repeated "4.2-4.7 beats 5.0" figure could not be confirmed against a primary source. — practitioner consensus, low-confidence numeric range

**Variant swatches & out-of-stock handling**

21. [FRAMEWORK] Give every interactive PDP control — variant swatches/buttons, gallery nav, the primary CTA, and the sticky Add-to-Cart button — a design floor of 44×44 CSS px (Apple HIG; Material 48dp) with ≥8px clearance to the nearest adjacent target. WCAG 2.2 AA's legal minimum is 24×24 CSS px (SC 2.5.8) — that's the compliance floor, not the ship target; a cramped control defeats its purpose on the exact device where it matters most. — WCAG 2.5.8, Apple HIG, Material Design
22. [FRAMEWORK] Use exposed button-style controls for size selection, never a `<select>` dropdown — a dropdown hides which sizes are in stock until opened, a documented cause of add-to-cart-then-realize-no-size-selected errors. 71% of benchmarked sites now use buttons, up from 63% in 2017. — Baymard
23. [FRAMEWORK] Never remove an out-of-stock variant from the selector — keep every size/color visible and mark unavailable ones with a distinct disabled state (grayed out and/or strikethrough). This is the single most consistently flagged variant-selector defect in the research. — Baymard
24. [FRAMEWORK] Don't default to "Notify me when back in stock" as the sole response to a temporarily out-of-stock variant — in usability testing it reads as tacit permission to abandon. Where fulfillment allows, let the shopper complete the purchase against an adjusted delivery estimate, surfaced via inline text or a tooltip near the Buy button. — Baymard
25. [FRAMEWORK] In mobile listing/grid views, expose all of an item's color swatches in a horizontally scrollable strip (crop the last visible swatch to signal there's more) rather than truncating to a subset plus "+N more" — 57% of sites currently fail this. — Baymard
26. [FRAMEWORK] Swap the product thumbnail/hero image to match the variant a shopper has selected or filtered for — 54% of sites still show a static default-color image regardless of the active selection. — Baymard

**Sticky add-to-cart**

27. [FRAMEWORK] Trigger the sticky add-to-cart bar's appearance off the scroll position of the primary in-content Add to Cart button leaving the viewport, not a fixed pixel offset. This is a scroll-driven reveal (allowed: content stays reachable without JS, the trigger tracks natural scroll position) — never scroll-hijack the page to force the bar into view. — aggregated CRO/implementation guidance
28. [FRAMEWORK] Default the sticky bar to the bottom of the viewport on mobile, inside the thumb-reach zone; on desktop, bottom is the more common placement so it doesn't compete with a fixed header. — aggregated CRO/implementation guidance
29. [FRAMEWORK] On products with more than one variant axis (size + color), embed a compact re-selector inside the sticky bar itself, or make the bar deep-link back to the primary selector — never let the sticky CTA add-to-cart a variant the shopper hasn't actually confirmed. — aggregated CRO/implementation guidance

**Schema.org Product markup**

30. [LAW] Mark up every PDP with `Product.name` plus at least one of `review`, `aggregateRating`, or `offers` — the hard floor for Product rich-result eligibility. — Google Search Central (product-snippet)
31. [LAW] For full Merchant Listing eligibility (image + price + availability shown directly in results), nest a single `Offer` — never `AggregateOffer` — inside the Product, with `price` > 0 and `priceCurrency` present. — Google Search Central (merchant-listing)
32. [LAW] Format `price` as a plain decimal string ("119.99") — never a currency symbol, thousands separator, or range — paired with `priceCurrency` in three-letter ISO 4217 form. Serve a distinct URL per currency if the product sells in more than one. — Google Search Central (product-snippet)
33. [LAW] Set `offers.priceValidUntil` (ISO 8601) on any time-limited price, and set `offers.availability` to exactly one `ItemAvailability` value (`InStock`, `OutOfStock`, `PreOrder`, `BackOrder`, etc.) — never blank, never combined. — Google Search Central (merchant-listing)
34. [LAW] `AggregateRating` requires `ratingValue` plus at least one of `ratingCount`/`reviewCount` and an `itemReviewed` reference — `ratingValue` alone is invalid. Never publish rating/review markup the reviewed entity itself controls or compiles (editorial "5-star" badges with no real user reviews behind them); Google explicitly excludes self-serving ratings. — Google Search Central (review-snippet)
35. [LAW] Model variants per Google's `ProductGroup` pattern: one `ProductGroup` with `variesBy` when a single URL swaps variants client-side; separate crawlable URLs linked via `isVariantOf`/`hasVariant` plus `inProductGroupWithID` when each variant has its own page. Either way, loading the URL directly must render the correct price/image/availability standalone, not only after a swatch click. — Google Search Central (product-variants)
36. [LAW] Build every `BreadcrumbList` with at least 2 `ListItem` entries carrying sequential `position` and `name`, with `item` (URL) on every entry except the current page; write labels to match the path a shopper would click, not a literal dump of URL folder segments. — Google Search Central (breadcrumb)
37. [LAW] Products in restricted categories — firearms, recreational drugs, tobacco, gambling — are ineligible for Product rich results regardless of markup completeness; don't spend engineering time debugging schema for these categories. — Google Search Central (product-snippet)

**Urgency ethics**

38. [TREND-2026] If using live-activity or recent-purchase notifications ("6 people viewing this," "Sarah in Austin bought this"), show only real events tied to an actual timestamped log — fabricated or looped activity feeds are a legitimacy risk, not a proof asset. — WiserNotify
39. [TREND-2026] Tie any low-stock message ("Only 3 left") to the actual live inventory count, not a static or randomized display value — a count that never changes carries rising regulatory exposure (FTC dark-pattern enforcement, EU digital fairness rules). — practitioner consensus, regulatory trend
40. [TREND-2026] Tie any countdown timer to a real, non-resetting expiration timestamp stored server-side — a timer that resets on page reload or new session is the most-flagged fake-urgency pattern in CRO literature. — practitioner consensus, regulatory trend
41. [FRAMEWORK] Prefer verifiable urgency (real low-stock counts pulled from inventory, a real sale end-date) over generic urgency copy with no underlying mechanism — an unverifiable urgency claim compounds the shopper's legitimacy objection instead of resolving it. — InstantPress (objection sequence)

**Pricing pages & tier comparison**

42. [FRAMEWORK] Default to 3–4 pricing tiers, not 2 or 5+ — 2 tiers gives the buyer nothing to compare against, and 5+ tiers creates comparison fatigue that stalls the decision. Treat any specific conversion-lift multiplier attached to this claim as unverified — multiple sources cite mutually inconsistent figures for the exact lift, none traced to a confirmable primary study. — SaaS pricing-strategy sources (multiple, mutually inconsistent on % lift, consistent on tier count)
43. [FRAMEWORK] Give exactly one tier — typically the middle or highest-margin one — a visually distinct treatment: a colored border/fill, a "Most Popular"/"Recommended" badge, and a CTA button with higher contrast than the surrounding columns, so it functions as the default comparison anchor rather than all tiers carrying equal visual weight. For the pricing-psychology mechanics behind why an anchor tier works (reference pricing, decoy-tier construction, replication caveats), see `copy-chief` Rules 26-27 — this rule covers the visual/layout treatment only, not the pricing-psychology reasoning. — SaaS pricing-page design consensus
44. [FRAMEWORK] Place a row-based feature comparison table below the tier cards, grouped by feature category, with the feature-name column pinned during horizontal scroll on narrow viewports — this lets a shopper scan one feature across every tier without losing their place, which a card-only layout (features buried inside each card) doesn't support. — SaaS pricing-page design consensus

**Page metadata & social artifacts**

45. [LAW] Target a 51–60 character title tag as the lowest-rewrite band — Google's own large-sample analysis (80,959 titles/2,370 sites) found this range rewritten only 39–42% of the time, versus 99.9% past 70 characters. Match the on-page H1 to the title tag string as closely as possible: the same study found this measurably reduces content loss on rewrite (e.g., a number present in both title and H1 survives 97.3% of the time, vs. 74.2% when only the title has it). Expect the majority of titles to be rewritten regardless of how well they're written — two independent studies put the baseline at 61.6% (2022/23) climbing to 76.04% (2025) — so treat title discipline as reducing rewrite risk, not eliminating it. — Zyppy; hireawriter.us (McAlpin 2025)
46. [FRAMEWORK] Write a unique 120–158 character meta description for every PDP, including every color/size variant — never template an identical description across variant URLs. Google rewrites meta descriptions even more often than titles (62–71% rewrite rate across three independently-run large-sample studies), but still uses the static tag roughly 30% of the time, and a unique per-variant description also gives Google better on-page source material to draw from when it does write its own snippet. The 120–158 character band is industry-consensus guidance, not a controlled-study result — unlike the title-length figure in Rule 45. — Portent; SearchEngineJournal; Ahrefs (via aggregator)
47. [FRAMEWORK] Put a self-referencing canonical on any facet/variant URL you deliberately want indexed on its own (e.g., a color page with real standalone search demand) — don't canonicalize it away by default. Canonicalize low-value facet combinations (a sort or minor filter layered onto a category) back to the parent/category URL. Use `noindex, follow` — not a canonical — for presentation-only parameters (sort order, items-per-page, view type): these aren't duplicates of the parent, they're just not worth indexing, and `noindex, follow` keeps internal link equity flowing while dropping the URL from the index. Reserve `robots.txt Disallow` for parameters with zero search value at any scale (session IDs, cart-action params) as a crawl-budget control only, never as a substitute for deindexing an already-indexed URL — a disallowed URL can persist in the index with a stripped, information-free snippet until it's actually noindexed or removed. Google Search Console's URL Parameters tool has been retired; manage facet/variant URL behavior entirely through canonical tags, `noindex`, robots rules, and clean URL design. — Search Engine Land (faceted navigation guide)
48. [FRAMEWORK] Ship a purpose-designed `og:image` (1200×630px, 1.91:1 ratio) for every sales/product page — never a raw page screenshot. Keep the primary text and subject inside the safe zone (roughly the center 80% of the frame), since different platforms crop the frame differently, and size any text large enough to stay legible at the small thumbnail size most platforms actually render it at (Facebook/LinkedIn/Slack link previews, Twitter/X cards). Set `twitter:card` to `summary_large_image` to get the large-image treatment instead of the small square fallback. This rule reflects standard cross-platform social-card practice, not a finding from this skill's underlying research pass — no primary study on og:image dimensions or thumbnail legibility was located there; treat the spec as current platform documentation rather than a lab-verified figure, and recheck it periodically since platforms revise crop/thumbnail behavior. — Open Graph protocol / Twitter Cards developer documentation (not sourced from the seo-variants.md research pass)

## Checklist

**Above-fold anatomy**
- [ ] Primary image, name, price, and CTA all visible with zero scroll, desktop and mobile (Rule 1)
- [ ] At least one social-proof/legitimacy signal appears in the first screen (Rule 2)

**Image gallery**
- [ ] 5+ product images/angles present (Rule 3)
- [ ] Gallery nav (arrows/dots/swipe) is immediately visible, not below other content (Rule 4)
- [ ] Pinch-to-zoom and double-tap-to-zoom work on every image, mobile (Rule 5)
- [ ] Images scale correctly in landscape orientation (Rule 6)
- [ ] Mobile gallery is swipeable/gesture-driven, not a static thumbnail strip (Rule 7)

**Price display**
- [ ] Price is plain, visible text next to name/CTA — no "Contact us" gate on self-serve items (Rule 8)
- [ ] Price-per-unit shown for weight/volume/count products (Rule 9)
- [ ] Reference/strikethrough price (if used) is simultaneously visible, not behind a rollover (Rule 10)

**Shipping & returns**
- [ ] Shipping cost/timeframe shown on the PDP near the buy button (Rule 11)
- [ ] Order-cost estimate (shipping + tax) shown near the CTA (Rule 12)
- [ ] Free-shipping eligibility shown on the PDP when applicable (Rule 13)
- [ ] Return policy is visible on the PDP itself, not footer-only (Rule 14)
- [ ] Guarantee/security trust content sits adjacent to the CTA (Rule 15)

**Social proof**
- [ ] Review count and average rating sit near the price/CTA cluster (Rule 16)
- [ ] Reviews section is visible on the PDP itself, not hidden behind an extra click or tab (Rule 17)
- [ ] Verified-purchase labels used where the platform supports them (Rule 18)
- [ ] No redundant proof types stacked back-to-back in the same scroll position (Rule 19)
- [ ] Rating isn't a suspiciously flawless 5.0 with zero critical reviews (Rule 20)

**Variants & out-of-stock**
- [ ] Variant swatches/buttons measure ≥44×44 CSS px with ≥8px clearance (24×24px legal floor) (Rule 21)
- [ ] Size selection uses exposed buttons, not a dropdown (Rule 22)
- [ ] Out-of-stock variants stay visible and disabled, never hidden (Rule 23)
- [ ] "Notify me" is not the sole CTA on an out-of-stock variant where purchase-with-delay is feasible (Rule 24)
- [ ] Mobile grid color swatches show as a full horizontally-scrollable strip, not "+N more" (Rule 25)
- [ ] Thumbnail/hero image updates to match the selected/filtered variant (Rule 26)

**Sticky add-to-cart**
- [ ] Sticky bar appears when the primary ATC button leaves the viewport, via scroll position not a fixed offset, and never hijacks scroll (Rule 27)
- [ ] Sticky bar sits at the bottom of the viewport on mobile, thumb-reach zone (Rule 28)
- [ ] Multi-axis variant products have a re-selector in (or reachable from) the sticky bar (Rule 29)
- [ ] Sticky ATC button meets the 44×44px / 8px clearance floor (Rule 21)

**Structured data**
- [ ] `Product.name` + one of `review`/`aggregateRating`/`offers` present (Rule 30)
- [ ] A single `Offer` (not `AggregateOffer`) with `price` and `priceCurrency` for merchant listing eligibility (Rule 31)
- [ ] `price` is a plain decimal with ISO 4217 `priceCurrency`; separate URL per currency if applicable (Rule 32)
- [ ] `priceValidUntil` set on time-limited prices; `availability` set to exactly one valid value (Rule 33)
- [ ] `AggregateRating` has `ratingValue` + `ratingCount`/`reviewCount` + `itemReviewed`; no self-serving ratings (Rule 34)
- [ ] Variant markup follows `ProductGroup`/`variesBy` or `isVariantOf`/`hasVariant` correctly, each URL self-renders its own state (Rule 35)
- [ ] `BreadcrumbList` has ≥2 sequential `ListItem`s with real URLs and user-path labels (Rule 36)
- [ ] Restricted-category products aren't budgeted engineering time for rich-result schema (Rule 37)

**Urgency ethics**
- [ ] Any live-activity notification maps to a real, timestamped event (Rule 38)
- [ ] Any low-stock message reflects the real, live inventory count (Rule 39)
- [ ] Any countdown timer has a real, server-stored, non-resetting expiration (Rule 40)
- [ ] Urgency messaging is tied to a verifiable mechanism, not generic scarcity copy (Rule 41)

**Pricing pages & tier comparison**
- [ ] Pricing page defaults to 3-4 tiers, not 2 or 5+ (Rule 42)
- [ ] Exactly one tier has a visually distinct anchor treatment (border/fill, badge, higher-contrast CTA) (Rule 43)
- [ ] Row-based feature comparison table sits below the cards, grouped by category, with feature column pinned on narrow viewports (Rule 44)

**Page metadata & social artifacts**
- [ ] Title tag targets 51-60 characters and matches the on-page H1 (Rule 45)
- [ ] Meta description is unique per PDP/variant, 120-158 characters (Rule 46)
- [ ] Facet/variant URLs carry the correct canonical, `noindex, follow`, or `robots.txt` treatment for their value (Rule 47)
- [ ] Every sales page ships a purpose-designed 1200x630 og:image (not a screenshot), with safe-zone text legible at thumbnail size, and `twitter:card` set to `summary_large_image` (Rule 48)

## Anti-patterns

- **Single hero image, or fewer than 5 angles.** Measured at roughly 60% lower conversion than a 5+-image gallery. Instead: ship at minimum 5 images/angles per product (Rule 3).
- **Static mobile thumbnail strip under a small hero image.** A documented mobile failure pattern that also compounds the ~40% zoom-support gap. Instead: swipeable, gesture-driven gallery with pinch/double-tap zoom (Rules 5, 7).
- **Hiding shipping cost until checkout.** The single most-cited cause of cart abandonment across independent surveys. Instead: show shipping cost/timeframe and an order-cost estimate on the PDP itself, near the CTA (Rules 11-12).
- **Return policy buried in the footer only.** Correlates with lower conversion and is flagged as deficient on 44% of sites in the 2026 benchmark. Instead: surface it on the PDP, adjacent to the CTA (Rule 14).
- **Dropdown-only size selection.** Hides which sizes are in stock until opened and is tied to add-to-cart-then-realize-wrong-size errors. Instead: exposed, always-visible size buttons (Rule 22).
- **Hiding out-of-stock variants from the selector entirely.** Confuses returning shoppers and understates the product's real range — the single most consistently flagged variant-selector defect. Instead: keep every option visible, gray out and/or strikethrough unavailable ones (Rule 23).
- **"Notify me when back in stock" as the only response to an out-of-stock variant.** Reads as tacit permission to abandon in usability testing. Instead: where fulfillment allows, let the shopper buy against an adjusted delivery estimate (Rule 24).
- **Truncated mobile color swatches ("+N more").** The majority pattern (57% of sites) and a documented source of frustration. Instead: a horizontally scrollable strip exposing every swatch (Rule 25).
- **`AggregateOffer` where full Merchant Listing eligibility is the goal.** Silently disqualifies the page from the richer result type even though it still satisfies baseline Product-snippet requirements. Instead: nest a single `Offer` with `price` and `priceCurrency` (Rule 31).
- **Self-serving or editorially-compiled star ratings.** An explicit Google ineligibility rule, not a soft guideline. Instead: source `AggregateRating` only from real user reviews.
- **A suspiciously perfect 5.0-star rating with no critical reviews.** Reads as less credible than a rating with some visible mixed feedback. Instead: display the real distribution, don't curate out negative reviews (Rule 20).
- **Fake urgency and fake scarcity** — countdown timers that reset on refresh, "only 3 left" that never changes. Carries rising regulatory exposure (FTC, EU digital fairness rules) and undermines the legitimacy objection instead of resolving it. Instead: tie every urgency element to a real, verifiable, server-stored value, or drop the tactic (Rules 39-41).
- **Award-circuit visual patterns (scroll-jacking, heavy hero animation, delayed content reveal) applied to a PDP.** Pushes price, image, and CTA below the fold and adds load time, directly contradicting the above-the-fold rules in this file. Instead: use scroll-driven reveals only within the bounds Rule 27 allows — never override scroll position or speed to force content into view.
- **A sticky add-to-cart bar that adds an unconfirmed variant to the cart.** On multi-axis products, tapping the sticky CTA without a re-selector risks cart errors on size/color the shopper never chose. Instead: embed a compact re-selector in the bar or deep-link back to the primary selector (Rule 29).
- **An identical meta description templated across every color/size variant of the same product.** Removes Google's ability to differentiate between variant URLs when selecting which one answers a query, and wastes the ~30% of cases where Google does use the static tag as written. Instead: write a unique 120-158 character description per variant (Rule 46).
- **Canonicalizing every faceted/filtered URL back to the parent category by default, including combinations with real standalone search demand.** Silently forfeits ranking potential for legitimately distinct pages. Instead: a case-by-case index/noindex/canonical decision (Rule 47).
- **Using `robots.txt Disallow` as a substitute for deindexing an already-indexed low-value URL.** Disallow only blocks crawling — a previously-indexed URL can keep appearing in results, often with a degraded, information-free snippet, until it's actually removed via `noindex`. Instead: pair Disallow with `noindex` for anything already indexed (Rule 47).
- **Shipping a raw page screenshot as the `og:image`.** Illegible at the small thumbnail size link previews actually render, and gives up control over safe-zone cropping across platforms. Instead: a purpose-designed 1200x630 image with legible text inside the safe zone (Rule 48).
