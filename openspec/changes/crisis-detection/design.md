## Context

This phase adds a safety net, not a crisis intervention system. The app cannot assess true clinical risk — it simply surfaces help when a user signals high emotional intensity. The design must be warm and non-alarming: showing a crisis banner should feel like a caring nudge, not a red alert that increases anxiety.

## Goals / Non-Goals

**Goals:**
- Auto-surface crisis resources when `highIntensity` is true on check-in completion
- Non-alarming, warm copy that normalizes reaching out for help
- Persistent but low-prominence home screen entry point to crisis resources
- Static `/crisis-support` page with 988 Lifeline and Crisis Text Line

**Non-Goals:**
- Clinical risk assessment or branching based on specific emotions
- Blocking the app flow when crisis is detected — always informational, never gating
- Logging or reporting crisis detections anywhere

## Decisions

**Informational only, never blocking**
Blocking the app or forcing interaction with a crisis banner would be alarming and counterproductive. The banner appears and can be dismissed; the user remains in control.

**Warm, non-clinical copy**
"If things feel really heavy right now, you don't have to carry it alone." — not "WARNING: crisis detected." Language follows trauma-informed communication principles.

**988 + Crisis Text Line as primary resources**
988 Suicide and Crisis Lifeline (call or text) and Crisis Text Line (text HOME to 741741) are the most accessible, broadly known US crisis resources. A note acknowledges international users may need local resources.

**`highIntensity` flag from route state, not re-reading localStorage**
The flag was set during the check-in. It's passed via route state to the completion screen and regulate screen. No additional reads needed.

**Persistent low-prominence home link**
A small "Crisis support" or "In crisis?" text link in the footer of the home screen ensures the resource is always findable, not only after a high-intensity check-in.

## Risks / Trade-offs

- [False positives: intensity 4 selected for a positive emotion (e.g., overwhelming joy)] → Acceptable. The banner is gentle and informational; seeing it in a false-positive scenario is harmless
- [US-centric resources] → Add a note on `/crisis-support` pointing to findahelpline.com for international users

## Open Questions

- Banner copy: draft in implementation, reviewed against trauma-informed communication guidelines
