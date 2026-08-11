---
name: demo-assets
description: Sourcing and art-directing imagery for demos and mockups - curated photo sources, licensing, local hosting, treatment consistency. Use whenever a demo or real page needs product/lifestyle imagery, or when tempted to draw abstract vector "product art".
---

# Demo Assets

Born from a real failure: our first demo shipped an abstract SVG headphone in the hero. It passed every lint, and it still read "AI-generated" at first glance. Imagery is where premium is won or lost — a page with flawless tokens and a fake-looking hero is not top tier.

## When to use

- Any demo, mockup, or real page that shows a product, a person, or a space.
- The moment you're tempted to draw an abstract SVG "product" — that's the signal to source a photograph instead.
- When assembling multiple images on one page (gallery, features, lifestyle).

## Rules

1. [LAW] Hero and product visuals are photographs (or true photoreal 3D renders) — never abstract vector art. Vector art standing in for the product is an automatic MAJOR genericness finding in art-director review. SVG remains correct for icons, diagrams, logos, and decorative motifs.
2. [FRAMEWORK] Photo sources for demos, in order of preference: Unsplash (unsplash.com), Pexels (pexels.com), Pixabay (pixabay.com) — free licenses, no attribution required for use in designs. Verify the license page at download time; terms change. For a real client, client photography beats all of these.
3. [LAW] Download assets locally into the project (`assets/img/` or `demo/img/`) — never hotlink. Hotlinking adds third-party requests (performance budget), breaks offline demos, and violates most stock licenses' redistribution terms less predictably than a local copy.
4. [FRAMEWORK] One art direction per page: one light temperature (all warm or all cool), one camera-angle family, consistent background tones. A mixed-temperature stock collage is the #1 "assembled from stock" tell.
5. [FRAMEWORK] Grade photos toward the brand palette — a subtle 5–10% tint/duotone overlay using brand tokens makes disparate photos read as one shoot.
6. [LAW] Serve AVIF/WebP with explicit `width`/`height` attributes, `srcset` for 1x/2x, `loading="lazy"` below the fold only — the motion-performance image rules apply fully to sourced photos.
7. [LAW] Alt text describes and sells: "AURI A1 earcup stitching in matte titanium", never "product image" or empty alt on meaningful photos.
8. [FRAMEWORK] Fictional demo brands: pick logo-free shots or crop visible real brandmarks out — a real logo on a fictional product page is a legal and honesty problem.
9. [FRAMEWORK] People photos: natural, doing the actual activity (wearing the headphones at a desk), diverse, no stock clichés (handshakes, pointing at screens, forced laughter at salad).
10. [FRAMEWORK] Payment/trust marks are never bordered text chips. Use a muted single-color text row with separators, or proper monochrome SVG marks at consistent height, at reduced emphasis (muted token) — they are reassurance, not content.

**Art direction judgment**

11. [FRAMEWORK] Frame every hero/product photo with rule-of-thirds subject placement — subject on the left or right third, never centered — so the opposite two-thirds stays clear as negative space for the headline/CTA overlay. Check this at sourcing time, before any scrim treatment is chosen. — composition-canon.md rule 32 (Shorthand, "The Rule of Thirds in Photography")
12. [FRAMEWORK] Orient subject gaze, pointing, or implied motion so its directional vector points inward toward the CTA, not off-frame or out of the composition — this extends the continuity principle (an established visual line should terminate at the next action) to photographic direction, not just graphic elements. — composition-canon.md rules 19 (NN/g Continuation) and 32 (rule-of-thirds), applied to photo-subject direction
13. [FRAMEWORK] Translate brand personality into shooting-language choices before sourcing, not after: name the light temperature, camera-angle family, and depth of field the brand's tone calls for (e.g. "warm, low-angle, shallow DOF" for approachable/premium vs. "cool, level, deep DOF" for clinical/precise), and hold every sourced photo to that spec. This is the brand-fit layer on top of rule 4's "one art direction per page" consistency requirement. — synthesis of this skill's rules 4-5 (art-direction consistency, brand-palette grading) with composition-canon.md rule 27 (visual weight factors as carriers of intent)
14. [LAW] Any headline or CTA text placed over a photo must clear WCAG SC 1.4.3 at the single worst-case pixel neighborhood it overlaps — ≥4.5:1 for body/UI-scale text, ≥3:1 for large text (≥18.5px regular or ≥24px bold) — measured against the lightest/darkest region under the text, never the image's average color. — canonical owner: composition-grids (its text-over-photo rules govern; on any numeric drift, defer there); provenance: composition-canon.md rules 10-11 (W3C WCAG 2.1 SC 1.4.3; NN/g)
15. [LAW] Scrim opacity starts at 20–40% black (dark scrim over a light/busy photo) or 40–60% white (light scrim over a dark photo); tune within that band per image and re-verify contrast at the worst-case point (rule 14) before shipping. Prefer an eased gradient scrim over a flat overlay when only part of the photo needs protection, and move the headline into a flat-color panel instead when even a tuned scrim can't clear contrast. — canonical owner: composition-grids (defer there on drift); provenance: composition-canon.md rules 12-13, 15 (Google Material Design imagery spec; Ahmad Shadeed; Smashing Magazine Part 2)

## Anti-patterns

- Abstract gradient blobs or concentric-circle "product art" standing in for the product photo.
- Hotlinked images from any CDN in a shipped demo.
- Five photos from five different shoots on one page.
- Payment badges as outlined text boxes (looks templated/cheap).
- Meaningful photos with decorative-only empty alt.
