import { motion } from 'framer-motion'
import { useState, type FormEvent } from 'react'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { useT } from '../i18n/LanguageContext'

const SUPPORT_EMAIL = 'contact@carrevio.com'
// Formsubmit.co relays form submissions to SUPPORT_EMAIL with no backend
// required. The first POST sends a one-time activation email to that
// address — confirm it once and all subsequent submissions land in the
// inbox directly. Swap this URL for a real endpoint when the backend
// /contact route is live.
const ENDPOINT = `https://formsubmit.co/ajax/${SUPPORT_EMAIL}`

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactForm() {
  const { t } = useT()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `CarRevio website — ${name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || data.success === 'false') throw new Error('submit failed')
      setStatus('sent')
      setName('')
      setEmail('')
      setMessage('')
    } catch {
      setStatus('error')
    }
  }

  const sending = status === 'sending'

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
            disabled={sending}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t('contact.name')}
            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-accent/60 focus:bg-white/[0.05] transition-colors disabled:opacity-50"
          />
          <input
            type="email"
            required
            disabled={sending}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('contact.email')}
            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-accent/60 focus:bg-white/[0.05] transition-colors disabled:opacity-50"
          />
        </div>
        <textarea
          required
          disabled={sending}
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t('contact.message')}
          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-accent/60 focus:bg-white/[0.05] transition-colors resize-y disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={sending}
          className="group w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-accent hover:bg-accent-dark text-white font-semibold text-base transition-all hover:shadow-lg hover:shadow-accent/25 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {sending ? t('contact.sending') : t('contact.send')}
          {!sending && (
            <Send
              size={16}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          )}
        </button>

        {status === 'sent' && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3"
          >
            <CheckCircle2 size={16} />
            <span>{t('contact.success')}</span>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-rose-300 bg-rose-500/10 border border-rose-500/20 rounded-xl px-4 py-3"
          >
            <AlertCircle size={16} />
            <span>{t('contact.error')}</span>
          </motion.div>
        )}
      </form>
    </motion.div>
  )
}
