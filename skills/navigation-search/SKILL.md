---
name: navigation-search
description: Navigation, IA, search and product listing filters for e-commerce. Use when designing headers, menus, category pages, or search.
---

# Navigation, IA & Search

## When to use

- Designing or auditing the site header: primary nav, mega menus/dropdowns, mobile hamburger nav.
- Building category/product-listing pages: taxonomy depth, breadcrumbs, faceted filters, sort.
- Implementing site search: autocomplete/instant-search, scoped search, zero-results recovery.
- Deciding how much to invest in search vs. browse for a given catalog shape.

## Rules

**Header & primary navigation**

1. [FRAMEWORK] Open a hover-triggered dropdown/mega-menu panel only after the pointer is stationary for 300–500ms; open the panel within ~100ms once triggered; close it within ~100ms of the pointer leaving both trigger and panel for ~500ms. Independently corroborated by NN/g and Baymard (not a regulatory requirement — no WCAG citation applies to this timing). — NN/g, Baymard
2. [FRAMEWORK] Default to hover-triggered mega/dropdown navigation as primary nav, not a novel pattern — 88% of top US e-commerce sites already do this. — Baymard
3. [FRAMEWORK] Run a flicker test on every hover-triggered panel: pass the pointer across the trigger in under 200ms (well below the 300ms open threshold in Rule 1) and confirm the panel never opens. Any visible open/close flash is a failed timer implementation, not a cosmetic issue. — Baymard
4. [FRAMEWORK] Style the user's current top-level section distinctly from siblings (color, underline, or weight) to signal "where am I" — 95% of sites fail to do this, the single most commonly failed defect in Baymard's navigation benchmark. — Baymard
5. [FRAMEWORK] Activate submenus on click/tap by default, with hover as a progressive enhancement only — hover-only excludes touchscreen and keyboard-only users. — NN/g
6. [FRAMEWORK] Cap cascading flyout-from-flyout submenus at one tier; past that depth switch to a mega-menu panel or a dedicated category landing page. — NN/g

**Sticky header**

7. [FRAMEWORK] Keep primary nav, search entry, and cart access reachable without a scroll-to-top on any page taller than one viewport — implement as sticky or partially sticky, especially on small screens. — NN/g

**Mobile navigation**

8. [FRAMEWORK] Never hide primary navigation behind a hamburger icon at desktop/tablet widths (≥768px) — keep it visible in the header; hidden nav roughly halves discoverability and increases task time, with a larger effect on desktop than on phones. — NN/g
9. [FRAMEWORK] Where a hamburger is used (narrow mobile only), use the standard 3-equal-bar glyph in its conventional top-corner position — non-standard icons/placement reintroduce recognition failures. — NN/g

**Breadcrumbs**

10. [FRAMEWORK] Ship breadcrumbs on every desktop product page — 20% of desktop sites still omit them; treat omission as a defect. — Baymard
11. [FRAMEWORK] Ship breadcrumbs on every mobile product page too — 65% of mobile sites omit them, a far larger gap than desktop. — Baymard
12. [FRAMEWORK] Show the complete category hierarchy in mobile breadcrumbs, not a shortened path — 36% of mobile sites that do implement breadcrumbs still fail this. — Baymard
13. [FRAMEWORK] Implement mobile breadcrumbs as a single horizontally-swipeable line, not multi-line wrap or mid-path ellipsis; if truncating, clip the root/start (keep the current-page end visible) with a visible partial-crumb cue that more is scrollable. — Baymard
14. [LAW] Size breadcrumb tap targets to a 44×44 CSS px design floor (Apple HIG; Material 48dp) with ≥8px clearance between adjacent crumbs. WCAG 2.2 AA's legal minimum is 24×24 px (close to Baymard's own ~7×7mm mobile guidance) — ship 44, not 24. — WCAG 2.5.8, Baymard/Apple HIG

**Category taxonomy depth**

15. [FRAMEWORK] Subdivide a category once it exceeds ~10 sibling items/subcategories at that level — longer lists measurably overwhelm users in nav context. — Baymard
16. [FRAMEWORK] Don't ship a leaf category with fewer than ~10 products; merge it up a level instead of shipping an under-populated shelf. — Baymard
17. [FRAMEWORK] Make parent/category-header labels clickable to their own overview page, not just their children — 33% of sites force a subcategory click when the user wanted the parent overview. — Baymard

**Faceted filtering (product listing pages)**

18. [FRAMEWORK] Ship at minimum these five facets, then layer category-specific attributes on top: Price (range), Brand, Average Rating, Size, Color. — Baymard
19. [FRAMEWORK] Enforce facet/list-item parity both directions: every attribute shown on a product's list-item card must have a matching filter, and vice versa — 38% of sites violate this. — Baymard
20. [FRAMEWORK] Support multi-select within a single facet (e.g., Brand = Nike OR Adidas) — 14–15% of sites wrongly restrict a facet to single-select. — Baymard
21. [FRAMEWORK] Keep all applied filters visible as a persistent, individually-removable chip/tag summary above or beside the results grid — 20–28% of sites fail to surface this. — Baymard
22. [FRAMEWORK] Use real-time filtering (no submit step) on desktop; require an explicit "Show X Results" apply button on mobile instead of live-updating per tap. — Baymard
23. [LAW] Size every interactive filter control (checkbox row, chip, toggle) to a 44×44 CSS px design floor (Apple HIG; Material 48dp) with ≥8px clearance on mobile. WCAG 2.2 AA's legal minimum is 24×24 px — ship 44, not 24. — WCAG 2.5.8, Baymard/Apple HIG

