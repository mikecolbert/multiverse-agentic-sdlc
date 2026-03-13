import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { TECHNIQUES } from '../data/techniques'
import { TechniqueCard } from '../components/regulate/TechniqueCard'
import { CrisisBanner } from '../components/crisis/CrisisBanner'
import './RegulateScreen.css'

export function RegulateScreen() {
  const location = useLocation()
  const highIntensity = location.state?.highIntensity === true
  const [openId, setOpenId] = useState<string | null>(null)

  function handleToggle(id: string) {
    setOpenId(prev => prev === id ? null : id)
  }

  return (
    <div className="regulate">
      {highIntensity && <CrisisBanner />}

      <div className="regulate__header">
        <h1>You're here.</h1>
        <p>Let's help you feel better. Pick whatever feels right — there's no wrong choice.</p>
      </div>

      <div className="regulate__list">
        {TECHNIQUES.map(technique => (
          <TechniqueCard
            key={technique.id}
            technique={technique}
            isOpen={openId === technique.id}
            onToggle={handleToggle}
          />
        ))}
      </div>

      <div className="regulate__footer">
        <Link to="/" className="regulate__home-link">← Back home</Link>
      </div>
    </div>
  )
}
