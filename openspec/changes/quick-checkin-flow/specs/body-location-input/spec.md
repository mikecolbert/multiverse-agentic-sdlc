## ADDED Requirements

### Requirement: User can describe where they feel the emotion in their body
The app SHALL present a free-text input asking "Where do you feel this in your body?" as Step 2 of the wizard.

#### Scenario: Input shown
- **WHEN** the user reaches Step 2
- **THEN** a text input with the prompt "Where do you feel this in your body?" is displayed with example placeholder text (e.g., "chest, throat, shoulders...")

#### Scenario: User skips body location
- **WHEN** the user submits Step 2 with an empty input
- **THEN** the wizard advances to Step 3 with no body location recorded (field is optional)

#### Scenario: User enters body location
- **WHEN** the user enters text and advances
- **THEN** the body location text is held in session state for display at the summary screen

### Requirement: Body location text is not persisted to localStorage
The app SHALL NOT write the body location text to localStorage or any persistent store.

#### Scenario: Check-in saved without body location
- **WHEN** a check-in is saved to localStorage on completion
- **THEN** the stored record does not contain the body location text field
