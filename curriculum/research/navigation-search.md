# E-commerce Navigation, IA, and Search Research: Menus, Mobile Nav, Breadcrumbs, Filtering, Sort, and Search UX

## Sources

- https://baymard.com/ecommerce-design-examples/27-drop-down-menu — Verified by direct fetch: hover-based drop-down/mega menus are used as main navigation by 88% of top US e-commerce sites; no explicit category-count threshold published for mega-menu-vs-simple-dropdown choice.
- https://baymard.com/blog/ecommerce-navigation-best-practice — Verified by direct fetch: 2025 benchmark of 16,000+ UX scores; 58%/67% of desktop/mobile sites rate mediocre-or-worse on homepage/category nav; category-depth guidance (~10 items/level); 95% fail to highlight current nav scope; 300–500ms hover-delay guidance; carousel timing.
- https://baymard.com/blog/mobile-ecommerce-search-and-navigation — Verified by direct fetch: mobile-specific navigation and search failure rates (homepage breadth, thematic browsing, category depth, autocomplete scope, no-results quality).
- https://baymard.com/blog/apparel-search — Verified by direct fetch: general-merchandise sites show ~50/50 search-vs-browse usage; apparel/accessories sites show 100% browse-first, only 10% ever used search (fallback-only).
- https://baymard.com/blog/support-non-product-search — Verified by direct fetch: 34% of self-service test participants attempt non-product search (returns, order status, etc.); 15% of sites fail basic non-product queries.
- https://baymard.com/learn/ecommerce-filter-ui — Verified by direct fetch: minimum facet set, real-time (desktop) vs. apply-button (mobile) filtering, applied-filter visibility failure rates, 44×44pt mobile touch-target guidance.
- https://baymard.com/blog/have-filters-for-list-item-info — Verified by direct fetch: 38% of sites (42% in 2015) don't offer a filter for attributes shown on the list-item card; 14–15% block multi-select within a facet; 28% don't summarize applied filters.
- https://baymard.com/blog/default-sort-type — Verified by direct fetch: diversity-based "Relevance/Featured" default-sort rule; concrete >10%-of-catalog-within-first-20-results test; 24% of desktop sites fail to show catalog breadth in default sort.
- https://baymard.com/blog/autocomplete-design — Verified by direct fetch: 80% adoption vs. only 19% fully-correct implementation; suggestion-count caps; scope-styling, bolding, and no-scroll-area rules.
- https://baymard.com/blog/no-results-page — Verified by direct fetch: ~50% of sites give no effective recovery path from a zero-result search; 68% of ~325+ benchmarked sites treat no-results as a dead end; 5 recovery strategies.
- https://baymard.com/blog/implementing-mobile-hierarchy-breadcrumbs — Verified by direct fetch: 65% of mobile sites vs. 20% of desktop sites omit breadcrumbs on product pages; 36% of mobile sites with breadcrumbs still truncate the hierarchy; swipeable-vs-wrap-vs-ellipsis pattern ranking; ~7×7mm mobile hit-area guidance.
- https://baymard.com/blog/search-within-current-category — Attempted direct fetch; page returned only a topic-collection index, no body statistics. The commonly cited "94% of mobile sites don't support search-within-category" figure could not be independently confirmed this pass — see Open Questions.
- https://www.nngroup.com/articles/mega-menus-work-well/ — Verified by direct fetch: hover-intent timing (mouse stationary ~0.5s before opening; open/close within ~0.1s); "see rather than remember" rationale; no explicit column-count or link-count limit published in the fetched text.
- https://www.nngroup.com/articles/menu-design/ — Verified by direct fetch: full 17-point menu-design checklist (visibility, current-location indication, click- vs. hover-activation, cascading-menu limits, sticky-menu guidance, target sizing).
- https://www.nngroup.com/articles/hamburger-menus/ — Verified by direct fetch: hiding navigation behind a hamburger icon roughly halves discoverability and increases task time/perceived difficulty; effect is stronger on desktop than on phones.
- https://www.nngroup.com/articles/hamburger-menu-icon-recognizability/ — Verified by direct fetch: a standard 3-equal-bar hamburger icon in a conventional position is now broadly recognized as "main menu" by users.
- https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html (WCAG 2.5.8, Level AA) — Regulatory: pointer targets need ≥24×24 CSS px, or 24px of spacing to the next target.
- https://www.w3.org/WAI/WCAG21/Understanding/multiple-ways.html (WCAG 2.4.5, Level AA) — Regulatory: at least two independent ways to locate any given page (e.g., navigation + search) except pages that are steps in a process.
- https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html (WCAG 1.4.13, Level AA) — Regulatory: hover/focus-triggered content (dropdown and mega-menu panels included) must be dismissible, hoverable, and persistent.

