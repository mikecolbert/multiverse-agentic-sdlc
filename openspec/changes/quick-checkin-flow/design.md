## Context

Built on the PWA foundation. The quick check-in is the most-used flow — it runs 1–2 times daily and must feel effortless. Users are new to identifying emotions, so the feelings wheel provides vocabulary scaffolding rather than requiring free-text emotion entry. The wizard is fully client-side; no network calls.

## Goals / Non-Goals

**Goals:**
- Guided 4-step wizard completable in under 2 minutes
- Feelings wheel with two levels: primary emotion categories → specific emotions
- Free-text body location (not a diagram — keeps scope small and accessible)
- Intensity signal exposed for crisis detection (Phase 6)
- Check-in saved to localStorage on completion
- Streak updated on completion

**Non-Goals:**
- AI-generated responses or personalization
- Saving free-text body descriptions long-term (too identifying)
- Branching logic based on emotion selection (Phase 3 handles deeper flows)

## Decisions

**Two-level feelings wheel (category → specific emotion) over a full circular diagram**
A visual wheel is complex to build accessibly and on mobile. A two-step list (tap category, tap specific emotion) is faster, more accessible, and easier to maintain. The curated emotion list provides the same vocabulary scaffolding.

**Intensity as 1–5 labeled scale over emoji or sliders**
Labeled scales (1 = barely noticeable, 5 = overwhelming) are more meaningful for people new to self-assessment than abstract emojis. Sliders are imprecise on mobile.

**Wizard state held in component state, saved only on completion**
Abandoned check-ins are not saved — this avoids partial/confusing data in storage. Only a fully completed check-in is persisted.

**Body location stored only in session, not persisted**
Body location text is personal health information. It's shown at the summary screen for reflection but not saved to localStorage. Only emotion category, intensity, timestamp, and mode are persisted.

**Intensity ≥ 4 flags for crisis routing**
A rating of 4 or 5 out of 5 will set a `highIntensity: true` flag on the check-in record. Phase 6 uses this flag to surface the crisis hotline. Threshold is configurable in a constants file.

## Risks / Trade-offs

- [Feelings wheel vocabulary may not match user's felt experience] → Provide an "other / I'm not sure" fallback option
- [Two-level selection adds a tap] → Keep category list short (6–8) and specific emotion list short per category (4–6)
- [Body location not saved means no trend data] → Acceptable trade-off for privacy; journal prompts (Phase 5) encourage paper reflection

## Open Questions

- Final emotion categories and words: will be defined in the curated library (can be iterated without a new spec)
