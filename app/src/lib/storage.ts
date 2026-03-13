// All localStorage keys used by the app
export const STORAGE_KEYS = {
  STREAK_DATES: 'streak_dates',
  CHECKINS: 'checkins',
} as const

type StorageKey = typeof STORAGE_KEYS[keyof typeof STORAGE_KEYS]

const NAMESPACE = 'mhci:'

function namespacedKey(key: StorageKey): string {
  return `${NAMESPACE}${key}`
}

function get<T>(key: StorageKey): T | null {
  try {
    const raw = localStorage.getItem(namespacedKey(key))
    if (raw === null) return null
    return JSON.parse(raw) as T
  } catch {
    return null
  }
}

function set<T>(key: StorageKey, value: T): void {
  try {
    localStorage.setItem(namespacedKey(key), JSON.stringify(value))
  } catch {
    // Storage quota exceeded or unavailable — fail silently
  }
}

function remove(key: StorageKey): void {
  try {
    localStorage.removeItem(namespacedKey(key))
  } catch {
    // Unavailable — fail silently
  }
}

export const storage = { get, set, remove }
