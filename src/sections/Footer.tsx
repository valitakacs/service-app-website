import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/icon-transparent.png" alt="CarRevio" className="h-14 w-14 brightness-0 invert" />
              <span className="text-white font-semibold text-xl tracking-tight">
                Car<span className="text-zinc-500">Revio</span>
              </span>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">
              The all-in-one auto service management platform. Built for modern
              shops, designed for their customers.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-2.5">
              {['Features', 'For Shops', 'For Customers', 'Pricing'].map((item) => (
                <li key={item}>
                  <a
                    href={`/#${item.toLowerCase().replace(/ /g, '-')}`}
                    className="text-sm text-zinc-600 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-zinc-600 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-zinc-600 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-sm text-zinc-600 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-700">
            &copy; {new Date().getFullYear()} CarRevio. All rights reserved.
          </p>
          <p className="text-sm text-zinc-700">
            carrevio.com
          </p>
        </div>
      </div>
    </footer>
  )
}
