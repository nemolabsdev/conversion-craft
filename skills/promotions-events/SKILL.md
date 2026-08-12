---
name: promotions-events
description: "Promotion and sale-event architecture — banner hierarchy vs. the one-primary-CTA law, discount-code entry UX, bundle and gift-with-purchase merchandising, truthful urgency (countdowns, scarcity, EU Omnibus/FTC price-history rules), sale-event landing-page anatomy, and restoring the page after the event ends. Use when adding a sitewide promo banner or homepage takeover, building a discount-code or coupon field, designing a bundle or GWP offer, adding a countdown timer or low-stock/scarcity message, writing 'was/now' or strikethrough pricing, planning a BFCM or flash-sale page, or unwinding a sale after it closes. Triggers - promo banner, sale banner, discount code, coupon field, apply code, bundle pricing, gift with purchase, GWP, countdown timer, flash sale, was/now price, strikethrough price, price history, Omnibus Directive, reference price, BFCM, Black Friday page, post-sale pricing, sale teardown."
---

# Promotions & Sale-Event Architecture

## When to use

- Adding a sitewide promo banner, homepage takeover, or promo bar that must coexist with an existing primary CTA.
- Building or auditing a discount/gift-code field anywhere in the funnel.
- Designing a bundle, multi-buy, or gift-with-purchase (GWP) offer, or a free-shipping threshold.
- Adding a countdown timer, low-stock message, or any other temporary-urgency device.
- Writing a "was/now," strikethrough, or percentage-off price claim, in the US, California, or EU/EEA.
- Building a sale-event landing page (Black Friday, Cyber Monday, flash sale, seasonal clearance).
- Planning what happens to price, banner, and countdown state when a sale event ends.

**Boundaries (read bilaterally):**
- `product-page-cro` owns the PDP's steady-state anatomy — gallery, price block, buy box, structured data. This skill owns what changes on top of that anatomy *during* a promotion (banner, urgency, was-pricing) and how the PDP reverts to `product-page-cro`'s baseline afterward. Reference-price *display mechanics* (Rule 10 there — show both prices simultaneously, never behind a rollover) stay in `product-page-cro`; the *legal substantiation* of what that former price is allowed to be lives here.
- `checkout-trust` owns the cart/checkout flow and general field design (field count, guest checkout, inline validation). This skill owns the discount-code field's promotion-specific behavior — the collapse-by-default pattern, the Apply-button exception, and eligibility auto-apply — because that behavior is unique to codes, not a general checkout-field rule.
- `copy-chief` owns copy formulas (charm pricing, anchoring, decoy tiers) and the general fake-urgency anti-pattern. This skill owns the regulatory floor those formulas must clear — FTC dark-patterns guidance and EU Omnibus/CJEU price-history law — which is stricter and more specific than a general authenticity guideline.
- `experimentation-measurement` owns how to A/B-validate a discount depth or threshold value once chosen; this skill only supplies the starting bands to test.

## Rules

**Banner architecture vs. the one-primary-CTA law**

1. [FRAMEWORK] Treat a sitewide sale banner and the page's primary CTA as competing for one finite attention budget — target Unbounce's 1:1 Attention Ratio (one link, one conversion goal) per page; a second persistent promo message pulls the ratio away from 1:1 by definition. — Unbounce
2. [FRAMEWORK] Give the banner deliberately lower visual weight than the primary CTA — thinner bar, muted background, no button-style treatment — never louder. Eyetracking research finds traditional ad/banner zones capture as little as 0.8% of fixations regardless of relevance; out-loud-ing the CTA just teaches users to filter both. — NN/g
3. [FRAMEWORK] Never run the sale message as one slide in an auto-rotating carousel — 46% of ecommerce carousel implementations already ship with usability defects, and rotation compounds banner-blindness on top of that. If the sale is the priority message, give it the first/only static slot. — Baymard
4. [FRAMEWORK] Where a promo bar and hero CTA must coexist, resolve hierarchy with position and size, not color alone — keep the bar thin and clear of the CTA, and never let two elements hold "primary button" weight at the same scroll position. — Unbounce, NN/g
5. [FRAMEWORK] Don't duplicate action language between banner and CTA — the banner states the offer (what/how much/until when), the CTA states the action (shop/buy). Restating "Shop Now" in both is the "says everything, communicates nothing" failure this rule set exists to prevent. — Unbounce
6. [FRAMEWORK] Apply the same 1:1 discipline to a dedicated sale-event landing page itself, even with multiple underlying tiers or categories — one headline discount, one primary CTA above the fold; a page that headlines every sub-promotion at once reproduces the banner-vs-CTA failure at page scale. — Unbounce, NN/g

