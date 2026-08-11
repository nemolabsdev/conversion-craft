---
name: brand-voice
description: "Brand voice and tone system for sales websites - the four-dimension voice chart, this-not-that guardrails, tone modulation by context (errors, checkout, legal, success, marketing), and the voice-card handoff artifact. Use when defining a new brand's voice, writing a voice chart or style guide, calibrating tone for error/checkout/legal/success copy, auditing shipped copy for voice drift, or resolving a fight between on-voice wording and clear converting copy. Triggers - brand voice, tone of voice, voice chart, this-not-that, sounds like us, voice guardrails, tone modulation, voice card, voice audit."
---

# Brand Voice — Voice & Tone Rules

Brand-voice defines **how** the brand sounds. `copy-chief` defines **what converts**. They interlock, not compete.

## Precedence — read this before applying any rule below

> **On the exact line of a primary CTA, a form label, a displayed price, or an error message: `copy-chief` wins, full stop.** Brand-voice does not get a veto there, no matter how strongly a trait or guardrail argues otherwise.
> **Everywhere else — headlines, body copy, empty states, marketing email, onboarding, hero taglines — brand-voice governs.**

Mechanically: if a line under review is a CTA/label/price/error, apply `copy-chief`'s clarity rules (the CTA verb+deliverable rule and the error-copy rules) and treat any conflicting brand-voice guardrail as overridden for that line only. Headlines sit in brand-voice territory for register and style, but must still clear `copy-chief`'s one-line clarity test — voice shapes HOW a headline sounds; the clarity test remains a hard gate on WHAT it must communicate — it still applies to every other line on the page. This is not a case-by-case negotiation (rule 24); it is a fixed routing rule. This skill exists to make voice decisions everywhere else, and to hand `copy-chief` a voice card (below) it can apply without relitigating tone on every headline.

## When to use

- Defining a new brand's voice before any customer-facing copy is written.
- Building a voice chart or one-page voice card to hand off to writers, `copy-chief`, or AI-drafted copy.
- Calibrating tone for a specific context: error messages, checkout/payment, legal/compliance, success/confirmation, marketing/hero copy.
- Auditing shipped copy for voice drift across surfaces (site, app, transactional email, support).
- Deciding whether a wordplay/personality choice should survive contact with a clarity-critical moment (defer to `copy-chief`).

## Rules

**Defining voice — the stable part**

1. **[Four-dimension chart]** Score the brand on four independent 3-point scales — Funny↔Serious, Formal↔Casual, Respectful↔Irreverent, Enthusiastic↔Matter-of-fact — as four separate decisions, not one "friendly/professional" slider. A brand can land casual + respectful + matter-of-fact simultaneously; collapsing the four into one axis erases real, checkable distinctions. [FRAMEWORK] — nngroup.com/articles/tone-of-voice-dimensions
2. **[Voice is stable, tone flexes]** Document voice and tone as two separate artifacts: one voice definition that does not change across the site, plus an explicit tone-by-context table (see below) that shifts only by situation and user emotional state. Three independent style guides converge on this exact split. [LAW] — styleguide.mailchimp.com/voice-and-tone, atlassian.design/foundations/content/voice-tone
3. **[Aaker cross-check]** Cross-check every chosen voice trait against Aaker's five validated brand-personality dimensions (Sincerity, Excitement, Competence, Sophistication, Ruggedness) before finalizing the chart, and record the trait→dimension mapping next to the chart. Any trait that maps to none of the five gets cut or reclassified before sign-off — unmapped traits are usually a campaign tone or a values statement mislabeled as voice. [FRAMEWORK] — Aaker (1997), *Journal of Marketing Research*
4. **[Five-axis chart, not adjectives]** Build the chart on five checkable axes — Concepts (which product-principle ideas recur), Vocabulary (approved/banned term list), Verbosity (target sentence/paragraph length per surface), Grammar (sentence-complexity rules), Punctuation/Capitalization (Oxford comma, sentence vs. title case). Test each axis before sign-off: hand the chart to someone who didn't write it and have them draft one line per axis; if they need a clarifying question on any axis, that axis is underspecified and fails. [FRAMEWORK] — Podmajersky, *Strategic Writing for UX*

**This-not-that pairs & guardrails**

