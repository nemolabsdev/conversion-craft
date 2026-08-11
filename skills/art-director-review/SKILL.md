---
name: art-director-review
description: Adversarial design review rubric - hierarchy, spacing rhythm, typography, color discipline, states, genericness. Use to critique any built page before QA.
---

# Art Director Review

## When to use

- After a build is functionally complete and built on the `design-tokens`/`motion-performance` systems — this skill judges whether the result actually reads well; it does not re-derive those systems.
- Before `pixel-qa`'s mechanical gate. Art Director judges craft and taste (made checkable below); pixel-qa measures compliance (lint tools, WCAG checklist, Core Web Vitals). Run this one first.
- Any time a page or component "looks done" and needs an adversarial pass before it ships or hands off.
- Re-run after every fix round — a single BLOCKER or MAJOR finding sends the build back; there is no partial credit for "mostly there."

## Rules

**Severity taxonomy & exit criteria**

1. Tag every finding **BLOCKER**, **MAJOR**, or **MINOR** by shipping impact — never "looks off," "consider," or "nitpick." This is independent of a rule's evidence tag below ([LAW]/[FRAMEWORK]/[TREND-2026], which grades citation strength, not violation severity). BLOCKER: the page fails at its primary job — no single clear action, a stated numeric floor is missed, or a checkpoint breakpoint is broken outright. MAJOR: a real craft defect that reads as unfinished or erodes trust but doesn't stop the page from functioning. MINOR: a polish-level miss with no functional or trust impact. [LAW] — internal protocol (mirrors pixel-qa's PASS/FAIL discipline)
2. Exit criteria: **zero BLOCKER and zero MAJOR** findings to pass. MINOR findings may ship with a logged follow-up. A single BLOCKER or MAJOR routes the build back regardless of deadline pressure or how many other checks passed — do not average severity across findings. [LAW] — internal protocol

**Squint test — hierarchy**

3. Blur the page — defocus your eyes, or apply a 15–20px CSS blur to a full-page screenshot — at both 375px and 1280px. Exactly one element must still read as "the thing to click." Zero elements reading as primary, or two-plus competing for it, is a BLOCKER. [FRAMEWORK] — awards-visual-language.md R2 (single-source benchmark, snippet-verified)
4. Count hierarchy tiers (distinct size/weight/color-value combinations) per screen during the squint pass. More than 3 tiers means nothing reads as more important than anything else — flag the 4th+ tier as MAJOR. [FRAMEWORK] — layout-spacing.md R18
5. Hierarchy must be carried by size and value/saturation contrast against the background, not hue alone. Two same-size, same-weight elements distinguished only by hue (a blue link vs. a gray link at identical size/weight) fails the squint test even if it looks deliberate up close — MAJOR. [FRAMEWORK] — layout-spacing.md R19
6. The primary CTA's fill must be the single most saturated element in the viewport and clear ≥3:1 non-text contrast against its 1–2 nearest surrounding fills. A second co-equal saturated button on the same screen recreates the "no isolation" failure — MAJOR. [FRAMEWORK] — color-systems.md R17-18
7. Any animation on the page must pass "what does this help the user understand or do" — the clearest point of agreement between award-judging and conversion research. Decorative motion that fails the test is MAJOR regardless of polish. [LAW] — awards-visual-language.md R21-22 (cross-corroborated, Sources 8 & 14)

**Spacing rhythm audit**

8. Every section margin, padding, and gutter sits on the 8px base grid (8/16/24/32/40/48/64/80/96); the 4px sub-grid is for internal component spacing only (icon-to-label, button padding), never section layout. An off-grid section-level value (22px, 37px) is MAJOR. [FRAMEWORK] — layout-spacing.md R1-2
9. Measure inter-group spacing against intra-group spacing in every card/list/section cluster: inter-group must be ≥2× intra-group or the grouping won't read without borders/fills. Under 2× is MAJOR — independently corroborated by NN/g's Gestalt proximity research and a Smashing Magazine A/B test. [LAW] — layout-spacing.md R8
10. Check the whitespace between the value-proposition headline/copy block and its CTA: it must read visibly tighter than the space surrounding that combined block, so copy+CTA reads as one decision unit. Equal or looser spacing here is MAJOR. [FRAMEWORK] — layout-spacing.md R9 (single A/B-tested source)
11. Re-run the proximity check independently at 375px and 1280px. A grouping correct at one width can drift apart, or collide with an unrelated element, at the other — a breakpoint-specific proximity failure is MAJOR even when the other breakpoint passes. [FRAMEWORK] — layout-spacing.md R10

**Type scale conformance**

12. Confirm the page commits to one modular-scale ratio matched to context: 1.2 for dense/dashboard-adjacent sections, 1.25–1.333 for standard marketing sections, 1.5–1.618 for hero-driven editorial moments. An ad hoc mix of unrelated font sizes with no traceable ratio is MAJOR. [FRAMEWORK] — typography-craft.md R1
13. Every hierarchy step pairs a size change with a weight and/or color-contrast change — size-only hierarchy (bigger but same weight/color) is MAJOR. [FRAMEWORK] — typography-craft.md R3
14. Body/UI weight sits in 400–500; weights under 400 are reserved for display headlines ≥32px. Sub-400 weight on body/UI text at normal sizes is a BLOCKER — it compounds with any borderline contrast. [FRAMEWORK] — typography-craft.md R4
15. Never exceed 80 characters per line for body copy at any breakpoint, including the unconstrained wide column at 1280px — the WCAG-referenced hard ceiling. Over 80 CPL is a BLOCKER. [LAW] — typography-craft.md R6
16. Target 50–75 CPL for body copy, 66 as the single best optimum. Outside the sweet spot but still under 80 is a MINOR polish note, not a hard fail. [FRAMEWORK] — typography-craft.md R5
17. Cap the page at 2–3 font families total (1 display/heading, 1 body, optional 1 accent/mono). A 4th unjustified family is MAJOR. [FRAMEWORK] — typography-craft.md R20-22

**Token discipline**

18. Every color on the page traces to a three-layer system — primitive → semantic → component — not a raw hex dropped in ad hoc. A one-off color mapping to no documented role (an accent used exactly once, matching nothing else) is MAJOR: ask "what token is this" before approving it. [FRAMEWORK] — color-systems.md R12
19. Semantic tokens are named by function, not appearance (`color-danger`, not `color-red`). A page that would need color-token renaming after a rebrand or dark-mode remap fails this — MINOR by default, MAJOR if a theme swap is already scoped. [FRAMEWORK] — color-systems.md R13
20. Count distinct saturated (high-chroma) color regions on any transactional screen. More than 2–3 removes any single CTA focal point — MAJOR. [FRAMEWORK] — color-systems.md R27 (weak empirical backing, checkable heuristic only)

**State completeness**

21. Every interactive element (button, link, input, filter chip, nav item) shows a visibly distinct **hover, focus-visible, active/pressed, and disabled** treatment. Missing hover, active, or disabled is MAJOR; missing or ineffective focus-visible is a BLOCKER (see Rule 23). [FRAMEWORK] — motion-performance.md R11, R14
22. Hover feedback (color/elevation/underline) must register within 0.1s (100ms) of pointer-enter to read as instantaneous. Anything past 100ms is MAJOR. [LAW] — motion-performance.md R11 (NN/g, Response Times)
23. Focus indicators need ≥3:1 contrast against both adjacent states and a clearly visible area. A focus ring that exists in code but is invisible against its background is a BLOCKER, not a technicality. [LAW] — color-systems.md R7 (WCAG 2.4.13)
24. Disabled controls are distinguishable without relying on cursor style alone (reduced opacity/desaturation plus removal of hover/active affordances). A "disabled" button that still shows a hover treatment is MAJOR — WCAG's contrast exemption for disabled controls covers compliance only, not visual craft. [FRAMEWORK] — color-systems.md R4

**375px + 1280px integrity**

25. Audit every screen at exactly **375px** (mobile floor) and **1280px** (desktop content column) — the two non-negotiable checkpoints, not "responsive in general." A page that demonstrably works at only one is a BLOCKER regardless of how clean the intermediate breakpoints look. [LAW] — internal protocol
26. At 375px, re-verify every touch target hits the team's **44×44 CSS px** floor with **≥8px clearance** to the next target. WCAG 2.2 AA's legal minimum is 24×24px — the team ships 44. Under 44px is a BLOCKER; 24–44px is a MAJOR flagged explicitly as "clears legal floor, misses design floor." [LAW] — WCAG 2.5.8; layout-spacing.md R6-7, R24
27. At 1280px, re-verify the primary content container sits in the 1140–1320px max-width range rather than stretching full-bleed, and that line length hasn't drifted past 80 CPL in the wider column — either miss is MAJOR. [FRAMEWORK] — layout-spacing.md R20
28. Confirm the layout was built mobile-first (base styles stacked/unstyled, enhancements layered at wider breakpoints), not desktop-first-and-squeezed. Visibly cramped, desktop-derived spacing/type at 375px is MAJOR. [FRAMEWORK] — layout-spacing.md R21

**Genericness check**

29. Ask: "if the logo were swapped for a competitor's, would anything else on this page still look wrong?" If nothing else would need to change, the page fails the genericness check — MAJOR. Brand-reinforcing visual language is a scored criterion distinct from generic creativity. [FRAMEWORK] — awards-visual-language.md R29 (single-source, snippet-verified)
30. Flag unmodified default type/color choices shipped with zero customization on a premium/high-ticket page (stock Inter at default weights with no type-scale work, an unmodified framework default palette) as a genericness MAJOR — it reads as a decorated template, not a committed point of view. [TREND-2026] — typography-craft.md Anti-patterns ("Inter fatigue"); awards-visual-language.md R28
31. Scrollytelling narrative-before-CTA (a long-form scroll-driven sequence preceding the commercial ask) is acceptable only for high-consideration/high-ticket verticals, and only as a native scroll-driven reveal — content reachable without JS, motion respecting `prefers-reduced-motion`. Scroll-**hijacking** (any JS override of scroll position or speed) is a BLOCKER on every vertical — independently corroborated by NN/g usability testing and a documented relaunch (+40% bounce, −50% form conversion). [LAW] — motion-performance.md R35; layout-spacing.md R30 (scroll-hijack ban, multi-source); awards-visual-language.md Trends table (scrollytelling scope — apply narrowly)

**Composition & optical judgment**

32. Figure-ground check on any text-over-image: any headline/label placed over a photo needs a genuine contrast break from the image below it — value/color contrast, shadow, blur, or scrim — because stacking order alone doesn't trigger the automatic foreground/background split. Measure contrast at the single worst-case pixel neighborhood the text overlaps (lightest region under dark text, darkest under light text), never the image's average color, and confirm it clears WCAG SC 1.4.3: ≥4.5:1 for body/UI text, ≥3:1 for large text. No figure-ground treatment at all is MAJOR; a treatment present but failing the measured threshold is a BLOCKER — same severity logic as the focus-ring rule (R23). [LAW] — canonical numbers: composition-grids (audit against that skill); provenance: composition-canon.md rules 9-11 (NN/g Figure/Ground; W3C WCAG 2.1 SC 1.4.3)
33. Optical-alignment check: run an optical, not just mathematical, pass on icon+text pairings, centered glyphs, and nested rounded containers. Pointed/asymmetric shapes (play triangles, arrows, checkmarks) sitting at their bounding-box center but visibly leaning is a MINOR polish miss in isolation, escalating to MAJOR when the same un-corrected pattern repeats across multiple primary UI elements. Verify with a squint pass (R3) plus a rotation/inversion check on any asymmetric icon. [FRAMEWORK] — composition-canon.md rules 20-26 (Overshoot/typography; Apple HIG icon guidance; ringcentral-ux optical-alignment; baraa.app practitioner heuristics)
34. Visual-balance check — intentional vs. accidental asymmetry: for any asymmetric composition (hero split, unequal card weights, off-center visual), judge balance by eye against the compounding weight factors — size, color/value contrast, texture/density, isolation, distance from center — not by area ratio alone. It passes when removing or resizing any single element visibly tips the composition; it fails as MAJOR when elements could be nudged freely with no perceptible change, or when the minority-weight side of a hero split (e.g. the 30% of a 70/30 split) is too pale/low-contrast to actually counterbalance the dominant side despite a textbook-correct ratio. [LAW] — composition-canon.md rules 27-31 (Smashing Magazine, "Design Principles: Compositional Balance")

## Checklist

**Severity**
- [ ] Every finding tagged BLOCKER/MAJOR/MINOR by shipping impact, not evidence tag (R1)
- [ ] Zero BLOCKER + zero MAJOR before sign-off; no averaging across findings (R2)

**Squint test**
- [ ] Blurred at 375px and 1280px, exactly one primary action reads (R3)
- [ ] ≤3 hierarchy tiers per screen (R4)
- [ ] Hierarchy carried by size/value contrast, not hue alone (R5)
- [ ] Primary CTA is the most saturated element, ≥3:1 vs. neighbors, only one primary button per screen (R6)
- [ ] Every animation passes the "what does this help the user do" test (R7)

**Spacing rhythm**
- [ ] All section spacing on the 8px grid; 4px reserved for component internals (R8)
- [ ] Inter-group spacing ≥2× intra-group spacing (R9)
- [ ] Copy+CTA whitespace tighter than surrounding whitespace (R10)
- [ ] Proximity re-checked independently at 375px and 1280px (R11)

**Type scale**
- [ ] One modular ratio declared and matched to context (R12)
- [ ] Every hierarchy step pairs size with weight/color (R13)
- [ ] Body/UI weight 400–500; sub-400 only on display ≥32px (R14)
- [ ] Body CPL never exceeds 80 at any breakpoint (R15)
- [ ] Body CPL targets 50–75, 66 optimum (R16)
- [ ] ≤2–3 font families total (R17)

**Token discipline**
- [ ] Every color traces to primitive→semantic→component, no untraceable one-offs (R18)
- [ ] Semantic tokens named by function, not appearance (R19)
- [ ] ≤2–3 saturated color regions per transactional screen (R20)

**State completeness**
- [ ] Hover, focus-visible, active/pressed, disabled all present and distinct (R21)
- [ ] Hover feedback registers within 100ms of pointer-enter (R22)
- [ ] Focus ring clears ≥3:1 contrast and is visible (R23)
- [ ] Disabled state distinguishable beyond cursor style (R24)

**375px + 1280px integrity**
- [ ] Both checkpoints audited independently, not just "responsive in general" (R25)
- [ ] 375px touch targets ≥44×44px, ≥8px clearance (24px legal floor noted, not shipped) (R26)
- [ ] 1280px container 1140–1320px, CPL still ≤80 (R27)
- [ ] Layout confirmed mobile-first, not squeezed-down desktop (R28)

**Genericness**
- [ ] Logo-swap test run; page fails if nothing else would need to change (R29)
- [ ] No unmodified stock type/color defaults on a premium page (R30)
- [ ] Scroll storytelling (if present) is native-reveal only, never hijacked (R31)

**Composition & optical judgment**
- [ ] Text-over-image has a genuine figure-ground break, not just stacking order; worst-case contrast clears WCAG SC 1.4.3 (R32)
- [ ] Icon+text pairings and asymmetric glyphs pass an optical (not just mathematical) alignment check (R33)
- [ ] Asymmetric compositions judged balanced by eye against weight factors, not by area ratio alone (R34)

## Anti-patterns

- **Approving a page because it "looks intentional" up close, without ever running the actual blur/squint test.** Close-up review misses hierarchy failures that only show up when detail drops away. Instead: blur the screenshot (or defocus your eyes) at both checkpoints before signing off, every time.
- **Reviewing only at desktop width and treating mobile as "probably fine."** Proximity, hierarchy, and touch targets all fail independently per breakpoint. Instead: run the full rubric at 375px and 1280px separately — a pass at one is not evidence for the other.
- **Letting a one-off "just an accent" color slip through with no token behind it.** The first exception becomes the second, and the palette drifts into an untraceable pile of hex values. Instead: ask "what token is this" on every color and reject the ones with no answer.
- **Shipping hover states and calling it done.** Hover is the state everyone remembers to build; focus and disabled are the ones that get skipped and are the most consequential to miss. Instead: verify all four states exist and are visibly distinct before calling any interactive element finished.
- **Citing bento-grid dwell-time stats, unsourced CTA-color lift percentages, or other unverified marketing figures as evidence in a review.** This rubric runs on checkable rules, not recycled listicle numbers — see color-systems.md and layout-spacing.md's own flags on these claims. Instead: cite this skill's numbered rules and their sources, nothing else.
- **Copying award-site cinematic scroll-hijacking wholesale as "bold art direction."** Native scroll-driven reveals are allowed; overriding scroll position or speed is not, on any vertical — a documented relaunch saw bounce rise 40% and form conversion drop by half. Instead: build the same narrative moment with `animation-timeline`/`IntersectionObserver` reveals that never touch scroll physics.
- **Treating "not generic" as a vibe check instead of the logo-swap test.** "It feels premium" is not a finding. Instead: ask concretely what would still look wrong if the logo changed, and write down the answer.
- **Averaging severity — "three MINORs and one MAJOR, close enough to ship."** There is no partial credit in this rubric. Instead: any single BLOCKER or MAJOR sends the build back, full stop, regardless of how many MINORs or passes surround it.
- **Approving a type scale because each individual size "looks fine in isolation."** Sizes that don't trace to one ratio read as arbitrary once placed on the same screen, even if none look wrong alone. Instead: name the ratio, verify every step derives from it.
- **Trusting z-index alone to make text-over-image legible, with no measured contrast check at the worst-case pixel.** Stacking order doesn't trigger figure-ground on its own, and a scrim that "looks fine" against one region of a photo can fail badly under the actual text. Instead: find the lightest/darkest pixel neighborhood the text overlaps and measure against WCAG SC 1.4.3 there, not the image average.
- **Judging a hero split by area ratio alone, ignoring whether the minority side actually carries enough visual weight to counterbalance the majority.** A textbook 70/30 or 60/40 ratio can still read as lopsided if the smaller side is pale and low-contrast. Instead: weigh size, color/value contrast, texture, and isolation together, and confirm by eye that removing the smaller element would visibly tip the composition.

## Plugin context

Installed as the `conversion-craft` plugin, the lint tools live at `${CLAUDE_PLUGIN_ROOT}/tools/spacing-lint.mjs` and `${CLAUDE_PLUGIN_ROOT}/tools/contrast-check.mjs`; inside this repo they are at `tools/`. Both must exit 0 either way.

## Imagery & trust-surface addendum (learned from AURI demo review)

- Hero/product visual that is abstract vector art instead of photography → MAJOR (genericness): see `demo-assets` skill. SVG is for icons/diagrams/motifs only.
- Payment or trust marks rendered as bordered text chips → MAJOR: muted text row or monochrome marks per `demo-assets` R10.
- Any text sitting on a non-default background (inverse footer, tinted section) whose fg/bg pair has NO declared `@contrast` assertion → MAJOR: undeclared pairs are unverified pairs.
- Review the RENDERED page, not only the code: every section including the footer, at 375px and 1280px minimum. A section you did not see rendered is a section you did not review.
