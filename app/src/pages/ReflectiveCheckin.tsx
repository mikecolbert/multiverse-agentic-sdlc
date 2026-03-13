import { Link } from 'react-router-dom'
import './Placeholder.css'

export function ReflectiveCheckin() {
  return (
    <div className="placeholder">
      <h1>End of Day Reflection</h1>
      <p>This flow is coming in Phase 3.</p>
      <Link to="/" className="placeholder__back">← Back home</Link>
    </div>
  )
}
