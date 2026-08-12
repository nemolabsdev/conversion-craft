---
name: b2b-landing
description: "B2B landing-page strategy - demo-request anatomy, form-length and gating economics, buying-committee content, compliance trust surfaces, and B2B pricing-page transparency. Use when building or reviewing a demo-request or talk-to-sales page, a lead-gen form, a gated asset (whitepaper, calculator, benchmark report), a security/trust page, or a B2B pricing page, or whenever the buyer is a multi-person committee rather than a single consumer. Triggers - demo request, book a demo, talk to sales, lead form, gated content, whitepaper gate, buying committee, champion enablement, SOC 2 badge, security page, B2B pricing, contact sales vs pricing, procurement, economic buyer, technical evaluator."
---

# B2B Landing — Demo Requests, Gating, Committees & Trust

## When to use

- Building or reviewing a demo-request / "talk to sales" landing page.
- Deciding form length and field set for any B2B lead-gen form.
- Deciding whether an asset (whitepaper, ROI calculator, benchmark report, demo) should be gated or left open.
- Designing content meant to be forwarded inside a buying committee (one-pagers, ROI calculators, comparison matrices), or content written for a specific committee role (economic buyer, champion, technical evaluator, procurement/security gatekeeper).
- Placing SOC 2/ISO badges, or building a standalone security/trust page.
- Building or auditing a B2B pricing page's transparency (published pricing vs. Contact Sales).
- Choosing B2B proof formats: named case studies, G2 widgets, segmented social proof.
- Mapping B2B traffic to intent stage and writing B2B-appropriate CTA language.

**Boundaries (read bilaterally):**
- `marketing-strategy` owns the Schwartz five-stage awareness model and general positioning (Dunford exercise, offer architecture, message hierarchy) — run that skill first. This skill's intent-stage mapping (Rule 31) and funnel-stage page split (Rule 32) **extend** `marketing-strategy` Rule 5-6 specifically for B2B's committee-driven, deliberative purchase path; they do not replace the base model.
- `product-page-cro` owns B2C product-detail-page anatomy — first-viewport Buy CTA (Rule 1 there), gallery, variants, single-buyer purchase flow, `Product` schema. This skill owns B2B's structurally different anatomy — demo request replaces Buy Now (Rules 1-6 here) — and B2B pricing-page *transparency*, i.e. what gets disclosed (Rules 24-26 here), which is distinct from that skill's tier-card layout, anchor-tier treatment, and comparison-table rules, i.e. how it's laid out (Rules 42-44 there). A B2B pricing page draws on both skills at once; neither substitutes for the other.
- `checkout-trust` owns form field *mechanics* site-wide — labels (Rules 3-4 there), inline validation and `aria-*` wiring (Rules 7-12 there), touch-target sizing (Rule 18 there) — for every form including B2B ones. This skill owns B2B form *strategy*, decided upstream (Rules 7-10 here): how many fields, which fields, and when to gate the asset behind the form at all (Rules 11-13 here). Decide the field list here, then hand it to `checkout-trust` for labeling, validation, and sizing — neither skill should silently absorb the other's half.

## Rules

**Demo-request anatomy & conversion benchmarks**

1. [TREND-2026] Set conversion targets per vertical, never against one blended "B2B average" — Unbounce's own data shows SaaS landing pages at a 3.8% median and commercial/professional-services at 6.2%, a 60%+ spread inside "B2B." — Unbounce
2. [TREND-2026] Treat 3.8-6.6% as the realistic planning band for a B2B landing page; treat any vendor report citing a single-digit-precision "B2B average" with no stated vertical as a red flag. — Unbounce (6.6% all-industry median, 3.8-12.3% by vertical)
3. [TREND-2026] Write demo-request copy at a 5th-7th grade reading level — pages at this level converted at 11.1% in Unbounce's 41,000-page sample, 56% higher than 8th-9th grade copy. This applies to B2B despite the instinct to sound "enterprise." — Unbounce
4. [TREND-2026] Budget real mobile QA time even for a desktop-skewing B2B persona — mobile converted ~8% worse than desktop despite driving 83% of visits in Unbounce's dataset. — Unbounce
5. [TREND-2026] Treat First Page Sage's cited demo-conversion benchmarks (1.5-4% baseline, 8-15% top-decile) as directional only, and anchor real targets to your own vertical's Unbounce-class data instead (Rules 1-2). — First Page Sage (unverified this research pass; no independent replication located)
6. [TREND-2026] Track demo-to-qualified and qualified-to-meeting as two separate funnel metrics, not one blended "demo conversion rate" — RevenueHero's proprietary bands (60-70% demo-to-qualified is healthy, 90%+ is elite; 50-60% qualified-to-meeting is typical) work as a funnel-health check even though the underlying methodology isn't fully published. — RevenueHero

