## ADDED Requirements

### Requirement: App is installable as a PWA
The app SHALL include a valid web app manifest and registered service worker so that browsers can prompt users to install it to their home screen on both Android and iOS.

#### Scenario: Valid manifest present
- **WHEN** the app is loaded in a browser
- **THEN** a `manifest.json` is linked in the HTML with `name`, `short_name`, `icons`, `start_url`, `display: standalone`, and `theme_color` defined

#### Scenario: Service worker registered
- **WHEN** the app loads for the first time
- **THEN** a service worker is registered and active within the same session

### Requirement: App works offline after first load
The app SHALL function without a network connection after the initial visit by precaching all static assets.

#### Scenario: Offline navigation
- **WHEN** a user visits the app, then goes offline, then reloads
- **THEN** the app loads successfully from cache without a network error

### Requirement: App prompts user to install
The app SHALL display a non-blocking install banner when the browser fires the `beforeinstallprompt` event.

#### Scenario: Install banner appears
- **WHEN** the browser determines the app is installable
- **THEN** a subtle install prompt is shown that can be dismissed without blocking app use

#### Scenario: Install banner does not block
- **WHEN** the user dismisses the install prompt
- **THEN** the app continues to function normally and the prompt does not reappear in the same session
