# AURI A1 — Sales Page Copy

**Source:** `demo/BRIEF.md` + `demo/STRATEGY.md`. Written to `.claude/skills/copy-chief/SKILL.md` and the copy/social-proof rules in `.claude/skills/product-page-cro/SKILL.md`. Section order matches STRATEGY.md Section 5 exactly; every section is labeled with the objection it resolves.

**Demo disclosure:** AURI is a fictional brand built for internal skills-team testing. All product facts below come only from `BRIEF.md`. The three customer quotes in Section 8 are invented for this demo — clearly marked as fictional, not real customers — and no phrasing here is copied from or imitates any real headphone brand's marketing.

**Chief's notes / assumptions logged (per Rule 12, per Strategy Section 2):**
- Primary CTA pronoun ships in second person ("your") per the sample copy below; flag for an A/B test against first person ("my") before this goes live — do not treat either as a proven winner.
- Battery comparison uses only the brief's own framing ("roughly double the class") — no specific competitor hour-count is stated anywhere on the page, since the brief does not publish one.
- No second price tier, no strikethrough "was" price, no countdown timer, no live-activity feed — all forbidden by Strategy Section 6. None appear below.

---

## 1. Nav

**Purpose:** persistent access to price + primary CTA; no path off the conversion flow.

- Logo / wordmark (links to top of page, not a separate homepage): `AURI`
- Nav links (utility only, no competing offers): `Mechanism` · `Compare` · `Reviews` · `FAQ`
- Price chip (always visible, links to pricing section): `$349`
- Primary nav CTA button: **`Add to Cart`**
- Mobile: nav collapses to logo + price chip + CTA button; link list moves to a hamburger menu (never hides the CTA)

**Microcopy**
- Hamburger button `aria-label`: `Open menu`
- Hamburger button `aria-label` (expanded state): `Close menu`
- Skip-link (for keyboard/screen-reader users, visually hidden until focused): `Skip to main content`

---

## 2. Hero

**Maps to:** Offer/CTA. Must work with zero scroll at 375px and carry the full value proposition alone (80–90% of visitors read only this).

**Eyebrow (small label above headline):**
`Premium ANC headphones, built for deep focus`

**Headline (H1):**
> ## The ANC Headphone Built to Last a Decade, Not a Year.
> ## Noise Cancelling That Learns What Actually Distracts You.