## Rules

**Main navigation structure (mega menu vs. simple dropdown)**

1. Set hover-intent delay before a dropdown/mega-menu panel opens to 300–500ms — this exact window is independently corroborated by two organizations: NN/g specifies the pointer must stay stationary for ~0.5s before the panel appears, and Baymard's separate benchmark recommends the same 300–500ms range. Open the panel within ~0.1s once triggered; close it within ~0.1s of the pointer leaving both the trigger and the panel for ~0.5s. [LAW] — NN/g, Baymard
2. Treat hover-triggered mega/dropdown menus as the expected default, not an optional upgrade: 88% of top US e-commerce sites already use this pattern as primary navigation. [FRAMEWORK] — Baymard
3. QA hover-delay timing explicitly as a checklist item, not just visually: sites that get this wrong produce visible menu "flicker," and mistiming is common enough to be worth a dedicated test pass. [FRAMEWORK] — Baymard
4. Style the user's current top-level section differently from its sibling nav items (distinct color, underline, or weight) to answer "where am I on this site" — this is the single most frequently cited navigation defect in Baymard's benchmark, with the vast majority of sites failing to do it. [FRAMEWORK] — Baymard
5. Activate submenus by click, not hover-only — hover is unavailable to touchscreen and keyboard-only users, so click-activation (with hover as a progressive enhancement) is required for the menu to be usable across input methods. [FRAMEWORK] — NN/g
6. Cap cascading (flyout-from-flyout) submenus at one tier; beyond that depth, switch to a mega-menu panel or a dedicated category landing page instead of nesting further flyouts. [FRAMEWORK] — NN/g

**Sticky header**

7. Keep primary navigation, search entry, and cart access reachable without a full scroll-to-top on any page long enough to scroll past the first viewport — implement as sticky or partially-sticky, especially on small screens where re-locating the top of the page costs more relative screen-time. [FRAMEWORK] — NN/g

**Mobile navigation (hamburger vs. persistent nav)**