**Sort**

24. [FRAMEWORK] Ship at minimum four sort types on every listing page: Price Low-to-High, Price High-to-Low, User Ratings, Newest/Latest — 64–69% of sites ship an incomplete set. — Baymard
25. [FRAMEWORK] Default sort to a diversity-aware "Relevance"/"Featured" algorithm, never pure Price, Alphabetical, or single-signal Best-Selling — naive defaults misrepresent catalog breadth. — Baymard
26. [FRAMEWORK] Acceptance test for default-sort diversity: any product type that is >10% of the overall result set must appear within the first 20 results on desktop (first 10 on mobile). — Baymard

**Search autocomplete**

27. [FRAMEWORK] Ship autocomplete/instant-search as baseline (80% of sites already have it) but budget real design effort — only 19% of implementations get all details right; execution, not adoption, differentiates. — Baymard
28. [FRAMEWORK] Cap visible autocomplete suggestions at ~10 items on desktop, 4–8 on mobile. — Baymard
29. [FRAMEWORK] Visually distinguish category/scope suggestions (italics, color, or indentation, e.g. "in Shoes") from plain query-text suggestions; within query suggestions, bold the system-predicted portion, not the portion the user already typed. — Baymard
30. [FRAMEWORK] Never render the suggestion list inside an internally-scrolling sub-panel — let it expand to its natural full height. — Baymard

**"No results" recovery**

31. [FRAMEWORK] Never render a bare "No results found" dead end — 68% of benchmarked sites do exactly this, and ~50% of sites offer no effective recovery path. Plain spelling/broaden-terms tips alone are ineffective. — Baymard
32. [FRAMEWORK] Populate every zero-result page with, at minimum: related/parent category links, alternative query suggestions (ideally with a live result count or thumbnail per suggestion), personalized or popular/bestselling product recommendations, and an on-page (not footer-only) support escape hatch. — Baymard
33. [FRAMEWORK] Support non-product informational queries (return policy, shipping cost, order status, password reset, gift-card balance) in the same search box, or route high-confidence matches to the relevant help page — 34% of users attempt this and 15% of sites fail basic queries like "return policy." — Baymard

**Search vs. browse strategy, by catalog shape**

34. [FRAMEWORK] On broad general-merchandise catalogs, design search and category nav as co-equal primary paths — usage splits roughly 50/50 between the two strategies. — Baymard
35. [FRAMEWORK] On narrow, flat-taxonomy verticals (e.g. apparel/accessories), expect browse-first behavior to dominate — 100% of tested users browsed first, only 10% ever used search, exclusively as a fallback. Do not port search-first investment from general-merchandise design onto this catalog shape. — Baymard

**Accessibility floor**

36. [LAW] Meet WCAG 2.4.5 Multiple Ways (AA): provide at least two independent ways to reach any given page (e.g., category nav + site search, or nav + sitemap). A catalog reachable by browsing only, or by search only, is a compliance gap. — WCAG 2.4.5
37. [LAW] Meet WCAG 1.4.13 Content on Hover or Focus (AA): any hover/focus-triggered dropdown or mega-menu panel must be dismissible (e.g. Esc), hoverable (pointer can move into the panel without it closing), and persistent (stays open until dismissed or focus moves away). — WCAG 1.4.13

## Checklist

**Header & primary nav**
- [ ] Dropdown/mega-menu hover-intent delay is 300–500ms open, ~100ms open/close transition (Rule 1)
- [ ] Mega/dropdown menu is the default main-nav pattern (Rule 2)
- [ ] A pointer pass across the trigger lasting <200ms never opens the panel — no flicker (Rule 3)
- [ ] Current top-level section is visually distinct from siblings (Rule 4)
- [ ] Submenus open on click/tap, not hover-only (Rule 5)
- [ ] Cascading flyouts capped at one tier (Rule 6)

**Sticky header & mobile nav**
- [ ] Nav, search, and cart stay reachable without scroll-to-top (Rule 7)
- [ ] Primary nav is NOT hidden behind a hamburger at ≥768px viewport width — screenshot at 768px and 1024px to confirm (Rule 8)
- [ ] Any hamburger used is the standard 3-bar glyph, standard position (Rule 9)

