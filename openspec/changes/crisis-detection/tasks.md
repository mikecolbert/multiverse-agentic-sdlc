## 1. Crisis Banner Component

- [x] 1.1 Build `CrisisBanner` component with dismissible state
- [x] 1.2 Write warm, non-alarming copy following trauma-informed communication
- [x] 1.3 Include "See support resources" link to `/crisis-support`
- [x] 1.4 Add dismiss control; hide banner for the remainder of the session on dismiss
- [x] 1.5 Style as visually distinct but not alarming (warm amber or soft tone, not red)

## 2. Crisis Support Screen

- [x] 2.1 Build static `CrisisSupportScreen` at `/crisis-support`
- [x] 2.2 Add warm opening message
- [x] 2.3 List 988 Lifeline: "Call or text 988" with click-to-call link (`tel:988`)
- [x] 2.4 List Crisis Text Line: "Text HOME to 741741" with deep link if possible
- [x] 2.5 Add international note with link to findahelpline.com
- [x] 2.6 Add "Go home" link

## 3. Crisis Entry Point on Home

- [x] 3.1 Add low-prominence "Crisis support" link in the home screen footer area
- [x] 3.2 Style as visually de-emphasized (smaller, lower contrast than primary CTAs)
- [x] 3.3 Verify link routes to `/crisis-support`

## 4. Integration with Existing Screens

- [x] 4.1 Inject `CrisisBanner` into check-in completion screen, conditional on `highIntensity` route state
- [x] 4.2 Inject `CrisisBanner` into regulate screen, conditional on `highIntensity` route state
- [x] 4.3 Verify banner does NOT appear after a low-intensity check-in (intensity 1–3)
- [x] 4.4 Verify banner appears after a high-intensity check-in (intensity 4–5)

## 5. Routing

- [x] 5.1 Add `/crisis-support` route to React Router config
