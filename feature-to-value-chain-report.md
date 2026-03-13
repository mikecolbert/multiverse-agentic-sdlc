# Feature-to-Value-Chain Report
## Mental Health Check-In PWA — MVP Roadmap Analysis

---

## 1. Feature Overview

**Summary:**
A no-account, privacy-first Progressive Web App that helps people new to therapy and emotional self-regulation check in with their mental state 1–2 times daily, identify emotions and body sensations, access guided re-regulation techniques, reflect through journaling prompts, and reach crisis support when needed.

**Jobs To Be Done (JTBD) — by phase:**

| Phase | Core Job |
|---|---|
| `pwa-foundation` | "Give me a safe, private, always-available container I can trust with my feelings" |
| `quick-checkin-flow` | "When I pause mid-day, help me name what I'm feeling so I can acknowledge it and move on" |
| `activity-library` | "When I'm overwhelmed and can't think straight, walk me through something that actually helps right now" |
| `reflective-flow` | "At the end of the day, help me make sense of what I went through emotionally" |
| `journal-prompts` | "Don't leave me staring at a blank page — give me a starting point for my paper journal" |
| `crisis-detection` | "If I'm in real distress, make sure I can always find a human who can help" |

**Kano Categorization:**

| Phase | Kano Type | Rationale |
|---|---|---|
| `pwa-foundation` | **Basic** | Invisible enabler — absence breaks everything, presence goes unnoticed |
| `quick-checkin-flow` | **Performance** | Core differentiator — the more polished, the more value delivered |
| `activity-library` | **Performance / Delighter** | Completion of the core loop AND the "wow" moment of the demo |
| `reflective-flow` | **Performance** | Deepens engagement but not required for the minimum viable loop |
| `journal-prompts` | **Delighter** | Unexpected value — users don't know to ask for it, but love it when present |
| `crisis-detection` | **Basic** | Non-negotiable safety floor — absence is legally and ethically unacceptable |

---

## 2. Context Mapping

**Business Model Impact (Lean Canvas view):**

- **Problem:** People new to therapy don't have a private, frictionless tool to practice emotional awareness between sessions. Existing apps require accounts, are over-engineered, or feel clinical.
- **Unique Value Proposition:** The only check-in app designed specifically for people just learning to feel their feelings — warm, private, no login, immediate help when needed.
- **Unfair Advantage:** Curated content library (techniques + prompts) authored with a therapeutic lens; no-account design removes the biggest friction point for privacy-conscious users.
- **Customer Segments:** Adults new to therapy; people exploring emotional self-regulation independently.
- **Revenue Streams (future):** B2B licensing to therapy practices as a between-session tool; consumer subscription for expanded content.

**Ecosystem Dependencies:**

The six phases form a linear dependency chain with one fork:

```
pwa-foundation → quick-checkin-flow → activity-library → crisis-detection
                                    ↘
                              reflective-flow → journal-prompts
```

Phases 3 and 5 are a parallel enrichment track that does not block the core demo loop.

---

## 3. Value Chain Mapping (Porter's Framework)

**Primary Activity Impact:**

| Porter Activity | Relevant Phases | Impact |
|---|---|---|
| **Operations** (building the product) | All | Foundation → check-in → regulate is the core production sequence |
| **Service** (user experience) | 2, 3, 4, 5, 6 | All user-facing value is delivered here; quality of UX is the competitive moat |
| **Outbound / Distribution** | 1 (PWA installability) | PWA install removes app store friction — direct-to-homescreen distribution |

**Support Activity Impact:**

| Porter Activity | Relevant Phases | Impact |
|---|---|---|
| **Technology Development** | 1 (React/Vite/Workbox) | Enables offline, installability, and future scalability |
| **Infrastructure** | 1 (localStorage abstraction) | Privacy-by-design architecture; no server costs |
| **Firm Infrastructure / Governance** | 6 (crisis detection) | Establishes trust, legal duty of care, and ethical defensibility |

**Wardley Map Positioning:**

