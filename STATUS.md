# STATUS — Conversion Craft

> Last update: 2026-08-11. All build phases complete; plugin packaged and published (private).

## Phases

- ✅ **Phase 0 — Setup**: repo structure, curriculum (sources), 9-role team roster, QA tools built and tested
- ✅ **Phase 1 — Research**: 7 domains distilled (haiku scouts + sonnet analysts); completeness critic surfaced 20 gaps → `curriculum/research/GAPS.md`
- ✅ **Phase 2 — Distillation**: 4 gap-filling research files + **12 skills** written and sharpened (16 after Phase 5); 26/26 agents clean
- ✅ **Phase 3 — Proof build**: AURI A1 demo built by the team; 3 critics (opus art director + CRO + QA) → 54 findings, 38 BLOCKER/MAJOR fixed; independent review added 5 more fixes (brand-claim honesty, mobile above-fold price, layout defects)
- ✅ **Phase 4 — Packaging**: plugin manifests, MIT license, English docs, GitHub (private) as `nemolabsdev/conversion-craft`
- ✅ **Phase 7 — v1.1 wave (2026-08-12)**: three new skills (promotions-events with FTC/EU Omnibus price-history law, post-purchase-lifecycle with PECR/CAN-SPAM consent gates, b2b-landing) via the research→write→sharpen chain; opus verifier found 14 integration defects (an unsourced number that contradicted its own citation, tag miscalibration, unclosed bilateral legal edges on strikethrough pricing, a soft-opt-in arity conflict between two [LAW] rules) — all fixed. Also: geometry-audit navigation guard, composition occupancy rule (R33/R35), distillation-completeness process check, demo-lab polish pass (trust line above the 375 fold), and two directory PRs (composio #408, rohitg00 #716). Skills: 16 → 19.
- ✅ **Phase 6 — Adversarial approval cycle**: 8 audit rounds on the demo under the post-supplement rulebook (33 → 13 → 11 → 3 → 2 → 4 → 6 → 10 findings; 78 raised, 76 fixed). Signature catches: a comment `*/` silently deleting the entire `.btn` rule; an orphaned comment line destroying the CTA fill token; average-CPL masking an 81-char line; 105-CPL legal copy hiding in the 512-639px band between checkpoints. Each class of miss became a mechanical guard: geometry-audit now asserts computed styles (`--assert`), the primary-CTA fold contract (`--fold-selector`), per-rendered-line CPL, across FIVE standing viewports. **Approved under rulebook 2026-08-12, 2 open follow-ups** (success-card optical inset; hero trust microcopy below the 375 fold) + accepted polish items logged in audit round reports.
- ✅ **Phase 5 — Completeness audit + supplement wave**: 5-lens audit (verdict: "~80% — passes a portfolio review, fails a retainer") → 4 new skills (experimentation-measurement, composition-grids, brand-voice, visual-identity), native `<dialog>`/Popover modernization, pricing/SEO distillation rescue, figure-ground photo rules; opus integration verifier found 20 defects in the wave itself (3 BLOCKERs incl. a rule inverting its own source) — all fixed, spacing-lint extended to enforce the new `--flow-*` fluid-space contract mechanically

## Deliverables

| Piece | Where | State |
|---|---|---|
| Team (9 agents) | `agents/` | proven on the demo build |
| Knowledge (19 skills) | `skills/` | every rule measurable, sourced, confidence-tagged |
| Research corpus | `curriculum/research/` (16 files) | sources + rules + anti-patterns + open questions |
| QA gates | `tools/` | all three PASS on demo-lab: spacing clean, 25/25 contrast assertions, zero rendered-geometry findings across five standing viewports incl. fold contracts and computed-style asserts (`geometry-audit.mjs`, headless Chrome, zero deps, loud navigation guard) |
| Proof of concept | `demo/` | full page: strategy → copy → tokens → build |

## Known limitations / next candidates

- `[TREND-2026]` rules need a refresh pass ~Q3 2027
- v1.1 candidates cleared 2026-08-12 (promotions-events, post-purchase-lifecycle, b2b-landing); remaining NICE-tier items live in GAPS.md
- `curriculum/research/awards-visual-language.md` was snippet-verified only (lower confidence) — candidate for a re-pass
- ~~Demo hero still uses vector art~~ — resolved: demo now uses locally-hosted Unsplash photography (WebP, srcset, brand-graded) per the `demo-assets` skill; credits in `demo/img/CREDITS.md`
- Going public: flip with `gh repo edit nemolabsdev/conversion-craft --visibility public` when ready
