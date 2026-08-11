---
name: checkout-trust
description: Cart, checkout, forms and trust surfaces - field design, guest checkout, wallets, cookie consent, footer, post-purchase. Use for anything between "add to cart" and the thank-you page, plus site-wide trust.
---

# Checkout, Forms & Trust Surfaces

## When to use

- Building or reviewing anything between "Add to Cart" and the order-confirmation page: cart, checkout, payment form, order review.
- Designing or auditing any form field, label, or validation pattern site-wide (checkout, lead-gen, account, login).
- Placing trust signals, security badges, or guarantee copy near a CTA or payment field.
- Writing or reviewing footer architecture, cookie-consent banners, or email-capture popups.
- Designing the thank-you/order-confirmation page or any post-purchase upsell/cancellation flow.

## Rules

**Checkout field design**

1. [FRAMEWORK] Cut the checkout form to only the fields required to fulfill the order; audit against the 23.48-field US average (confirmed independently by two sources) and remove or merge 20-60% — e.g. merge first/last name into one control, drop phone unless required for delivery. — Baymard, Shopify
2. [FRAMEWORK] Use a single-column layout for every checkout field — no side-by-side multi-column forms; single-column reduces field-skipping and misordered completion. — NN/g, Shopify
3. [FRAMEWORK] Default to top-aligned labels placed above the input, not left/right-aligned — top placement needs roughly half as many visual fixations and keeps scanning one-directional. — NN/g/Wroblewski, Baymard mobile-label study
4. [LAW] Never use placeholder text as the sole label. Render a persistent, visible label outside the input at all times, programmatically associated via `<label for>` — placeholder-only labeling fails WCAG 3.3.2/1.3.1 and is the most common forms accessibility defect measured (48.2% of top-1M pages have unlabeled inputs). — WCAG 3.3.2/1.3.1/4.1.2, NN/g
5. [FRAMEWORK] Mark BOTH required and optional fields explicitly (asterisk + legend for required, "(optional)" suffix) — marking only one type causes roughly a third of users (32%, tested) to skip at least one required field. — Baymard
6. [TREND-2026] Offer address autocomplete/type-ahead on every address field; treat this as baseline expectation, not a premium feature. — Shopify

**Validation & error messages**

7. [FRAMEWORK] Validate every field inline, triggered on blur (field exit) — never on first keystroke, never submit-only. Once an error is shown, clear it live as the user types a correction. Ship this on 100% of checkout fields — 31% of sites currently have no inline validation at all, and a further 4% implement it wrong (premature or non-clearing). — Baymard
8. [LAW] Link every error to its field with `aria-describedby` and set `aria-invalid="true"` on the offending input. — WCAG 4.1.2, WAI-ARIA APG (`aria-describedby`/`aria-errormessage` technique)
9. [LAW] Use `aria-live="polite"`/`role="status"` for routine field-level hints; reserve `role="alert"`/`aria-live="assertive"` for submit-blocking errors only — assertive regions interrupt the screen reader mid-sentence. — WCAG 4.1.3, WAI-ARIA APG
10. [LAW] On a failed submission, move keyboard focus to the first invalid field or a linked error summary at the top of the form — never leave focus on the submit button with errors unannounced below the fold. — WCAG 3.3.1
11. [FRAMEWORK] Write error copy that states what's wrong and how to fix it (e.g. "Enter a valid email like name@company.com"), never a bare "Invalid input." — UX/accessibility consensus
12. [LAW] Never use color alone to signal an error — pair the red state with an icon and text. Hold at least 4.5:1 contrast for label/body/error text, 3:1 for large text (≥18pt/14pt-bold) and input borders. — WCAG 1.4.1/1.4.3/1.4.11

**Guest checkout & flow**

13. [FRAMEWORK] Make guest checkout the default, single most prominent path on the checkout entry screen — forced or implied account creation is an independently corroborated abandonment driver (18% Baymard, 19% Shopify). — Baymard, Shopify
14. [FRAMEWORK] Show a step/progress indicator on any checkout that spans more than one screen. — NN/g, Shopify
15. [LAW] Never require re-entry of information already captured earlier in the same flow (e.g. retyping a confirmed email) — auto-populate it or offer it as a selectable option. — WCAG 3.3.7

