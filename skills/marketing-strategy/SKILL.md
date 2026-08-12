---
name: marketing-strategy
description: Positioning, offer architecture and page-level persuasion strategy. Use BEFORE building - to define who the site sells to and why - and after, to audit the story.
---

# Marketing Strategy

## When to use

- Before any hero copy, wireframe, or section is built — positioning runs first; a page built without it reads as generic and could belong to any competitor.
- When mapping a traffic source (cold ads, SEO, retargeting, brand search, email) to an awareness stage, so the page structure matches what that visitor already knows.
- When defining the offer itself: lead offer vs. core offer vs. order bump, pricing-tier presentation, and the page's single conversion goal.
- Before handing copy off to whoever writes it — package a message hierarchy, not adjectives or a mood board.
- After a first draft exists — audit every section against "does this earn its place"; run this as a build gate, not a nice-to-have.

## Rules

**Positioning exercise (Dunford 5-step, run in order)**

1. [FRAMEWORK] Run Dunford's 5-step positioning exercise in exact order before writing any hero
   copy: (1) list every true competitive alternative — what the visitor would do/buy/use if this
   product didn't exist, including "do nothing"/spreadsheet/manual process, not just named direct
   competitors; (2) list the unique attributes/capabilities the product has that those
   alternatives don't; (3) translate each attribute into customer-facing value ("attribute X means
   you get outcome Y"); (4) name the specific characteristics of the best-fit customer who cares
   most about that value (role, company size, trigger event — not "everyone"); (5) pick the market
   category that makes the value obvious on first read. Output one reconciled positioning
   statement, not five orphaned lists. — aprildunford.com
2. [FRAMEWORK] Treat step 1 as failed if the competitive-alternatives list has fewer than 2
   entries or omits "do nothing"/status quo — most weak positioning traces to skipping straight to
   a feature comparison against 1-2 obvious direct competitors. — aprildunford.com
3. [FRAMEWORK] Pressure-test the market-category choice (step 5) with a swap test: reread the
   headline with a much broader category label substituted, then a much narrower one. If the
   headline still basically makes sense either way, the category is too vague to anchor the
   reader's comparison set — return to step 5. — aprildunford.com
4. [FRAMEWORK] Require the exercise as a written artifact — a 5-row positioning canvas, one row
   per step — checked in alongside the creative brief before wireframes start, not a discussion
   that stays verbal. — aprildunford.com (5-component structure confirmed directly; the full
   10-step book process is not independently verified — see copy-strategy.md Open Questions)

**Awareness stage → page structure (Schwartz)**

5. [FRAMEWORK] Identify the primary traffic source's awareness stage before drafting anything,
   using Schwartz's five stages: Unaware (doesn't know they have the problem) → Problem-Aware
   (knows the problem, not the solution category) → Solution-Aware (knows the solution category,
   not the product) → Product-Aware (knows the product, hasn't decided) → Most-Aware (knows the
   product, needs only the offer/reason to act now). Default mapping by channel: cold
   social/display ≈ Unaware/Problem-Aware; SEO/content ≈ Problem/Solution-Aware;
   competitor-comparison search/retargeting ≈ Product-Aware; brand search/email list/returning
   cart ≈ Most-Aware. — kingeshop.com / Schwartz, *Breakthrough Advertising* (source page
   unreachable this research pass; stage model and mapping rest on established secondary
   knowledge — see copy-strategy.md Open Questions). For B2B traffic specifically, `b2b-landing`
   extends this same five-stage model with committee-driven intent mapping and CTA language
   (its Rule 31) — read that skill alongside this one when the buyer is a multi-person committee
   rather than a single consumer.
6. [FRAMEWORK] For Unaware/Problem-Aware traffic: open with a problem-first hook, hold the product
   name out of the first line, and place objection-handling/named-competitor comparison below an
   educational section rather than above the fold. For Product-Aware/Most-Aware traffic: lead with
   product name + differentiator + the offer itself, and move objection-handling and comparison
   content above the fold. One page structure built for all traffic sources under-serves whichever
   stage it wasn't designed for. — kingeshop.com
7. [FRAMEWORK] Default section order for a primary sales page, before awareness-stage
   adjustments: Nav → Hero (headline + subhead + primary CTA) → Social proof → secondary CTA →
   Features/benefits (each section resolves one objection) → repeat CTA → FAQ/objections → Footer.
   Record any deviation as a deliberate strategy-brief decision, not a silent default. —
   julian.com
