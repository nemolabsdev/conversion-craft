---
name: copy-chief
description: Copywriting for sales pages - headlines, product copy, CTAs, microcopy, objection handling. Use for any customer-facing words.
---

# Copy Chief — Sales Copywriting Rules

## When to use

- Writing or reviewing a hero headline, subheadline, or CTA button copy for a sales/landing page.
- Writing product page copy: feature blocks, benefit statements, pricing tables.
- Writing or auditing objection-handling copy: FAQ sections, guarantee/risk-reversal copy, comparison content.
- Writing or reviewing testimonials, review displays, ratings, and other social-proof copy.
- Writing microcopy: form labels, helper text, error messages, empty states, confirmation copy.
- Any pass where the deliverable is customer-facing words meant to move a visitor toward a lead, signup, or sale.

## Voice interface (contract with `brand-voice`)

The `brand-voice` skill defines HOW the brand sounds and hands this skill a **voice card** as a
fixed input. The precedence contract, declared identically in both skills: on the exact line of a
primary CTA, a form label, a displayed price, or an error message, THIS skill's clarity rules win,
full stop — no voice guardrail overrides them there. Everywhere else (headlines, body copy, empty
states, hero taglines) brand-voice governs register and style, and headlines must still clear this
skill's one-line clarity test. When drafting copy for a brand that has a voice card, load
`brand-voice` alongside this skill; when there is no voice card yet, flag that gap instead of
inventing a voice ad hoc. — brand-voice (Precedence section)

## Rules

**Headlines & awareness stage**

1. **[Awareness match]** Identify the primary traffic's awareness stage before writing the headline. Unaware/Problem-Aware → lead with the problem, no product name in line 1 ("Still tracking invoices in a spreadsheet?"). Solution-Aware → name the solution category + your edge. Product-Aware/Most-Aware → product name + differentiator + offer, all in line 1. [FRAMEWORK] — Schwartz
2. **[One-line test]** Every headline must pass: "if a visitor reads only this line, do they know exactly what's sold and to whom?" Reject any headline that could paste onto a competitor's page unchanged ("Improve your workflow" fails; "The invoicing tool freelancers use to get paid in 3 days, not 30" passes). [FRAMEWORK] — Shapiro
3. **[Headline is load-bearing]** Assume 80-90% of visitors read only the headline + CTA and never reach body copy (direction corroborated by 2 independent sources; exact % varies 80-90%). Write the headline to carry the complete value proposition, not curiosity bait. [TREND-2026] — Copyblogger/Neil Patel, SEO Sherpa
4. **[Subhead discipline]** Cap the subheadline at 1-2 sentences with exactly two jobs: state what the product is, and give one reason the headline's claim is credible. If it runs to a paragraph, cut it. [FRAMEWORK] — Shapiro
5. **[Claim specificity]** Replace superlatives ("best," "revolutionary," "seamless") with a checkable number, named comparison, or named mechanism. Test: could a competitor paste this claim onto their own page unchanged? If yes, rewrite it. [FRAMEWORK, moderate confidence] — marketingexamples.com
6. **[Mobile headline check]** Test hero copy at a 375px viewport: headline, subhead, and primary CTA must all render above the fold with zero scrolling (~83% of landing-page traffic is mobile). [TREND-2026] — SEO Sherpa

**FAB / BAB frameworks**

