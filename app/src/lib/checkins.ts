import { storage, STORAGE_KEYS } from './storage'
import { INTENSITY_HIGH_THRESHOLD, CHECKIN_RECORD_CAP } from './constants'

export interface CheckInRecord {
  id: string
  timestamp: string           // ISO 8601
  mode: 'quick' | 'reflective'
  emotionCategory: string
  emotion: string
  intensity: 1 | 2 | 3 | 4 | 5
  highIntensity: boolean
  dayRating?: 'good' | 'mixed' | 'tough' | null
}

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
}

export function buildRecord(
  fields: Omit<CheckInRecord, 'id' | 'timestamp' | 'highIntensity'>
): CheckInRecord {
  return {
    dayRating: null,   // default; reflective mode overrides this
    ...fields,
    id: generateId(),
    timestamp: new Date().toISOString(),
    highIntensity: fields.intensity >= INTENSITY_HIGH_THRESHOLD,
  }
}

export function saveCheckIn(record: CheckInRecord): void {
  const existing = storage.get<CheckInRecord[]>(STORAGE_KEYS.CHECKINS) ?? []
  const updated = [...existing, record]
  // Cap at max records, dropping oldest
  const capped = updated.length > CHECKIN_RECORD_CAP
    ? updated.slice(updated.length - CHECKIN_RECORD_CAP)
    : updated
  storage.set(STORAGE_KEYS.CHECKINS, capped)
}

export function getCheckIns(): CheckInRecord[] {
  return storage.get<CheckInRecord[]>(STORAGE_KEYS.CHECKINS) ?? []
}
