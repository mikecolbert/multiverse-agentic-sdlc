import { useState } from 'react'
import { Link } from 'react-router-dom'
import './CrisisBanner.css'

export function CrisisBanner() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className="crisis-banner" role="complementary" aria-label="Support resources">
      <div className="crisis-banner__body">
        <p className="crisis-banner__message">
          If things feel really heavy right now, you don't have to carry it alone.
          Real support is just a call or text away.
        </p>
        <Link to="/crisis-support" className="crisis-banner__link">
          See support resources →
        </Link>
      </div>
      <button
        className="crisis-banner__dismiss"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
      >
        ✕
      </button>
    </div>
  )
}
