# STATUS — Conversion Craft

> Last update: 2026-08-11. All build phases complete; plugin packaged and published (private).

## Phases

- ✅ **Phase 0 — Setup**: repo structure, curriculum (sources), 9-role team roster, QA tools built and tested
- ✅ **Phase 1 — Research**: 7 domains distilled (haiku scouts + sonnet analysts); completeness critic surfaced 20 gaps → `curriculum/research/GAPS.md`
- ✅ **Phase 2 — Distillation**: 4 gap-filling research files + **12 skills** written and sharpened; 26/26 agents clean
- ✅ **Phase 3 — Proof build**: AURI A1 demo built by the team; 3 critics (opus art director + CRO + QA) → 54 findings, 38 BLOCKER/MAJOR fixed; independent review added 5 more fixes (brand-claim honesty, mobile above-fold price, layout defects)
- ✅ **Phase 4 — Packaging**: plugin manifests, MIT license, English docs, GitHub (private) as `mmanja84/conversion-craft`

## Deliverables

| Piece | Where | State |
|---|---|---|
| Team (9 agents) | `agents/` | proven on the demo build |
| Knowledge (12 skills) | `skills/` | every rule measurable, sourced, confidence-tagged |
| Research corpus | `curriculum/research/` (11 files) | sources + rules + anti-patterns + open questions |
| QA gates | `tools/` | both PASS on demo (spacing clean, 14/14 contrast assertions) |
| Proof of concept | `demo/` | full page: strategy → copy → tokens → build |

## Known limitations / next candidates

- `[TREND-2026]` rules need a refresh pass ~Q3 2027
- Deferred from GAPS.md: B2B patterns, A/B-test methodology, post-purchase email flows, pricing-page depth
- `curriculum/research/awards-visual-language.md` was snippet-verified only (lower confidence) — candidate for a re-pass
- ~~Demo hero still uses vector art~~ — resolved: demo now uses locally-hosted Unsplash photography (WebP, srcset, brand-graded) per the `demo-assets` skill; credits in `demo/img/CREDITS.md`
- Going public: flip with `gh repo edit mmanja84/conversion-craft --visibility public` when ready
