## Why

People new to therapy and emotional self-regulation need a low-friction, private tool to check in with their mental health daily. A Progressive Web App with no accounts and local-only storage removes barriers to entry and privacy concerns while still supporting streak tracking across sessions.

## What Changes

- Initialize a new React-based PWA project with Vite
- Add PWA manifest, service worker (offline support), and installability
- Establish base routing structure for the two check-in modes (quick and reflective)
- Implement a localStorage utility module for all persistence (streak, check-in history)
- Implement streak tracking logic (daily check-in detection, no identifying info stored)
- Set up global design tokens (warm, gentle color palette, typography)
- Add app shell layout (header, navigation, main content area)

## Capabilities

### New Capabilities
- `pwa-shell`: Installable PWA with manifest, service worker, and offline support
- `local-storage`: Abstraction layer for all localStorage read/write operations (streak data, check-in timestamps)
- `streak-tracker`: Logic to detect and display daily check-in streaks without storing identifying information
- `app-routing`: Base route structure with placeholders for quick-checkin and reflective flows
- `design-system`: Global tokens — colors, typography, spacing — establishing the warm, gentle visual language

### Modified Capabilities
<!-- none — this is the initial project setup -->

## Impact

- New project: no existing code affected
- Dependencies: React, Vite, vite-plugin-pwa (Workbox), React Router
- All future phases build on this foundation