**Form-length & qualification strategy**

7. [LAW] Treat every additional form field as an explicit, named tradeoff between lead volume and lead qualification — decide and document it per page rather than defaulting to "more fields = more qualified." — HubSpot (40,000+ landing pages)
8. [LAW] Prioritize removing specific field *types* over blindly cutting field count — age, phone number, and geographic detail (especially street-level address) carry outsized conversion cost relative to other fields in HubSpot's tested set. — HubSpot
9. [FRAMEWORK] Match form depth to traffic intent, not sales-ops wishlist: a first-touch/TOFU form asks for name + work email only; a bottom-funnel demo request can justify more fields since the visitor already signaled high intent by reaching that page. — cross-source (Unbounce, TrustRadius, HubSpot)
10. [FRAMEWORK] Never cite a specific "conversion drops X% per added field" curve as sourced fact in customer-facing material; see this skill's Anti-patterns for the exact figure to avoid repeating. — HubSpot (the widely-misattributed figure does not appear in HubSpot's actual published post; checked directly against the source, not a secondary citation)

**Gated vs. ungated content economics**

11. [FRAMEWORK] Reserve full gating for genuinely bottom-funnel, high-perceived-value assets — ROI calculators, proprietary benchmark data, live demo access — whose value to the visitor clearly exceeds the cost of a form fill. — cross-source industry consensus
12. [FRAMEWORK] Leave top-of-funnel educational content ungated to preserve organic search reach and inbound linkability; gating only pays off when the asset's perceived value justifies the friction. — cross-source consensus
13. [TREND-2026] Treat gated content as structurally invisible to AI answer engines — content behind a form can't be crawled, and uncrawlable content can't be cited — and factor this into every gate/ungate decision independent of any specific percentage-lift claim. — the crawl mechanism is verifiable directly (crawlers cannot submit forms); the commonly-cited "64% less likely to be cited" figure specifically is unverified this pass, so don't repeat that number as fact

**Multi-stakeholder buying-committee content**

14. [TREND-2026] Design B2B content for a committee of roughly 6-13+ people, not a single buyer persona — Forrester's directly-verified 2026 figure is 13 internal stakeholders plus 9 external influencers per typical purchase decision, rising further for complex/strategic deals. — Forrester
15. [LAW] Don't anchor deliverables to one fixed committee-size number across all deal sizes — Gartner's practitioner poll shows self-reported committee size ranging roughly 5-16 across up to 4 functions, scaling with deal complexity and company size. — Gartner
16. [FRAMEWORK] Build at least one internally-shareable, no-further-login artifact per deal (a one-pager, ROI calculator, or comparison matrix) that a champion can forward in an internal Slack/email thread without asking a colleague to fill out another form. — champion-enablement literature
17. [FRAMEWORK] Ship content addressed to the recurring buying-committee roles — economic buyer, champion/internal advocate, technical evaluator, end-user, procurement/security gatekeeper — rather than one undifferentiated "why buy us" page. — cross-source consensus
18. [TREND-2026] Expect internal committee conflict as a design input, not an edge case — 74% of B2B buying teams reportedly demonstrate "unhealthy conflict" during the decision process; champion-enablement assets exist specifically to help one advocate pre-align the group. — Gartner (confidence note: confirmed via convergent search excerpts, not a direct fetch of the primary press release)
19. [LAW] Treat larger, more diverse buying groups as a net positive to design for, not just a friction source — 94% of buyers in groups of six-plus report clearer decision-quality advantages (broader perspectives, shared validation effort, easier budget approval). — Forrester

**Security/compliance trust surfaces**