| Capability | Stage | Rationale |
|---|---|---|
| PWA shell + routing | **Commodity** | Standard React/Vite/Workbox patterns; no competitive advantage here |
| Feelings wheel UI | **Product** | Exists in other apps but implementation quality varies significantly |
| Guided re-regulation (technique library) | **Product** | Curated content + guided UX is differentiating |
| Context-aware journal prompts | **Custom / Genesis** | Few consumer apps do this well for this audience |
| Crisis detection + warm surfacing | **Product** | Hotline surfacing exists; warm, non-alarming framing is differentiating |

**Key insight:** Competitive advantage lives entirely in the Genesis/Custom zone — the curated content, the warm UX language, and the context-aware prompts. The infrastructure is purely commodity and should be built as fast as possible to get there.

---

## 4. Strategic Analysis

**VRIO Analysis:**

| Dimension | Assessment |
|---|---|
| **Valuable** | Yes — addresses a real, underserved gap (new-to-therapy users need scaffolding, not another meditation timer) |
| **Rare** | Moderate — no-account + warmth + guided technique library for this specific audience is uncommon |
| **Inimitable** | Moderate short-term — the content library and UX voice take time to develop; the tech stack is easily replicated |
| **Organized** | To be demonstrated — OpenSpec's phased approach organizes delivery; the curated content library is the asset to protect |

**SWOT Analysis:**

| | Positive | Negative |
|---|---|---|
| **Internal** | **Strengths:** Privacy-first (no accounts), low friction, warm tone, therapist-aligned content | **Weaknesses:** No personalization (curated only), localStorage limits long-term trend analysis, US-centric crisis resources |
| **External** | **Opportunities:** Therapist B2B channel, underserved new-to-therapy cohort, growing mental health app market | **Threats:** Headspace/Calm expand into this space, data privacy regulation changes, crisis liability exposure if hotline not prominent |

**PESTEL — Critical Factors Only:**

- **Social:** Post-pandemic normalization of mental health tools drives demand; stigma reduction is a tailwind
- **Technological:** PWA install rates improving on iOS (Safari now supports install prompts); localStorage sufficient at current scale
- **Legal:** No HIPAA exposure (no PHI stored); crisis hotline requirement is an ethical obligation, not currently a legal mandate for consumer apps — but this could change
- **Economic:** Zero marginal cost per user (no backend) = favorable unit economics even before monetization

**BCG Matrix — among the 6 phases:**

| | High Growth Impact | Low Growth Impact |
|---|---|---|
| **Low Effort** | `crisis-detection` ⭐ Star | `journal-prompts` Cash Cow |
| **High Effort** | `quick-checkin-flow` + `activity-library` ⭐ Stars | `pwa-foundation` Required but invisible |
| | `reflective-flow` Question Mark | |

---

## 5. Prioritization

**Impact / Effort Matrix:**

```
         HIGH IMPACT
              │
  activity    │  quick-checkin
  library     │  flow
  (Phase 4)   │  (Phase 2)
─────────────────────────────── EFFORT →
  crisis      │  reflective-flow
  detection   │  (Phase 3)
  (Phase 6)   │
  journal     │  pwa-foundation
  prompts     │  (Phase 1) — required
  (Phase 5)   │
         LOW IMPACT
```

**RICE Scoring:**

| Phase | Reach | Impact | Confidence | Effort | RICE Score | Priority |
|---|---|---|---|---|---|---|
| `pwa-foundation` | 100% | Medium (enabler) | 95% | High | Required | **Gate** |
| `quick-checkin-flow` | 100% | Very High | 90% | Medium | **~450** | **P1** |
| `activity-library` | 80% | Very High | 90% | Medium | **~360** | **P1** |
| `crisis-detection` | 15% | Critical | 95% | Low | **~190** (safety-mandatory) | **P1** |
| `reflective-flow` | 60% | High | 85% | Medium | **~204** | **P2** |
| `journal-prompts` | 40% | Medium | 80% | Low | **~128** | **P2** |

**Cost-Benefit Summary:**

The `pwa-foundation` + `quick-checkin-flow` + `activity-library` trio delivers ~80% of user-perceived value at ~55% of total build effort. `crisis-detection` has disproportionate strategic value (legal/ethical protection, trust signal) at low effort. `reflective-flow` and `journal-prompts` deliver real but incremental value and are low-risk to defer.