**Discount-code entry UX**

7. [FRAMEWORK] Collapse the code field behind a "Have a promo code?" link by default rather than an always-visible empty input — an exposed empty field primes users to feel they're overpaying and go hunting for a code, even shoppers who arrived with no such intent. — Baymard
8. [FRAMEWORK] Keep an explicit "Apply" button on the code field — Baymard's coupon-field research treats the code field as deliberately action-gated (an explicit Apply), unlike ordinary checkout fields. — Baymard
9. [FRAMEWORK] After a code applies, show explicit itemized confirmation — code name, discount amount, updated total — rather than relying on the shopper to notice the total changed; this is the one field where a silent state change is likely precisely because users expect an action step. — Baymard
10. [FRAMEWORK] Auto-apply any promotion the customer already qualifies for (email capture, cart value, first order) instead of requiring manual entry when eligibility is already known — removes the reason a code field needs to exist at all. — Baymard
11. [TREND-2026] Budget invalid/expired-code handling as a conversion-critical state, not a generic toast — nearly 3 in 10 online shoppers report a failed code frustrated them in the past year; surface why it failed and a recovery path (chat/support link). — Bizrate Insights/Digital Commerce 360

**Bundle and gift-with-purchase merchandising**

12. [FRAMEWORK] Set GWP or free-shipping thresholds roughly 15-30% above current AOV — a range that recurs across practitioner guidance as reachable-not-trivial, though it's converged folklore, not a controlled study; treat it as a starting hypothesis to validate per store with `experimentation-measurement`. — practitioner convention
13. [FRAMEWORK] Surface threshold progress before the cart — near add-to-cart on the PDP and in the mini-cart — as a concrete remaining amount ("Add $14.50 more for your free gift"), not a vague nudge, so it can influence the add-to-cart decision itself. — practitioner convention
14. [FRAMEWORK] Keep the GWP rule expressible in one sentence with no conditional branches — one threshold, one gift, one cart-wide rule. A multi-tier or category-restricted rule that needs a tooltip is a comprehension tax that erodes the "free" framing. — practitioner convention
15. [FRAMEWORK] Always display the sum of individual item prices next to the bundle price so the discount math is visible, not just asserted — an unstated bundle "discount" gives the customer nothing to anchor the savings claim against. — practitioner convention
16. [FRAMEWORK] Avoid pairing a cheap item with a substantially higher-price anchor item as the bundle's primary value driver — this risks dragging the anchor's perceived value down toward the cheap item's rather than lifting the bundle up (directional finding, magnitude unverified). — practitioner convention

**Truthful urgency — countdowns and scarcity**

17. [LAW] Never use a countdown that resets, restarts, or is otherwise disconnected from a real, enforced expiration — the FTC's 2022 dark-patterns report names "baseless countdown timers" as actionable under FTC Act Section 5. — FTC
18. [LAW] Don't display scarcity claims ("only 1 left," "10 people are looking at this") unless the number is a live, accurate read from real inventory/session data — fabricated or unsubstantiated scarcity sits in the same FTC dark-pattern category as fake countdowns. — FTC
19. [LAW] If a countdown ties to a real sale-event end date, make its expiration the actual enforced cutoff — when it hits zero, price must change or the offer must close; a cosmetic-after-expiry timer converts a truthful device into the exact pattern the FTC flags. — FTC
20. [LAW] Don't reveal mandatory fees only at checkout under sale-event pressure ("drip pricing") — a time-pressured sale UI is exactly where a shopper is least likely to notice or object to a late fee reveal, and the FTC separately names this deceptive. — FTC

**Sale-event discount depth**

