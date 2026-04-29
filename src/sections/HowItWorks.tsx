import { motion } from 'framer-motion'
import { useT } from '../i18n/LanguageContext'
import type { TranslationKey } from '../i18n/translations'

interface StepDef {
  num: string
  titleKey: TranslationKey
  descKey: TranslationKey
}

const STEPS: StepDef[] = [
  { num: '01', titleKey: 'how.step1.title', descKey: 'how.step1.desc' },
  { num: '02', titleKey: 'how.step2.title', descKey: 'how.step2.desc' },
  { num: '03', titleKey: 'how.step3.title', descKey: 'how.step3.desc' },
  { num: '04', titleKey: 'how.step4.title', descKey: 'how.step4.desc' },
]

export default function HowItWorks() {
  const { t } = useT()

  return (
    <section id="how-it-works" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.03)_0%,transparent_60%)]" />

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            {t('how.eyebrow')}
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t('how.title.line1')}
            <br />
            {t('how.title.line2')}
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            {t('how.subtitle')}
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/30 via-accent/10 to-transparent hidden md:block" />

          <div className="space-y-12">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                className="flex gap-8 items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shadow-lg shadow-accent/5 relative z-10">
                  <span className="text-accent font-bold text-lg">
                    {step.num}
                  </span>
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-zinc-500 leading-relaxed max-w-lg">
                    {t(step.descKey)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
