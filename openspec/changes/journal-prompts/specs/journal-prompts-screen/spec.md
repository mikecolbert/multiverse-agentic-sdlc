## ADDED Requirements

### Requirement: Journal prompts screen displays 3 prompts clearly
The app SHALL render exactly 3 prompts as clearly readable, numbered or visually separated items on the `/journal-prompts` route.

#### Scenario: Prompts displayed
- **WHEN** the journal prompts screen loads with session context
- **THEN** 3 prompts are visible, clearly separated, and easy to read

### Requirement: Screen includes a paper journal encouragement note
The app SHALL display a brief, warm instruction near the prompts directing users to write in their paper journal.

#### Scenario: Encouragement note present
- **WHEN** the journal prompts screen renders
- **THEN** a line such as "Grab your journal and take a few minutes with these" is visible near the prompts

### Requirement: Screen provides navigation back
The journal prompts screen SHALL include a "Go home" link.

#### Scenario: Home navigation available
- **WHEN** the journal prompts screen is displayed
- **THEN** a "Go home" link is visible and routes to `/`