**Payment: wallets, touch targets, security**

16. [TREND-2026] Expose digital wallets (Apple Pay, Google Pay, PayPal, Shop Pay) as distinct, one-tap buttons positioned ABOVE the manual card-entry form — wallets are 56% of global ecommerce spend, the majority payment behavior, not an edge case. — Shopify
17. [TREND-2026] Design mobile checkout for one-tap biometric wallet payment (Face ID/Touch ID) as the primary path, manual card entry as the fallback. — Shopify
18. [FRAMEWORK] Design every checkout touch target to a 44×44 CSS px floor (Apple HIG; Material 48dp) with ≥8px clearance between adjacent targets — this exceeds WCAG 2.2 AA's actual legal minimum of 24×24 CSS px (SC 2.5.8; that figure is the compliance floor, not the ship target). Match on-screen keyboard to field type (numeric pad for card/CVC/ZIP, email keyboard for email). — Apple HIG, Material Design; legal floor: WCAG 2.5.8
19. [FRAMEWORK] Place a security reassurance (seal, encryption note, "we never store your card") directly next to the payment fields — payment-trust concern is an independently corroborated abandonment cause (~19% Baymard, ~19% Shopify). — Baymard, Shopify

**Cost transparency & trust signals near the buy button**

20. [FRAMEWORK] Show the running total — including estimated shipping and tax — on the cart page, before checkout begins. Hidden/unexpected total cost is the single most-cited abandonment driver across two independent surveys (40-48% of non-browsing abandoners; range varies by denominator across sources). — Baymard, Kissmetrics
21. [FRAMEWORK] Place trust content (guarantee copy, return policy, security badges) physically adjacent to the CTA and payment fields, not only in the footer or a separate "why trust us" section. — Baymard; CXL (secondary, unverified)
22. [FRAMEWORK] Use no more than 1-2 trust/security icons in the payment area — a long badge row reads as compensating, not reassuring, past 3-4 distinct types. — Baymard (badge-density magnitude is lower-confidence, vendor-sourced)
23. [FRAMEWORK] Choose recognizable, high-familiarity seals over technically-equivalent but unfamiliar ones — the Norton seal ranked #1 for perceived trust across seven independent Baymard surveys (2013-2023), ~20x more trust-inducing than lesser-known vendors (Thawte, GeoTrust). An unfamiliar seal can read as more suspicious than none. — Baymard
24. [FRAMEWORK] Visually encapsulate the payment section (border, background shade, or card treatment) to set it apart from surrounding fields — roughly two-thirds of major sites still skip this. Keep this area free of any visual bug or rendering glitch; users attribute payment-adjacent glitches to compromise, not to ordinary bugs, and abandon even at well-known retailers over it. — Baymard

**Footer architecture**

25. [FRAMEWORK] Group footer links into distinct, separately-labeled sections (Customer Service, Company, My Account, Legal) rather than one undifferentiated list — poor grouping is traceable to 13% of large sites' footer-usability issues. Keep each link's category unambiguous; don't let one link straddle two headings. — Baymard
26. [FRAMEWORK] Always include a direct footer link to Return Policy and to Shipping Information specifically, not buried inside a general Help page — 20% of sites omit these, and both directly affect purchase-decision confidence. — Baymard
27. [FRAMEWORK] On mobile, collapse footer sections into accordions but keep the semantic headings visible and tappable at all times. — Baymard
28. [LAW] Hold footer links and fine print to a minimum 4.5:1 contrast ratio (3:1 if ≥18pt/14pt-bold) and a minimum 24×24 CSS px tap target on touch devices — this 24×24 figure is the WCAG legal floor for secondary/informational links, not a downgrade of Rule 18's 44×44px design floor, which governs primary checkout controls specifically. — WCAG 1.4.3, 2.5.8
29. [LAW] Place the CCPA "Do Not Sell or Share My Personal Information" link (and "Limit the Use of My Sensitive Personal Information" if applicable) persistently on the homepage — the footer is the de facto standard location. — CPRA

**Cookie consent**

