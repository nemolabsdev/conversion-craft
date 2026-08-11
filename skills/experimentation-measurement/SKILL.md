---
name: experimentation-measurement
description: How to validate sales-page decisions with real experiments - traffic floor, sample-size/MDE procedure, peeking discipline, guardrails, ICE/PXL prioritization, GA4 event taxonomy and funnels, heatmap/replay rules, consent-gating. Use whenever a change is being "validated with an A/B test," before launching any test, when instrumenting purchase-funnel events, or when reviewing heatmap/session-replay evidence.
---

# Experimentation & Measurement

## When to use

- Before launching any A/B or multivariate test on a sales page — to check the page even has enough traffic to test.
- Sizing a test: picking a sample size, a Minimum Detectable Effect (MDE), and a stopping rule.
- Deciding whether a live test can be stopped early, or whether a "significant" mid-test result can be trusted.
- Choosing which guardrail metrics must not regress, and what counts as a real regression vs. noise.
- Prioritizing a backlog of test ideas (ICE vs. PXL).
- Naming events, defining the purchase funnel, or auditing UTM tagging.
- Deciding whether heatmap/session-replay evidence is enough to ship a change, or only enough to justify a test.
- Turning on session replay or Consent Mode, or auditing what a replay tool masks. Cross-reference `checkout-trust` for the cookie-banner mechanics (equal-weight Accept/Reject, no pre-ticked boxes) — this skill covers *what* needs consent and *why*, checkout-trust covers *how the banner itself is built*.

## Rules

**Is a test even valid (traffic floor)**

1. [FRAMEWORK] Do not start an A/B test on a page pulling below ~1,000 sessions/variant/month and 30 conversions/variant/month — under that floor a test takes months to reach power and every interim read is noise, not signal. — Convert
2. [FRAMEWORK] Below the traffic floor, don't shrink the test to fit — replace it with qualitative instruments (session replay, moderated user testing, exit-intent surveys) to generate and de-risk hypotheses, then batch findings into fewer, larger-MDE tests (structural/offer changes, not micro-copy tweaks) once traffic clears the floor. — Convert; GuessTheTest
3. [FRAMEWORK] For a high-reliability read, the operational rule of thumb is 30k visitors / 3k conversions per variant — treat the 1,000/30 floor (Rule 1) as "can test at all," not "can trust a small lift." — GuessTheTest
**Sample size & MDE — a non-statistician's procedure**

