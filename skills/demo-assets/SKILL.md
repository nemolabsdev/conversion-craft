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

## Anti-patterns

- Abstract gradient blobs or concentric-circle "product art" standing in for the product photo.
- Hotlinked images from any CDN in a shipped demo.
- Five photos from five different shoots on one page.
- Payment badges as outlined text boxes (looks templated/cheap).
- Meaningful photos with decorative-only empty alt.