8. Do not hide primary navigation behind a hamburger icon on desktop/tablet-width layouts — keep it visible in the header. Hidden navigation measurably reduces both discoverability and use ("out of sight, out of mind"), and the discoverability penalty is larger on desktop than on phones. [FRAMEWORK] — NN/g
9. If a hamburger icon is used (appropriate on narrow mobile viewports where full nav can't fit), use the conventional 3-equal-bar glyph in its standard top-corner position — non-standard icon shapes or unconventional placement reintroduce the recognition failures this exact icon was shown to have resolved once standardized. [FRAMEWORK] — NN/g

**Breadcrumbs**

10. Ship breadcrumbs on every desktop product page — 20% of desktop sites still omit them entirely; treat omission as a defect, not a stylistic choice. [FRAMEWORK] — Baymard
11. Ship breadcrumbs on every mobile product page too — 65% of mobile sites currently omit them, a much larger gap than desktop's 20%. Do not treat breadcrumbs as a desktop-only pattern. [FRAMEWORK] — Baymard
12. Where mobile breadcrumbs exist, show the complete category hierarchy rather than a shortened path — 36% of mobile sites that do implement breadcrumbs still fail to show the full hierarchy. [FRAMEWORK] — Baymard
13. On mobile, implement breadcrumbs as a horizontally swipeable single line (preferred pattern), not multi-line wrapping or mid-path ellipsis-elision; if truncating for space, truncate the root/start of the path and keep the current-page end visible, with a visual cue (partial-crumb clipping) signaling more content is scrollable. Give breadcrumb tap targets a minimum ~7×7mm hit area with ≥2mm spacing between adjacent crumbs. [FRAMEWORK] — Baymard

**Category taxonomy depth**

14. Subdivide a category once it exceeds roughly 10 sibling items/subcategories at a given level — usability testing shows users feel overwhelmed scanning lists longer than about 10 options in a navigation context. [FRAMEWORK] — Baymard
15. Don't create a leaf category with fewer than roughly 10 products; if the deepest taxonomy tier would list under 10 items, merge it up a level rather than shipping an under-populated category. [FRAMEWORK] — Baymard
16. Make parent/category-header labels clickable in their own right (linking to that category's overview page), not just their child subcategories — 33% of sites fail this, forcing a subcategory click when the user wanted the parent overview. [FRAMEWORK] — Baymard

**Faceted filtering on product listing pages**

17. Ship, at minimum, these five facets on any product listing page, then layer category-specific attributes on top: Price (range), Brand, Average Rating, Size, Color. [FRAMEWORK] — Baymard
18. Enforce facet/list-item parity in both directions: any attribute shown on a product's list-item card (badges like "wireless," a material callout, etc.) must have a corresponding filter, and vice versa. 38% of sites currently violate this (down only slightly from 42% when Baymard first measured it in 2015), making it a persistent, multi-year-documented gap rather than a one-off finding. [FRAMEWORK] — Baymard
19. Support multi-select within a single facet (e.g., Brand = Nike OR Adidas at once) — 14–15% of sites restrict a facet to single-selection only, which Baymard's testing ties directly to added friction and abandonment. [FRAMEWORK] — Baymard
20. Keep all currently-applied filters visible as a persistent, individually-removable summary (chips/tags) above or beside the result grid — roughly a fifth to a quarter of sites (20–28% across two Baymard measurements) fail to surface applied filters in an overview, causing users to lose track of what's currently narrowing their results. [FRAMEWORK] — Baymard
21. Use real-time filtering (results update instantly, no submit step) on desktop; require an explicit "Show X Results" apply button on mobile instead of live-updating on every tap. The platforms test differently: instant updates read as responsive on desktop pointer input, but as jarring/disorienting on a small touchscreen across a sequence of taps. [FRAMEWORK] — Baymard
22. Size every interactive filter control (checkbox row, chip, toggle) to at least 24×24 CSS px per WCAG 2.5.8's regulatory floor; on mobile specifically, Baymard's own filter-UI guidance recommends the more generous 44×44pt Apple HIG minimum. [LAW] — WCAG 2.5.8, Baymard/Apple HIG

**Sort options**

23. Ship at minimum four sort types on every product listing page: Price Low-to-High, Price High-to-Low, User Ratings, and Newest/Latest. 64–69% of sites currently ship an incomplete set. [FRAMEWORK] — Baymard
24. Make the default sort a diversity-aware "Relevance" or "Featured" algorithm rather than pure Price, Alphabetical, or a single-signal Best-Selling sort — naive default sorts create a misleadingly narrow first impression of catalog breadth (Baymard's example: one retailer's default surfaced near-duplicate variants of a single laptop-sleeve type across the entire first results page). [FRAMEWORK] — Baymard
25. Use this as the concrete, testable acceptance criterion for "does our default sort represent catalog diversity": any product type that makes up more than 10% of the overall result set must appear somewhere within the first 20 results shown on desktop (first 10 on mobile, given the smaller viewport). [FRAMEWORK] — Baymard

**Search autocomplete**

26. Ship autocomplete/instant-search as a baseline feature (80% of sites already have it) but budget real design effort into it — only 19% of implementations get all the documented details right, so adoption alone is not a differentiator; execution quality is. [FRAMEWORK] — Baymard
27. Cap the visible autocomplete suggestion list at roughly 10 items on desktop and 4–8 items on mobile to avoid choice overload. [FRAMEWORK] — Baymard
28. Visually distinguish two suggestion types in the dropdown: (a) category/scope suggestions ("in Shoes") styled distinctly via italics, a different color, or indentation, versus (b) plain query-text suggestions — and within query suggestions, bold/emphasize the system-predicted portion rather than the portion the user already typed, directing attention to what's new. [FRAMEWORK] — Baymard
29. Never render the autocomplete suggestion list inside an internally-scrolling sub-panel; let it expand to its natural full height instead. Internal scroll areas inside autocomplete are a documented, specifically-called-out usability failure. [FRAMEWORK] — Baymard

**"No results" recovery**

30. Never render a bare "No results found" dead end. In Baymard's benchmark of 325+ sites, 68% do exactly this, and roughly half of all sites fail to give users any effective way to recover from a zero-result search. Plain "check your spelling / try broader terms" tips are documented as ineffective on their own — users rarely read or act on them. [FRAMEWORK] — Baymard
31. Populate every zero-result search page with, at minimum: related/parent category links, alternative query suggestions (ideally with a live result count or thumbnail preview per suggestion), personalized or popular/bestselling product recommendations, and a visible customer-support escape hatch (phone number, chat, help link) on the page itself, not only in the footer. [FRAMEWORK] — Baymard

**Search vs. browse usage share, by catalog shape**

32. On broad general-merchandise catalogs (Amazon/Walmart/Best-Buy-scale breadth), design search and category navigation as co-equal primary paths — Baymard's testing found roughly a 50/50 split in which product-finding strategy users reach for first. Do not under-invest in either path on this type of site. [FRAMEWORK] — Baymard
33. On narrower, flatter-taxonomy verticals (apparel/accessories was the tested case), expect browse-first behavior to dominate overwhelmingly: 100% of test participants defaulted to category navigation/homepage browsing first, and only 10% used search at all — exclusively as a fallback after browsing failed to turn up what they wanted. Do not port a search-first investment pattern from general-merchandise design onto a narrow, flat-catalog site. [FRAMEWORK] — Baymard
34. Support non-product informational queries (return policy, shipping cost, order status, password reset, gift-card balance) inside the same search box used for product queries, or route high-confidence matches directly to the relevant help page. 34% of users in self-service testing attempt this, and 15% of sites currently fail to return anything useful for a basic query like "return policy." [FRAMEWORK] — Baymard

**Accessibility (regulatory floor for all of the above)**

35. Meet WCAG 2.4.5 Multiple Ways (Level AA): provide at least two independent ways to reach any given page (e.g., category navigation AND site search, or navigation AND a sitemap). A catalog reachable through browsing only, with no working search, or vice versa, is a compliance gap, not just a UX preference — this rule directly reinforces Rules 32–33 above regardless of which path a given catalog shape favors. [LAW] — WCAG 2.4.5

## Trends 2024-2026

- **Mega menus consolidating as the default main-navigation pattern, not a premium option.** Confirmed adoption is already 88% of top US sites (Baymard, direct-fetch confirmed). Secondary sources additionally claim this rose from 54% in 2019 to 76% in 2025, but that specific growth trajectory could not be independently verified against a primary Baymard page this pass — treat the *current* 88% figure as solid and the *growth curve* as directionally plausible but unconfirmed. **Shelf life: durable** — this tracks catalog complexity growth generally, not a fad.
- **Mobile navigation remains the weaker half of most sites' overall navigation.** Baymard's 2025 benchmark rates 67% of mobile sites "mediocre" or worse on homepage/category navigation, versus 58% for desktop. **Shelf life: durable near-term** — closing this gap is an active, multi-year improvement area rather than a solved problem; expect it to stay a differentiator through 2026–2027.
- **Autocomplete execution quality, not adoption, is now the differentiator.** Adoption sits at 80% (near-ceiling), but only 19% implement it fully correctly. The competitive question has shifted from "do we have autocomplete" to "does ours follow the documented interaction details." **Shelf life: durable** for the next few years, until correct-implementation rates rise materially.
- **Diversity-aware, "Relevance"-style default sorting displacing naive Price/Alphabetical/Best-Selling defaults.** Baymard frames this as an underinvested, decade-plus-stagnant area of product-list design now getting fresh attention. **Shelf life: durable, still early** — most sites (per the 24% figure and Baymard's broader commentary that sorting has "remained largely unchanged in the past 10–15 years") have not yet made this shift, so it's a genuine near-term opportunity rather than table stakes.
- **"No results" pages evolving from dead ends into structured recovery flows (related categories, live-preview alternate queries, personalized picks).** Given that roughly half of sites still fail at this, it is a current gap rather than an already-solved pattern. **Shelf life: durable** through at least 2026–2027 given the scale of the gap.

## Anti-patterns

- **Hover-only submenu activation with no click/tap equivalent.** Excludes touchscreen and keyboard-only users entirely from secondary navigation levels.
- **Hiding primary navigation behind a hamburger icon on desktop or tablet-width viewports.** Cuts discoverability roughly in half and increases task time — a mobile-appropriate pattern misapplied to larger screens.
- **A bare "No results found" message with only generic spelling/broader-term tips and no other content.** Documented as an ineffective, high-abandonment pattern; users rarely read or act on plain-text search tips.
- **Product-listing attributes shown on the card (badges, callouts) with no matching filter to narrow by that same attribute** (or the reverse: a filter for an attribute never shown on the card). Breaks the mental model that "what I can see, I can filter by."
- **Single-selection-only facets** (forcing a choice between Nike or Adidas instead of both) where users would reasonably want to compare across multiple values at once.
- **Live-refresh, no-apply-button filtering on mobile**, where every single tap across a multi-filter selection reloads the results grid — reads as jarring rather than responsive on touch, unlike the same pattern on desktop.
- **Breadcrumbs present on desktop but silently dropped on mobile,** or present on mobile but truncated mid-hierarchy without a clear "more path exists" affordance.
- **Autocomplete rendered inside an internally-scrolling panel** rather than expanding to its natural height — adds a scroll interaction on top of what should be a fast, glanceable list.
- **Default product-list sort that happens to surface near-duplicate variants of one product type on the entire first page** (e.g., pure "Best Selling" or "Price Low-to-High" as default) — misrepresents actual catalog breadth to a new visitor.
- **Category levels with either far more than ~10 siblings (choice overload) or leaf categories with a handful of products (an unnecessary extra click for a barely-populated shelf).**

## Open questions

- **The "74% of users prefer mega menus" and "76% up from 54% in 2019" figures are widely repeated across secondary/tertiary blog posts citing Baymard, but neither could be verified against a primary Baymard page in this research pass.** The one Baymard figure independently confirmed by direct fetch is current adoption at 88% of top US sites — use that number, and treat the preference-percentage and the specific 2019→2025 growth curve as unconfirmed until checked against Baymard Premium or an archived primary source.
- **NN/g's often-cited mega-menu "3–4 columns is the sweet spot" and "cap total links at 28–36" guidance did not appear in the direct-fetched text of NN/g's own mega-menus-work-well or menu-design articles.** These numbers surfaced only in AI-search-synthesized summaries attributing them to "NN/g and UX Booth." Do not treat as a confirmed NN/g rule without independent verification — the fetched NN/g text instead emphasizes "moderate granularity" and "no GUI widgets" qualitatively, without a hard column/link count.
- **Sticky-header conversion-lift claims (e.g., "+3% conversion," "up to 25% lift when cart/CTA stays visible") trace to vendor/agency blog content (e.g., Wisdmlabs, ConvertCart-style sources), not to Baymard or NN/g controlled studies.** Treat these as directional marketing claims rather than research-grade findings; the qualitative NN/g recommendation to keep navigation reachable via sticky headers stands on its own regardless of the unverified lift numbers.
- **A widely-repeated claim that "94% of e-commerce sites have a sub-par breadcrumb experience" and "34% lack hierarchy breadcrumbs / 54% lack history breadcrumbs" appears only in AI-search synthesis of a Baymard article, not in this pass's direct fetch.** The directly-fetched companion page (implementing-mobile-hierarchy-breadcrumbs) instead documents 65% mobile / 20% desktop omission and 36% incomplete-hierarchy-on-mobile — use those confirmed figures in this file's Rules, and treat the 94%/34%/54% figures as unconfirmed pending a direct check of the specific source article.
- **The commonly cited "94% of mobile sites don't support search-within-current-category" statistic could not be corroborated.** The Baymard URL implied by that headline returned only a topic-index page with no supporting body text in this pass's fetch. The underlying pattern (scoped, in-category search as distinct from global site search) is plausible and consistent with Baymard's broader search-UX research, but the specific percentage should not be treated as confirmed.
- **Mobile-navigation-pattern "preference" and "task completion" statistics circulating in SEO/agency roundups** (e.g., "72% of users prefer easily accessible options," "40% faster task completion with bottom navigation," "30% increase in interaction frequency with static icons") are not attributed to NN/g or Baymard in any primary source fetched this pass; they trace to secondary marketing content with no visible underlying study cited. Excluded from the Rules section entirely; flagged here only so they aren't inadvertently reintroduced later as if research-backed.
- **No single "search vs. browse" usage-share number exists across all e-commerce.** The confirmed data shows a genuine, sourced *contrast* by catalog shape (~50/50 for broad general-merchandise vs. ~10% search-ever/100% browse-first for narrow flat-taxonomy apparel), not a single conflicting statistic. Any downstream rule or skill built on "what % of users search vs. browse" must first classify the catalog's breadth/depth rather than apply one universal ratio.
- **Real-time (desktop) vs. apply-button (mobile) filtering is Baymard's specific platform-split recommendation; it was not cross-checked against a second independent source in this pass.** Presented in the Rules section as the higher-quality, directly-fetched, primary-source recommendation, but flag it as a single-institution finding rather than a multi-source-replicated one.