---

## 6. Strategic Impact

**Balanced Scorecard Mapping:**

**Financial Impact:**
- Near-term: Zero — no monetization model yet. Cost is development time only (no infra cost).
- Medium-term: Phases 1–4 + 6 constitute a complete, demonstrable product for B2B pilot conversations with therapists or mental health organizations.
- The no-account, localStorage architecture eliminates ongoing server costs entirely — this is a structural advantage.

**Customer Impact:**
- The complete emotional loop (`quick-checkin → activity-library`) is the primary satisfaction driver.
- Crisis detection is a trust signal — even users who never trigger it benefit from knowing it's there.
- Streak tracking (Phase 1) creates a lightweight habit formation mechanic without surveillance.

**Internal Process Impact:**
- OpenSpec's phased spec structure means each phase can be `/opsx:apply`'d independently — no big-bang delivery risk.
- The `checkin-record` schema (Phase 2) is the data backbone for all future analytics or personalization.
- `technique-data` and `prompt-data` as plain TypeScript files means content updates are code deployments — fast iteration without a CMS.

**Learning and Growth Impact:**
- The content library (techniques + prompts) is a capability that compounds — more entries = more relevant experiences = more retention.
- The streak + check-in history creates an anonymous longitudinal dataset that could power aggregate insights (e.g., "most common emotions on Mondays") in a future phase without any privacy compromise.

**Critical Value Drivers:**
1. **The check-in → regulate loop** (Phases 2 + 4) — this IS the product
2. **Warm, non-clinical UX voice** — differentiates from every clinical competitor
3. **No-account privacy** — removes the single biggest barrier to adoption in this audience
4. **Crisis safety net** (Phase 6) — enables institutional trust (therapists recommending it)

**Strategic Risks:**
1. **Content quality** — the technique and prompt libraries must be therapeutically sound; poor content undermines the entire value proposition regardless of UX quality
2. **Crisis liability** — if a user in genuine crisis uses this app and doesn't find the hotline, there is reputational (and potentially legal) exposure; Phase 6 must not be deferred past the first public demo
3. **localStorage fragility** — users who clear browser data lose their streak; this is a known acceptance, but the offboarding experience should acknowledge it

---

# Recommendation Summary

## MVP Demo Roadmap — Minimum Path

**The irreducible demo narrative is:** *"I feel anxious → I name it → I check in → I get a technique that helps → I feel better. And if I'm in real distress, help is always one tap away."*

That narrative requires exactly **4 of the 6 phases:**

```
┌─────────────────────────────────────────────────────────────┐
│  SPRINT 1 — MVP DEMO  (build these, in order)              │
│                                                             │
│  1. pwa-foundation      ← the container                    │
│  2. quick-checkin-flow  ← name the feeling                 │
│  3. activity-library    ← get help NOW  (the "wow" moment) │
│  4. crisis-detection    ← safety net (non-negotiable)      │
│                                                             │
│  Estimated: ~4 focused development sessions                 │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  SPRINT 2 — DEMO COMPLETENESS  (adds depth and polish)     │
│                                                             │
│  5. reflective-flow     ← the end-of-day story arc         │
│  6. journal-prompts     ← the delighter that surprises     │
│                                                             │
│  Estimated: ~2 additional sessions                          │
└─────────────────────────────────────────────────────────────┘
```

**Suggested Next Steps:**
1. **Start `/opsx:apply` on `pwa-foundation`** — get the scaffold running locally first
2. **Apply `quick-checkin-flow`** — this is your demo centerpiece; get it feeling right before moving on
3. **Apply `activity-library`** — this closes the loop and makes the demo compelling
4. **Apply `crisis-detection`** — always before any public or semi-public demo
5. **Defer `reflective-flow` and `journal-prompts`** until Sprint 1 is working and feels polished
6. **Content review gate** — before any demo, have someone with a therapeutic background read the technique steps and journal prompts; content quality is the strategic moat

> **One-line verdict:** Build Phases 1, 2, 4, and 6 in that order. You'll have a complete, safe, demo-ready product that tells a clear story. Phases 3 and 5 make it richer — add them immediately after, but don't let them gate the demo.
