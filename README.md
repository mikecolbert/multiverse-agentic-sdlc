# Multiverse Agentic SDLC

A demonstration of a fully **spec-driven, agentic software development lifecycle** — from product discovery through production-ready code — using [OpenSpec](https://github.com/fission-ai/openspec) and [Claude Code](https://claude.ai/claude-code).

The artifact produced is **Feel Check**, a privacy-first mental health check-in Progressive Web App built entirely through structured AI-assisted development.

---

## What this repo demonstrates

This project is both a **methodology demo** and a **working application**. Every feature was designed, specced, analyzed, and implemented through a repeatable agentic SDLC workflow:

```
Discovery Q&A  →  OpenSpec proposals  →  Value chain analysis
     →  Sprint planning  →  Iterative implementation  →  Deployed PWA
```

No feature was added without a spec. No spec was written without a design rationale. The full paper trail lives in `openspec/`.

---

## The application: Feel Check

Feel Check is a no-account, localStorage-only PWA for people new to therapy and emotional self-regulation. It helps users check in with their mental state 1–2 times daily, access guided regulation techniques, and get journal prompts — with crisis support always within reach.

**Core principles:**
- No accounts, no server, no PII transmitted
- Warm, trauma-informed language throughout
- Works offline after first load (service worker + Workbox precache)
- Installable on iOS and Android via `beforeinstallprompt` / Add to Home Screen

### Features

| Feature | Description |
|---|---|
| **Quick Check-In** | 4-step wizard — emotion picker (feelings wheel), body location, intensity rating, summary |
| **End of Day Reflection** | 7-step extended check-in with day overview, highlight/lowlight capture, and summary |
| **Activity Library** | 6 evidence-based regulation techniques (box breathing, 5-4-3-2-1 grounding, visualization, PMR, cold water, movement) with timed guided walkthroughs and SVG countdown ring |
| **Journal Prompts** | 3 context-aware prompts selected from a 42-prompt library based on emotion category and intensity; graceful fallback for direct navigation |
| **Streak Tracking** | Consecutive check-in day counter; persisted in localStorage, resets on missed days |
| **Crisis Support** | Always-visible low-prominence entry point; CrisisBanner surfaced after high-intensity check-ins; full support screen with 988 Lifeline, Crisis Text Line, and international resources |
| **PWA Install** | Dismissible install prompt banner; full web app manifest; offline-capable |

### Emotion categories

Joy · Sadness · Anger · Fear · Disgust · Shame · Love · Surprise · I'm not sure

### Regulation techniques

- **Box Breathing** — 4-count inhale/hold/exhale/hold cycle, timed
- **5-4-3-2-1 Grounding** — sensory awareness across all five senses
- **Safe Place Visualization** — guided mental imagery
- **Progressive Muscle Relaxation** — timed 5-second tension/release holds
- **Cold Water Reset** — physiological sigh + cold water face technique
- **Movement & Shaking** — somatic discharge through full-body movement

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | React 19 + TypeScript |
| Build | Vite 7 (pinned — vite-plugin-pwa requires `^7`) |
| Routing | React Router v7 |
| PWA | vite-plugin-pwa 1.2 + Workbox |
| Styling | CSS custom properties (design token system), no CSS framework |
| Storage | localStorage with namespaced typed abstraction (`mhci:` prefix) |
| Fonts | Nunito via Google Fonts |
| State | React local state only — no global store |

---

## Repo structure

```
multiverse-agentic-sdlc/
├── app/                          # The Feel Check PWA
│   └── src/
│       ├── components/
│       │   ├── checkin/          # Wizard steps (emotion, body, intensity, etc.)
│       │   ├── regulate/         # TechniqueCard + GuidedTechnique
│       │   ├── crisis/           # CrisisBanner
│       │   ├── AppShell.tsx
│       │   └── InstallPrompt.tsx
│       ├── pages/                # Route-level components
│       ├── data/                 # Static data (emotions, techniques, prompts)
│       ├── lib/                  # Business logic (storage, streak, checkins, prompts)
│       └── styles/               # Design tokens (tokens.css) + global resets
│
├── openspec/                     # Spec-driven development artifacts
│   └── changes/
│       ├── pwa-foundation/       # Phase 1: PWA shell, manifest, install prompt
│       ├── quick-checkin-flow/   # Phase 2: Feelings wheel, intensity, wizard
│       ├── activity-library/     # Phase 3: Techniques, accordion, guided timer
│       ├── reflective-flow/      # Phase 4: End-of-day check-in, streak
│       ├── journal-prompts/      # Phase 5: Prompt library, context-aware selection
│       └── crisis-detection/     # Phase 6: CrisisBanner, support screen, routing
│
├── feature-to-value-chain-report.md   # Porter's Value Chain / RICE / Kano analysis
└── value_chain_expert.md              # Expert persona used for roadmap analysis
```

Each OpenSpec change directory contains:
- `proposal.md` — problem statement and proposed solution
- `design.md` — decisions, non-goals, trade-offs, open questions
- `specs/*/spec.md` — component-level behavioral specifications
- `tasks.md` — atomic implementation checklist (all checked off at ship)

---

## Agentic SDLC workflow

This project was built using a structured prompt-driven workflow, not ad-hoc AI coding. Each phase followed this sequence:

### 1. Discovery
A structured Q&A session (10 questions + follow-ups) established user goals, constraints, and scope before any code was written.

### 2. Spec authoring
`openspec new change` created a change directory. Claude Code then populated `proposal.md`, `design.md`, component specs, and `tasks.md` for each atomic phase — analogous to a well-scoped pull request.

### 3. Value chain analysis
The full set of proposals was analyzed against a Porter's Value Chain framework using a saved expert persona (`value_chain_expert.md`). Output: a RICE-scored, Kano-categorized sprint plan that sequenced phases for maximum demo value in minimum time. See `feature-to-value-chain-report.md`.

### 4. Implementation
Each phase was implemented by applying the spec: reading the design doc, executing each task in `tasks.md`, verifying against the spec, running `npm run build`, and committing. No code was written speculatively — every file has a corresponding spec entry.

### 5. Iteration
After each phase commit, the next phase was initiated from the roadmap. Sprint 1 (phases 1, 2, 4, 6) delivered the complete safety-critical and core-loop features. Sprint 2 (phases 3, 5) added the regulation library and journal prompts.

---

## Running locally

```bash
cd app
npm install
npm run dev
```

App runs at `http://localhost:5173` (or next available port).

```bash
npm run build     # production build + PWA asset generation
npm run preview   # preview the production build locally
```

---

## Design decisions worth noting

**No accounts, ever.** All data lives in `localStorage` under a namespaced key prefix (`mhci:`). Nothing is transmitted. The app works the same offline as online after first load.

**Highlight/lowlight are session-only.** The reflective check-in captures a daily highlight and lowlight — these are held in React state and displayed on the summary screen, but intentionally excluded from the persisted `CheckInRecord`. Privacy by design.

**Crisis support is never more than one tap away.** Every completion screen and the regulation screen surface the `CrisisBanner` when intensity was ≥ 4. The home screen has a permanent low-prominence footer link to `/crisis-support`. The support screen leads with 988, Crisis Text Line, and findahelpline.com for international users.

**Vite 7, not 8.** `vite-plugin-pwa@1.2.0` requires `vite ^3.1.0 || ... || ^7.0.0`. Pinned to `7.3.1` to avoid incompatibility.

**Prompt selection is deterministic in structure, random in pick.** `selectPrompts()` always returns exactly 3 prompts: 1 emotion-category match, 1 intensity-range match, 1 general — with no duplicates. The specific pick within each pool is randomized. Falls back to 3 generals when context is unavailable (e.g. direct navigation or page refresh).