*(One-line test: names the category — ANC deep-focus headphone — states the durability edge no flagship or $150 pair credibly claims, and states the adaptive-ANC mechanism. Not pasteable onto a competitor's page unchanged.)*

**Subheadline (max 2 sentences: what it is + why the headline is credible):**
> AURI A1 pairs adaptive noise cancelling with 60 hours of battery and studio-tuned titanium drivers — then backs it with swappable parts and 10 years of support, so it's the last pair you buy for a decade, not the third $150 pair you replace this year.

**Primary CTA button:**
**`Add to Cart — $349`**

**CTA support line (directly under the button, small text):**
`Free shipping · 30-day returns · 2-year warranty`

**Hero image alt text:**
`AURI A1 titanium over-ear headphones, side profile, on a dark studio desk`

**Secondary link in hero (low visual weight, not a competing CTA):**
`See how it compares to the flagship class ↓` *(anchor-links to Section 7)*

---

## 3. Trust / proof bar

**Maps to:** Objection 1 — legitimacy. Above the fold, distinct from the fuller testimonials later (Rule 18 — no redundant proof stacking).

**Layout:** one horizontal strip, four items.

1. **Rating badge:** `4.7 / 5 — 2,318 verified buyers`
   *(alt text for star icon: `Rated 4.7 out of 5 stars`)*
2. **Warranty badge:** `2-Year Warranty`
3. **Returns badge:** `30-Day Returns`
4. **Shipping badge:** `Free Shipping, Every Order`

**One short named testimonial (legitimacy-flavored, distinct from Section 8's deeper quotes):**
> "Ordered on a Tuesday, wearing them by Thursday, sent back my old pair the same week. No catch, no fine print."
> **— Daniel Ruiz, Product Manager** *(fictional demo testimonial)*

---

## 4. "Built for deep focus" — relevance section

**Maps to:** Objection 2 — relevance. Names the specific reader and their specific prior disappointment before asking for anything.

**Section header:**
## You've Already Tried to Buy Your Way Out of Distraction

**Body copy:**
> You're not shopping for your first pair of ANC headphones. You already own one — probably the $150 "good enough" pair that seemed fine in the store and then let you down in the open-plan office, on back-to-back calls, or three hours into a deep-work block when the battery died. Or you're pricing the flagship ANC class and wondering if $400+ actually buys you anything the cheap pair didn't.

> AURI A1 is built for exactly this moment: remote and hybrid professionals who need real silence to do real work, and who are done gambling $150 at a time on headphones that get replaced every 12–18 months.

**Pull-quote / callout (visual emphasis, not a new section):**
> "Built for people who need real silence to do real work — not a fixed preset that half-works."

---

## 5. Secondary CTA — email capture

**Maps to:** Offer/CTA (secondary). Catches not-ready visitors. Must stay visually subordinate to "Add to Cart" — smaller button, lower contrast, one field.

**Section header:**
### Not ready to buy yet?

**Body copy:**
> Get the full AURI A1 spec sheet and our restock/launch updates — no spam, unsubscribe any time.

**Form:**
- Field label: `Email address`
- Field placeholder: `you@company.com`
- Field `aria-required`: `true` (required is marked explicitly per Rule 30 — this is the only field, so it's marked directly rather than left implied)
- Submit button (visually subordinate — outline/text-link style, never same weight as primary CTA): **`Get the Spec Sheet`**

**Inline validation microcopy (validates on blur, clears live on correction, reserves space so nothing reflows):**
- Empty on blur: `Enter your email so we know where to send it.`
- Invalid format on blur: `That email doesn't look complete — check for a typo (e.g. name@example.com).`
- Valid: no message shown; border returns to neutral state.

**Submit states:**
- Loading (button label swaps, button stays same size): `Sending…`
- Success (replaces the form inline, same footprint — no reflow):
  > **You're on the list.** Check your inbox for the AURI A1 spec sheet — it should land in the next few minutes.
- Success, secondary line: `Didn't get it? Check spam, or `**`resend the email`**` .`
- Error (server/network failure, field-level, non-blocking):
  > **Something went wrong on our end.** Your email wasn't saved — please try again, or email us directly at hello@auri.com.
- Already-subscribed case:
  > **You're already on the list.** The spec sheet is on its way to your inbox again — check spam if it's not there in a few minutes.

---

## 6. Mechanism section (2 feature blocks)

**Maps to:** Objection 3 — mechanism. Each block: benefit-stated header → Feature → Advantage → Benefit, ending on Benefit. Real product image required, no stock art.

### Block 1 — Adaptive ANC

**Header (benefit-stated, not a feature label):**
## Silence Tuned to Your Environment, Not a Generic Mode You Have to Hunt For

**Body (Feature → Advantage → Benefit):**
> AURI A1's adaptive ANC learns your specific distraction profile over your first days of wear — the hum of your building's HVAC, the pitch of your coworker's voice through a wall, the exact frequency of your dog barking two rooms over. *(Feature)* Typical flagships ship with preset ANC modes you switch between manually and hope one fits. AURI A1 adjusts itself to what's actually breaking your focus, without you touching a setting. *(Advantage)* The result: fewer manual mode-switches, fewer moments where the "wrong" preset lets a distraction through mid-call or mid-deep-work-block. *(Benefit)*

**Image alt text:**
`Close-up of the AURI A1 earcup showing the adaptive ANC microphone array`

### Block 2 — Titanium Drivers, Studio Tuning

**Header (benefit-stated):**
## Sound Accurate Enough for Critical Listening, Without the Fatigue

**Body (Feature → Advantage → Benefit):**
> Each earcup houses a titanium driver tuned to a studio frequency response — not the bass-boosted, consumer V-shaped EQ curve most headphones ship with out of the box. *(Feature)* That means what you hear is closer to what was actually recorded or said, instead of an artificially punched-up version of it. *(Advantage)* On a 6-hour call day, that accuracy is the difference between headphones that still feel fine at hour six and ones that leave your ears fatigued by lunch. *(Benefit)*

**Image alt text:**
`AURI A1 titanium driver cross-section next to the assembled headphone`

---

## 7. Results / comparison section

**Maps to:** Objection 4 — results. Every claim checkable; the table carries the argument, not adjectives.

**Section header:**
## 60 Hours. Charge on Your Schedule, Not Mid-Session.

**Battery feature block (Feature → Advantage → Benefit):**
> AURI A1 runs 60 hours on a single charge — roughly double the battery life of the flagship ANC class it's priced against. *(Feature)* That's a full work week of all-day wear before you think about a charger. *(Advantage)* You stop losing focus to a low-battery warning mid-deep-work-block, and you stop being the person who shows up to a call with dead headphones. *(Benefit)*

**Comparison table intro line:**
> Here's how AURI A1 stacks up against what you're actually comparing it to — not a hypothetical competitor.

**Spec comparison table:**

| | **AURI A1** | **flagship ANC class** | **"Good enough" $150 tier** |
|---|---|---|---|
| Price | $349 | $399–449 | ~$150 |
| Battery life | 60 hours | Roughly half of AURI A1's | Varies, no published ANC-specific figure |
| ANC type | Adaptive — learns your distraction profile | Fixed factory presets | Minimal or no meaningful ANC |
| Driver material | Titanium, studio-tuned | Proprietary, consumer-tuned | Standard plastic-housed driver |
| Repairability | Swappable parts, 10-year support | Not offered | Not offered |
| Typical replacement cycle | Built for 10 years | Standard upgrade cycle | Every 12–18 months |
| Warranty | 2 years | Varies by retailer | Varies, often 1 year or less |
| Returns | 30 days | Varies by retailer | Varies by retailer |

**Table footnote (transparency, per Rule 20 — no vague rounding dressed as precision):**
`AURI A1 figures are our own published specs, current as of this page. Competitor figures reflect publicly listed price ranges and typical category patterns; check current retailer listings for their exact specs before comparing.`

---

## 8. Peer validation section

**Maps to:** Objection 5 — peer validation. Named, attributed quotes; static grid, no auto-rotating carousel. **All three quotes below are fictional, written for this demo — not real customers.**

**Section header:**
## What People Switching From Their Old Pair Are Saying

**Review summary line (sits near this section's top, echoing the proof-bar number so it reads as one continuous claim, not a duplicate proof type):**
`4.7 / 5 average — 2,318 verified buyers`

**Testimonial 1 — switched from a flagship ANC class:**
> "I paid $429 for a flagship pair two years ago and never loved the ANC presets — one of them always let the office AC through. AURI's adaptive ANC actually adjusted to my apartment in about three days. I didn't expect that to matter this much."
> **— Priya Nataraj, Senior Data Analyst, remote** *(fictional demo testimonial)*

**Testimonial 2 — switched from the cheap tier:**
> "Third pair of $150 headphones in two years, all of them dead or falling apart. I was skeptical about spending $349, but the 10-year repair promise is the first time a headphone company has said 'we expect you to keep these,' instead of 'buy the next model in 18 months.'"
> **— Marcus Webb, Freelance Software Engineer** *(fictional demo testimonial)*

**Testimonial 3 — sound quality / studio tuning:**
> "I'm on calls six hours a day. Every other pair I've owned started to hurt by hour four. The AURI A1s don't — I genuinely forget I'm wearing them, which is the whole point."
> **— Sofia Andrade, Design Lead, hybrid** *(fictional demo testimonial)*

**Grid microcopy:**
- Card footer label: `Verified buyer`
- Section footer link (low-weight, not a competing CTA): `Read all 2,318 reviews →`

---

## 9. Pricing + repairability/value section

**Maps to:** Objection 6 — pricing/terms transparency. Price stated plainly, round number, everything included listed beside it.

**Section header:**
## $349. One Payment. Built to Be the Last One.

**Price block:**
- Price (large, plain text, no strikethrough "was" price, no charm-pricing .99): **`$349`**
- Below price, inclusions listed directly beside the CTA:
  - `Free shipping`
  - `30-day returns`
  - `2-year warranty`
  - `No subscription, ever — this is a one-time purchase`

**Body copy (repairability as value justification vs. both alternatives):**
> $349 sits between the $150 pair you've already been burned by and the $399–449 flagship ANC class you're pricing against — and it's built to outlast both purchase patterns. Swappable parts and a 10-year support commitment mean a worn ear cushion or a damaged cable doesn't mean a landfill trip and a new $150–450 purchase. It means a replacement part and a working headphone. You're not paying for a marketing refresh cycle you'll never use — you're paying once, for headphones designed to be repaired instead of replaced.

**Primary CTA (repeated here, same label as hero for consistency):**
**`Add to Cart — $349`**

---

## 10. Final CTA + risk-reversal band

**Maps to:** Objection 7 — risk, plus the primary Offer/CTA. This is the last thing before the ask — risk-reversal sits directly beside the button, not only in the FAQ.

**Section header:**
## Try AURI A1. If It's Not Right, Send It Back.

**Body copy:**
> We know what it's like to spend money on headphones that let you down — that's the exact problem AURI A1 exists to fix. So here's what happens if we're wrong for you:

**Risk-reversal list (directly beside the CTA, not buried below):**
- **`30 days to decide.`** Wear them at your desk, on calls, on your commute. If they're not right, send them back for a full refund — we cover return shipping.
- **`2 years covered.`** Any manufacturing defect is repaired or replaced at no cost, no fine print.
- **`10 years of parts.`** If something wears out after the warranty — a cushion, a hinge, a cable — you buy the part, not a whole new headphone. This is the actual answer to "what if it breaks in year 3."

**Primary CTA button (final, largest weight on the page):**
**`Add to Cart — $349`**

**CTA support line:**
`Free shipping · 30-day returns · 2-year warranty · No subscription`

---

## 11. FAQ

**Maps to:** residual objections 1–7. Every entry below traces to exactly one numbered objection from Strategy Section 4. No generic "About us" filler.

**Section header:**
## Questions Before You Buy

**Q: Who makes AURI, and can I trust a company I haven't heard of with $349?**
*(Objection 1 — legitimacy)*
> AURI A1 ships with a 2-year warranty and 30-day returns stated plainly on this page, not buried in a policy PDF. We also commit to 10 years of repair support — a promise we couldn't operationally back if we weren't planning to be here.

**Q: I already own ANC headphones. Why would this be any different for me?**
*(Objection 2 — relevance)*
> Most ANC headphones — including the $150 tier and the fixed-preset flagships — apply the same noise cancelling to everyone. AURI A1's ANC learns what specifically distracts you over your first few days of wear, so it adapts to your office, your home, your calls — not a generic profile.

**Q: How long does the adaptive ANC actually take to learn my environment?**
*(Objection 3 — mechanism)*
> It starts adjusting within your first few days of normal wear — no setup mode, no app calibration required. It keeps refining as your environment changes (new apartment, new office, a noisier commute).

**Q: What does "studio-tuned titanium drivers" actually mean for how they sound?**
*(Objection 3 — mechanism)*
> It means the frequency response is tuned for accuracy — closer to what was actually recorded or said — instead of the bass-heavy, consumer EQ curve most headphones default to. That's why AURI A1 stays comfortable on long call days instead of fatiguing your ears.

**Q: Is the 60-hour battery number real, or best-case marketing?**
*(Objection 4 — results)*
> 60 hours is AURI A1's rated battery life, roughly double the flagship ANC class it's priced against. See the full spec comparison against the flagship class and the $150 tier in the Compare section above.

**Q: How many people have actually bought and reviewed these?**
*(Objection 5 — peer validation)*
> 2,318 verified buyers have left an average rating of 4.7 out of 5 as of this page. Full reviews are linked from the testimonial section above.

**Q: Is $349 really a one-time payment — no subscription, no hidden fee?**
*(Objection 6 — pricing/terms transparency)*
> Yes. $349 once. Free shipping is included. There's no subscription, no app paywall, and no recurring charge tied to AURI A1, ever.

**Q: What if my headphones break after the 2-year warranty ends?**
*(Objection 7 — risk)*
> That's exactly what the 10-year repairability commitment covers. Parts like ear cushions, hinges, and cables are replaceable — you buy the part, not a new headphone. Combined with the 30-day return window and 2-year warranty, AURI A1 is covered well past the point most $150 pairs have already been thrown out.

---

## 12. Footer

**Maps to:** utility only — not a persuasion section.

**Columns:**

**Shop**
- `Add to Cart`
- `Compare the options`
- `Spec Sheet`

**Support**
- `Shipping & Returns`
- `Warranty Terms`
- `Repair & Parts`
- `Contact Us`
- `Track My Order`

**Company**
- `FAQ`
- `Privacy Policy`
- `Terms of Service`

**Utility microcopy:**
- Copyright line: `© 2026 AURI. All rights reserved.`
- Payment icon alt texts: `Visa`, `Mastercard`, `American Express`, `Apple Pay`, `PayPal`
- Footer email re-capture (smallest weight on the page, last-chance secondary offer):
  - Label: `Get the spec sheet`
  - Field placeholder: `you@company.com`
  - Button: **`Send Me the Spec Sheet`**
- Social icon alt texts (if used): `AURI on Instagram`, `AURI on YouTube`

---

## Checklist self-audit (copy-chief SKILL.md)

- Headline passes one-line test, matches solution-aware stage, carries full value prop (Rules 1–3): done — Section 2.
- Subhead ≤2 sentences, states product + credibility (Rule 4): done.
- Every claim is a number, named mechanism, or named comparison, not a superlative (Rule 5): done — "60 hours," "titanium," "10-year support," "roughly double the flagship class," no "best"/"revolutionary."
- 2 feature blocks in Section 6, each FAB, ending on Benefit, real product image only (Rules 7, 9): done.
- One primary CTA verb+deliverable throughout: `Add to Cart — $349` (Rules 10, 13): done — repeated identically in Sections 2, 9, 10, never restyled as competing.
- Secondary email CTA visually and verbally subordinate (`Get the Spec Sheet`), never same weight (Rules 11 offer-architecture): done.
- All 7 objections addressed, in cognitive order, legitimacy/relevance above the fold, risk beside final CTA (Rules 15–16): done — Sections 3–4 (1–2), 6–7 (3–4), 8 (5), 9 (6), 10 (7).
- FAQ entries each map to one numbered objection, no filler (Rule 17): done — 8 entries, 7 objections, mechanism split across two entries.
- Above-fold proof + no redundant proof stacking (Rule 18): done — rating badge above fold (Section 3), fuller testimonials mid-page (Section 8).
- Testimonials named + titled, flagged fictional for this demo (Rule 19): done.
- Precise, non-rounded numbers in proof copy (Rule 20): `2,318 verified buyers`, `4.7 / 5`.
- Round pricing, no charm pricing, matches premium positioning (Rule 25): `$349`, no `.99`.
- No price gated behind "Contact us" (Rule 28): price stated plainly in Sections 2, 9, 10.
- Form validates on blur, errors state problem + fix, no layout reflow, required field marked explicitly (Rules 29–31): done — Section 5.
- No fabricated urgency, scarcity, strikethrough price, or second tier (Strategy Section 6 scope discipline): confirmed absent throughout.
