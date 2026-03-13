## ADDED Requirements

### Requirement: Highlight and lowlight prompts are presented as optional free-text
The app SHALL present two separate optional steps: "What was a high point of your day?" and "What was hard today?" Each SHALL have a text input and a "Skip" option.

#### Scenario: Highlight prompt shown
- **WHEN** the user reaches the highlight step
- **THEN** the question "What was a high point of your day?" is displayed with a text input and a Skip button

#### Scenario: Lowlight prompt shown
- **WHEN** the user reaches the lowlight step
- **THEN** the question "What was hard today?" is displayed with a text input and a Skip button

#### Scenario: Responses held in session only
- **WHEN** the user enters text in either prompt
- **THEN** the text is displayed on the summary/closing screen but is NOT saved to localStorage

### Requirement: Responses are not persisted
The highlight and lowlight text SHALL NOT be written to localStorage or any persistent store.

#### Scenario: Saved record contains no highlight/lowlight text
- **WHEN** a reflective check-in record is inspected in localStorage
- **THEN** no highlight or lowlight text fields are present
