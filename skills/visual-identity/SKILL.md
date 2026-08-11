---
name: visual-identity
description: "Manufacturing distinctiveness before it's checked - icon systems built to one grid/stroke/style, choosing which hue a brand owns before building its ramp, Ehrenberg-Bass distinctive-asset scoring, and motion as a named brand signature. Use when picking a brand's primary color, building or auditing an icon set, defining a squircle/corner-radius identity, or setting a signature spring/easing before wiring it into motion-performance's duration bands. Triggers - pick a brand color, our icons look inconsistent, ownable hue, distinctive assets, signature motion, brand color audit, icon set."
---

# Visual Identity

`art-director-review`'s logo-swap test *catches* genericness after the fact. This skill *manufactures* the distinctiveness that passes it — before the first icon is drawn or the first hue is locked. It owns hue **selection**, icon **systems**, and signature **motion**; `design-tokens` owns turning a chosen hue into an OKLCH ramp and storing the resulting values (radius, duration, easing) as tokens, and `motion-performance` owns the hard duration/performance ceiling and compositor-safety rules any signature motion must live inside.

## When to use

- Picking a brand's primary color — before `design-tokens` builds its 11–12 step ramp.
- Building or auditing an icon set, or noticing icons that look mismatched even though each one is "fine" individually.
- Deciding whether a squircle/superellipse corner treatment is real or a `border-radius` approximation.
- Defining a brand's signature motion (spring/easing) before converting it into `design-tokens`' duration/easing tokens, inside `motion-performance`'s ceiling.
- Running (or budgeting for) a distinctive-asset audit — deciding where to concentrate a rebrand's investment.
- Any time a build reaches for "trustworthy blue" or a stock icon library without first checking what the category already owns.

## Rules

**Icon systems**

