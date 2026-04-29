import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'For Shops', href: '#for-shops' },
    { label: 'For Customers', href: '#for-customers' },
    { label: 'How It Works', href: '#how-it-works' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src="/icon-transparent.png" alt="CarRevio" className="h-14 w-14 brightness-0 invert" />
          <span className="text-white font-semibold text-xl tracking-tight">
            Car<span className="text-zinc-400">Revio</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-zinc-500 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            className="text-sm font-medium px-5 py-2.5 rounded-full bg-accent hover:bg-accent-dark text-white transition-all hover:shadow-lg hover:shadow-accent/25"
          >
            Get Started
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
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
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            className="block mt-3 text-center font-medium px-5 py-2.5 rounded-full bg-accent text-white"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  )
}