5. **[Pair, don't adjective]** Write every voice trait as an explicit opposition, not a bare adjective — "sympathetic but not cheerful," "confident but not arrogant," never just "friendly." The paired negative is what a writer can self-check against; a lone adjective isn't specific enough to fail a copy line against. [FRAMEWORK] — nngroup.com/articles/tone-voice-words
6. **[Guardrail sentences]** Convert every core trait into a one-line guardrail, "[trait] but never [violation]" (e.g. "Funny but never crass," "Plainspoken but never terse"), and post all guardrails together in section 2 of the voice card (below) — this is rule 5 shipped as a whole-team artifact, not a private mnemonic. Check: can every core trait be located as a guardrail sentence in the card? Any trait without one fails. [FRAMEWORK] — practitioner consensus cross-checked against nngroup.com/articles/tone-voice-words
7. **[Validate with users, not the room]** Never finalize a tone-word list from internal stakeholder judgment alone. Run a minimum 5-point Likert rating (friendliness, formality) with real users before locking the chart. NN/g's own finding: "you are not your users." [FRAMEWORK] — nngroup.com/articles/tone-voice-words
8. **[Trust beats likability on a tie]** When rule-7 testing shows two tone options both pass on-brand, ship whichever one scores higher on trust items, even if it scores lower on friendliness/likability items — document which option won and on what score. NN/g's data is why: a casual/enthusiastic shift moved friendliness 0.5–0.7pts (5-pt scale) but trust only 0.3–0.4pts, and trust explained ~52% of "willingness to recommend" — 2.2x friendliness's effect. Check: is the shipped option the higher-trust one on record, not just the higher-liked one? [FRAMEWORK] — nngroup.com/articles/tone-voice-users, tone-voice-samples

**Tone modulation by context**

9. **[No blame words]** Never use fault-framed or clinical words in error copy — "invalid," "illegal," "incorrect," "you entered." Rewrite as system-owned ("We couldn't find that ZIP code"). Independently converged on by NN/g and UX Content Collective. [LAW] — nngroup.com/articles/error-message-guidelines, uxcontent.com/how-to-write-error-messages
10. **[Cause + remedy, same message]** Every error must state the plain-language cause and the user's next action together. A message naming only the problem fails regardless of tone quality. [LAW] — nngroup.com/articles/error-message-guidelines
11. **[Errors: neutral, not comedic]** Default every error message to neutral-to-empathetic tone. A light/playful tone is permitted only when all three hold: (a) severity is Low per rule 12's tiers, (b) it is the user's first occurrence of that specific error this session, (c) the error is non-blocking (the user can retry with no data lost). Any recurring occurrence, any block on progress, or any Moderate/High-severity error fails this rule regardless of how the joke reads in isolation — a joke that charms once reads as tone-deaf the fifth time. [FRAMEWORK] — nngroup.com/articles/error-message-guidelines
12. **[3-tier apology severity]** Low (typo) → light and brief. Moderate (failed action, retry) → reassuring, solution-forward. High (data loss, payment failure, account lock) → no jokes, direct acknowledgment, explicit next step, support contact. [FRAMEWORK] — usertesting.com/blog/humanize-error-messages-for-ux
13. **[No shouting]** Ban ALL CAPS and stacked exclamation marks from error/warning copy regardless of brand enthusiasm elsewhere — louder formatting reads as the interface shouting, undermining rule 11 even when the words comply. [FRAMEWORK] — uxcontent.com/how-to-write-error-messages
14. **[Checkout: suppress jokes]** Suppress wordplay and jokes entirely from cart-to-confirmation, independent of brand playfulness elsewhere; keep calm, direct, neutral language through every checkout/payment step. Reserve humor for lower-stakes, earlier-funnel content. See `checkout-trust` for the surfaces this covers. [FRAMEWORK, moderate confidence] — weareyellowball.com
15. **[Precision over celebration at confirmation]** In precision-critical confirmation moments — payment succeeded, funds transferred, contract submitted — the message must state the exact amount/date/reference number plus the immediate next step; exclamation points, confetti, and stock-celebratory phrasing ("Woohoo!", "You rock!") are banned at this tier, even for a playful brand. Stripe's pattern: the job of that screen is trust, not delight. [FRAMEWORK] — bricxlabs.com/blogs/success-message-ux-examples
16. **[Celebration scales with significance]** Classify each confirmed action as milestone (first purchase, signup completed, goal achieved, plan upgraded) or routine (draft saved, setting changed, item added to cart) before choosing its confirmation weight. Reserve full-screen celebration (confetti, exclamatory copy) for milestone actions only; routine actions get a subtle, low-key confirmation with no full-screen treatment. The same celebration on every save trains users to dismiss it and cheapens real milestones. [FRAMEWORK] — atlassian.design/foundations/content/designing-messages
17. **[Legal/consent: plain language]** Run legal, consent, and terms-adjacent copy through a readability scorer before shipping and confirm it lands at or below a 9th-grade reading level, with zero sentences over 30 words — looser than `copy-chief` rule 32's 5th-7th-grade target for marketing copy, since legal terms of art can't always compress further, but still measured, not eyeballed. Regulators and courts increasingly treat unreadable disclosure as inadequate — this is a compliance issue, not a style preference. [LAW] — termsfeed.com, usercentrics.com/guides/website-disclaimers
18. **[Compliance copy: minimize adjectives]** In official copy (shipping terms, returns, privacy, pricing disclaimers), count evaluative/emotive adjectives ("amazing," "seamless," "hassle-free," "generous") per paragraph and flag any paragraph with more than one — target zero. GOV.UK names adjectives explicitly as "subjective," reading as spin. This register is scoped to compliance-adjacent blocks only, not hero/product copy. [FRAMEWORK] — gov.uk writing guidelines
19. **[Drop reflexive "please"]** Drop reflexive courtesy words ("please," "please note") from instructional and legal copy — they add length without adding politeness once the surrounding tone is already respectful. Reserve "please" for a genuine request. [FRAMEWORK] — gov.uk writing guidelines
20. **[Warmth down as stakes rise]** Classify every flow step into one of three stakes tiers before writing its copy: Low (fully reversible, no cost — browsing, search, filtering), Medium (correctable but costs the user time or a retry — form validation, non-final selections), High (irreversible or costs money/legal standing/health — payment, contract signature, account deletion, medical/financial decisions). Warmth and casualness must step down at each tier boundary; High-tier copy sits at or below the checkout/legal row of the tone-by-context table below, regardless of the page's default voice. Check: does any High-tier step read as casually as the homepage? If yes, it fails. [FRAMEWORK] — nngroup.com/articles/humanizing-ai
21. **[Politeness ≠ humanization]** Transactional closure ("Thanks — that's booked") is safe everywhere, including high-stakes flows. Simulated personal interest (a question about the user's life or day, unrelated to the task) belongs only where the brand has explicitly opted into companion-style engagement — grep checkout, legal, and support-ticket copy for any such question and remove it by default. [FRAMEWORK] — nngroup.com/articles/humanizing-ai
22. **[Read the first line back]** Before shipping cheerful/casual copy on a serious-consequence page (legal change, financial risk, health, active outage), answer the check NN/g's "Brexit Bot" case failed: does the register match the topic's actual weight, independent of whether it matches the brand's general voice? A "no" is a hard gate — cut the cheerful register regardless of what the brand's default chart says. [FRAMEWORK] — nngroup.com/articles/humanizing-ai

**Voice vs. conversion clarity — copy-chief wins ties**

23. **[Clarity wins the exact line]** When brand-voice wordplay and plain instructional copy compete for the same sentence — a primary CTA, a form label, a price, an error — ship the unambiguous version, deferring to `copy-chief` rules 2 ("one-line test"), 10 ("verb + deliverable"), and 31 ("error copy content"). Reserve wordplay for sections where comprehension isn't time-critical: hero taglines, empty states, marketing email. [FRAMEWORK] — synthesis of UX-copywriting-for-conversion sources
24. **[Explicit tie-breaker]** Adopt Mailchimp's tie-breaker verbatim: tone is usually informal, "but it's always more important to be clear than entertaining." This is not a case-by-case call to relitigate each time it comes up. [FRAMEWORK] — styleguide.mailchimp.com/voice-and-tone
25. **[Humor only when it's free]** Before shipping a joke or witty aside, apply the free-humor test: delete it and re-read the line. If the surrounding sentence needs restructuring to still read naturally without it, or the joke adds parse time for a reader unfamiliar with the brand, it is not free — cut it. Never add a joke solely because a page hasn't had one yet ("personality quota"); that always fails the test. Forced humor reads worse than none. [FRAMEWORK] — styleguide.mailchimp.com/voice-and-tone
26. **[Mascots don't narrate UI]** Never write interface copy in a brand mascot's literal first-person voice. A mascot can embody personality visually; functional copy (buttons, errors, labels) stays in the brand's plain human voice. [FRAMEWORK] — mailchimp/content-style-guide (GitHub)
27. **[Slide personality to emotional state]** Tag every screen or state with the user's likely emotional state — confident/curious/newly-successful → personality up; apprehensive/confused/mid-error → personality down — and require copy intensity to match the tag, not one fixed tone for the whole page or flow. Check within a single flow: a payment form's mid-fill screens (apprehensive) must read plainer than its post-purchase confirmation (newly-successful) even though both sit in the same "checkout" flow. Fails if every screen in a flow carries identical personality intensity regardless of tagged state. [FRAMEWORK] — atlassian.design/foundations/content/voice-tone

**Verbal distinctiveness**

28. **[Governed lexicon]** Maintain a living brand lexicon: proprietary/coined terms unique to the product, preferred terms for common concepts, and explicitly banned synonyms. Version and review it on the same cadence as the design-token or copy-deck update cycle. [FRAMEWORK] — ramotion.com/blog/verbal-identity
29. **[Distinctiveness Grid gate]** Before promoting any coined term, tagline, or recurring phrase to permanent brand language, score it on prevalence (unprompted audience linkage) and uniqueness (how many competitors share the same link). Low on either axis means it isn't yet a real distinctive verbal asset. See `visual-identity` for the same grid applied to non-verbal assets. [FRAMEWORK] — distinctivebat.com/distinctive-brand-assets

**Governance & AI-scaled copy (2026)**

30. **[Reuse the rating instrument as QA]** Sample live copy across every surface (site, app, transactional email, support) at least once per quarter, and again after any redesign or rebrand, and score it against the rule-1 four-dimension profile — the same instrument used to set the voice. Log each score with its date; two consecutive drops on the same dimension is the trigger to open a chart review, not a wait-and-see. [FRAMEWORK] — nngroup.com/articles/tone-of-voice-dimensions
31. **[Gate AI copy on inputs + rubric]** Where AI drafts or scales brand copy, gate every output behind a documented input layer (approved source material + structured brief) and a QA rubric scoring brand-alignment, factual accuracy, and compliance before publication. A one-time prompt is not voice governance. [TREND-2026] — the-brand-algorithm.com/ai-brand-voice-and-governance
32. **[Risk-tier the review bar]** Risk-tier AI-assisted copy by consequence: low-risk (internal notes, minor UI labels) can ship on an automated tone check; medium-risk (customer emails, blog) needs one human editor; high-risk (pricing, legal, crisis comms) needs multi-stage review including brand and legal sign-off. [TREND-2026] — the-brand-algorithm.com/ai-brand-voice-and-governance

## Tone-by-context modulation table

Apply this after the stable voice chart (rules 1–8) is locked. Columns are dials, not absolutes — move them from the brand's default position toward the row's target as stakes rise.

| Context | Warmth | Humor | Formality | Adjectives | Governing rules |
|---|---|---|---|---|---|
| Marketing / hero / blog | Brand default | Allowed if it passes rule 25's free-humor test | Brand default | Full range | 23–27 |
| Onboarding / empty states | Brand default, slightly up | Light, low-stakes only | Brand default | Full range | 27 |
| Form errors / validation | Down | None | Neutral | Minimal, no blame words | 9–13 |
| Checkout / payment | Down | None | Neutral-formal | Minimal | 14–15, 20–21 |
| Success / confirmation | Scaled to significance | None at high stakes | Neutral | Precise, factual | 15–16 |
| Legal / consent / compliance | Low | None | Formal, plain | Near-zero | 17–19 |
| Support / crisis / outage | Low, accountability-first | None | Formal | Factual only | 20–22, 32 |

## The voice card — the copy-chief handoff artifact

Ship a one-page voice card before any conversion copy is written. `copy-chief` treats it as a fixed input: it copies the lexicon and guardrails verbatim and applies its own clarity rules on top, per rule 23.

```
VOICE CARD — [Brand name] v[X.X], [date]

1. Four-dimension score (rule 1)
   Funny ←●───────→ Serious        [position + 1-line why]
   Formal ←──●─────→ Casual
   Respectful ←────●→ Irreverent
   Enthusiastic ←──●→ Matter-of-fact

2. This-not-that pairs (rules 5–6) — 3-5 guardrails
   "[Trait] but never [violation]." × N

3. Lexicon (rule 28)
   Preferred terms: ...
   Banned synonyms: ...
   Coined/proprietary terms: ...

4. Verbosity & reading level target (copy-chief rule 32)
   Sentence/paragraph length target, grade-level target

5. Tone-by-context excerpt (table above) — the 3 contexts
   most relevant to this brand's page types

6. Sign-off: validated against real users? (rule 7) Y/N, date
```

## Anti-patterns

- **Single-axis tone ("just be friendly").** Collapses rule 1's four dimensions into one vague slider — no writer can apply it consistently.
- **Adjective-only voice words with no paired negative.** "We're playful" without "but never crass" leaves the boundary undefined.
- **Validating tone only with the internal team.** The people who wrote the chart are worst-positioned to judge how it reads to a stranger (rule 7).
- **Humor in recurring or high-severity errors.** Charming once, tone-deaf the fifth time (rule 11).
- **Blame-framed error copy** ("You entered an invalid email") — shifts fault to the user, fails rule 9.
- **Cheerful copy on high-consequence topics.** The Brexit Bot pattern — friendly greeting on serious-stakes content reads as tonally dishonest (rule 22).
- **Simulated personal interest in transactional flows** ("What are you up to today?") — invites anthropomorphization the product can't sustain (rule 21).
- **The same full-screen celebration for every save.** Trains users to dismiss it, drains real milestones (rule 16).
- **Legalese dressed as "on-brand voice."** Risks being treated as inadequate disclosure, not just off-tone (rule 17).
- **Mascots narrating first-person UI copy.** Filters instructions through a fictional persona exactly when users need clarity (rule 26).
- **Forced humor inserted to "sound like the brand."** Reads worse than no joke (rule 25).
- **Treating voice and clarity as permanently in tension instead of sequenced.** Every style guide reviewed resolves it the same way: clarity wins the tie (rule 23), not "pick one forever."
- **Shipping AI-scaled copy without the input layer or QA rubric.** Defaults to generic, brand-agnostic phrasing that erodes verbal distinctiveness (rule 31).

## Checklist

- [ ] Precedence confirmed: every CTA/form-label/price/error line was checked against `copy-chief` last, and any conflicting brand-voice guardrail was overridden for that line only (Precedence).
- [ ] Voice scored on all four independent dimensions, not one slider (Rule 1).
- [ ] Voice/tone documented as separate artifacts (Rule 2).
- [ ] Every trait cross-checked against Aaker's five dimensions, with the mapping recorded; unmapped traits cut or reclassified (Rule 3).
- [ ] Voice chart covers all five axes: Concepts, Vocabulary, Verbosity, Grammar, Punctuation — and passed the "hand it to a new writer" test with no clarifying questions (Rule 4).
- [ ] Every trait is an explicit this-not-that pair, not a bare adjective (Rule 5).
- [ ] Guardrail sentences ("[trait] but never [X]") written for every core trait and posted in voice-card section 2 (Rule 6).
- [ ] Voice chart validated with a ≥5-point Likert rating study on real users, not internal judgment alone (Rule 7).
- [ ] Where two on-brand tone options tied, the higher-trust-scoring option shipped and is documented (Rule 8).
- [ ] Error copy: no blame words, cause + remedy paired, neutral tone, no ALL CAPS/stacked "!" (Rules 9–13).
- [ ] Any light/playful error copy passes all three of rule 11's tests — Low severity, first occurrence, non-blocking (Rule 11).
- [ ] Checkout/payment copy has zero jokes/wordplay (Rule 14).
- [ ] High-stakes confirmations state exact amount/date/reference + next step with zero celebratory language (Rule 15); each confirmed action classified milestone vs. routine before choosing celebration weight (Rule 16).
- [ ] Legal/consent copy scored by a readability tool at ≤9th-grade level, zero sentences over 30 words (Rule 17); evaluative-adjective count is zero-to-one per paragraph in compliance copy (Rule 18); reflexive "please" removed from instructional/legal copy (Rule 19).
- [ ] Every flow step tagged Low/Medium/High stakes, with High-tier copy at or below the checkout/legal row regardless of page default (Rule 20).
- [ ] Checkout/legal/support copy scanned and cleared of simulated personal-interest questions (Rule 21).
- [ ] First line of any serious-topic page answered "yes" on the Brexit Bot register-match check, or was cut (Rule 22).
- [ ] Any voice-vs-clarity conflict on a CTA/label/price/error resolved in favor of `copy-chief`'s rule (Rules 23–24).
- [ ] Every shipped joke passed the free-humor test — no restructuring needed, no added parse time, not quota-driven (Rule 25); no mascot narrating functional UI copy (Rule 26).
- [ ] Every screen/state tagged with an emotional state and its personality intensity matches the tag — verified within at least one multi-screen flow (Rule 27).
- [ ] Brand lexicon (preferred/banned/coined terms) documented and versioned on the design-token/copy-deck cadence (Rule 28).
- [ ] Any new tagline/phrase scored on the Distinctiveness Grid (prevalence × uniqueness) before being treated as load-bearing (Rule 29).
- [ ] Live copy sampled at least quarterly (and after any redesign) against the four-dimension profile, scores logged by date (Rule 30).
- [ ] AI-drafted copy gated behind an input layer + QA rubric, risk-tiered by consequence (Rules 31–32).
- [ ] A current voice card exists (all 6 sections filled) and was handed to `copy-chief` before conversion copy was written.
