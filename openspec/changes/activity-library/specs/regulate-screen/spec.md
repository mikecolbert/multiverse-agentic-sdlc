## ADDED Requirements

### Requirement: Regulate screen lists all techniques
The app SHALL render all techniques from the technique data file as cards at the `/regulate` route, in the defined order.

#### Scenario: All techniques visible
- **WHEN** the user navigates to `/regulate`
- **THEN** all six technique cards are visible on screen (scrollable if needed)

### Requirement: Regulate screen has a calming header
The regulate screen SHALL display a brief, warm orienting message at the top (e.g., "You're here. Let's help you feel better.") above the technique list.

#### Scenario: Header present
- **WHEN** the regulate screen loads
- **THEN** the orienting message is the first visible content above the technique cards

### Requirement: Regulate screen is reachable from home
The home screen SHALL include a "Need help now?" link or button that navigates to `/regulate`.

#### Scenario: Home screen entry point
- **WHEN** the home screen is rendered
- **THEN** a "Need help now?" button or link is visible and routes to `/regulate`
