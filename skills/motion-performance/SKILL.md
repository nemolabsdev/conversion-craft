---
name: motion-performance
description: Motion design and performance budgets - durations, easings, scroll reveals, Core Web Vitals, image strategy. Use when adding any animation or optimizing load.
---

# Motion & Performance Budgets

## When to use

- Adding any hover state, transition, page-load animation, or scroll-triggered reveal.
- Choosing a duration, easing curve, or stagger delay for anything that moves.
- Building or auditing the image pipeline, font loading, or the third-party script list.
- Checking a build against Core Web Vitals before it ships.
- Deciding whether a scroll effect is a reveal (allowed) or a hijack (forbidden).

## Rules

**Compositor-safe animation**

1. [LAW] Animate only `transform` and `opacity` — the two properties the browser can composite on the GPU without triggering layout or paint. Never animate `width`, `height`, `top`, `left`, `margin`, or `padding`; use a `transform: scale()`/`translate()` equivalent instead. — web.dev
2. [LAW] Budget 16.7ms per frame for 60fps. Profile every animation on the real page under real DOM/JS weight, not an isolated blank-canvas demo — a layout-triggering animation can look smooth in isolation and still drop frames once it competes with the actual page. — web.dev

**Duration & easing by interaction size**

3. [FRAMEWORK] Material Design 3 duration tokens: short 50–200ms (icon toggles, hover/press feedback), medium 250–400ms (cards, sheets, dropdowns), long 450–500ms (full-screen/large-surface transitions). 500ms is a hard ceiling for any single-step transition on a sales page. — m3.material.io
4. [FRAMEWORK] Material Design 3 named curves: standard `cubic-bezier(0.2,0,0,1)`; standard-decelerate `cubic-bezier(0,0,0,1)` for elements entering; standard-accelerate `cubic-bezier(0.3,0,1,1)` for elements exiting. (M3's "emphasized" curve value is unverified in current sourcing — re-check `m3.material.io/.../tokens-specs` directly before shipping it as spec.) — m3.material.io
5. [FRAMEWORK] Default operating bands for sales-page product UI (don't blend with Rule 3's MD3 scale on the same project — pick one system; WHICH curve character a brand signs — snappy vs. luxurious — is chosen in `visual-identity` and then lives inside these bands): micro-interactions (hover, press, toggle) 150–250ms; standard transitions (modal open, panel slide, content reveal) 200–350ms; complex/orchestrated transitions (page transitions, multi-element reveals) 400–600ms hard ceiling. — emilkowalski/skills
6. [FRAMEWORK] Exit faster than enter for the same element — e.g. enter at 300ms, exit at 200ms. A user dismissing something is already moving to their next action and shouldn't wait for a graceful goodbye. — emilkowalski/skills
7. [FRAMEWORK] Stagger list/grid items 30–60ms apart; cap total stagger time (6 items × 50ms = 300ms max). 100ms+ per item reads as a slideshow, not one cohesive reveal, and adds perceived load time. — emilkowalski/skills
8. [LAW] Ease-out for elements entering/appearing, ease-in for elements exiting/disappearing, ease-in-out for on-screen morphs, plain `ease` for hover, `linear` only for continuous/looping motion (marquees, spinners, progress bars). Independently converged across Material Design 3, Kowalski, and Smashing Magazine — treat as settled, not a style preference. — m3.material.io, emilkowal.ski, Smashing Magazine
9. [FRAMEWORK] At an identical duration, ease-out reads as faster/more responsive than ease-in — deceleration happens while the user is still watching the motion begin. This is why entrances default to ease-out, never ease-in or linear. — Smashing Magazine

**Hover, press, and reveal timing**

10. [LAW] Nielsen's three response-time thresholds govern all interaction timing: 0.1s feels instantaneous; 1s keeps flow of thought uninterrupted (no loading indicator needed below this); 10s is the outer limit before a determinate progress indicator becomes mandatory. — NN/g
11. [LAW] Hover-triggered visual feedback (color, elevation, underline) must appear within 0.1s of pointer-enter. — NN/g
12. [FRAMEWORK] Require 0.3–0.5s of continuous pointer dwell before revealing hover-triggered hidden content (tooltip, dropdown, flyout) — this filters accidental cursor pass-through. Once dwell is met, start the reveal within 0.1s. — NN/g
13. [FRAMEWORK] Delay hiding hover-revealed content on mouseout by more than 0.5s rather than instantly — tolerates the diagonal mouse path from trigger to revealed content. — NN/g
14. [LAW] Click/tap and press feedback is immediate (within 0.1s), with no dwell requirement — an explicit click is unambiguous intent. On touch, show the pressed state during the ~100–130ms finger-down-to-up window, not only after release. — NN/g

**Reduced motion**

15. [LAW] Implement `prefers-reduced-motion: reduce` — Baseline (universal browser support) since January 2020. There is no browser-support excuse to skip it. — MDN
16. [LAW] For reduced-motion users, replace scale/rotate/parallax/large-translate with opacity fades or color transitions — don't delete motion entirely. Vestibular-safe motion (no large-object movement or panning) is the requirement, not motionlessness. — MDN

**Scroll-driven motion: reveal vs. hijack**

17. [TREND-2026] Prefer CSS scroll-driven animations (`animation-timeline: scroll()`/`view()`) over JS `scroll`-event listeners, with a `@supports` fallback where browser support is incomplete. They run off the main thread, GPU-composited, unaffected by JS jank — Tokopedia's production migration cut scroll-time CPU usage from 50% to 2% and removed ~80% of the scroll-animation code. — developer.chrome.com
18. [LAW] Native scroll-driven reveals are allowed on sales pages: content stays reachable without JS, native scroll position/speed are untouched, and the effect respects `prefers-reduced-motion`. Scroll-hijacking — any JS override of scroll position or speed to force a choreographed sequence — is forbidden. NN/g testing found most participants became at least mildly disoriented by hijacked scroll; a cited relaunch saw bounce rate rise 40% and contact-form conversion drop by half after introducing it. — NN/g, Scrolljacking 101
19. [LAW] "Smooth-scroll" libraries that intercept scroll input and re-drive it with their own physics (Lenis, Locomotive Scroll, and similar) are scroll-hijacking under Rule 18 regardless of how they're marketed or how common they are on award-circuit sites — they override native scroll speed. Get an "eased" feel from native CSS scroll-driven reveals or `IntersectionObserver`-triggered transitions instead, never by taking over the scrollable's physics. — reconciliation of NN/g (Rule 18) against award-circuit "GSAP smooth-scroll" convention

**Core Web Vitals budget & conversion stakes**

20. [LAW] "Good" thresholds at the 75th percentile of real user sessions, all three required simultaneously: LCP < 2.5s, CLS < 0.1, INP < 200ms — no partial pass, this is the ship/no-ship gate. 2.5s is the hard LCP floor: a single-source, lower-confidence benchmark claims award-caliber pages target sub-1.5s LCP — treat that only as an aspirational stretch goal to chase after the 2.5s gate is secured, never as grounds to relax it. — web.dev, addyosmani.com
21. [LAW] INP (Interaction to Next Paint) replaced FID as the official responsiveness metric in March 2024. Any source or tooling still citing FID (<100ms) is measuring a retired metric — budget and monitor INP instead. — Google Core Web Vitals program
22. [TREND-2026] CWV improvements correlate with revenue in published case studies — cite as business-case support for Rule 20, not as independently checkable requirements: Vodafone Italy LCP −31% → sales +8%; Renault LCP gain across 10M visits → bounce −14pts, conversions +13%; Rakuten 24 faster-page A/B → revenue-per-visitor +53.37%; Meesho LCP 6.9s→2.5s → bounce −17%, conversion +3%; Google/Deloitte "Milliseconds Make Millions" (37 brands, 30M+ mobile sessions) → 0.1s mobile load improvement → retail conversions +8.4%, AOV +9.2%, travel conversions +10.1%. — web.dev/case-studies

**Image pipeline**

23. [LAW] Serve AVIF with WebP fallback via `<picture>`: AVIF runs ~50% smaller than equivalent-quality JPEG and 20–30% smaller than WebP; WebP alone runs 25–35% smaller than JPEG. — Cloudinary, cross-verified
24. [TREND-2026] A combined pipeline (modern format + responsive `srcset`/`sizes` + correct lazy-load boundary) cuts total image payload 60–75% and improves mobile LCP by 1–2s versus an unoptimized JPEG-only pipeline. — Cloudinary
25. [LAW] Never `loading="lazy"` the LCP image or anything in the initial viewport — that delays the exact resource CWV measures. Use default eager loading plus `fetchpriority="high"` on the LCP-candidate image. — web.dev
26. [LAW] Apply `loading="lazy"` only to images below the fold. Native lazy-loading needs no JS and works in all modern browsers. — web.dev
27. [LAW] Set explicit `width`/`height` or CSS `aspect-ratio` on every `<img>`, `<video>`, and embed — including inside `srcset` sets, including correctly lazy-loaded below-fold images. Without it the browser reserves zero height and the image "popping in" inflates CLS. — web.dev

**Fonts**

28. [LAW] Use `font-display: optional` for body webfonts — the browser swaps in the webfont only if it arrives within ~100ms of first paint, otherwise keeps the fallback font for that navigation rather than causing a late layout-shifting swap. Limit `font-display: swap` to the single named brand/logotype font, never applied site-wide. — web.dev, Nitropack
29. [LAW] Pair `<link rel="preload" as="font" crossorigin>` for the critical above-fold webfont with `font-display: optional` — this combination is the documented way to eliminate font-loading layout jank, since preload frequently wins the download race inside the 100ms window. — web.dev
30. [TREND-2026] Subset webfonts to the glyphs/Unicode ranges actually used, serve WOFF2 exclusively — no WOFF/TTF fallback needed for any current Baseline browser. — Nitropack

**Third-party scripts**

31. [TREND-2026] Typical third-party script weighs 50–500KB and sales pages commonly load 5–15 of them (analytics, chat, pixels, session replay, A/B testing) — combined weight frequently exceeds the site's own app code. Single-sourced stat this research pass, not independently cross-verified — audit and budget as a first-class line item regardless. — johnkavanagh.co.uk
32. [TREND-2026] A live YouTube iframe embed blocks the main thread for a median ~1.6s, up to 4.5s on the slowest ~10% of mobile. Replace with a static-thumbnail, click-to-load facade (e.g. lite-youtube-embed) anywhere video isn't the primary above-fold content. — johnkavanagh.co.uk
33. [TREND-2026] Systematic third-party auditing (remove unused tags, defer non-critical scripts, facade heavy embeds) typically cuts third-party JS payload 40–70% with measurable CWV improvement — budget this as realistic headroom, not a best-case outlier. — johnkavanagh.co.uk

**Motion purpose test**

34. [FRAMEWORK] Before shipping any animation, write down what it helps the user understand or do. Excessive/decorative motion is named directly as a conversion killer — it distracts from copy and slows load. This is the clearest point of convergence between award-judging criteria and conversion research, but the sourcing is two practitioner sites, not a regulatory or independently multi-source-replicated finding. — utsubo.com, studio1design.com
35. [TREND-2026] Prefer CSS-driven motion over GIF/baked-video-loop animation — smaller payload, and scored under sustainability/technical-excellence criteria on the current award circuit. Single awards-source claim, snippet-verified — apply for the performance reason regardless of the judging angle. — webdesignawards.io

## Checklist

**Compositor & duration**
- [ ] Every animation touches only `transform`/`opacity` (Rule 1)
- [ ] DevTools Performance panel (or equivalent profiler), run on the live page under real DOM/JS weight, shows ≤16.7ms per frame for every animation (Rule 2)
- [ ] One duration system chosen (MD3 or the 150/350/600ms bands) and used consistently, not blended (Rules 3, 5)
- [ ] No single-step transition exceeds 500ms; complex sequences cap at 600ms (Rules 3, 5)
- [ ] Exit animations run faster than the matching enter animation (Rule 6)
- [ ] List/grid stagger is 30–60ms per item, total capped (Rule 7)
- [ ] Entrances use ease-out, exits use ease-in, on-screen morphs use ease-in-out, hover uses `ease`, loops use `linear` only (Rules 4, 8, 9)

**Hover & press timing**
- [ ] Hover feedback appears within 0.1s (Rule 11)
- [ ] Hover-revealed content waits 0.3–0.5s dwell before opening (Rule 12)
- [ ] Hover-revealed content waits >0.5s before closing on mouseout (Rule 13)
- [ ] Click/tap feedback is immediate, no dwell (Rule 14)

**Reduced motion**
- [ ] `prefers-reduced-motion: reduce` is implemented site-wide (Rule 15)
- [ ] Reduced-motion path swaps scale/parallax/large-translate for opacity/color, doesn't delete motion (Rule 16)

**Scroll**
- [ ] Scroll reveals use `animation-timeline`/`IntersectionObserver`, not scroll-event JS (Rule 17)
- [ ] No scroll-hijacking anywhere — including "smooth-scroll" libraries like Lenis/Locomotive (Rules 18, 19)

**Core Web Vitals**
- [ ] LCP < 2.5s, CLS < 0.1, INP < 200ms, all three, at p75 (Rule 20)
- [ ] No FID references anywhere in tooling/docs — INP only (Rule 21)

**Images**
- [ ] AVIF + WebP fallback via `<picture>` (Rule 23)
- [ ] Responsive `srcset`/`sizes` in place (Rule 24)
- [ ] LCP image is eager + `fetchpriority="high"`, never `lazy` (Rule 25)
- [ ] Below-fold images are `loading="lazy"` (Rule 26)
- [ ] Every image/video/embed has explicit dimensions or `aspect-ratio` (Rule 27)

**Fonts**
- [ ] Body webfonts use `font-display: optional`; any `swap` is limited to the named brand/logotype font, not applied site-wide (Rule 28)
- [ ] Above-fold font is preloaded with `crossorigin` (Rule 29)
- [ ] Fonts are subsetted WOFF2 only (Rule 30)

**Third-party & purpose**
- [ ] Every third-party script is listed with name, payload size (KB), and a one-line reason it's on the page (Rule 31)
- [ ] Any above-fold video is a click-to-load facade, not a live iframe (Rule 32)
- [ ] No looping/decorative motion ships as a GIF or baked video loop — CSS/JS animation instead (Rule 35)
- [ ] Every animation has a one-line documented purpose (code comment, PR note, or spec) — none ship decorative-only (Rule 34)

## Anti-patterns

- **Animating `width`/`height`/`top`/`left`/`margin` because it "looks smooth in the demo."** Forces layout recomputation every frame; drops frames under real page weight, especially on mid-tier mobile — the exact hardware the target audience browses on. Instead: animate the `transform`/`opacity` equivalent.
- **Scroll-hijacking dressed up as "immersive storytelling" or shipped via a GSAP "smooth-scroll" library.** Overriding native scroll position or speed measurably disorients users (cited relaunch: +40% bounce, −50% form conversion) — a library brand name doesn't exempt it from Rule 18. Instead: native `animation-timeline`/`IntersectionObserver` reveals that never touch scroll physics.
- **Lazy-loading the hero/LCP image "for consistency" with the rest of the page.** Directly delays the exact resource Core Web Vitals measures. Instead: eager-load the LCP candidate with `fetchpriority="high"`; reserve `loading="lazy"` for below-fold images only.
- **A live YouTube iframe embed above the fold.** Can block the main thread up to 4.5s on slow mobile — competing with INP and LCP on the same section meant to build trust and drive action. Instead: static-thumbnail, click-to-load facade.
- **Skipping `prefers-reduced-motion`.** Universal browser support since January 2020; motion-sensitive visitors who feel discomfort leave rather than convert. Instead: always ship the reduced-motion path — opacity/color, not zero motion.
- **Over-staggered reveal sequences (100ms+ per item).** Turns a cohesive entrance into a visible slideshow and adds perceived load time to a page being judged on speed. Instead: 30–60ms per item, capped total.
- **Ease-in (or linear/no-easing) on entrance animations.** Delays the perceptible start of motion at exactly the moment the user's attention is on the trigger, making the UI feel laggy at an identical duration to ease-out. Instead: ease-out for anything entering.
- **Citing pre-March-2024 FID thresholds (<100ms) as current guidance.** FID is retired; a "<100ms FID" claim in any 2024+ audit signals stale sourcing. Instead: budget and report against INP < 200ms.
- **Decorative motion that doesn't answer "what does this help the user understand or do."** Named directly, by both award judges and conversion researchers, as distracting from copy and slowing load — the rare point where both camps fully agree. Instead: cut any animation that fails the purpose test before it ships.
- **Blending Material Design 3's duration scale with the 150/350/600ms practitioner bands on the same project.** Produces an inconsistent motion feel even when every individual number is "in range." Instead: pick one duration system per project and hold every component to it.
