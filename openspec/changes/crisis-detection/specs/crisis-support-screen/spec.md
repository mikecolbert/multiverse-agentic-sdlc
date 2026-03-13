## ADDED Requirements

### Requirement: Crisis support screen lists primary crisis resources
The app SHALL display a static informational screen at `/crisis-support` with at minimum: 988 Suicide and Crisis Lifeline (call/text), Crisis Text Line (text HOME to 741741).

#### Scenario: Primary resources visible
- **WHEN** the user navigates to `/crisis-support`
- **THEN** 988 Lifeline and Crisis Text Line are listed with their contact methods clearly displayed

### Requirement: International users are acknowledged
The screen SHALL include a note directing international users to a resource directory.

#### Scenario: International note present
- **WHEN** the crisis support screen renders
- **THEN** a note such as "Outside the US? Visit findahelpline.com for local resources" is visible

### Requirement: Crisis support screen has warm, grounding copy
The screen SHALL open with a brief supportive message before listing resources, so the user feels seen rather than processed.

#### Scenario: Opening message present
- **WHEN** the crisis support screen renders
- **THEN** a warm opening message (e.g., "You don't have to go through this alone. Real help is available right now.") appears before the resource list
