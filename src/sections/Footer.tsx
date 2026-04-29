import { Link } from 'react-router-dom'
import { useT } from '../i18n/LanguageContext'
import type { TranslationKey } from '../i18n/translations'

interface FooterLink {
  labelKey: TranslationKey
  href: string
}

const PRODUCT_LINKS: FooterLink[] = [
  { labelKey: 'footer.linkFeatures', href: '/#features' },
  { labelKey: 'footer.linkForShops', href: '/#for-shops' },
  { labelKey: 'footer.linkForCustomers', href: '/#for-customers' },
  { labelKey: 'footer.linkPricing', href: '#' },
]

const COMPANY_LINKS: FooterLink[] = [
  { labelKey: 'footer.linkAbout', href: '#' },
  { labelKey: 'footer.linkBlog', href: '#' },
  { labelKey: 'footer.linkCareers', href: '#' },
  { labelKey: 'footer.linkContact', href: '/contact' },
]

export default function Footer() {
  const { t } = useT()

  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/icon-transparent.png"
                alt="CarRevio"
                className="h-14 w-14 brightness-0 invert"
              />
              <span className="text-white font-semibold text-xl tracking-tight">
                Car<span className="text-zinc-500">Revio</span>
              </span>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              {t('footer.product')}
            </h4>
            <ul className="space-y-2.5">
              {PRODUCT_LINKS.map((item) => (
                <li key={item.labelKey}>
                  <a
                    href={item.href}
                    className="text-sm text-zinc-600 hover:text-white transition-colors"
                  >
                    {t(item.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              {t('footer.company')}
            </h4>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((item) => (
                <li key={item.labelKey}>
                  <a
                    href={item.href}
                    className="text-sm text-zinc-600 hover:text-white transition-colors"
                  >
                    {t(item.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              {t('footer.legal')}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-zinc-600 hover:text-white transition-colors"
                >
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-sm text-zinc-600 hover:text-white transition-colors"
                >
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-700">
            &copy; {new Date().getFullYear()} CarRevio. {t('footer.rights')}
          </p>
          <p className="text-sm text-zinc-700">carrevio.com</p>
        </div>
      </div>
    </footer>
  )
}