1. [LAW] Pick one base grid (24×24 is the modern default; Carbon runs 16/20/24/32) and hold every icon to it — never mix icons drawn on different grids in one UI. — Material Design 3; Lucide; Heroicons
2. [LAW] Fix one stroke weight for the whole set (1.5, 2, or 2.5px) and never mix a second weight into the same interface. — Material Design 3; Carbon; Lucide; Bigeye
3. [LAW] Pick one style — outline or filled — as the default; reserve the other exclusively for a deliberate state signal (filled = active), never as accidental sourcing drift. — designsystems.com
4. [LAW] Set padding equal to the stroke weight (double it for hairline 1px strokes) and pad curved shapes more than square ones — a circle at the same bounding box reads smaller than a square. Verify with the squint test across the full set at once. — designsystems.com; Bigeye
5. [LAW] Corner radius on icon strokes/caps is a personality lever, not a neutral choice — pair it with the same radius token used on buttons and cards (`design-tokens` Rule 29's fixed radius scale, not a bespoke value); a mismatch sends two shape signals in one viewport. — Bigeye
6. [TREND-2026] If the brand mark uses continuous "squircle" corners, replicate the true superellipse curve (≈22.37% corner radius, ~60% smoothing) in any echoing icon container — a `border-radius` circular arc is a visibly different curve family side-by-side. `corner-shape`/`superellipse()` is Chromium-only (~65% reach) as of mid-2026; treat true squircles as a native/SVG-path technique on web, not a safe CSS default yet. — Squircle.js
7. [LAW] Once icons span more than ~2× in rendered size, use a distinct rendering per size band (optical sizing) rather than one master SVG scaled up — a naive 24px→48px scale looks thin and undersized next to same-size type. — Material Symbols; Apple SF Symbols
8. [LAW] One metaphor per icon, two as an absolute ceiling. Name icons by what they depict ("envelope"), not the action they trigger ("send-message") — an action-name silently licenses a second metaphor into the artwork. — Microsoft; Apple HIG; cross-search synthesis
9. [LAW] Default to an established library (magnifying glass = search, trash = delete) over custom-drawing; only commission a custom icon after confirming no existing symbol fits. Before shipping any genuinely new metaphor, run a free-association check — show the icon alone, no label, to 3–5 people outside the project and ask what it means; ship only if a majority name the intended concept unprompted. — Bigeye
10. [LAW] Choose a library by license fit before aesthetic fit: Lucide (ISC), Heroicons (MIT), Phosphor (MIT), Material Symbols (Apache 2.0) are unrestricted-commercial with no attribution UI required. Font Awesome Free caps near ~2,000 icons. The Noun Project's free CC BY tier requires visible per-icon attribution unless bought out ($4.99) or subscribed. — Lucide; Heroicons; Font Awesome; The Noun Project
11. [LAW] When a starter kit forces mixing sources, redraw the outliers into the dominant library's grid/stroke/cap spec rather than dropping them in unmodified — one mismatched icon is more visible than a set that's merely not the trendiest choice. — designsystems.com; Bigeye
12. [LAW] Icons clear the same 4.5:1 (text-equivalent) / 3:1 (non-text UI) contrast thresholds as body text and borders — icon color is not exempt as "decorative." See `design-tokens` Rule 15 for the shared thresholds. — Carbon; WCAG 2.2 SC 1.4.3/1.4.11

**Choosing the hue (before `design-tokens` builds the ramp)**

13. [LAW] Use the four classical relationships as accent-selection tools, not ramp tools: complementary for max-contrast CTA isolation; analogous for calm supporting surfaces; triadic for balanced multi-category vibrancy; split-complementary — same contrast power as complementary with less tension — as the default starting point. — IxDF
14. [LAW] Never use a pure complementary pair for extended body copy — equal-and-opposite saturation vibrates at running-text size; reserve complementary pairs for small, high-attention elements (a CTA against its surface) where the vibration reads as "pop." — IxDF
15. [LAW] Derive the accent from the primary's split-complement or complement, and supporting surfaces from its analogous neighbors — a mechanical, repeatable answer to "what's our accent color" that guarantees the max perceptual distance `design-tokens` Rule 12 needs for CTA isolation. — IxDF
16. [FRAMEWORK, single-agency methodology] Before finalizing a primary color, plot the top 10–20 direct competitors' primary hues on one wheel. If materially more than half cluster on one hue family, that hue is confirmed the *least* ownable place to stand, not the safest default. — Overmatter Design
17. [FRAMEWORK] Distinguish "category-conventional" from "category-required." A fintech brand can keep blue's trust association and still differentiate by pairing it with an accent no direct competitor has claimed (navy + copper, not navy + a second blue) — add a distinctive accent on the conventional base rather than abandoning the base. — Overmatter Design
18. [TREND-2026, durable] Once Rule 16's audit and Rules 20–21's Fame/Uniqueness scoring validate a pairing, record it in a brand-asset decision log (owner, date, supporting evidence) and require that log be checked — and a deliberate override signed off — before any future creative brief proposes swapping it. Dunkin's pink+orange has gone uncopied across decades and survived a 2019 refresh unchanged precisely because it was defended, not revisited each season. — Overmatter Design
19. [LAW] A real color trademark (Tiffany Blue, Cadbury purple) is enforceable and category-scoped but takes decades of exclusive, consistent use to secure — Tiffany Blue registered 1998 after use since 1845; Cadbury's purple only secured by UK High Court ruling in 2022. Don't let brand guidelines or marketing copy assert trademark-level or exclusive-ownership language for a color after a single launch — gate that claim behind the same sustained, category-exclusive prevalence Rule 22 requires, tracked over multiple years, not one campaign. — Mondaq/CLG Global

**Building distinctive assets (Ehrenberg-Bass)**

20. [FRAMEWORK] Score any candidate signature asset (color, shape, icon style, motif, motion) on two axes before committing budget: Fame (do category buyers link this cue to *any* brand) and Uniqueness (of those who do, what share links it to *you*). Only assets scoring well on both function as true distinctive assets — a color can be famous ("blue = tech") but unique to no one. — Ehrenberg-Bass / Romaniuk's Distinctiveness Grid
21. [FRAMEWORK] Expect most candidates to fail: an Ipsos × JKR study (5,000+ assets, 26,000+ consumers, built on Ehrenberg-Bass) found under 1-in-5 clear the "truly distinctive" bar. Don't spread a rebrand budget evenly across five candidate assets — identify which one or two already test well and concentrate reinforcement there. — Ipsos/JKR (attribute precisely, not an Ehrenberg-Bass Institute study directly)
22. [FRAMEWORK] A distinctive color (or icon style, or motion) must appear consistently across every touchpoint — buttons, icons, section backgrounds, email, ad creative — at sufficient prevalence to build the link. Route it through `design-tokens`' semantic/component token layer (`design-tokens` Rule 2) so every surface pulls the same value; a one-off hex on a single surface can drift out of sync silently. Confined to the logo alone, it never accumulates Fame no matter how ownable the hue is on paper. — Ehrenberg-Bass distinctive-asset framework

**Motion identity (inside `motion-performance`'s duration/easing ceiling)**

23. [LAW] A motion signature is two numeric knobs, not a vibe: spring response/stiffness (how fast it resolves) and damping ratio (how much it overshoots before settling). Lower response = snappier; lower damping fraction = bouncier. Apple's default spring (0.55 response / 0.825 damping) reads calmer than its interactive spring (0.15 / 0.86) — pick specific values and reuse them everywhere, the way a brand locks a hex value. — Apple Developer, SwiftUI spring API
24. [TREND-2026] Define two named, swappable springs, not one applied everywhere: a "hero" spring (low damping, visible overshoot, reserved for 1–2 signature moments) and a "workhorse" spring (calmer, every ordinary hover/toggle/transition) — Material 3 Expressive's Expressive/Standard scheme model. — Material Design 3 Expressive (May 2025)
25. [FRAMEWORK] Choose the archetype by brand positioning, deliberately: snappy-confident (fintech/productivity/B2B) pairs low duration with low-to-moderate bounce — quick elastic entrances, fast snap-back. Slow-luxurious (wellness/hospitality/premium DTC) pairs longer duration with near-zero bounce — overshoot on a luxury brand reads as cheap, not delightful. Don't default to whichever spring a component library ships with. — Octopus Marketing Agency
26. [LAW] A spring's response/damping (Rule 23) aren't a literal CSS duration — convert the spring's settle time (time to visually stop moving; a low-damping/bouncy spring settles well past its response value, so measure it empirically rather than assuming a fixed multiplier) into a fixed duration + easing-function pair, then store that pair as named tokens (`--duration-hero`/`--ease-hero`, `--duration-workhorse`/`--ease-workhorse`) via `design-tokens`' primitive→semantic→component pattern (`design-tokens` Rules 2, 31–33) — never leave the converted values as a magic number in component CSS. The stored duration must stay inside whichever system the project adopted per `motion-performance`: MD3's bands (Rule 3, 500ms hard ceiling) or the practitioner bands (Rule 5, 600ms hard ceiling) — never both on one project (`motion-performance` Rule 5), and never assume 600ms is the universal number. The compositor-only-property restriction (`motion-performance` Rule 1: `transform`/`opacity` only) applies regardless of whether the spring runs via CSS or a JS animation library. A "luxurious" 900ms transition that also animates `width`/`top` fails Core Web Vitals regardless of how on-brand the curve looks. — animations.dev (Emil Kowalski); motion-performance.md duration bands
27. [TREND-2026, single case study — existence proof, not a benchmark] Name and document the signature motion as one reusable pattern, not scattered per-component overrides — DIA named "the Pinterest Push" as one specific behavior with documented sub-components so any contributor could reproduce it without re-deriving the physics. — The Brand Identity, DIA/Pinterest case study
28. [FRAMEWORK] Apply the signature spring to the same *category* of event site-wide — all entrances use the brand's entrance spring, all exits its faster/less-bouncy exit spring, all hover feedback its micro-interaction spring — rather than hand-tuning each component. Repetition across contexts is exactly the Fame mechanism (Rule 22), applied to motion. — Romaniuk, "Building Distinctive Brand Assets" (Ehrenberg-Bass Institute), applied to motion
29. [TREND-2026] Reserve the bounciest end of the range for genuinely rare, high-attention moments (hero CTA press, checkout-success, first-run reveal); keep everyday chrome (nav hover, tab switch, field focus) on the calmer end. Overusing the expressive end everywhere flattens it back into generic noise. — Material Design 3 Expressive

## Anti-patterns

- Pulling icons from three or four free libraries without normalizing grid, stroke weight, or corner treatment — one mismatched icon reads as unpolished even to viewers who can't say why.
- Scaling a single 24px SVG up to 48px+ instead of using an optically-sized variant — the stroke reads thin and the icon looks smaller than surrounding same-size UI.
- Cramming two unrelated metaphors into one icon (a gear + a person for "user settings") because no single existing icon felt descriptive enough.
- Commissioning a custom icon before confirming no existing library symbol already covers the concept, or shipping a new metaphor without running the free-association check — ships a mark only the design team can decode.
- Treating icon color as exempt from contrast requirements because it "looks decorative" — same 4.5:1/3:1 floors as text and borders.
- Approximating an iOS-style squircle with plain `border-radius` — the curve families are mathematically different and the mismatch is visible side-by-side even when hard to name.
- Choosing a primary color by taste or a generic psychology lookup ("blue = trust") without first mapping where competitors already sit on the wheel — statistically likely to land in the category's most crowded, least differentiating space.
- Running a pure complementary fg/bg pair as extended body copy because it "pops" in a mockup — vibrates at reading size and fights legibility; reserve complementary pairs for small, high-attention elements like a single CTA.
- Declaring a color "ours" in brand guidelines or marketing copy after a single launch, or abandoning a validated pairing for a seasonal refresh without checking the decision log — both undercut the years of consistent, defended exposure real color ownership requires.
- Spreading rebrand budget evenly across color, shape, mascot, icon style, and motion instead of testing Fame/Uniqueness and doubling down on the one or two that already score well — ~85% of tested assets fail the distinctiveness bar.
- Shipping a signature color only on the logo and hero, then reverting to generic neutrals on every button, icon, and functional element — Fame is built by repeated exposure, not a single correct choice made once.
- Lifting a competitor's or inspiration site's exact spring/easing values instead of deriving one that expresses the brand's own character — this builds the competitor's brand-linkage on your site, not yours.
- Applying the bouncy "expressive" spring to every interaction site-wide because it demoed well once — burns through its own ability to signal "this moment is special."
- Letting a "luxurious" longer-duration signature drift past `motion-performance`'s ceiling or animate layout-triggering properties — an on-brand curve that also jank-induces CLS still fails Core Web Vitals and costs conversions.

## Checklist

- [ ] Every icon in the set shares one grid, one stroke weight, one style (outline or filled) (Rules 1–3)
- [ ] Padding scales with stroke weight and curve shape; squint test run across the full set (Rule 4)
- [ ] Icon corner radius matches the button/card radius token; squircles (if used) are true superellipse paths, not `border-radius` (Rules 5–6)
- [ ] Icons spanning >2× size use optical sizing, not one scaled master (Rule 7)
- [ ] No icon carries more than one metaphor; names describe the depiction, not the action (Rule 8)
- [ ] Any genuinely new (non-library) metaphor passed a free-association check — 3–5 outside viewers, unlabeled, majority name the intended concept — before shipping (Rule 9)
- [ ] Library chosen by license fit; attribution obligations (if any) are budgeted, not discovered later (Rule 10)
- [ ] Any icon sourced outside the dominant library is redrawn to its grid/stroke/cap spec, not dropped in as-is (Rule 11)
- [ ] Icon fg/bg pairs clear 4.5:1/3:1 same as text (Rule 12)
- [ ] Accent and supporting colors are mechanically derived from the primary's complement/split-complement/analogous neighbors, not picked by eye (Rules 13, 15)
- [ ] Complementary pairs are confined to small, high-attention elements (a CTA); no complementary pair runs as extended body copy (Rule 14)
- [ ] A competitive hue audit (top 10–20 competitors plotted) exists before the primary color is finalized (Rule 16)
- [ ] If the primary hue is category-conventional, a distinctive accent pairing is documented on top of it (Rule 17)
- [ ] A validated hue+accent pairing is recorded in a brand-asset decision log and requires sign-off to change, not silent seasonal drift (Rule 18)
- [ ] No brand material asserts trademark-level or exclusive-ownership language for a color without the sustained multi-year usage evidence to back it (Rule 19)
- [ ] Candidate distinctive assets (color, icon style, motion, shape) are scored on Fame × Uniqueness, and investment concentrates on the highest scorers (Rules 20–21)
- [ ] The chosen distinctive color appears across buttons, icons, backgrounds, and marketing surfaces — not just the logo (Rule 22)
- [ ] A named hero spring and a named workhorse spring are both defined, with specific response/damping values (Rules 23–24)
- [ ] The motion archetype (snappy-confident vs. slow-luxurious) is a deliberate positioning choice, documented, not a component-library default (Rule 25)
- [ ] The spring's converted settle-time duration is stored as a named token and stays inside the project's chosen ceiling (MD3 ≤500ms or practitioner bands ≤600ms, never blended), animating only `transform`/`opacity` (Rule 26)
- [ ] The signature motion is named and documented as one reusable pattern (Rule 27)
- [ ] The same spring is applied by event category (entrance/exit/hover) site-wide, not hand-tuned per component (Rule 28)
- [ ] The bounciest spring is reserved for rare hero moments; everyday chrome uses the calmer end (Rule 29)
