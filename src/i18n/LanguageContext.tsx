import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import {
  TRANSLATIONS,
  type Locale,
  type TranslationKey,
} from './translations'

interface LanguageCtx {
  locale: Locale
  setLocale: (l: Locale) => void
  t: (key: TranslationKey) => string
}

const STORAGE_KEY = 'carrevio.locale'
const DEFAULT_LOCALE: Locale = 'ro'

const Ctx = createContext<LanguageCtx | undefined>(undefined)

function readInitialLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved === 'ro' || saved === 'en') return saved
  // Fall back to browser language
  const lang = window.navigator.language?.toLowerCase() ?? ''
  if (lang.startsWith('ro')) return 'ro'
  if (lang.startsWith('en')) return 'en'
  return DEFAULT_LOCALE
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(readInitialLocale)

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem(STORAGE_KEY, locale)
    document.documentElement.lang = locale
  }, [locale])

  const t = (key: TranslationKey) => TRANSLATIONS[locale][key] ?? key

  return (
    <Ctx.Provider value={{ locale, setLocale, t }}>{children}</Ctx.Provider>
  )
}

export function useT() {
  const ctx = useContext(Ctx)
  if (!ctx) {
    throw new Error('useT must be used inside <LanguageProvider>')
  }
  return ctx
}

/**
 * Returns the locale-aware greeting key based on the current hour.
 * Centralized so the rule stays consistent (e.g. for emails/notifications later).
 */
export function timeAwareGreetingKey(date: Date = new Date()): TranslationKey {
  const h = date.getHours()
  if (h < 12) return 'mobile.greeting.morning'
  if (h < 18) return 'mobile.greeting.afternoon'
  return 'mobile.greeting.evening'
}
