import { motion } from 'framer-motion'
import { TrendingUp, Repeat, Timer, BarChart3 } from 'lucide-react'
import { useT } from '../i18n/LanguageContext'
import type { TranslationKey } from '../i18n/translations'

interface ReasonDef {
  icon: typeof TrendingUp
  titleKey: TranslationKey
  descKey: TranslationKey
}

const REASONS: ReasonDef[] = [
  { icon: TrendingUp, titleKey: 'why.capacity.title', descKey: 'why.capacity.desc' },
  { icon: Repeat, titleKey: 'why.retention.title', descKey: 'why.retention.desc' },
  { icon: Timer, titleKey: 'why.idleTime.title', descKey: 'why.idleTime.desc' },
  { icon: BarChart3, titleKey: 'why.dataDriven.title', descKey: 'why.dataDriven.desc' },
]

export default function WhyCarRevio() {
  const { t } = useT()

  return (
    <section id="why-car-revio" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.03)_0%,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            {t('why.eyebrow')}
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t('why.title.line1')}
            <br />
            {t('why.title.line2')}
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            {t('why.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.titleKey}
              className="group relative p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-accent/[0.03] hover:border-accent/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="w-11 h-11 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
                <r.icon size={20} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {t(r.titleKey)}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {t(r.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
