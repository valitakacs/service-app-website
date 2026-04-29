import { motion } from 'framer-motion'
import {
  CalendarPlus,
  Car,
  Bell,
  FileCheck,
  MessageCircle,
  Star,
  Clock,
  Tag,
} from 'lucide-react'
import MobileMockup from '../components/MobileMockup'
import { useT } from '../i18n/LanguageContext'
import type { TranslationKey } from '../i18n/translations'

interface ItemDef {
  icon: typeof CalendarPlus
  titleKey: TranslationKey
  descKey: TranslationKey
}

const ITEMS: ItemDef[] = [
  { icon: CalendarPlus, titleKey: 'forCustomers.booking.title', descKey: 'forCustomers.booking.desc' },
  { icon: Car, titleKey: 'forCustomers.garage.title', descKey: 'forCustomers.garage.desc' },
  { icon: FileCheck, titleKey: 'forCustomers.estimates.title', descKey: 'forCustomers.estimates.desc' },
  { icon: MessageCircle, titleKey: 'forCustomers.chat.title', descKey: 'forCustomers.chat.desc' },
  { icon: Bell, titleKey: 'forCustomers.updates.title', descKey: 'forCustomers.updates.desc' },
  { icon: Star, titleKey: 'forCustomers.reviews.title', descKey: 'forCustomers.reviews.desc' },
  { icon: Clock, titleKey: 'forCustomers.reminders.title', descKey: 'forCustomers.reminders.desc' },
  { icon: Tag, titleKey: 'forCustomers.offers.title', descKey: 'forCustomers.offers.desc' },
]

export default function ForCustomers() {
  const { t } = useT()

  return (
    <section id="for-customers" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.01] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              {t('forCustomers.eyebrow')}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {t('forCustomers.title.line1')}
              <br />
              {t('forCustomers.title.line2')}
            </h2>
            <p className="text-zinc-500 mb-8">{t('forCustomers.subtitle')}</p>

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

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <MobileMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