20. [FRAMEWORK] Never park the SOC 2/ISO badge in the footer only — place at least one instance near an active decision point (primary CTA, pricing section, or a dedicated security/trust section between features and pricing) where a security-sensitive buyer actually forms a trust judgment. — Vanta/AICPA guidance
21. [FRAMEWORK] Maintain a standalone trust/security page, not just an inline badge, that lets a security reviewer self-serve the compliance answer without contacting sales — consistent with the broader B2B self-serve preference (Rule 24). — Vanta guidance; TrustRadius
22. [TREND-2026] Follow AICPA's mark-usage rules exactly when displaying a SOC 2 badge: keep it visually intact and correctly proportioned, and hyperlink it to the AICPA verification page — an altered or unlinked badge is a compliance and credibility risk, not an aesthetic choice. — AICPA/Vanta
23. [FRAMEWORK] Treat security/compliance trust surfaces as most load-bearing for mid-market-and-up B2B SaaS and near-irrelevant for low-commitment B2C purchases — the procurement/security gatekeeper (Rule 17) has no B2C equivalent. — synthesized from Forrester/Gartner committee-role data

**B2B pricing-page transparency**

24. [TREND-2026] Publish real pricing (or a clear starting-price anchor) for at least entry/self-serve tiers, and reserve "Contact Sales" for genuinely custom/enterprise tiers — 81% of B2B buyers say they want to find pricing information on their own. — TrustRadius (n=2,185)
25. [FRAMEWORK] Treat a sitewide "Contact Sales, no visible pricing" pattern as a deliberate trade of self-serve conversion for gated lead volume — make that trade explicitly, per tier, rather than defaulting to it site-wide out of habit or competitive mimicry. — synthesized from TrustRadius self-serve data
26. [TREND-2026] Design the pricing page as one of the primary places a B2B buyer self-serves their evaluation, not merely a final-step formality — ~100% of buyers want to self-serve all or part of the journey. — TrustRadius. (For tier-card layout, anchor-tier treatment, and the comparison-table pattern itself, see `product-page-cro` Rules 42-44 — this rule governs *what* to disclose, not the card layout.)

**B2B proof formats**

27. [FRAMEWORK] Lead demo-request and pricing pages with named case studies carrying quantified outcomes, not generic testimonials — a B2B buyer needs a shareable number to justify the purchase to the rest of their buying committee. — cross-source consensus
28. [TREND-2026] When traffic and tooling allow, segment social proof (which logos/case studies show) by the visitor's inferred vertical or company size rather than one static logo wall — DocSend's segmented approach (startup logos to startup visitors, VC logos to VC visitors) is reported at a 260% lift, though this is a single-company case study, not a replicated benchmark. — Mutiny/DocSend
29. [FRAMEWORK] Use G2's officially-supported embeddable widgets (Grid, Star Rating, Testimonials, Review Snapshot, Review Spotlight) rather than manually screenshotting reviews — they carry structured data that can also surface star ratings directly in search results. — G2 documentation
30. [FRAMEWORK] Reserve G2's Review Snapshot widget (curated set of up to 5 reviews) specifically for account-based-marketing pages built for named target accounts, per G2's own stated use case — not a general-purpose homepage element. — G2 documentation

**Intent-stage & CTA language (extends `marketing-strategy`)**

31. [FRAMEWORK] Extends `marketing-strategy` Rule 5-6's Schwartz awareness stages for B2B: write primary CTAs as conversation-starters ("Book a demo," "Talk to sales," "Request access"), not purchase-closers ("Buy now") — B2B intent is deliberative and runs through a multi-person committee, unlike a single-decision-maker B2C impulse purchase. — cross-source consensus
32. [FRAMEWORK] Build distinct pages per funnel stage (awareness/thought-leadership, mid-funnel education, bottom-funnel demo/signup) for B2B traffic rather than one generic page serving everyone — follows directly from the gate/ungate framework (Rules 11-13) and the committee's multi-touch, research-heavy journey. — cross-source consensus
33. [FRAMEWORK] Lead B2B social proof with business-outcome case studies and named enterprise logos; B2C social proof leads with volume signals (review counts, star ratings, UGC) instead — a B2B buyer must justify the purchase to colleagues, while a B2C buyer typically justifies it only to themselves. — cross-source consensus

## Anti-patterns