21. [TREND-2026] Don't default to maximal discount depth as the primary lever — Klaviyo's BFCM 2025 data shows average sitewide discount depth falling 29.6% to 26.2% YoY while same-site sales still grew 11%, with repeat-purchase growth (+14%) outpacing new-buyer growth (+9%) — loyalty/personalization levers substituted for depth without a revenue cost that period. — Klaviyo
22. [TREND-2026] Calibrate discount depth to price tier, not one sitewide percentage — low-AOV brands peaked in the 20-29%-off band, mid/high-AOV brands peaked deeper at 30-39% off in the same data; a flat "20% off everything" banner is measurably off-target for at least one tier. — Klaviyo
23. [TREND-2026] Don't assume the headline event day must carry the deepest discount — set depth per day deliberately across a multi-day event instead of a flat rate. Klaviyo's data shows Small Business Saturday carrying the deepest average markdown (~28%) versus Thanksgiving (~24%) and Black Friday itself (~26%); a page named "Black Friday" doesn't have to be the deepest-discount day operationally. — Klaviyo

**Strikethrough/was-pricing — US and California**

24. [LAW] Only use a "was"/strikethrough price that reflects a bona fide former price the item was actually offered at "openly and actively... for a reasonably substantial period of time, in the recent, regular course of business" — an artificially inflated reference price is explicitly a "fictitious" former price under 16 CFR § 233.1. — FTC
25. [LAW] Don't advertise a nominal, trivial reduction as if it were a genuine bargain — the FTC's own example is "Reduced to $9.99" against a $10.00 former price: technically true, but read by a reasonable consumer as signaling a much greater reduction, which makes the claim itself misleading. — FTC
26. [LAW] In California, a former-price claim must reflect the prevailing market price within the 3 months (90 days) preceding the ad, or the ad must state the date the former price last applied — stricter and explicitly time-boxed versus the federal standard, and it governs "regularly," "originally," "was ___ now ___," and "___% off" phrasings by name. — Cal. Bus. & Prof. Code § 17501 / 4 CCR § 1301

**Strikethrough/was-pricing — EU Omnibus**