8. [FRAMEWORK] When one page must serve mixed-awareness traffic (e.g. cold ads and retargeting
   landing on the same URL), default the structure to the colder stage (problem-first per Rule 6)
   and let Product/Most-Aware visitors self-select down via a comparison block or pricing anchor —
   record this as a stated tradeoff in the strategy brief, not an oversight, unless true
   per-segment personalization is in scope (Rule 24).

**Offer architecture**

9. [FRAMEWORK] Define in writing, before build starts: (a) the lead offer — what earns the
   click/signup, often free or low-commitment; (b) the core offer — the actual paid product/
   service the page exists to sell; (c) any order bump/upsell — a single add-on offered at the
   moment of highest commitment, never stacked with a second competing upsell; (d) the page's one
   primary conversion goal. An undefined offer architecture accumulates competing CTAs by default
   as sections get added over time.
10. [FRAMEWORK] Ship exactly one primary offer and one primary CTA per page. Multi-offer/
    multi-link pages measurably underperform single-offer pages; direction is consistent across
    sources, magnitude is source-dependent (13.5%→10.5% single-link advantage in one dataset,
    ~266% relative lift in another) — treat the direction as reliable, re-verify magnitude locally
    before citing a number externally. — seosherpa.com
11. [FRAMEWORK] If a secondary offer must share the page (e.g. "Buy now" and "Book a demo"), make
    it visually subordinate to the primary offer (secondary button style, not an equal-weight
    competing button) and name which offer is primary in the strategy brief before copy is
    written — don't let button placement decide this implicitly.
12. [TREND-2026] Default to charm pricing (.99/.97 endings) for price-sensitive, transactional/
    low-consideration offers; default to round numbers ($50, $100) for premium/luxury positioning
    instead. A .99 ending on an offer positioned as premium in Rule 1's market-category step
    undercuts that positioning. Cited lift range for charm pricing is roughly 24-35% vs. round
    numbers, from pre-2010 studies — note rising regulatory scrutiny of psychological pricing in
    the EU and some US states. — shno.co
13. [TREND-2026] When presenting multiple pricing tiers, place the target tier next to a visible
    reference point — either a struck-through higher list price ("was $X, now $Y") or a
    higher-priced tier alongside it. Cited anchoring effect on perceived value is roughly +32%. —
    shno.co
14. [TREND-2026] If using a decoy pricing tier, price it at the same price as the target tier (or
    higher) while stripping at least one named feature/benefit the target tier keeps — the decoy
    must be strictly worse on a checkable dimension, never merely "priced awkwardly," and must sit
    directly beside the tier you want chosen. Ariely's Economist test: 32%→84% chose the target
    tier once this kind of decoy was added — validate locally rather than assume the lab-study
    magnitude transfers; effect size is reported to shrink with realistic, non-lab stimuli. —
    growmeorganic.com, shno.co

**Message hierarchy handoff (to copy)**

15. [FRAMEWORK] Hand off copy work as a structured message hierarchy, never adjectives or a mood
    board: (1) **One Thing to Remember** — a single sentence the visitor should be able to repeat
    back after leaving the page, tied directly to the value from positioning step 3 (Rule 1); (2)
    **Three Supporting Proofs** — the three strongest, most specific, checkable reasons to believe
    the One Thing (a number, a named mechanism, a named comparison — not adjectives); (3) **One
    Action** — the single next step the page asks for, matching the offer architecture's primary
    conversion goal (Rule 9). A brief carrying more than one "big idea" or more than three proofs
    hasn't finished prioritizing.
16. [FRAMEWORK] Test each of the three supporting proofs with the specificity test before
    handoff: could a competitor paste this proof onto their own page unchanged? If yes, it's an
    adjective wearing a proof's clothes — replace it with a checkable number, named mechanism, or
    named comparison. — marketingexamples.com (moderate confidence; exact "falsifiability" framing
    not independently re-verified — see copy-strategy.md Open Questions)
17. [FRAMEWORK] Confirm the One Thing to Remember passes the headline test before handoff: if a
    visitor reads only this one line, do they know exactly what is being sold and to whom? Reject
    anything that could be pasted onto a competitor's page unchanged (e.g. "Improve your
    workflow"). — julian.com

