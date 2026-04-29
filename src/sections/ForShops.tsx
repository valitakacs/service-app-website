import { motion } from 'framer-motion'
import {
  CalendarCheck,
  ClipboardList,
  FileText,
  Users,
  MessageCircle,
  Settings,
  Megaphone,
  BarChart3,
} from 'lucide-react'
import InteractiveDashboard from '../components/InteractiveDashboard'
import { useT } from '../i18n/LanguageContext'
import type { TranslationKey } from '../i18n/translations'

interface ItemDef {
  icon: typeof CalendarCheck
  titleKey: TranslationKey
  descKey: TranslationKey
}

const ITEMS: ItemDef[] = [
  { icon: CalendarCheck, titleKey: 'forShops.appointments.title', descKey: 'forShops.appointments.desc' },
  { icon: ClipboardList, titleKey: 'forShops.workOrders.title', descKey: 'forShops.workOrders.desc' },
  { icon: FileText, titleKey: 'forShops.estimates.title', descKey: 'forShops.estimates.desc' },
  { icon: Users, titleKey: 'forShops.team.title', descKey: 'forShops.team.desc' },
  { icon: MessageCircle, titleKey: 'forShops.chat.title', descKey: 'forShops.chat.desc' },
  { icon: Settings, titleKey: 'forShops.config.title', descKey: 'forShops.config.desc' },
  { icon: Megaphone, titleKey: 'forShops.marketing.title', descKey: 'forShops.marketing.desc' },
  { icon: BarChart3, titleKey: 'forShops.analytics.title', descKey: 'forShops.analytics.desc' },
]

export default function ForShops() {
  const { t } = useT()

  return (
    <section id="for-shops" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.01] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <InteractiveDashboard />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              {t('forShops.eyebrow')}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {t('forShops.title.line1')}
              <br />
              {t('forShops.title.line2')}
              <br />
              {t('forShops.title.line3')}
            </h2>
            <p className="text-zinc-500 mb-8">{t('forShops.subtitle')}</p>

            <div className="grid gap-4">
              {ITEMS.map((f) => (
                <div key={f.titleKey} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <f.icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">
                      {t(f.titleKey)}
                    </h4>
                    <p className="text-zinc-500 text-sm mt-0.5">
                      {t(f.descKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
