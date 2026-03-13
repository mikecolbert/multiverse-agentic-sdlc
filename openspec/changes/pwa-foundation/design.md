## Context

This is a greenfield PWA. There is no existing codebase. The app must work without a backend — all persistence is localStorage only. Users are people new to therapy who need a warm, low-friction daily mental health check-in tool. Privacy is a primary concern: no accounts, no server, no identifying data.

## Goals / Non-Goals

**Goals:**
- Installable PWA (Android/iOS home screen, offline capable)
- React + Vite project with clean module structure
- All data stored in localStorage with a typed abstraction layer
- Streak tracking that survives browser sessions without any PII
- Base routing that future phases plug into with no structural changes
- Design token system that enforces the warm/gentle visual language globally

**Non-Goals:**
- Backend, API, or any server-side code
- User authentication or accounts
- Push notifications (Phase 1)
- Analytics or telemetry

## Decisions

**React + Vite over Next.js**
Next.js adds SSR complexity that provides no benefit for a fully client-side, no-backend app. Vite gives fast HMR and `vite-plugin-pwa` integrates Workbox cleanly.

**vite-plugin-pwa (Workbox) for service worker**
Workbox handles cache strategies, precaching, and update prompts with minimal boilerplate. Manual service worker authoring is error-prone and offers no advantage here.

**React Router v6 (client-side only)**
Simple hash or browser routing for two primary routes (`/checkin/quick`, `/checkin/reflective`) plus a home route. No server routing needed.

**localStorage over IndexedDB**
Data volume is tiny (streak metadata, timestamps). IndexedDB adds async complexity for no benefit at this scale. The localStorage abstraction layer can be swapped later if needed.

**CSS custom properties for design tokens over a CSS-in-JS library**
Keeps the bundle small, works naturally with global stylesheets, and allows tokens to be used in both JS and CSS contexts. No runtime style injection.

**Streak tracking approach: date-string keys only**
Store only `YYYY-MM-DD` strings of completed check-in days. No usernames, device IDs, or any fingerprinting. Streak is computed at runtime by checking consecutive dates backward from today.

## Risks / Trade-offs

- [localStorage cleared by browser] → Streak lost, but this is acceptable given no-account design; inform users in onboarding copy
- [PWA install prompt behavior varies by browser] → Use `beforeinstallprompt` event with graceful fallback; no blocking install gate
- [Offline first-load requires service worker registration] → Use `vite-plugin-pwa`'s `registerSW` with a UI prompt for updates

## Migration Plan

N/A — greenfield project. Deploy to static hosting (Netlify, Vercel, or GitHub Pages). No rollback needed for Phase 1.

## Open Questions

- Should the app prompt users to install on first visit, or only show a subtle banner? → Default to subtle banner; can be tuned in Phase 1 implementation.
