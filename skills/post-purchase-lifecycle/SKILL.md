---
name: post-purchase-lifecycle
description: "Post-purchase email and SMS lifecycle flows - order confirmation, shipping and delivery notifications, abandoned-cart recovery, browse abandonment, review requests, win-back/reactivation, and unsubscribe/frequency hygiene, plus the CAN-SPAM and GDPR/ePrivacy consent rules that gate every send in this lifecycle. Use when designing or auditing any post-checkout lifecycle email, building a cart-recovery or browse-abandonment sequence, setting review-request or win-back timing, writing a sunset/suppression flow, or checking a lifecycle send against US/EU consent law. Triggers - abandoned cart email, cart recovery flow, browse abandonment, order confirmation email, shipping notification, WISMO, review request timing, win-back campaign, sunset flow, unengaged suppression, CAN-SPAM, GDPR soft opt-in, post-purchase email."
---

# Post-Purchase & Cart-Abandonment Lifecycle

## When to use

- Designing or auditing the order-confirmation, shipping-confirmation, or delivery-notification email/SMS.
- Building or reviewing an abandoned-cart recovery sequence, its timing, or its discount ladder.
- Building or reviewing a browse-abandonment flow (product-view, no add-to-cart).
- Setting review-request trigger timing by product category.
- Designing a win-back/reactivation sequence for lapsed customers.
- Building a sunset/suppression flow for unengaged subscribers, or setting send-frequency policy.
- Checking any lifecycle send against CAN-SPAM or GDPR/ePrivacy consent rules.

**Boundaries (read bilaterally):**
- `checkout-trust` owns everything from "Add to Cart" through the on-page order-confirmation screen, including that screen's content order (its Rules 40-43: order summary first, account creation and cross-sell deferred to that screen, opt-in add-ons, no roach-motel cancellation). This skill owns everything from the confirmation *email* onward and every flow after — `checkout-trust` does not own recovery, review, or win-back sends, and this skill does not re-litigate the on-page confirmation.
- `brand-voice` owns tone — its voice card applies to lifecycle email exactly as it applies to on-page copy; pull it before drafting any subject line or body copy in this lifecycle. This skill owns *when* and *whether* a message fires, not how it sounds.
- `experimentation-measurement` owns testing these flows — sample size, guardrails, consent-gated event tracking. This skill owns the flow to be tested (trigger timing, sequence structure, consent gates), not the test methodology.

## Rules

**Order confirmation**

1. [FRAMEWORK] Send the order-confirmation message within seconds to low minutes of checkout completing — it is the highest-open-rate message in the lifecycle (reported 60-90%) because the buyer is actively checking for it. — shno.co (aggregating MagicBell/Salesforce), corroborated by Klaviyo post-purchase guide
2. [FRAMEWORK] Keep its job singular — order summary, itemized pricing, delivery window. It is a trust/reassurance surface, not a hard-sell surface; defer cross-sell to a separate, later send and never staple it onto the confirmation. — Klaviyo post-purchase guide

**Shipping & delivery**

3. [FRAMEWORK] Fire the shipping-confirmation the moment a tracking number generates, not on a batch schedule. Reported open rates (45-63%) vary by measurement methodology across sources — treat as directional, validate against your own list. — WebSearch synthesis of shipping-notification benchmarks
4. [FRAMEWORK] On any delay, send a proactive updated-ETA notice before the customer opens a support ticket. Vendor-reported behavior data, not independently verified, but low-risk to adopt regardless. — LateShipment.com vendor data
5. [FRAMEWORK] Treat rising WISMO ("where is my order") ticket volume as a signal to expand proactive status sends (Rules 3-4), not a signal to add support headcount — WISMO is reported as a large (30-50%) share of peak-period ticket volume. — LateShipment.com vendor data

**Abandoned-cart recovery**

