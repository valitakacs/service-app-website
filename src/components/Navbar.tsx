import { useEffect, useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useT } from '../i18n/LanguageContext'
import type { TranslationKey } from '../i18n/translations'

interface NavLink {
  labelKey: TranslationKey
  href: string
  // External anchor links inside the home page use `/#section` so they
  // also work when the user is on a sub-route like /contact.
}

export default function Navbar() {
  const { t, locale, setLocale } = useT()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links: NavLink[] = [
    { labelKey: 'nav.home', href: '/#home' },
    { labelKey: 'nav.features', href: '/#features' },
    { labelKey: 'nav.forShops', href: '/#for-shops' },
    { labelKey: 'nav.forCustomers', href: '/#for-customers' },
    { labelKey: 'nav.howItWorks', href: '/#how-it-works' },
  ]

  function LangSwitch({ className = '' }: { className?: string }) {
    const next = locale === 'ro' ? 'en' : 'ro'
    return (
      <button
        type="button"
        onClick={() => setLocale(next)}
        aria-label={t('language.toggle.aria')}
        className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-white/10 text-zinc-400 hover:text-white hover:border-accent/50 transition-colors uppercase tracking-wide ${className}`}
      >
        <Globe size={12} />
        <span className="font-semibold">{locale}</span>
      </button>
    )
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/icon-transparent.png"
            alt="CarRevio"
            className="h-14 w-14 brightness-0 invert"
          />
          <span className="text-white font-semibold text-xl tracking-tight">
            Car<span className="text-zinc-400">Revio</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-zinc-500 hover:text-white transition-colors"
            >
              {t(l.labelKey)}
            </a>
          ))}
          <Link
            to="/contact"
            className="text-sm text-zinc-500 hover:text-white transition-colors"
          >
            {t('nav.contact')}
          </Link>
          <LangSwitch />
          <a
            href="/#cta"
            className="text-sm font-medium px-5 py-2.5 rounded-full bg-accent hover:bg-accent-dark text-white transition-all hover:shadow-lg hover:shadow-accent/25"
          >
            {t('nav.getStarted')}
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/5 px-6 pb-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-3 text-zinc-400 hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {t(l.labelKey)}
            </a>
          ))}
          <Link
            to="/contact"
            className="block py-3 text-zinc-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            {t('nav.contact')}
          </Link>
          <div className="py-3">
            <LangSwitch />
          </div>
          <a
            href="/#cta"
            className="block mt-3 text-center font-medium px-5 py-2.5 rounded-full bg-accent text-white"
            onClick={() => setMobileOpen(false)}
          >
            {t('nav.getStarted')}
          </a>
        </div>
      )}
    </nav>
  )
}
