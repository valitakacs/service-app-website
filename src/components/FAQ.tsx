import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Plus } from 'lucide-react'
import { useT } from '../i18n/LanguageContext'
import type { TranslationKey } from '../i18n/translations'

interface QA {
  q: TranslationKey
  a: TranslationKey
}

const ITEMS: QA[] = [
  { q: 'faq.q1', a: 'faq.a1' },
  { q: 'faq.q2', a: 'faq.a2' },
  { q: 'faq.q3', a: 'faq.a3' },
  { q: 'faq.q4', a: 'faq.a4' },
  { q: 'faq.q5', a: 'faq.a5' },
  { q: 'faq.q6', a: 'faq.a6' },
  { q: 'faq.q7', a: 'faq.a7' },
  { q: 'faq.q8', a: 'faq.a8' },
  { q: 'faq.q9', a: 'faq.a9' },
]

export default function FAQ() {
  const { t } = useT()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
        {t('faq.title')}
      </h2>

      <div className="divide-y divide-white/5">
        {ITEMS.map((item, i) => {
          const isOpen = open === i
          return (
            <div key={item.q}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
              >
                <span className="text-white font-medium text-base">
                  {t(item.q)}
                </span>
                <Plus
                  size={18}
                  className={`text-zinc-500 group-hover:text-accent transition-all shrink-0 ${
                    isOpen ? 'rotate-45 text-accent' : ''
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 pr-8 text-sm text-zinc-500 leading-relaxed">
                      {t(item.a)}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}
