import { motion } from 'framer-motion'
import { useState, type FormEvent } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { useT } from '../i18n/LanguageContext'

const SUPPORT_EMAIL = 'contact@carrevio.com'

// No backend yet — submitting opens the user's email client with the message
// pre-filled. Easy to swap for a real endpoint later: replace handleSubmit.
export default function ContactForm() {
  const { t } = useT()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`CarRevio website — ${name || 'contact'}`)
    const body = encodeURIComponent(
      `${name}${email ? ` <${email}>` : ''}\n\n${message}`,
    )
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative max-w-3xl mx-auto rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 sm:p-10"
    >
      <div className="mb-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          {t('contact.title')}
        </h3>
        <p className="text-sm text-zinc-500">{t('contact.subtitle')}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t('contact.name')}
            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-accent/60 focus:bg-white/[0.05] transition-colors"
          />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('contact.email')}
            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-accent/60 focus:bg-white/[0.05] transition-colors"
          />
        </div>
        <textarea
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t('contact.message')}
          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-accent/60 focus:bg-white/[0.05] transition-colors resize-y"
        />
        <button
          type="submit"
          className="group w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-accent hover:bg-accent-dark text-white font-semibold text-base transition-all hover:shadow-lg hover:shadow-accent/25"
        >
          {t('contact.send')}
          <Send
            size={16}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </button>

        {sent && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3"
          >
            <CheckCircle2 size={16} />
            <span>{t('contact.success')}</span>
          </motion.div>
        )}
      </form>
    </motion.div>
  )
}
