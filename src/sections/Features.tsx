import { motion } from 'framer-motion'
import {
  CalendarCheck,
  ClipboardList,
  FileText,
  MessageCircle,
  Users,
  Car,
  Star,
  Bell,
  Shield,
  BarChart3,
  Wrench,
  MapPin,
} from 'lucide-react'
import { useT } from '../i18n/LanguageContext'
import type { TranslationKey } from '../i18n/translations'

interface FeatureDef {
  icon: typeof CalendarCheck
  titleKey: TranslationKey
  descKey: TranslationKey
}

const FEATURES: FeatureDef[] = [
  { icon: CalendarCheck, titleKey: 'features.smartScheduling.title', descKey: 'features.smartScheduling.desc' },
  { icon: ClipboardList, titleKey: 'features.workOrders.title', descKey: 'features.workOrders.desc' },
  { icon: FileText, titleKey: 'features.estimates.title', descKey: 'features.estimates.desc' },
  { icon: MessageCircle, titleKey: 'features.chat.title', descKey: 'features.chat.desc' },
  { icon: Users, titleKey: 'features.staff.title', descKey: 'features.staff.desc' },
  { icon: Car, titleKey: 'features.garage.title', descKey: 'features.garage.desc' },
  { icon: Star, titleKey: 'features.reviews.title', descKey: 'features.reviews.desc' },
  { icon: Bell, titleKey: 'features.notifications.title', descKey: 'features.notifications.desc' },
  { icon: Shield, titleKey: 'features.security.title', descKey: 'features.security.desc' },
  { icon: BarChart3, titleKey: 'features.analytics.title', descKey: 'features.analytics.desc' },
  { icon: Wrench, titleKey: 'features.serviceCatalog.title', descKey: 'features.serviceCatalog.desc' },
  { icon: MapPin, titleKey: 'features.multiLocation.title', descKey: 'features.multiLocation.desc' },
]

export default function Features() {
  const { t } = useT()

  return (
    <section id="features" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.03)_0%,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            {t('features.eyebrow')}
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t('features.title.line1')}
            <br />
            {t('features.title.line2')}
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.titleKey}
              className="group relative p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-accent/[0.03] hover:border-accent/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="w-11 h-11 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
                <f.icon size={20} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {t(f.titleKey)}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {t(f.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
