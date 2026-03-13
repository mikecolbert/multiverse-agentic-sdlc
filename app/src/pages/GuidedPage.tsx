import { useParams, Navigate } from 'react-router-dom'
import { TECHNIQUES } from '../data/techniques'
import { GuidedTechnique } from '../components/regulate/GuidedTechnique'

export function GuidedPage() {
  const { techniqueId } = useParams<{ techniqueId: string }>()
  const technique = TECHNIQUES.find(t => t.id === techniqueId)

  if (!technique) return <Navigate to="/regulate" replace />

  return <GuidedTechnique technique={technique} />
}