4. [LAW] Before launch, fix: (a) your baseline conversion rate, (b) the MDE you actually care about, (c) the total sample size N that combination requires — via `n = 16(σ²/δ²)` (Evan Miller's shortcut) or a calculator implementing the full power formula — and (d) your stopping point. Do not analyze the result before N is reached. — Evan Miller
5. [FRAMEWORK] Procedure: (1) pull the page's current conversion rate and monthly traffic, (2) decide the smallest lift worth shipping — that's your MDE, (3) plug both into a sample-size calculator to get N per variant, (4) divide N by daily/weekly traffic per variant to get a runtime estimate, (5) if runtime exceeds 8 weeks, raise the MDE (test a bigger change) rather than shrinking it to fit the calendar. — Evan Miller sample-size calculator; Kohavi/Tang/Xu, *Trustworthy Online Controlled Experiments* (2020)
6. [FRAMEWORK] Halving the MDE costs roughly 4× the sample size — the relationship is quadratic in δ. A "detect a 2% lift" test is not a cheap 2× version of a "detect a 4% lift" test; it's ~4× the traffic and time. Set MDE deliberately against how long the test can actually run. — Evan Miller
7. [FRAMEWORK] Run every test a minimum of 14 days (two full business cycles) even if significance lands earlier, and cap every test at 8 weeks unless a written exception documents why — long enough to average out weekday/weekend cycles, short enough to limit exposure to cookie churn and seasonality drift. — GuessTheTest
**Peeking discipline**

8. [LAW] Checking a fixed-horizon test daily and stopping the moment p < 0.05 appears does not give a 5% false-positive rate — in Evan Miller's 150-observation simulation it reached 26.1%. Any "peeked and stopped early" result is invalid, not just optimistic; it cannot be reported as a real win. — Evan Miller
9. [FRAMEWORK] If the test must be watched continuously, use a named sequential procedure instead of ad hoc peeking: fix N in advance, stop for a winner when |T−C| reaches 2√N (one-sided) or 2.25√N (two-sided), stop with no winner when T+C reaches N. — Evan Miller, Simple Sequential A/B Testing
10. [FRAMEWORK] Alternatively, run on a platform whose stats engine explicitly controls false discovery rate under continuous looking (sequential testing + FDR control) — do not read a raw fixed-horizon p-value as still valid mid-test just because the dashboard shows one. — Optimizely Stats Engine
11. [FRAMEWORK] Pre-declare one primary metric before launch. Scanning a dashboard of a dozen metrics after the fact and reporting whichever one crossed significance is metric fishing, not a result. — Kohavi/Tang/Xu, *Trustworthy Online Controlled Experiments* (2020), OEC discipline

**Guardrails**

12. [LAW] Run a Sample Ratio Mismatch (SRM) check — a chi-square goodness-of-fit test of observed vs. intended variant split — before trusting any result. Alarm at p < 0.01 as the default threshold; tighten to p < 0.001–0.0005 when the test touches checkout, pricing, or any other revenue-determining step, where a missed SRM directly misattributes revenue rather than a secondary engagement metric. — Analytics Toolkit / Microsoft / Eppo
13. [FRAMEWORK] Treat Sample Ratio as the mandatory, always-on guardrail on every test. An SRM flag invalidates the read regardless of how significant the primary metric looks — it means randomization itself is broken, so nothing downstream can be trusted. — Kohavi
14. [FRAMEWORK] Define guardrail thresholds in writing before the test starts — page-load-time delta, error-rate delta, unsubscribe/opt-out delta — so a mid-test dip is judged against a pre-committed bar, not a live argument. Coordinate load-time guardrails with `motion-performance`'s performance budgets rather than inventing separate numbers. — Statsig; Kohavi
15. [LAW] Expect roughly 5% of monitored guardrail metrics to show "significant" movement by chance alone at any given check. Don't roll back on a single flagged check — re-pull the guardrail dashboard after the next full day of data lands and roll back only if the same metric is still flagged, or a second guardrail metric flags in that same check. — Statsig
**Prioritization**

16. [FRAMEWORK] Score test ideas with ICE (Impact × Confidence × Ease, each 1–10) for a fast, lightweight shared vocabulary on a high-velocity team — but expect scores to be subjective and to drift by rater; don't treat an ICE score as objective truth. — Sean Ellis / ProductLift
17. [FRAMEWORK] Switch to PXL the moment any of these appear: a repeated score dispute on the same idea, an ICE input inflated to game the ranking, or a stakeholder's self-rated "9/10 confidence" overriding the ranked queue. PXL is a fixed ~10-question binary/near-binary rubric (above the fold = 1/0, noticeable within 5 seconds = 2/0, adds/removes an element rather than tweaks one = 2/0). — CXL PXL
18. [FRAMEWORK] Every PXL-scored hypothesis must cite which evidence source backs it — funnel data, heatmap/mouse-tracking, qualitative feedback, or prior user testing — as one of the scored questions. A hypothesis with zero backing sources scores at the bottom regardless of how compelling it sounds. — CXL PXL
**Event taxonomy & funnel**

19. [FRAMEWORK] Instrument the core purchase funnel with GA4's four standard ecommerce events — `view_item`, `add_to_cart`, `begin_checkout`, `purchase` — each carrying `currency`, `value`, and an `items` array. Don't invent custom event names for the same actions. — Google Developers
20. [FRAMEWORK] Give every `purchase` event a `transaction_id` unique per completed order — a reused or missing one double-counts or drops revenue in funnel and revenue reports. — Google Developers
21. [FRAMEWORK] Cap the `items` array at 200 line items and 27 custom params beyond the prescribed item fields (`item_id`, `item_name`, `price`, `item_brand`, `item_category`, `item_variant`). Designs needing more should aggregate at checkout, not push every line as a separate item field. — Google Developers
22. [FRAMEWORK] Name events in past-tense Object-Action form ("Form Submitted," "Checkout Started"), not imperative ("Submit Form," "Track Checkout") — past-tense reads as something that already happened and stays consistent across implementers. — Amplitude/Segment Object-Action framework
23. [FRAMEWORK] Maintain one authoritative tracking plan listing every approved event and property. A new event needs an entry there before it ships, not after. — Amplitude governance practice
24. [FRAMEWORK] Define the funnel as an explicit ordered sequence of the four core events (or your taxonomy's equivalent) and pick open vs. closed funnel type deliberately — closed drops users who skip a step, open doesn't; mixing the two across reports produces incomparable conversion rates. — Amplitude / GA4 Funnel Exploration
25. [FRAMEWORK] Triage funnel drop-off by absolute users lost at a step, not the step's percentage drop-off — a 30% drop from 10,000 users outweighs a 50% drop from 500. — Amplitude
26. [FRAMEWORK] Tag every external link driving traffic to the page with at least `utm_source`, `utm_medium`, `utm_campaign`. Never tag internal links — doing so overwrites the visitor's original acquisition source in session-scoped reporting. — Google Analytics Help, Custom URLs / campaign tagging
27. [FRAMEWORK] Standardize UTM values as lowercase, hyphen-separated, documented in a shared naming sheet — the source/medium dimension report treats "Email" and "email" as distinct rows even though channel-grouping matching isn't case-sensitive. — Google Analytics Help; practitioner naming conventions — CXL
28. [LAW] Know the exact Direct-channel match rule for diagnosing "Direct" inflation: source exactly `(direct)` AND medium `(not set)`/`(none)`. Any dark-traffic or missing-UTM link lands here by default. — Google Analytics Help

**Heatmaps & replay — usage rules**

29. [FRAMEWORK] Treat heatmaps and session replay as hypothesis-generating qualitative evidence only — they show *where* users hesitate or misclick, not reliably *why*. Never ship a change on heatmap evidence alone once the page is above the traffic floor (Rule 1); confirm with a quantitative test. — NN/g on analytics vs. qualitative evidence; CXL research methodology
30. [LAW] Configure replay masking to whitelist safe fields, not blacklist sensitive ones. Default masking that only excludes password/credit-card selectors has been shown to still leak addresses, CVVs, and health data on production sites. Audit every form field against the tool's mask list before launch. — Princeton CITP: 482/50,000 top sites leaked despite masking
31. [FRAMEWORK] Verify masking with a manual pass per template — checkout, account, contact — not just trust in vendor default exclude classes (`.hotjar-mask`, `.fs-mask`). Defaults only cover fields the vendor anticipated, not custom markup. — Hotjar/Fullstory masking documentation; privacy-audit practice

**Consent-gating**

32. [LAW] Implement Google Consent Mode v2 on any page serving Google Ads or GA4 to EU/EEA visitors — effectively mandatory since March 6, 2024; without it, GA4/Ads stop collecting new EU/EEA user data entirely. — Termly / Consent Mode v2
33. [LAW] Do not fold session-replay consent into the general analytics consent toggle. Regulatory guidance (CNIL) treats replay as a distinct processing purpose requiring its own granular consent, and it does not qualify for the "anonymous audience measurement" exemption some analytics tools use. The banner mechanics themselves — equal-weight Accept/Reject, no pre-ticked boxes — are `checkout-trust`'s rules; this rule is about which toggle replay lives under. — CNIL, session-replay draft recommendation (2025-2026)
34. [LAW] If relying on a consent exemption to run analytics without a banner, confirm all four CNIL conditions hold simultaneously: performance-measurement only, anonymous-statistics only, not combined with other data systems, no cross-site tracking. Losing any one condition means falling back to consent. — CNIL, audience-measurement exemption conditions (art. 82 guidance)
35. [TREND-2026] Before finalizing any replay consent flow, check CNIL's published guidance for updates to the draft session-replay recommendation (public consultation runs through April 2026) and record the check date in the launch doc — the draft is expected to tighten default-off requirements for replay specifically, stricter than general analytics consent norms.

## Anti-patterns

- **Peek-and-ship**: checking a fixed-horizon test daily, stopping the moment p crosses 0.05, then reporting that p-value as if it still means 5% error (Rules 8–10).
- **Underpowered micro-tests on low-traffic pages**: a two-week test on a few hundred sessions/week declaring a "20% lift" that's actually noise (Rules 1, 4, 7).
- **Metric fishing**: no pre-declared primary metric, then scanning a dashboard post-hoc for whichever number crossed significance (Rule 11).
- **Ignoring SRM**: reading a lift as real when the variant split itself is broken (52/48 instead of 50/50 at scale) — the randomizer failure invalidates everything downstream (Rules 12–13).
- **Guardrails defined after the fact**: shipping a "winning" checkout variant that quietly doubled load time or error rate because no one pre-committed a threshold (Rule 14).
- **ICE/PXL scores treated as objective truth**: a single loud stakeholder's "9/10 confidence" dominates the queue, or scores get reverse-engineered to justify a pet idea already decided on (Rules 16–18).
- **Heatmap-as-proof**: shipping a redesign because "the heatmap showed people weren't seeing the CTA," never A/B testing the fix (Rule 29).
- **Default-trusting replay masking**: enabling session replay on checkout and assuming default password/credit-card exclusions are enough, without auditing custom fields (Rules 30–31).
- **Bundling replay consent into a generic "Accept Analytics" toggle** — creates regulatory exposure because replay is a distinct, higher-scrutiny purpose (Rule 33).
- **UTM-tagging internal navigation** — `utm_source=header` on an internal link resets the visitor's session attribution mid-journey (Rule 26).
- **Statistical vs. practical significance confusion**: a 0.3-point lift on a huge sample reads as "significant" but may not be worth shipping — significance answers "is this real," not "is this worth it."
- **Testing through a known confound window** — a single promo weekend, an outage, a major traffic-source shift — then reporting the result as generalizable.

## Checklist

**Before launch**
- [ ] Page clears the traffic floor (≥1,000 sessions/variant/month, ≥30 conversions/variant/month) — or the plan is qualitative research, not a test (Rules 1–2)
- [ ] Baseline rate, MDE, and required N are calculated and written down before launch (Rules 4–6)
- [ ] Runtime estimate at current traffic fits 14 days–8 weeks; if not, MDE raised rather than shrunk (Rules 5–7)
- [ ] Stopping rule chosen and named: fixed-horizon-at-N, sequential (2√N/2.25√N), or FDR-controlled platform (Rules 8–10)
- [ ] One primary metric pre-declared (Rule 11)
- [ ] Guardrail metrics and rollback thresholds written down pre-launch (Rule 14)

**Reading results**
- [ ] SRM check run and passed before trusting any lift (Rules 12–13)
- [ ] No early stop on a peeked p-value outside a named sequential procedure (Rule 8)
- [ ] A flagged guardrail re-checked against the next full day's data — still flagged, or a second guardrail also flagged — before rollback (Rule 15)

**Backlog & instrumentation**
- [ ] Test ideas scored with ICE or PXL, and PXL entries cite an evidence source (Rules 16–18)
- [ ] Funnel instrumented with `view_item` / `add_to_cart` / `begin_checkout` / `purchase`, each with `currency`, `value`, `items` (Rule 19)
- [ ] Every `purchase` carries a unique `transaction_id` (Rule 20)
- [ ] Events named past-tense Object-Action and logged in the tracking plan before shipping (Rules 22–23)
- [ ] Funnel type (open/closed) declared and drop-off triaged by absolute users lost (Rules 24–25)
- [ ] External links carry `utm_source/medium/campaign` in lowercase-hyphenated form; internal links carry none (Rules 26–27)

**Heatmap/replay & consent**
- [ ] No ship decision rests on heatmap/replay alone above the traffic floor (Rule 29)
- [ ] Replay masking audited per template with a whitelist approach, not vendor defaults (Rules 30–31)
- [ ] Consent Mode v2 live on any page serving Ads/GA4 to EU/EEA traffic (Rule 32)
- [ ] Replay consent is its own toggle, not bundled into general analytics consent (Rule 33)
- [ ] If using a no-banner analytics exemption, all four CNIL conditions verified together (Rule 34)
- [ ] CNIL's draft session-replay guidance checked for updates, with the check date recorded (Rule 35)