6. [FRAMEWORK] Trigger the first recovery send within 30-60 minutes of abandonment; sending inside the first hour meaningfully outperforms a 24-hour-mark send, copy held constant. — WebSearch synthesis, directionally consistent with Klaviyo's 2-4hr window
7. [FRAMEWORK] Build a 3-email baseline sequence — plain reminder at 2-4hrs, follow-up (optionally incentivized) at ~24hrs, final message with product recommendations or a low-pressure nudge at ~48hrs. — Klaviyo abandoned-cart benchmark report
8. [FRAMEWORK] Never lead email #1 with a discount. A meaningful share of abandonment is distraction, payment friction, or price-checking, not price sensitivity — a plain reminder recovers those carts without giving away margin. — Klaviyo sequence guidance + margly.io margin analysis
9. [FRAMEWORK] Benchmark program health against Klaviyo's dataset — ~50.5% open / 6.25% click / 3.33% conversion / $3.65 RPR average; top-decile ~65.3% / 13.3% / 7.7% / $28.89 RPR. — Klaviyo abandoned-cart benchmark report
10. [FRAMEWORK] Scale RPR expectations to AOV rather than a flat target — Klaviyo data shows $7.01 RPR at $100-200 AOV vs. $14.14 at $200+ AOV (directional relationship; underlying study is Q4 2016, don't use as a current absolute figure). — Klaviyo ecommerce-benchmarks page
11. [FRAMEWORK] Cap discount-escalation depth against margin, not against "whatever converts" — at 30% gross margin, a 10% discount already consumes roughly a third of unit profit. Set the ceiling before the sequence ships. — margly.io margin-erosion analysis
12. [LAW] Never pair a recovery discount with fabricated urgency or scarcity (fake countdowns, invented "only 2 left") — squarely inside FTC dark-pattern enforcement. — FTC "Bringing Dark Patterns to Light" (Sept. 2022)

**Browse abandonment**

13. [FRAMEWORK] Trigger off a product-page view with no add-to-cart, but calibrate down — browse click-to-conversion runs ~1.5-3% vs. >3% for cart abandonment; it's an earlier, less-committed funnel position. — WebSearch synthesis
14. [FRAMEWORK] Default browse-abandonment copy to informational/helpful, not discount-led — browse-stage RPR sits well below both cart-abandonment and welcome-series RPR in Klaviyo's flow ranking, so it doesn't carry the same incentive budget. — Klaviyo ecommerce-benchmarks page (Q4 2016 methodology, directional ranking only)

**Review requests**

15. [FRAMEWORK] Trigger off the confirmed *delivery* date, not order date; set the lag by category — electronics ≈7-10 days post-delivery, skincare/beauty ≈14-21 days to allow time-to-result. — WebSearch synthesis (ravecapture.com); specific lift-percentage claims are unverified, treat timing logic only as sourced
16. [FRAMEWORK] Route review requests through a distinct flow from cross-sell/upsell — Klaviyo's own guidance sequences reviews as a separate post-delivery trigger from the upsell touch. — Klaviyo post-purchase guide

**Win-back / reactivation**

17. [FRAMEWORK] Set the trigger relative to each customer's own repurchase cadence, not a fixed calendar day — ~1.5x average repurchase interval for consumables, 90-120 days inactivity for durables/non-consumables. — Klaviyo win-back guide + WebSearch synthesis
18. [FRAMEWORK] Structure as a short escalating sequence (2-5 messages over 1-2 weeks), soft reminder toward a time-boxed final incentive — note this range is Klaviyo's stated best-practice consensus, not backed by published conversion data. — Klaviyo win-back guide (self-disclosed non-data-backed)
19. [FRAMEWORK] Do not cite a specific "Xx higher conversion" figure for early- vs. late-triggered win-back sends (e.g. a repeated "2.3x at 30-45 vs. 90+ days" claim) in client-facing material — untraceable to any primary study. — flagged unverifiable this research pass

**Unsubscribe & frequency hygiene**

20. [FRAMEWORK] Build a dedicated sunset flow capped at 3 emails for subscribers unengaged (no opens/clicks) over a window sized to your normal send cadence. — Klaviyo Help Center, "How to create a sunset flow"
21. [FRAMEWORK] Exclude and re-activate anyone who opens or clicks at any point during the sunset flow — only tag/suppress addresses silent through the *entire* flow. — Klaviyo Help Center
22. [FRAMEWORK] Suppress, don't merely stop targeting, addresses that finish the sunset flow with zero engagement — continuing to include them measurably damages sender reputation and inbox placement for the whole list. — Klaviyo Help Center

**Consent boundaries — CAN-SPAM (US)**

23. [LAW] Order confirmations, shipping updates, and other primarily-transactional messages are exempt from CAN-SPAM's opt-out mandate — but mixed-in commercial content that a reasonable recipient's subject-line read or content ordering would flag as commercial converts the whole message to commercial, triggering full opt-out/labeling rules. — FTC CAN-SPAM rule (16 CFR Part 316), via convergent secondary legal sources
24. [LAW] Honor every opt-out within 10 business days; never charge a fee, require login, or demand more than an email address. Every commercial email carries a working opt-out mechanism and the sender's valid physical postal address. — FTC CAN-SPAM rule
25. [LAW] Treat penalty exposure as per-recipient, not per-campaign — reported inflation-adjusted cap is $53,088 per violating email. Confirm against ftc.gov directly before citing in a legal-risk brief; not independently fetched this research pass. — convergent secondary legal sources, primary FTC page unconfirmed

**Consent boundaries — GDPR / ePrivacy (EU/UK)**

26. [LAW] Abandoned-cart emails don't require fresh opt-in under the ePrivacy "soft opt-in" (PECR Reg 22(3), Art. 13(2)) — but only when all four hold simultaneously (same enumeration as `checkout-trust` R38 — one statutory test, stated identically in both skills): address collected during a sale/sale-negotiation, marketing scoped to the abandoned item(s) or similar products, opt-out offered at collection, and opt-out offered again in every subsequent message. — PECR Reg 22(3) / ePrivacy Art. 13(2); checkout-trust R38
27. [LAW] If the address was sourced any other way (retargeting pixel, co-registration, unrelated past purchase), soft opt-in doesn't apply to that cart event — using it anyway without a separate lawful basis risks a PECR/GDPR violation. The ICO's 2021 £200,000 fine against We Buy Any Car Ltd is a live precedent for exactly this failure. — gdpr-advisor.com, citing the ICO enforcement action
28. [LAW] Keep abandoned-cart and browse-abandonment content strictly scoped to the abandoned/viewed items or genuinely similar products — broadening to unrelated promotions forfeits the soft-opt-in basis entirely, even if the other two conditions were met. — gdpr-advisor.com
29. [LAW] Where legitimate interest (Art. 6(1)(f)) substitutes for soft opt-in or consent, document a three-part Legitimate Interest Assessment (Purpose/Necessity/Balancing) before launch, and re-run it on any material targeting or content-scope change. — gdpr-advisor.com
30. [LAW] Define and enforce a documented retention period for abandoned-cart/browse behavioral data — indefinite retention violates GDPR's storage-limitation principle regardless of which lawful basis underlies the emails themselves. — gdpr-advisor.com
31. [LAW] Cite the *upper* GDPR fine tier — up to €20M or 4% global turnover — for consent and direct-marketing violations (Art. 5-7, 9); never the lower €10M/2% tier reserved for procedural breaches. — gdpr-info.eu, Art. 83

**Measurement hygiene**

32. [FRAMEWORK] Never treat open rate as a standalone success metric for any flow here — Apple Mail Privacy Protection auto-triggers opens for a large, non-uniform share of iOS/macOS traffic. Pair it with click rate and conversion/RPR before making a flow-level call; for the full testing procedure, hand off to `experimentation-measurement`. — WebSearch synthesis of 2025-2026 benchmark methodology notes

## Anti-patterns

- **Discount on touch #1** of a cart-recovery sequence — teaches price-insensitive abandoners that abandoning unlocks a discount, training future abandon-for-savings behavior on carts that would've converted at full price.
- **Fixed discount-escalation ladder regardless of engagement** — maximizes margin giveaway on recipients who never opened, and sets a floor expectation for next cycle too.
- **Fake urgency inside recovery emails** — non-expiring countdowns, invented "only 2 left" — the exact conduct the FTC's dark-patterns enforcement targets (Rule 12).
- **Mislabeling marketing content as transactional** to dodge CAN-SPAM's opt-out rule — fails the FTC's primary-purpose test the moment content order or subject line tips commercial (Rule 23).
- **Broadening soft-opt-in scope** — sending an abandoned-cart address general newsletter or unrelated-category content forfeits the legal basis for the whole relationship, not just that message (Rules 26, 28).
- **Sending marketing to addresses that finished a sunset flow with zero engagement** — damages sender reputation and inbox placement list-wide, not just for that segment (Rule 22).
- **Triggering review requests off order date instead of delivery date** — collects fewer, lower-quality reviews and burns the one "please review" touch a customer tolerates (Rule 15).
- **One-size-fits-all win-back timing** — the same 60-90-day window misreads "lapsed" for a weekly consumable versus a once-a-decade durable purchase (Rule 17).
- **Reporting open rate alone as flow health** — Apple MPP inflation can make a genuinely underperforming flow look healthy (Rule 32).

## Checklist

- [ ] CAN-SPAM exposure understood: penalties accrue per recipient (Rule 25)
- [ ] A documented three-part Legitimate Interest Assessment exists before launch and is re-run on any material change (Rule 29)
- [ ] GDPR fine tier for consent violations acknowledged in the launch review (Rule 31)

- [ ] Order confirmation sends within minutes, singular job, cross-sell deferred elsewhere (Rules 1-2)
- [ ] Shipping confirmation fires on tracking generation; delays get a proactive ETA update (Rules 3-4)
- [ ] Cart-recovery first touch at 30-60min, 3-email sequence, no discount in email #1, escalation capped against margin (Rules 6-8, 11)
- [ ] No fabricated urgency/scarcity anywhere in recovery copy (Rule 12)
- [ ] Browse-abandonment expectations and incentive budget calibrated below cart-abandonment (Rules 13-14)
- [ ] Review requests trigger off delivery date, category-tuned lag, separate flow from upsell (Rules 15-16)
- [ ] Win-back trigger tied to customer-specific repurchase cadence, not one fixed calendar day (Rule 17)
- [ ] Sunset flow capped at 3 emails; engaged responders excluded, silent ones suppressed not just paused (Rules 20-22)
- [ ] Transactional/commercial content boundary respected; opt-out honored within 10 business days (Rules 23-24)
- [ ] Soft-opt-in four-part test (checkout-trust R38 enumeration) applied and documented before any EU abandoned-cart send (Rules 26-28)
- [ ] Data retention period for cart/browse behavioral data is documented, not indefinite (Rule 30)
- [ ] Every flow-health readout pairs open rate with click and conversion/RPR (Rule 32)
- [ ] Voice card pulled from `brand-voice` before drafting; testing plan handed to `experimentation-measurement`
