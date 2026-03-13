## Why

Some users will arrive at this app in genuine distress. The app is not a crisis service, but it has a responsibility to surface help when emotional intensity signals a potential crisis. A simple, non-alarmist crisis hotline display — shown automatically when intensity is high — ensures vulnerable users always have a path to human support.

## What Changes

- Detect high-intensity check-ins using the `highIntensity` flag set in Phase 2
- Surface a crisis hotline banner/card at the top of the check-in completion screen and the regulate screen when `highIntensity` is true
- The banner is informational and non-alarming: warm, non-stigmatizing copy with the crisis line number and text option
- A standalone `/crisis-support` informational screen with multiple resources
- Crisis resources also accessible from the home screen (always visible, low-prominence)

## Capabilities

### New Capabilities
- `crisis-banner`: Conditional UI component shown when `highIntensity` is true — displays crisis hotline info in a warm, non-alarming style
- `crisis-support-screen`: Static informational screen at `/crisis-support` listing crisis resources (988 Lifeline, Crisis Text Line)
- `crisis-entry-point`: Persistent low-prominence link on the home screen to `/crisis-support`

### Modified Capabilities
- `checkin-wizard`: Show `crisis-banner` on the completion screen when `highIntensity` is true
- `regulate-screen`: Show `crisis-banner` at top when arriving from a high-intensity check-in (via route state)

## Impact

- New route: `/crisis-support`
- `crisis-banner` is a conditional component injected into existing completion and regulate screens
- No new localStorage writes — reads `highIntensity` from route state or the most recent check-in record
