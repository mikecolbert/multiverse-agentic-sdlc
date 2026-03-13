## 1. Schema Update

- [ ] 1.1 Add optional `dayRating: "good" | "mixed" | "tough" | null` to `CheckInRecord` type
- [ ] 1.2 Verify existing quick check-in saves with `dayRating: null` (backward compatible)

## 2. Wizard Mode Extension

- [ ] 2.1 Add `mode` prop ("quick" | "reflective") to `CheckInWizard`
- [ ] 2.2 In reflective mode, insert steps: day-overview (1st), highlight (after intensity), lowlight (after highlight)
- [ ] 2.3 Update step progress indicator to show correct total (6 for reflective)
- [ ] 2.4 Add "End of Day Reflection" label/heading in reflective mode

## 3. Day Overview Step

- [ ] 3.1 Build `DayOverviewStep` component with Good / Mixed / Tough options
- [ ] 3.2 Style options as tappable cards using design tokens
- [ ] 3.3 Wire selected value to `dayRating` in wizard state

## 4. Highlight & Lowlight Steps

- [ ] 4.1 Build `HighlightStep` component ("What was a high point of your day?") with Skip
- [ ] 4.2 Build `LowlightStep` component ("What was hard today?") with Skip
- [ ] 4.3 Store responses in session state only (never in localStorage)
- [ ] 4.4 Show session responses on summary screen for reflection

## 5. Closing Affirmation

- [ ] 5.1 Build `ClosingAffirmation` component with warm closing copy
- [ ] 5.2 Add "See journal prompts" CTA linking to `/journal-prompts` (Phase 5 route placeholder)
- [ ] 5.3 Add "Go home" link to `/`
- [ ] 5.4 Pass emotional context (emotion, intensity, dayRating) via route state to journal prompts

## 6. Routing & Integration

- [ ] 6.1 Replace `/checkin/reflective` placeholder with `CheckInWizard` (mode="reflective")
- [ ] 6.2 Verify record saved with `mode: "reflective"` and correct `dayRating`
- [ ] 6.3 Verify highlight/lowlight text is NOT in the saved record