7. **[FAB ladder]** Write every feature block as Feature (factual spec) → Advantage (the comparative edge it creates) → Benefit (the reader's emotional/practical payoff). End on the Benefit line; never stop at Feature or Advantage. [FRAMEWORK] — Copy Brothers
8. **[BAB structure]** For transformation-style offers, structure the opening as Before (1 sentence, specific current pain) → After (1 sentence, achieved state) → Bridge (product positioned as the mechanism connecting them). [FRAMEWORK] — Copy Brothers
9. **[Feature block cap]** Cap the primary page at 3-6 feature blocks. Each block = one benefit-stated header (not a feature label) + one paragraph carrying feature → benefit → objection handled + one real product image or GIF (no stock art). [FRAMEWORK] — Shapiro

**CTA verb + deliverable rules**

10. **[Verb + deliverable]** Lead CTA copy with a specific action verb plus a stated deliverable ("Get my template," "Start my free trial") rather than a generic verb ("Submit," "Learn More," "Click Here"). One cited PPC test added this kind of relevance for a 68% lift. [TREND-2026] — Unbounce
11. **[Benefit-forward verb]** Prefer verbs that frame what the user receives over verbs that frame what they must do: "Get" beat "Order" by 38.26% in one B2B test. [TREND-2026] — Unbounce
12. **[Pronoun: A/B, don't assume]** Test first-person ("Start my trial") against second-person ("Start your trial") phrasing per audience rather than shipping a fixed rule — the widely cited "90% lift" figure is an unverified outlier, not an expected result. Micro-copy tests of this class are only valid above `experimentation-measurement`'s traffic floor (~1,000 sessions / 30 conversions per variant per month); below it, ship the second-person default and move on. [TREND-2026, low confidence] — experimentation-measurement R1-2
13. **[One offer, one CTA]** Ship exactly one primary offer and one primary CTA per page. Multi-offer/multi-link pages measurably underperform single-offer pages (magnitude is source-dependent; direction is reliable). [TREND-2026] — SEO Sherpa
14. **[CTA touch target]** Size every CTA button to a 44×44 CSS px floor (Apple HIG; Material 48dp) with ≥8px clearance from any adjacent tappable element. WCAG 2.2 AA's legal minimum is 24×24 CSS px — that's the compliance floor, not the target; ship 44. [LAW] — WCAG 2.2 SC 2.5.8, Apple HIG, Material Design

**Objection sequence**

15. **[Objection order]** Map and answer objections in this cognitive order before drafting page copy: (1) legitimacy — "is this real?", (2) relevance — "does this work for my situation?", (3) mechanism — "how does it work?", (4) results — "are the numbers real?", (5) peer validation — "what do others say?", (6) pricing/terms transparency, (7) risk — "what if I get burned?". A page answering only 2-3 of these converts only the warmest visitors. [FRAMEWORK] — InstantPress
16. **[Objection placement]** Place legitimacy + relevance signals (logos, named testimonials, "built for [persona]" language) within the first screen. Place mechanism/results detail mid-page. Place risk-reversal copy (guarantee, refund terms, trial terms) directly beside or below the final CTA — never buried only in an FAQ. [FRAMEWORK] — InstantPress, Shapiro
17. **[FAQ = objection tool]** Every FAQ entry must map to one specific unresolved objection from Rule 15. Delete generic filler entries ("What is your company?") that don't resolve a numbered objection. [FRAMEWORK] — InstantPress

**Social proof formats**

18. **[Above-fold proof]** Place at least one proof element (logo bar, single named testimonial, or aggregate rating) above the fold; place deeper proof (case studies, longer testimonials) mid-page. Never stack two redundant proof types back-to-back in the same scroll position. [FRAMEWORK] — Shapiro, WiserNotify
19. **[Attribution required]** Use named, attributed testimonials — real name + title/company, photo where possible — never anonymous quotes. One cited test: adding 3 attributed testimonials lifted purchases 34%. [TREND-2026] — WiserNotify
20. **[Specific numbers]** Use precise, non-rounded numbers in proof copy ("11,247 businesses," not "thousands of customers") — specificity reads as more credible. [TREND-2026, directional] — WiserNotify
21. **[Reviews are load-bearing]** Display third-party or on-site reviews wherever the platform allows it; two independent sources report a large conversion lift from visible reviews (roughly 270% for everyday goods, up to 380% for higher-consideration items). [TREND-2026] — Spiegel Research Center (via WiserNotify), Crazy Egg
22. **[Review metadata]** Surface review count and average rating near the price/CTA cluster; label verified purchases where the platform supports it. [TREND-2026] — Crazy Egg
23. **[Live-proof authenticity]** If using live-activity notifications ("Sarah in Austin just signed up"), show only real, recent events tied to an actual timestamped log. Fabricated or looped activity feeds are a legitimacy risk (Rule 15, objection #1), not a proof asset. [TREND-2026] — WiserNotify

**Pricing psychology (with caveats)**

24. **[Charm pricing default]** Use charm pricing (.99/.97 endings) as the default for price-sensitive, transactional/low-consideration offers; cited lift is roughly 24-35% vs. round pricing. [TREND-2026] — MIT/U Chicago 2003, Cornell (via SHNO)
25. **[Premium override]** For premium/luxury positioning, use round numbers instead of charm pricing — .99 endings signal value-hunting and can undercut premium positioning. [TREND-2026] — SHNO
26. **[Anchoring]** When showing tiers, always place a visible reference point next to the target tier: a higher list price with strikethrough, or a higher-priced tier alongside it. Cited anchoring effect on perceived value is roughly +32%. [TREND-2026] — SHNO
27. **[Decoy tier, replication caveat]** A decoy tier must be genuinely inferior, priced at or near the target tier's price. Ariely's classic test: a 68%/32% cheap-vs-bundle split with no decoy flipped to 84% choosing the bundle once a decoy was added — but the effect is reported to shrink with realistic (non-lab) stimuli. Validate with your own A/B test before relying on the lab magnitude — subject to `experimentation-measurement`'s traffic floor and sample-size procedure (its R1-5); below the floor, don't ship a decoy on faith in the lab number. [TREND-2026, replication caveat] — GrowMeOrganic, SHNO; experimentation-measurement R1-5
28. **[No price-gating self-serve]** Never hide price behind "Contact us" for a self-serve or low-consideration offer — it reopens the pricing-transparency objection (Rule 15, #6) instead of resolving it. Reserve "Contact us" pricing for genuinely custom/enterprise deals. [FRAMEWORK]

**Microcopy & error messages**

29. **[Validation timing]** Validate fields inline on blur (when the user leaves the field) — never on first keystroke, never submit-only. Once an error shows, clear it live as the user corrects it. [FRAMEWORK] — Baymard usability testing
30. **[Required-field labeling]** Mark required fields explicitly; don't rely on marking only optional ones. Leaving required fields unmarked produced a 32% skip rate in testing. [FRAMEWORK] — Baymard
31. **[Error copy content]** Error copy must state what's wrong and how to fix it in plain words, and must never cause layout reflow that hides other fields or the CTA. [FRAMEWORK] — Baymard, UX consensus
32. **[Reading level]** Write body copy and microcopy at a 5th-7th grade reading level; cited benchmark shows 11.1% conversion at that level vs. 5.3% for college-level copy on a comparable offer. Run copy through a readability checker before shipping. [TREND-2026] — SEO Sherpa
33. **[Field minimization]** Cut form fields to the minimum required for the immediate transaction — dropping from 11 fields to 4 is cited at a 120% conversion lift. Every extra field is a labor tax on the copy around it. [TREND-2026] — SEO Sherpa

## Checklist

- [ ] Headline matches the traffic's awareness stage (Rule 1) and passes the one-line test (Rule 2).
- [ ] Headline alone carries the full value proposition — not dependent on body copy being read (Rule 3).
- [ ] Subheadline is 1-2 sentences, states the product + why the headline is credible (Rule 4).
- [ ] Every superlative claim replaced with a number, named comparison, or mechanism (Rule 5).
- [ ] Hero (headline + subhead + primary CTA) verified visible with zero scroll at 375px (Rule 6).
- [ ] Every feature block follows Feature → Advantage → Benefit and ends on Benefit (Rule 7).
- [ ] Transformation offers use Before → After → Bridge in the opening (Rule 8).
- [ ] Page has 3-6 feature blocks, each with header + paragraph + real image/GIF (Rule 9).
- [ ] Every CTA uses verb + deliverable, not a generic verb (Rule 10).
- [ ] CTA verbs are benefit-forward ("Get") rather than cost-forward ("Order") by default (Rule 11).
- [ ] Pronoun choice (first/second person) is flagged for A/B test, not assumed (Rule 12).
- [ ] Page has exactly one primary offer and one primary CTA (Rule 13).
- [ ] CTA buttons measure ≥44×44 CSS px with ≥8px clearance (Rule 14).
- [ ] All 7 objections (legitimacy → risk) are addressed somewhere on the page (Rule 15).
- [ ] Legitimacy/relevance signals are in the first screen; risk-reversal sits beside the final CTA (Rule 16).
- [ ] Every FAQ entry maps to a named objection; filler Qs removed (Rule 17).
- [ ] At least one proof element is above the fold; proof types aren't stacked redundantly (Rule 18).
- [ ] Testimonials carry real name + title/company (+ photo), never anonymous (Rule 19).
- [ ] Proof numbers are precise/non-rounded, not vague ("thousands") (Rule 20).
- [ ] Reviews are displayed on-page wherever the platform allows it (Rule 21).
- [ ] Review count/rating sit near price/CTA; verified-purchase labels used if available (Rule 22).
- [ ] Any live-activity notification is tied to a real, timestamped event (Rule 23).
- [ ] Pricing model (charm vs. round) matches the offer's positioning (Rules 24-25).
- [ ] Tiered pricing shows a visible anchor next to the target tier (Rule 26).
- [ ] Any decoy tier is genuinely inferior and priced near the target tier, flagged for A/B validation (Rule 27).
- [ ] Price is visible for self-serve offers — no "Contact us" gate on low-consideration products (Rule 28).
- [ ] Form fields validate on blur with live error-clearing, not on keystroke or submit-only (Rule 29).
- [ ] Required fields are explicitly marked (Rule 30).
- [ ] Error copy states the problem + fix and never reflows the layout (Rule 31).
- [ ] Body copy and microcopy score at a 5th-7th grade reading level (Rule 32).
- [ ] Form field count is trimmed to the immediate transaction's minimum (Rule 33).

## Anti-patterns

- **Vague, category-less headlines** ("Reimagine the future of X") — fails Rule 2's one-line test; reads confident but tells the visitor nothing checkable. Do this instead: name the product category, the customer, and the value in line 1.
- **Generic, low-commitment CTA verbs** ("Submit," "Learn More," "Click Here") — fails Rule 10. Do this instead: pair a specific verb with a stated deliverable.
- **CTA or hero copy hidden behind scroll-triggered reveals or scroll-hijacked motion** — native scroll-driven reveals are fine (content reachable without JS, honors `prefers-reduced-motion`); scroll-hijacking that overrides scroll position or speed is forbidden on sales pages. Do this instead: keep the primary CTA reachable without hunting or waiting on an animation.
- **Fake urgency or fake scarcity** (countdown timers that reset on refresh, "only 3 left" that never changes) — contradicts Rule 23's authenticity requirement and reopens the legitimacy objection (Rule 15, #1) instead of resolving it. Do this instead: show only real, timestamped events, or drop the tactic entirely.
- **Testimonial carousels that auto-rotate before a visitor can finish reading** — undermines Rule 19's readable-proof standard. Do this instead: pause on hover/tap, or use a static grid.
- **Anonymous or unattributed testimonials** — fails Rule 19. Do this instead: always attach a real name + title/company, photo where possible.
- **Price hidden behind "Contact us" on a self-serve offer** — fails Rule 28 and reopens the pricing objection. Do this instead: show a starting price or a transparent range.
- **Walls of unstructured text with no subheads, bullets, or bolding** — fails Rules 3 and 32; skimmers (the majority of visitors) get nothing to latch onto. Do this instead: break every block into a benefit header + paragraph (Rule 9).
- **Validating on every keystroke, or only at final submit** — fails Rule 29; produces false-positive errors mid-typing or delays feedback until the user has already moved on. Do this instead: validate on blur, clear errors live.
- **Marking only optional fields and leaving required fields to be inferred** — fails Rule 30; measured at a 32% skip rate. Do this instead: mark required fields explicitly.
- **Error messages that reflow the layout or hide the field/CTA they refer to** — fails Rule 31. Do this instead: reserve inline space for error text so nothing shifts.
- **Stacking multiple redundant proof types in the same scroll position** (logo bar directly above 3 testimonials directly above a rating badge) — fails Rule 18's placement discipline. Do this instead: spread proof types across the page — above the fold, mid-page, beside the CTA.