**Breadcrumbs**
- [ ] Breadcrumbs present on every desktop product page (Rule 10)
- [ ] Breadcrumbs present on every mobile product page (Rule 11)
- [ ] Mobile breadcrumbs show the full hierarchy, not a shortened path (Rule 12)
- [ ] Mobile breadcrumbs are a single swipeable line with a "more" cue if truncated (Rule 13)
- [ ] Breadcrumb tap targets ≥44×44px, ≥8px clearance (24×24px legal floor) (Rule 14)

**Taxonomy depth**
- [ ] No nav level has more than 10 sibling items/subcategories without subdividing (Rule 15)
- [ ] No leaf category ships with <10 products (Rule 16)
- [ ] Parent/category-header labels link to their own overview page (Rule 17)

**Faceted filtering**
- [ ] Price, Brand, Average Rating, Size, Color facets present at minimum (Rule 18)
- [ ] Every list-item-card attribute has a matching filter, and vice versa (Rule 19)
- [ ] Facets support multi-select (Rule 20)
- [ ] Applied filters shown as a removable chip summary (Rule 21)
- [ ] Desktop filters apply in real time; mobile filters require an apply button (Rule 22)
- [ ] Filter controls ≥44×44px, ≥8px clearance on mobile (24×24px legal floor) (Rule 23)

**Sort**
- [ ] At least 4 sort types shipped: price asc/desc, rating, newest (Rule 24)
- [ ] Default sort is diversity-aware Relevance/Featured, not naive price/alpha/best-selling (Rule 25)
- [ ] Default sort passes the >10%-of-catalog-in-first-20(desktop)/first-10(mobile) test (Rule 26)

**Autocomplete**
- [ ] Autocomplete/instant-search is implemented (Rule 27)
- [ ] Suggestion count capped at ≤10 on desktop, 4–8 on mobile (Rule 28)
- [ ] Category-scope suggestions are visually distinct; predicted text is bolded, not typed text (Rule 29)
- [ ] Suggestion list expands to natural height — no internal scrollbar (Rule 30)

**No-results & search strategy**
- [ ] Zero-result search never renders a bare dead end (Rule 31)
- [ ] Zero-result page includes category links, alt-query suggestions, product recs, and a support link (Rule 32)
- [ ] Search box handles non-product queries (returns, order status, etc.) or routes to help (Rule 33)
- [ ] If broad multi-category catalog: search bar and category nav appear at comparable size/prominence in the header (Rule 34)
- [ ] If narrow flat-taxonomy catalog: category nav is visually dominant with search shown as secondary (Rule 35)

**Accessibility**
- [ ] At least two independent ways to reach any page (nav + search, or nav + sitemap) (Rule 36)
- [ ] Hover/focus panels are dismissible, hoverable, and persistent (Rule 37)

## Anti-patterns

- **Hover-only submenu activation with no click/tap equivalent.** Excludes touchscreen and keyboard-only users from secondary nav entirely. Instead: activate on click/tap by default, layer hover on top as an enhancement.
- **Hiding primary navigation behind a hamburger icon at desktop/tablet widths.** Cuts discoverability roughly in half and increases task time — a mobile-only pattern misapplied to larger screens. Instead: show full nav in the header down to tablet breakpoints; reserve the hamburger for narrow mobile viewports only.
- **A bare "No results found" message with only generic spelling/broader-term tips.** Documented high-abandonment pattern; users rarely read or act on plain-text search tips. Instead: populate the page with related categories, alternative query suggestions, product recommendations, and a support link.
- **List-item badges/attributes with no matching filter, or a filter for an attribute never shown on the card.** Breaks the "what I can see, I can filter by" mental model. Instead: audit card attributes against the facet list in both directions before shipping.
- **Single-selection-only facets** (forcing Nike-or-Adidas instead of both). Adds friction where users reasonably want to compare across multiple values. Instead: use checkboxes, not radio buttons, within each facet.
- **Live-refresh, no-apply-button filtering on mobile**, where every tap across a multi-filter selection reloads the grid. Reads as jarring rather than responsive on touch. Instead: batch mobile filter changes behind a "Show X Results" button; keep real-time updates for desktop only.
- **Breadcrumbs present on desktop but dropped on mobile, or truncated mid-hierarchy with no "more path" affordance.** Users lose their place in the taxonomy on the platform where they need it most (mobile omission is 3x the desktop rate). Instead: ship full-hierarchy, swipeable breadcrumbs on mobile too.
- **Autocomplete rendered inside an internally-scrolling panel** instead of expanding to natural height. Adds a scroll interaction to what should be a fast, glanceable list. Instead: cap the suggestion count (Rule 28) and let the list grow to its natural height.
- **Default product-list sort that surfaces near-duplicate variants of one product type across the entire first page** (e.g., pure Best-Selling or Price-Low-to-High as default). Misrepresents catalog breadth to a new visitor. Instead: default to a diversity-aware Relevance/Featured sort and validate against the >10%-in-first-20 test.
- **Category levels with far more than ~10 siblings, or leaf categories holding a handful of products.** Produces choice overload at one end and an unnecessary extra click to a barely-populated shelf at the other. Instead: subdivide levels over the ~10-sibling threshold; merge sub-10-product leaves up one level.