- **Adding form fields as a free way to improve lead quality.** Every field is a named volume/qualification tradeoff (Rule 7); age, phone, and geography fields carry disproportionate cost (Rule 8). Add fields only when you can name what you're trading away.
- **Citing a precise per-field conversion-decay curve ("-4.1% per field") as sourced fact.** Widely repeated across secondary sources and attributed to "a 2024 HubSpot study," but it does not appear in HubSpot's actual published post (Rule 10). Repeating it propagates a likely-fabricated statistic.
- **Fully gating top-of-funnel educational content by default.** Trades away organic reach and AI-answer-engine citability for a lead-capture benefit that TOFU content hasn't yet earned (Rules 11-13).
- **Parking the SOC 2/ISO badge in the footer only and calling the trust surface done.** Wastes it at the exact point a security-sensitive buyer is forming a judgment (Rule 20).
- **Defaulting sitewide to "Contact Sales" with no visible pricing anywhere.** Ignores that 81% of B2B buyers want to find pricing on their own; make the opacity trade explicit per tier (Rules 24-25).
- **Building one generic landing page for every funnel stage.** B2B's longer, multi-stakeholder, research-heavy journey needs stage-specific pages (Rule 32); one page under-serves both the cold and the demo-ready visitor.
- **Shipping one undifferentiated logo wall to every visitor when segmentation is technically available.** Leaves conversion on the table relative to segmented proof (Rule 28) — though validate the exact lift on your own traffic before treating DocSend's number as a target.
- **Treating a B2B lead form's field count as `checkout-trust`'s problem to solve.** Field *count and gating* are this skill's strategy call (Rules 7-13); `checkout-trust` only owns how the decided fields are labeled, validated, and sized — don't hand it an undecided field list.
- **Writing a "Buy now"-style closer CTA on a B2B demo-request page.** Mismatches the deliberative, committee-driven purchase path with single-decision-maker B2C urgency language (Rule 31).

## Checklist

**Demo-request anatomy**
- [ ] Conversion target set per vertical, not a blended "B2B average" (Rules 1-2)
- [ ] Copy written at a 5th-7th grade reading level (Rule 3)
- [ ] Mobile conversion QA'd, not skipped on the assumption of a desktop-skewing persona (Rule 4)
- [ ] Vendor-specific benchmarks (e.g. First Page Sage) are treated as directional only, not planning targets (Rule 5)
- [ ] Demo-to-qualified and qualified-to-meeting tracked as separate metrics (Rule 6)

**Form strategy**
- [ ] Every field's presence is a documented volume-vs-qualification decision (Rule 7)
- [ ] Age, phone, and street-address fields removed unless truly required (Rule 8)
- [ ] Form depth matches traffic intent (TOFU: name + work email; bottom-funnel: more fields justified) (Rule 9)
- [ ] No unsourced per-field conversion-decay statistic appears in customer-facing material (Rule 10)

**Gating**
- [ ] Gated assets are genuinely bottom-funnel/high-value (ROI calculator, benchmark data, demo) (Rule 11)
- [ ] TOFU educational content stays ungated (Rule 12)
- [ ] Gate/ungate decision accounts for AI-answer-engine crawlability (Rule 13)

**Buying committee**
- [ ] Content designed for a 6-13+ person committee, not one persona (Rules 14-15)
- [ ] At least one no-login, forward-without-re-gating artifact exists per deal (Rule 16)
- [ ] Content maps to named committee roles (economic buyer, champion, technical evaluator, gatekeeper) (Rule 17)
- [ ] Champion-enablement assets exist to pre-align a conflict-prone committee (Rule 18)
- [ ] Larger, more diverse committees are designed for as a decision-quality asset, not treated only as friction (Rule 19)

**Compliance trust**
- [ ] SOC 2/ISO badge appears near an active decision point, not footer-only (Rule 20)
- [ ] A standalone, self-serve trust/security page exists (Rule 21)
- [ ] SOC 2 badge follows AICPA mark-usage rules and links to the AICPA verification page (Rule 22)
- [ ] Trust-surface investment is scoped to mid-market-and-up B2B, not spent on a low-commitment B2C page (Rule 23)

**Pricing transparency**
- [ ] Entry/self-serve tiers show real pricing or a starting-price anchor (Rule 24)
- [ ] Any Contact-Sales-only tier is a deliberate, stated trade, not a sitewide default (Rule 25)
- [ ] Pricing page is treated as a self-serve evaluation surface, not a final-step formality (Rule 26)

**Proof formats**
- [ ] Case studies carry quantified, named outcomes, not generic testimonials (Rule 27)
- [ ] Social proof is segmented by visitor type where tooling allows (Rule 28)
- [ ] G2 widgets used are the officially-supported types, matched to their intended use case (Rules 29-30)

**Intent stage & CTA**
- [ ] Primary CTA reads as a conversation-starter, not a purchase-closer (Rule 31)
- [ ] Separate pages exist per funnel stage rather than one generic page (Rule 32)
- [ ] B2B proof leads with outcomes/logos, not volume signals (Rule 33)
