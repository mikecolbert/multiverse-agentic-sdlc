## 1. Project Scaffold

- [ ] 1.1 Initialize Vite + React project with TypeScript template
- [ ] 1.2 Install dependencies: react-router-dom, vite-plugin-pwa
- [ ] 1.3 Configure vite.config.ts with vite-plugin-pwa (manifest, Workbox precache)
- [ ] 1.4 Add PWA manifest entries: name, short_name, icons, start_url, display, theme_color

## 2. Design System

- [ ] 2.1 Create `src/styles/tokens.css` with CSS custom properties for color, typography, spacing, border-radius
- [ ] 2.2 Choose and import a warm humanist font (e.g., Inter or Nunito via Google Fonts)
- [ ] 2.3 Create `src/styles/global.css` applying base resets and font tokens
- [ ] 2.4 Create `AppShell` component (header with app name, main content slot)

## 3. Routing

- [ ] 3.1 Set up React Router with `BrowserRouter` in `main.tsx`
- [ ] 3.2 Define routes: `/` (Home), `/checkin/quick`, `/checkin/reflective`
- [ ] 3.3 Add catch-all redirect to `/` for unknown routes
- [ ] 3.4 Create placeholder page components for QuickCheckin and ReflectiveCheckin

## 4. localStorage Utility

- [ ] 4.1 Create `src/lib/storage.ts` with `get`, `set`, `remove` methods
- [ ] 4.2 Apply `mhci:` namespace prefix to all keys
- [ ] 4.3 Wrap all operations in try/catch, return `null` on parse errors
- [ ] 4.4 Export typed helper constants for known storage keys

## 5. Streak Tracker

- [ ] 5.1 Create `src/lib/streak.ts` with `recordCheckIn()` and `getStreak()` functions
- [ ] 5.2 Implement date deduplication (one entry per YYYY-MM-DD)
- [ ] 5.3 Implement streak computation: count consecutive days backward from today
- [ ] 5.4 Display streak count on Home screen (e.g., "3-day streak 🔥" or plain text)

## 6. PWA & Offline

- [ ] 6.1 Verify service worker registers on first load (check DevTools → Application)
- [ ] 6.2 Verify app loads offline after first visit
- [ ] 6.3 Add subtle install prompt component using `beforeinstallprompt` event
- [ ] 6.4 Ensure install prompt is dismissible and non-blocking
