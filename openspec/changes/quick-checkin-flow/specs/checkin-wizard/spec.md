## ADDED Requirements

### Requirement: Wizard presents steps sequentially
The check-in wizard SHALL display one step at a time with a visible progress indicator, guiding the user through: (1) emotion selection, (2) body location, (3) intensity rating, (4) summary.

#### Scenario: Progress indicator shown
- **WHEN** the wizard is active
- **THEN** a step indicator (e.g., "Step 2 of 4") is visible at the top

#### Scenario: Back navigation available
- **WHEN** the user is on Step 2 or later
- **THEN** a "Back" control is available to return to the previous step without losing entered data

### Requirement: Wizard completes with a summary screen
The wizard SHALL show a summary of the user's responses before saving, then save the check-in and update the streak.

#### Scenario: Summary shown
- **WHEN** the user completes Step 3
- **THEN** a summary screen shows their selected emotion, body location (if entered), and intensity level

#### Scenario: Check-in saved on confirmation
- **WHEN** the user confirms the summary
- **THEN** the check-in record is saved to localStorage and the streak is updated

### Requirement: Wizard offers re-regulation entry at completion
After saving, the wizard SHALL display a "I want help right now" button that routes to the activity library.

#### Scenario: Re-regulation CTA shown
- **WHEN** the check-in is saved and the completion screen is shown
- **THEN** a prominent button labeled "I want help right now" (or similar warm phrasing) is visible

#### Scenario: Re-regulation CTA navigates to activity library
- **WHEN** the user taps the CTA
- **THEN** they are routed to the activity library (Phase 4 route)
