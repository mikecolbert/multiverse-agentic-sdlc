## ADDED Requirements

### Requirement: Closing affirmation screen is shown after reflective flow completion
The app SHALL display a warm, affirming closing message after the user completes the reflective check-in, before transitioning to journal prompts.

#### Scenario: Affirmation shown
- **WHEN** the user confirms the reflective check-in summary
- **THEN** a closing screen with an affirming message (e.g., "You showed up for yourself today. That matters.") is displayed

#### Scenario: Affirmation transitions to journal prompts
- **WHEN** the user taps to continue from the affirmation screen
- **THEN** they are taken to the journal prompts screen (Phase 5) with the current session's emotional context passed

### Requirement: Closing screen provides navigation options
The closing affirmation screen SHALL offer at least: "See journal prompts" and "Go home" as next actions.

#### Scenario: Navigation options present
- **WHEN** the affirmation screen is displayed
- **THEN** both "See journal prompts" and "Go home" options are visible and functional
