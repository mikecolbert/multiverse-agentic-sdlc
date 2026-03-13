## ADDED Requirements

### Requirement: Reflective flow presents additional steps beyond the quick check-in
The reflective wizard SHALL include the following steps in order: (1) day overview rating, (2) emotion selection, (3) body location, (4) intensity rating, (5) highlight/lowlight prompts, (6) closing affirmation.

#### Scenario: All steps presented in order
- **WHEN** the user starts the reflective check-in
- **THEN** steps are presented sequentially with a progress indicator showing the total step count (6)

#### Scenario: Reflective mode label shown
- **WHEN** the reflective wizard loads
- **THEN** a label or heading reading "End of Day Reflection" (or similar) is visible

### Requirement: Extra steps are individually skippable
Each of the reflective-only steps (highlight, lowlight) SHALL have a visible "Skip" option.

#### Scenario: User skips highlight prompt
- **WHEN** the user taps "Skip" on the highlight step
- **THEN** the wizard advances to the next step with no value recorded for that prompt

### Requirement: Reflective check-in saves with mode reflective
The completed record SHALL be saved with `mode: "reflective"` and include the `dayRating` field.

#### Scenario: Record saved correctly
- **WHEN** the user completes the reflective flow
- **THEN** the stored record has `mode: "reflective"` and a non-null `dayRating` value