**Section-must-earn-its-place audit**

18. [FRAMEWORK] Audit every section of a drafted page against three questions: does it advance
    the One Thing to Remember, resolve a specific objection (Rule 19), or move the visitor toward
    the One Action? A section answering none of the three is cut, not kept "for completeness." —
    julian.com Desire/Labor/Confusion applied at the section level
19. [FRAMEWORK] Map the visitor's objection sequence before auditing sections, in this cognitive
    order: (1) legitimacy — "is this real?"; (2) relevance — "does this work for my situation?";
    (3) mechanism — "how does it actually work?"; (4) results — "are the numbers real?"; (5) peer
    validation — "what do others say?"; (6) pricing/terms transparency; (7) risk — "what if I get
    burned?" A page whose sections answer only 2-3 of these converts only the visitors already
    warmest coming in. — instantpress.co
20. [FRAMEWORK] Assign every section on the page to exactly one objection number from Rule 19, or
    to the offer/CTA itself. Two sections mapped to the same number are redundant — cut the
    weaker one. A number mapped to zero sections is a coverage gap — add or merge content to
    close it. — instantpress.co, applied as an audit method
21. [FRAMEWORK] Sequence legitimacy (1) and relevance (2) signals within the first screen; place
    mechanism (3) and results (4) content mid-page; place risk-reversal (7) directly beside or
    below the final CTA, never buried only inside an FAQ. — instantpress.co, julian.com
