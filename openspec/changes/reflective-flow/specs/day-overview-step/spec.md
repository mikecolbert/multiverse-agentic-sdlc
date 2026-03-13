## ADDED Requirements

### Requirement: Day overview step presents three options
The app SHALL display a single question "How was your day overall?" with three selectable options: Good, Mixed, Tough.

#### Scenario: Options displayed
- **WHEN** the user reaches the day overview step
- **THEN** three clearly labeled options (Good, Mixed, Tough) are shown as tappable cards or buttons

#### Scenario: Option selected and recorded
- **WHEN** the user selects an option
- **THEN** the value is recorded as `dayRating` ("good" | "mixed" | "tough") and the wizard advances

### Requirement: Day rating is saved in the check-in record
The selected day rating SHALL be included in the persisted check-in record as the `dayRating` field.

#### Scenario: dayRating in stored record
- **WHEN** a reflective check-in is saved
- **THEN** `dayRating` in the stored record matches the user's selection