27. [LAW] In the EU/EEA, any advertised price reduction — a was/now pair, a percentage-off claim, or promotional language implying an advantageous price — must reference the lowest price charged for that item in the 30 days immediately preceding the reduction, not the day before the sale started and not a cherry-picked higher point in that window. Confirmed by the CJEU as applying to percentage-off and "advantageous price" claims generally, not only explicit strikethrough pairs. — EU Directive 98/6/EC Art. 6a; CJEU C-330/23 (Aldi Süd)
28. [LAW] Calculate and store the 30-day reference price per sales channel independently (online storefront, physical store, marketplace listing each get their own history) — a single global "lowest price" computed across channels is not compliant. — European Commission guidance on Art. 6a
29. [LAW] The 30-day reference-price obligation attaches at the point of sale — the product page showing an actual former/now price pair — not to blanket promotional messaging with no product-level price shown (a banner reading "This week only, 20% off everything" doesn't itself need a reference price if no specific pair appears there). — European Commission guidance on Art. 6a
30. [LAW] Exempt perishable goods and goods on the market under 30 days from the full lookback — check SKU eligibility for this carve-out before applying a blanket 30-day rule. — EU Directive 98/6/EC Art. 6a

**Post-sale price integrity and restoring the page**

31. [LAW] Run a recurring, scheduled audit of any live strikethrough/"was" program against the price-history log — not a one-time launch check, the way you'd audit a financial control — because "was" pricing is a standing legal-exposure surface, not a one-time creative decision: JCPenney ($50M), Kohl's (~$6.15M), and Overstock.com (~$7M to state regulators) each settled over inflated reference prices, in every case from systemic, sitewide use rather than an isolated mistake. — enforcement precedent
32. [LAW] Keep a durable, queryable price-history log per SKU per channel, not just current and immediately-prior price — both the US "regular course of business" standard and the EU 30-day rule require reconstructing and defending a specific historical price on demand. — FTC 16 CFR 233.1; EU Directive 98/6/EC Art. 6a
33. [LAW] When the sale ends, don't silently reprice above the "was" price that was advertised during it — reverting to that same advertised price is defensible; reverting higher invites the exact inference (inflated "was" price) that produced the JCPenney/Kohl's/Overstock settlements. — enforcement precedent
34. [FRAMEWORK] Tear down every promo-specific element in the same pass, not just the price — retire the countdown (per Rule 19, a live timer with no enforced cutoff is a dark pattern the moment the deadline passes), remove or revert the banner, and restore code-field visibility to its default collapsed state. A promo element that outlives its offer is no longer urgency, it's a lie left running. — synthesis of Rules 19 and 33 under the FTC framework
35. [FRAMEWORK] Once teardown is complete, hand the PDP back to `product-page-cro`'s at-rest anatomy verbatim (gallery, price block, buy box, structured data) — this skill governs the promotional delta on top of that page, not a permanent variant of it. — see `product-page-cro`
36. [FRAMEWORK] If offering a post-purchase price-adjustment window (refunding the difference if price drops shortly after purchase), state the window length and eligibility rule explicitly and enforce it consistently — an unstated or inconsistently honored policy converts a trust signal into a support-ticket liability. — industry practice survey

## Anti-patterns

- Sitewide promo banner styled or sized to compete with the primary CTA — reproduces the exact no-primary-message failure Rules 1-6 exist to prevent.
- Sale banner as one slide in an auto-rotating carousel alongside new-arrivals or seasonal banners — compounds banner-blindness on an already-defect-prone pattern (Rule 3).
- Always-visible, empty "Enter discount code" field on checkout by default — primes fee-neutral shoppers to feel overcharged (Rule 7).
- Code field with no Apply confirmation state, or an Apply button that looks identical to "Continue"/"Place Order" (Rules 8-9).
- Countdown that resets on reload, or keeps counting down after the nominal deadline with no real price/availability change — FTC-named, not a UX nitpick (Rules 17, 19).
- "X people are viewing this" / "Only 2 left" driven by a static or randomized value instead of live data (Rule 18).
- GWP or bundle offer whose qualification rule needs a tooltip or FAQ link to explain (Rule 14).
- Bundling a cheap, low-relevance item with a premium anchor purely for the bundle-discount aesthetic, with no visible per-item price breakdown (Rules 15-16).
- Strikethrough "was" price that was never the item's actual, sustained selling price, in a single global figure computed across EU sales channels rather than per-channel (Rules 24-28).
- Reverting a post-sale price higher than the "was" price shown during the sale (Rule 33).
- Leaving the countdown, banner, or expanded code field live after the sale has actually ended (Rule 34).

## Checklist

- [ ] Any live strikethrough program has a scheduled recurring audit against the price-history log (Rule 31)

**Banner vs. CTA**
- [ ] Banner and primary CTA hold a 1:1 attention ratio — one offer message, one action (Rules 1, 6)
- [ ] Banner is visually subordinate to the CTA — no competing button styling (Rule 2)
- [ ] Sale message is not one slide in an auto-rotating carousel (Rule 3)
- [ ] Banner copy states the offer; CTA copy states the action, with no duplication (Rule 5)

**Code entry**
- [ ] Code field is collapsed behind a link by default, not empty and always visible (Rule 7)
- [ ] Field keeps an explicit Apply button, distinct from the primary submit action (Rules 8-9)
- [ ] Known eligible promotions auto-apply without requiring manual entry (Rule 10)
- [ ] Invalid/expired code shows a specific reason and a recovery path (Rule 11)

**Bundles & GWP**
- [ ] Threshold set ~15-30% above AOV and flagged for A/B validation (Rule 12)
- [ ] Progress shown on PDP and mini-cart as a concrete remaining amount (Rule 13)
- [ ] Qualification rule is one sentence, no tiers or tooltips (Rule 14)
- [ ] Sum-of-items price shown next to bundle price (Rule 15)

**Urgency**
- [ ] Every countdown has a real, server-stored, non-resetting expiration that actually gates the offer (Rules 17, 19)
- [ ] Every scarcity/live-activity number reads from real inventory or session data (Rule 18)
- [ ] No mandatory fee revealed for the first time at checkout under sale pressure (Rule 20)

**Discount depth & pricing law**
- [ ] Discount depth calibrated to price tier, not one flat sitewide percentage (Rule 22)
- [ ] Every "was" price was actually charged, for a substantial period, and matches CA's 90-day rule where applicable (Rules 24-26)
- [ ] EU price claims reference the true 30-day-lowest price, computed per channel (Rules 27-28)
- [ ] Perishables/new-to-market SKUs checked against the 30-day exemption (Rule 30)

**Post-sale**
- [ ] Price-history log kept per SKU per channel (Rule 32)
- [ ] Post-sale price never reverts above the advertised "was" price (Rule 33)
- [ ] Countdown, banner, and code-field prominence all torn down together when the sale ends (Rule 34)
- [ ] Page handed back to `product-page-cro`'s at-rest anatomy after teardown (Rule 35)
