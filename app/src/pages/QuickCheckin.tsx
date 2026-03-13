import { Link } from 'react-router-dom'
import './Placeholder.css'

export function QuickCheckin() {
  return (
    <div className="placeholder">
      <h1>Quick Check-In</h1>
      <p>This flow is coming in Phase 2.</p>
      <Link to="/" className="placeholder__back">← Back home</Link>
    </div>
  )
}
