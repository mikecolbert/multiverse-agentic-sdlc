## ADDED Requirements

### Requirement: App has a home route
The app SHALL render a home screen at the root path (`/`) that shows the streak, and entry points to the quick check-in and reflective check-in flows.

#### Scenario: Home screen loads
- **WHEN** the user navigates to `/`
- **THEN** the home screen is displayed with the current streak and buttons for both check-in modes

### Requirement: Quick check-in has a dedicated route
The app SHALL render the quick check-in flow at `/checkin/quick`.

#### Scenario: Quick check-in route loads
- **WHEN** the user navigates to `/checkin/quick`
- **THEN** the quick check-in wizard is displayed (placeholder in Phase 1)

### Requirement: Reflective check-in has a dedicated route
The app SHALL render the reflective check-in flow at `/checkin/reflective`.

#### Scenario: Reflective check-in route loads
- **WHEN** the user navigates to `/checkin/reflective`
- **THEN** the reflective check-in wizard is displayed (placeholder in Phase 1)

### Requirement: Unknown routes redirect to home
The app SHALL redirect any unrecognized path to the home route rather than showing a blank page or error.

#### Scenario: Unknown path entered
- **WHEN** the user navigates to a path that does not match any defined route
- **THEN** they are redirected to `/`
