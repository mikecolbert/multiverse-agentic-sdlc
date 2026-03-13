## 1. Schema Update

- [x] 1.1 Add optional `dayRating: "good" | "mixed" | "tough" | null` to `CheckInRecord` type
- [x] 1.2 Verify existing quick check-in saves with `dayRating: null` (backward compatible)

## 2. Wizard Mode Extension

- [x] 2.1 Add `mode` prop ("quick" | "reflective") to `CheckInWizard`
- [x] 2.2 In reflective mode, insert steps: day-overview (1st), highlight (after intensity), lowlight (after highlight)
- [x] 2.3 Update step progress indicator to show correct total (6 for reflective)
- [x] 2.4 Add "End of Day Reflection" label/heading in reflective mode

## 3. Day Overview Step

- [x] 3.1 Build `DayOverviewStep` component with Good / Mixed / Tough options
- [x] 3.2 Style options as tappable cards using design tokens
- [x] 3.3 Wire selected value to `dayRating` in wizard state

## 4. Highlight & Lowlight Steps

- [x] 4.1 Build `HighlightStep` component ("What was a high point of your day?") with Skip
- [x] 4.2 Build `LowlightStep` component ("What was hard today?") with Skip
- [x] 4.3 Store responses in session state only (never in localStorage)
- [x] 4.4 Show session responses on summary screen for reflection

## 5. Closing Affirmation

- [x] 5.1 Build `ClosingAffirmation` component with warm closing copy
- [x] 5.2 Add "See journal prompts" CTA linking to `/journal-prompts` (Phase 5 route placeholder)
- [x] 5.3 Add "Go home" link to `/`
- [x] 5.4 Pass emotional context (emotion, intensity, dayRating) via route state to journal prompts

## 6. Routing & Integration

- [x] 6.1 Replace `/checkin/reflective` placeholder with `CheckInWizard` (mode="reflective")
- [x] 6.2 Verify record saved with `mode: "reflective"` and correct `dayRating`
- [x] 6.3 Verify highlight/lowlight text is NOT in the saved record