30. [LAW] Give "Accept" and "Reject" equal visual weight (same size, saturation, banner layer) AND equal click-depth — no settings-drilldown required to reject when accept is one click. This is the single most-cited factor in 2024-2025 EU enforcement (CNIL fines: Google €325M, Shein €150M). — EDPB Cookie Banner Taskforce, CNIL
31. [LAW] Never pre-tick any consent checkbox, including "soft" categories like analytics or personalization — pre-ticked is treated as no consent at all under GDPR. — EDPB Cookie Banner Taskforce
32. [LAW] If the banner is a modal, build it on native `<dialog>` + `.showModal()` — never a hand-rolled `role="dialog"` div with manual JS focus-trap code. The browser makes background content `inert`, cycles Tab/Shift+Tab focus only within the dialog, and restores focus to the invoking control on close, automatically and correctly (see Rules 44-45 below). Make Escape, or an equally reachable control, close it. — WCAG 2.1.2; MDN `<dialog>`
33. [FRAMEWORK] Consent state gates what analytics may run — the event/consent interplay is owned by `experimentation-measurement` (its consent-gating rules); this skill owns the banner surface itself. Keep the banner to a bottom or corner bar rather than a full-viewport takeover wherever applicable regulation allows a non-blocking presentation — full-page interstitials combine two of the most-negatively-rated UI patterns tested (blocked content + forced choice). — NN/g most-hated-techniques research, applied by analogy

**Email capture & popups**

34. [FRAMEWORK] Delay any promotional/newsletter popup at least 10 seconds or until 30% scroll depth, whichever comes first — this floor also doubles as the safe-harbor pattern against Google's mobile intrusive-interstitial ranking demotion. — Google Search Central guidance
35. [TREND-2026] Within that floor, tune timing upward for effect: a 6-10s delay measurably outperforms sub-1-second display (2.4% vs 1.9% conversion, 1.24B-impression dataset), and a second-pageview trigger outperforms both (28.98% conversion). — Omnisend 2025
36. [LAW] Ship a visible, immediately-actionable, keyboard-reachable close control on every popup — a popup with no keyboard exit is a WCAG 2.1.2 no-keyboard-trap failure, and absence of a close button is one of the single most negatively-rated UI failures measured (93% negative). — WCAG 2.1.2, NN/g
37. [FRAMEWORK] Never stack an exit-intent popup on top of a timed/scroll popup already shown in the same session — suppress exit-intent entirely once another popup has fired; exit-intent converts at the lowest rate of common triggers. — Omnisend 2025
38. [LAW] Never pre-check a marketing-consent checkbox bundled with an unrelated required action (signup, checkout) — pre-ticked boxes for anything with cost/obligation attached are legally void under EU law. For existing customers, the "soft opt-in" (no fresh popup consent needed) applies only when all four hold: email collected during a sale, marketing is for similar products, opt-out was offered at collection, and every subsequent email offers opt-out again. — EU Consumer Rights Directive Art. 22, PECR Reg 22(3)
39. [FRAMEWORK] Prefer an embedded/inline signup form over a modal on pages with topic-specific intent (mid-article, resource pages); reserve modal popups for broad-traffic, low-intent pages. Single opt-in with an affirmative, unticked action is legally sufficient under GDPR — double opt-in is optional best practice, not a compliance floor. — comparative testing; GDPR Art. 7

**Thank-you / order confirmation page**

40. [FRAMEWORK] Keep the order summary (order number, itemized list with thumbnails, shipping address, delivery estimate, total charged) as the first thing visible on the confirmation page, above any cross-sell, survey, or account-creation content. — Baymard
41. [FRAMEWORK] Defer account creation to the confirmation page rather than forcing it pre-checkout, and use this page — not the checkout flow — for newsletter opt-in and cross-sell offers, where there's layout room and no in-progress-transaction friction. — Baymard
42. [LAW] Present every post-purchase add-on as an explicit, actively-selected offer — never pre-select a paid add-on or bundle it into the confirmed total. Let it complete via the already-stored payment method with zero card re-entry. — EU Consumer Rights Directive Art. 22 (regulatory for EU buyers; sound practice generally)
43. [LAW] Never build a subscription/recurring upsell around a "roach motel" pattern (easy one-click signup, deliberately hard cancellation) — cancellation must be at least as easy as signup under ROSCA, FTC Section 5, and state autorenewal statutes, independent of the 2025 vacatur of the federal click-to-cancel rule. — FTC Section 5, ROSCA, state UDAP laws

