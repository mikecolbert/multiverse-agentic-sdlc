## 1. Project Scaffold

- [x] 1.1 Initialize Vite + React project with TypeScript template
- [x] 1.2 Install dependencies: react-router-dom, vite-plugin-pwa
- [x] 1.3 Configure vite.config.ts with vite-plugin-pwa (manifest, Workbox precache)
- [x] 1.4 Add PWA manifest entries: name, short_name, icons, start_url, display, theme_color

## 2. Design System

- [x] 2.1 Create `src/styles/tokens.css` with CSS custom properties for color, typography, spacing, border-radius
- [x] 2.2 Choose and import a warm humanist font (e.g., Inter or Nunito via Google Fonts)
- [x] 2.3 Create `src/styles/global.css` applying base resets and font tokens
- [x] 2.4 Create `AppShell` component (header with app name, main content slot)

## 3. Routing

- [x] 3.1 Set up React Router with `BrowserRouter` in `main.tsx`
- [x] 3.2 Define routes: `/` (Home), `/checkin/quick`, `/checkin/reflective`
- [x] 3.3 Add catch-all redirect to `/` for unknown routes
- [x] 3.4 Create placeholder page components for QuickCheckin and ReflectiveCheckin

## 4. localStorage Utility

- [x] 4.1 Create `src/lib/storage.ts` with `get`, `set`, `remove` methods
- [x] 4.2 Apply `mhci:` namespace prefix to all keys
- [x] 4.3 Wrap all operations in try/catch, return `null` on parse errors
- [x] 4.4 Export typed helper constants for known storage keys

## 5. Streak Tracker

- [x] 5.1 Create `src/lib/streak.ts` with `recordCheckIn()` and `getStreak()` functions
- [x] 5.2 Implement date deduplication (one entry per YYYY-MM-DD)
- [x] 5.3 Implement streak computation: count consecutive days backward from today
- [x] 5.4 Display streak count on Home screen (e.g., "3-day streak 🔥" or plain text)

## 6. PWA & Offline

- [x] 6.1 Verify service worker registers on first load (check DevTools → Application)
- [x] 6.2 Verify app loads offline after first visit
- [x] 6.3 Add subtle install prompt component using `beforeinstallprompt` event
- [x] 6.4 Ensure install prompt is dismissible and non-blocking
