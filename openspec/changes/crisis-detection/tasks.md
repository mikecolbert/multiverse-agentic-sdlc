## 1. Crisis Banner Component

- [ ] 1.1 Build `CrisisBanner` component with dismissible state
- [ ] 1.2 Write warm, non-alarming copy following trauma-informed communication
- [ ] 1.3 Include "See support resources" link to `/crisis-support`
- [ ] 1.4 Add dismiss control; hide banner for the remainder of the session on dismiss
- [ ] 1.5 Style as visually distinct but not alarming (warm amber or soft tone, not red)

## 2. Crisis Support Screen

- [ ] 2.1 Build static `CrisisSupportScreen` at `/crisis-support`
- [ ] 2.2 Add warm opening message
- [ ] 2.3 List 988 Lifeline: "Call or text 988" with click-to-call link (`tel:988`)
- [ ] 2.4 List Crisis Text Line: "Text HOME to 741741" with deep link if possible
- [ ] 2.5 Add international note with link to findahelpline.com
- [ ] 2.6 Add "Go home" link

## 3. Crisis Entry Point on Home

- [ ] 3.1 Add low-prominence "Crisis support" link in the home screen footer area
- [ ] 3.2 Style as visually de-emphasized (smaller, lower contrast than primary CTAs)
- [ ] 3.3 Verify link routes to `/crisis-support`

## 4. Integration with Existing Screens

- [ ] 4.1 Inject `CrisisBanner` into check-in completion screen, conditional on `highIntensity` route state
- [ ] 4.2 Inject `CrisisBanner` into regulate screen, conditional on `highIntensity` route state
- [ ] 4.3 Verify banner does NOT appear after a low-intensity check-in (intensity 1–3)
- [ ] 4.4 Verify banner appears after a high-intensity check-in (intensity 4–5)

## 5. Routing

- [ ] 5.1 Add `/crisis-support` route to React Router config