22. [FRAMEWORK] Cap primary-page feature/benefit sections at 3-6 blocks. Each block must contain
    exactly three elements: a benefit-stated header (not a bare feature label, e.g. "Ship in half
    the time" not "Faster builds"), one short paragraph tying feature → benefit → the objection
    number it resolves (Rule 19-20), and one supporting product image or GIF (not stock/abstract
    art). A block missing any of the three, or reusing a stock image, fails the check. If the
    objection map from Rules 19-20 needs more than 6 distinct sections to reach full coverage,
    that's a signal the offer is too broad for one page — split into a dedicated page per
    segment/objection cluster instead of lengthening the primary page indefinitely. — julian.com
23. [FRAMEWORK] Every FAQ entry must map to one specific unresolved objection from Rule 19 —
    treat the FAQ block as a targeted objection-handling tool, not a generic-info dump ("What is
    your company?" filler). Cut any entry that doesn't trace to a numbered objection. —
    instantpress.co
24. [TREND-2026] Where the platform can serve different hero copy per traffic-source/awareness-
    segment (ads vs. organic vs. retargeting), treat it as an extension of Rules 5-8 — test full
    section-reordering, not just word swaps. No controlled-study source confirms a reliable lift
    for this practice yet; log any such build as an experiment in the strategy brief, not an
    assumed win. — copy-strategy.md Trends 2024-2026 (gap, no controlled source found)

## Checklist

**Positioning**
- [ ] 5-step Dunford exercise completed and written up as a canvas before wireframes started (Rules 1, 4)
- [ ] Competitive-alternatives list has ≥2 entries and includes "do nothing"/status quo (Rule 2)
- [ ] Market category passed the broad/narrow swap test (Rule 3)

**Awareness stage → structure**
- [ ] Primary traffic source's awareness stage identified and documented (Rule 5)
- [ ] Page structure matches the identified stage: problem-first hook for cold traffic, or product+offer lead for warm traffic (Rule 6)
- [ ] Default section order used, or deviation explicitly recorded (Rule 7)
- [ ] Mixed-traffic pages default to the colder stage's structure, with the tradeoff stated in the brief (Rule 8)

**Offer architecture**
- [ ] Lead offer, core offer, order bump, and single conversion goal are all named in writing (Rule 9)
- [ ] Exactly one primary offer and one primary CTA on the page (Rule 10)
- [ ] Any secondary offer is visually subordinate and named as secondary in the brief (Rule 11)
- [ ] Pricing style (charm vs. round) matches the market-category positioning, not chosen by habit (Rule 12)
- [ ] Multi-tier pricing shows a visible reference/anchor point next to the target tier (Rule 13)
- [ ] Any decoy tier is priced at or above the target tier's price AND missing ≥1 named feature the target tier has (Rule 14)

**Message hierarchy handoff**
- [ ] Copy brief delivered as One Thing / Three Proofs / One Action — not adjectives (Rule 15)
- [ ] Each of the three proofs passes the "could a competitor paste this unchanged?" test (Rule 16)
- [ ] The One Thing to Remember passes the headline test (Rule 17)

**Section audit**
- [ ] Every section answers yes to at least one of: advances the One Thing, resolves an objection, moves toward the One Action (Rule 18)
- [ ] Objection sequence (7 items) mapped before auditing sections (Rule 19)
- [ ] Every section assigned to exactly one objection number or the offer/CTA; duplicates cut, gaps filled (Rule 20)
- [ ] Legitimacy/relevance signals above the fold; mechanism/results mid-page; risk-reversal beside the final CTA (Rule 21)
- [ ] Feature/benefit sections capped at 3-6, each with a benefit-stated header + one paragraph naming the objection it resolves + one supporting product image/GIF (no stock art); overflow becomes a separate page, not a longer one (Rule 22)
- [ ] Every FAQ entry traces to a numbered objection (Rule 23)
- [ ] Any per-segment dynamic copy is logged as an experiment, not shipped as an assumed win (Rule 24)

## Anti-patterns

- **Writing the headline before running the positioning exercise.** Produces confident-sounding
  but generic copy ("Reimagine the future of X") that could be pasted onto a competitor's page
  unchanged. Instead: complete all 5 Dunford steps and write the positioning canvas first —
  headline-writing is the last step, not the first.
- **Listing only 1-2 named direct competitors as the "competitive alternative."** Misses that most
  visitors' real alternative is doing nothing, using a spreadsheet, or hiring a person —
  positioning against the wrong alternative set produces value claims nobody who matters actually
  compares against. Instead: force "do nothing"/status quo onto the list before adding named
  competitors.
- **Shipping one page structure for all traffic without identifying the awareness stage.** A
  problem-first educational hook wastes a Most-Aware visitor's time; a product-name-first hook
  confuses an Unaware visitor who doesn't know the problem category yet. Instead: identify the
  dominant channel's awareness stage first (Rule 5) and structure the page — or split into
  stage-specific pages — accordingly.
- **Letting the offer architecture stay implicit.** Sections and CTAs accumulate over time until
  the page has 3 competing "primary" buttons with no stated hierarchy. Instead: name the lead
  offer, core offer, upsell, and single conversion goal in writing before build starts (Rule 9),
  and revisit it whenever a new CTA is proposed.
- **Defaulting to charm pricing (.99 endings) on an offer positioned as premium.** Directly
  contradicts the market-category choice from the positioning exercise — a $499.99 price on a
  luxury-positioned product reads as value-hunting, not premium. Instead: match pricing style to
  positioning (Rule 12), and use round numbers for premium tiers.
- **Handing copy a mood board or a list of adjectives ("bold," "trustworthy," "innovative")
  instead of a message hierarchy.** Adjectives don't survive contact with a blank page — the
  writer either invents the strategy themselves or the page comes back generic. Instead: hand off
  One Thing to Remember + Three Proofs + One Action, each proof passing the specificity test
  (Rule 16).
- **Keeping a section "because it's good content" when it maps to no objection and advances
  nothing.** Section bloat dilutes the One Thing to Remember and adds scroll distance between hero
  and CTA. Instead: run the section audit (Rule 18) on every draft; cut anything that doesn't
  answer yes to at least one of the three questions.
- **Treating the FAQ as a generic company-info dump** ("What is your company?", "Where are you
  located?") instead of an objection-resolution tool. Wastes the one section visitors reach
  specifically because they still have doubts. Instead: map every FAQ entry to a numbered
  objection from Rule 19; delete entries that don't trace to one.
- **Trying to make one page answer every objection for every awareness stage at once.** Produces
  an endless-scroll page that under-serves everyone rather than converting anyone well. Instead:
  cap primary-page sections at 3-6 (Rule 22) and split overflow into a dedicated page per segment
  or objection cluster.
- **Assuming AI-personalized/dynamic hero copy is a proven lift because it's trending.** No
  controlled source in current research confirms a reliable effect size for this practice.
  Instead: treat any per-segment dynamic copy build as a logged experiment against a control, not
  a default best practice (Rule 24).