**Native dialogs, popovers & `:has()` (2026 baseline)**

44. [LAW] When a surface is modal at all — R33 prefers a non-blocking bottom/corner bar for consent wherever regulation allows, so a consent MODAL is the exception, not the default — implement it as native `<dialog>` opened via `.showModal()` with an accessible name (`aria-labelledby` to its visible heading, or `aria-label`), and style the scrim with `dialog[open]::backdrop { … }` directly rather than an absolutely positioned sibling `<div>`. `<dialog>` is Baseline **widely available since 2024-09-14** — safe as the default with zero fallback concern. — MDN `<dialog>`; web-features `dialog`
45. [LAW] Do not write manual JS focus-trap code for a `<dialog>` opened via `.showModal()` — the browser makes background content `inert`, cycles Tab focus only within the dialog, and restores focus to the invoking control on close. A hand-rolled `role="dialog"` div gets none of this for free and must independently rebuild all five behaviors (focus trap, click-outside dismissal, Escape handling, focus restoration, initial-focus placement). — CSS-Tricks (Scott O'Hara / W3C APA WG)
46. [TREND-2026] Build the cart drawer and any quick-view/product-preview overlay on the Popover API (`popover` attribute + `popovertarget`/`popovertargetaction`), not `<dialog>` — these surfaces must not make the rest of the page inert, since the shopper should still be able to scan products behind an open cart drawer. Reserve `<dialog>` for anything that must block background interaction. The Popover API is Baseline **newly available only** (since 2025-01-27, not yet widely available) — confirm the project's Safari floor is ≥18.3 before relying on it as the sole implementation. — web-features `popover`; web.dev/blog/popover-baseline
47. [LAW] Never style a popover's `::backdrop` (cart drawer, quick-view) to visually read as a modal scrim — popovers do not trap clicks the way `<dialog>` does, so a click can pass through the styled backdrop to whatever sits underneath it, a documented click-through vulnerability. If the design calls for a click-blocking backdrop, that is a `<dialog>`, not a popover. — remysharp.com (2026-05-08)
48. [TREND-2026] Legacy note: only fall back to a hand-rolled `role="dialog"` + manual JS focus-trap, or a hand-rolled non-modal panel, when the audience floor predates native support (pre-Chrome 37/Edge 79/Firefox 98/Safari 15.4 for `<dialog>`; pre-2025 evergreen browsers for Popover) — document the specific legacy constraint in the build notes rather than defaulting to it. — web-features `dialog`, `popover`
49. [FRAMEWORK] Pair `:has()` with `:user-invalid`/`:user-valid` on the field wrapper for inline-validation styling — e.g. `.field:has(input:user-invalid) { border-color: var(--error) }` — instead of a JS-toggled error class, so the error state renders only after the user has actually interacted with the field, never on initial load. Scope every such selector to the immediate field wrapper, never `body:has(...)` or `:root:has(...)` — `:has()` re-evaluates on every relevant DOM mutation, and a broad anchor forces a full-document recheck on every keystroke. `:has()` is Baseline **widely available since 2026-06-19**. — MDN `:has()`; MDN form-validation pseudo-class pattern

## Checklist

**Checkout field design**
- [ ] Field count is ≤18 (≥20% below the 23.48-field baseline), or the gap is documented as unavoidable (Rule 1)
- [ ] Checkout is single-column throughout (Rule 2)
- [ ] Labels are top-aligned by default (Rule 3)
- [ ] No field relies on placeholder text as its only label; labels are `<label for>`-associated (Rule 4)
- [ ] Both required AND optional fields are explicitly marked (Rule 5)
- [ ] Address autocomplete/type-ahead is implemented (Rule 6)

**Validation & errors**
- [ ] Every field validates on blur, not keystroke or submit-only, with live error-clearing (Rule 7)
- [ ] Errors use `aria-describedby` + `aria-invalid="true"` (Rule 8)
- [ ] Field hints use `aria-live="polite"`; blocking errors use `role="alert"` (Rule 9)
- [ ] Failed submit moves focus to first invalid field or an error summary (Rule 10)
- [ ] Error copy states what's wrong and how to fix it (Rule 11)
- [ ] Errors pair color with icon + text; contrast ≥4.5:1 body / 3:1 large text (Rule 12)

**Guest checkout & flow**
- [ ] Guest checkout is the default, most prominent option (Rule 13)
- [ ] Multi-screen checkout shows a progress indicator (Rule 14)
- [ ] No field asks the user to re-enter data captured earlier in the flow (Rule 15)

**Payment**
- [ ] Digital wallet buttons sit above the manual card-entry form (Rule 16)
- [ ] Mobile checkout leads with one-tap biometric wallet payment (Rule 17)
- [ ] All touch targets ≥44×44px with ≥8px clearance (24×24px legal floor); keyboard type matches field type (Rule 18)
- [ ] A security reassurance sits directly next to the payment fields (Rule 19)

**Cost & trust signals**
- [ ] Running total (incl. shipping/tax estimate) shows on the cart page (Rule 20)
- [ ] Trust content sits adjacent to the CTA/payment fields, not footer-only (Rule 21)
- [ ] No more than 1-2 trust icons in the payment area (Rule 22)
- [ ] Seals used are widely-recognized (e.g. Norton, McAfee, PayPal), not unfamiliar/homemade badges (Rule 23)
- [ ] Payment section is visually encapsulated and free of rendering glitches (Rule 24)

**Footer**
- [ ] Footer links are grouped into distinct, unambiguous, labeled sections (Rule 25)
- [ ] Direct links to Return Policy and Shipping Info exist (Rule 26)
- [ ] Mobile footer collapses to accordions with visible headings (Rule 27)
- [ ] Footer text/links meet contrast and 24×24px tap-target minimums — legal floor, distinct from Rule 18's 44px design floor (Rule 28)
- [ ] CCPA "Do Not Sell/Share" link is present on the homepage (Rule 29)

**Cookie consent**
- [ ] Accept/Reject have equal visual weight and equal click-depth (Rule 30)
- [ ] No consent checkbox is pre-ticked (Rule 31)
- [ ] Cookie modal is a native `<dialog>` (`.showModal()`), not a hand-rolled `role="dialog"` div, and closes on Escape (Rule 32)
- [ ] Banner is a bottom/corner bar, not a full-viewport takeover (Rule 33)

**Native dialogs, popovers & `:has()`**
- [ ] Any surface built as a MODAL (consent bar remains the preferred default, Rule 33) uses native `<dialog>`/`.showModal()` with `aria-labelledby`/`aria-label`, scrim via `::backdrop` (Rule 44)
- [ ] No manual JS focus-trap code exists for a native `<dialog>` (Rule 45)
- [ ] Cart drawer and quick-view use the Popover API, not `<dialog>` (Rule 46)
- [ ] No popover `::backdrop` is styled to look like a modal scrim (Rule 47)
- [ ] Any hand-rolled dialog/popover fallback documents the specific legacy-browser constraint (Rule 48)
- [ ] Inline-validation wrappers use `.field:has(input:user-invalid)`, scoped to the field, not an unscoped `:has()` (Rule 49)

**Email capture & popups**
- [ ] Promotional popups wait ≥10s or ≥30% scroll before firing (Rule 34)
- [ ] Delay/trigger is tuned toward 6-10s or second-pageview, not immediate (Rule 35)
- [ ] Every popup has a visible, keyboard-reachable close control (Rule 36)
- [ ] Exit-intent is suppressed if another popup already fired this session (Rule 37)
- [ ] No marketing-consent checkbox is pre-checked; soft opt-in 4-part test applied where used (Rule 38)
- [ ] High-intent pages use inline forms, not modals; opt-in is single, not forced double (Rule 39)

**Thank-you page**
- [ ] Order summary is the first thing visible, above cross-sell/survey/account content (Rule 40)
- [ ] Account creation and newsletter/cross-sell offers appear post-purchase, not pre-checkout (Rule 41)
- [ ] Post-purchase upsells are opt-in, never pre-selected, and reuse stored payment (Rule 42)
- [ ] Cancellation flow has no roach-motel friction (Rule 43)

## Anti-patterns

- **Hiding total cost (shipping, tax, fees) until the final checkout step.** The single largest documented cause of cart abandonment across independent surveys. Instead: show the estimated total on the cart page, before checkout starts.
- **Forcing account creation before purchase, or making it appear mandatory.** Independently cited as an abandonment driver (18-19%, two sources). Instead: default to guest checkout as the most prominent path; offer account creation on the confirmation page.
- **Placeholder text as the only label.** Fails WCAG 3.3.2/1.3.1, strains short-term memory, and vanishes the moment the user types. Instead: a persistent, `<label for>`-associated label outside the field; placeholders only as a supplementary format hint.
- **Validating on every keystroke, or only at submit.** Keystroke-level validation produces false-positive errors mid-type; submit-only delays feedback until the user has mentally moved on. Instead: validate on blur, clear errors live as the user corrects them.
- **Color-only error indication** (a red border with no icon or text). Fails for grayscale/color-blind viewing and WCAG 1.4.1. Instead: pair every error state with an icon and explicit copy.
- **Marking only optional fields and leaving required fields to be inferred.** Counterintuitively raises the required-field skip rate to 32%. Instead: mark both explicitly.
- **Unequal-prominence cookie banners** — a large, colored "Accept All" button paired with a plain-text or low-contrast "Reject." The single most-cited factor in 2024-2025 CNIL/EDPB enforcement actions. Instead: identical size, color weight, and click-depth for both choices.
- **Pre-ticked consent or add-on checkboxes** — marketing consent, analytics cookies, paid add-ons/insurance bundled into checkout defaults. Legally void for paid items under EU Consumer Rights Directive Art. 22, and no-consent under GDPR generally. Instead: every checkbox starts unchecked; every add-on is an explicit, actively-selected offer.
- **Immediate-on-load promotional popups with no close button.** Both independently rank among the most-negatively-rated UI patterns ever tested (93% negative each) and the no-close case is a WCAG 2.1.2 keyboard-trap failure. Instead: delay ≥10s/30% scroll, always ship a visible keyboard-reachable close control.
- **Trust-badge rows using unfamiliar or homemade-looking seals, or stacking more than 3-4 badge types.** An unfamiliar seal can read as more suspicious than no seal at all; a badge-dense checkout reads as compensating. Instead: 1-2 high-familiarity seals (e.g. Norton) placed at the payment fields.
- **Footer link lists with no semantic grouping, or grouping so loose a link's category is ambiguous.** The named cause of Baymard's 13% footer-usability-issue figure. Instead: distinct, separately-labeled sections (Customer Service, Company, My Account, Legal).
- **Order confirmation pages that bury or omit the core order summary** in favor of cross-sell, survey, or promo content. Instead: order summary first, always visible above any supplementary content.
- **"Roach motel" cancellation flows** — one-click subscribe paired with a multi-step, phone-required, or guilt-messaged cancel. The FTC's and multiple state regulators' named target pattern for negative-option enforcement. Instead: cancellation at least as easy as signup.
- **Award-circuit visual patterns (scroll-jacking, heavy hero animation, delayed content reveal) applied to cart/checkout flows.** Pushes price, CTA, and trust signals below the fold and adds load time — directly contradicts the above-the-fold and speed-sensitive rules in this file. Native scroll-driven reveals (content reachable without JS, respecting `prefers-reduced-motion`) are fine elsewhere on the site; never let a checkout or cart page override scroll position or speed.
- **Hand-rolling `role="dialog"` + custom JS focus-trap for a cookie-consent modal or confirm dialog when native `<dialog>` would do the job for free.** Every reimplementation has to independently get five behaviors right (focus trap, click-outside dismissal, Escape handling, focus restoration, initial-focus placement) that `.showModal()` provides automatically. Instead: native `<dialog>`, reserving a hand-rolled fallback for a documented pre-2022-browser floor.
- **Styling a cart-drawer or quick-view popover's `::backdrop` to look like a modal scrim.** A popover does not trap clicks — the visual implies modality the interaction doesn't deliver, producing a real click-through vulnerability onto whatever sits beneath the backdrop. Instead: use `<dialog>` if click-blocking is actually the intent.
