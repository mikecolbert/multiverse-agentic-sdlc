## Context

The reflective flow is a superset of the quick check-in. It reuses the same step components (feelings wheel, body location, intensity) and wizard shell, adding 2–3 extra steps. It always saves as `mode: "reflective"`. The flow is always accessible — there is no time-gating — but it is labeled to signal "end of day" intent.

## Goals / Non-Goals

**Goals:**
- 5-minute guided reflection using existing components where possible
- Day rating (Good / Mixed / Tough) as a quick emotional summary
- Two optional free-text prompts for high point and low point (session-only)
- Closing affirmation screen that hands off to journal prompts
- Record saved with `mode: "reflective"` and `dayRating`

**Non-Goals:**
- Saving free-text highlight/lowlight responses (privacy — paper journal instead)
- Time-of-day gating or reminders (no push notifications in Phase 1)
- Branching logic based on day rating (keep it simple for v1)

## Decisions

**Reuse wizard shell with mode prop**
`CheckInWizard` accepts a `mode` prop ("quick" | "reflective"). In reflective mode, it inserts the extra steps. This avoids duplicating wizard state logic.

**Day rating as 3-option selector (not a scale)**
Good / Mixed / Tough is more intuitive than a 5-point scale for day overview. The three options cover the full emotional range without overwhelming users new to self-assessment.

**Highlight/lowlight as optional free-text, not persisted**
These prompts invite reflection without requiring it. Not saving them respects privacy and reduces storage scope — users are directed to their paper journal for deeper writing.

**Closing affirmation before journal prompts**
A brief affirming message ("You showed up for yourself today") lands the emotional experience before transitioning to the cognitive task of journal prompts.

## Risks / Trade-offs

- [5 minutes may feel long for some users] → All extra steps are skippable; the flow remains completable in 3 minutes if steps are skipped
- [Reusing wizard shell adds mode-branching complexity] → Keep branching simple: reflective mode inserts 3 extra steps at defined positions, no other logic changes

## Open Questions

- Closing affirmation copy: draft in implementation, can be tuned without a new spec
