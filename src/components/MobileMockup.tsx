import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import {
  Calendar,
  Wrench,
  FileText,
  Bell,
  Car,
  MessageCircle,
  Home,
  User,
  Zap,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react'
import { useT, timeAwareGreetingKey } from '../i18n/LanguageContext'
import type { TranslationKey } from '../i18n/translations'

const FICTIVE_PLATE = 'XX 00 ABC'
const FICTIVE_YEAR = 2025

const QUICK_ACTIONS: { icon: typeof Calendar; key: TranslationKey }[] = [
  { icon: Calendar, key: 'mobile.actions.book' },
  { icon: Car, key: 'mobile.actions.garage' },
  { icon: FileText, key: 'mobile.actions.estimates' },
  { icon: MessageCircle, key: 'mobile.actions.chat' },
]

const BOTTOM_TABS: {
  icon: typeof Home
  key: TranslationKey
  active?: boolean
}[] = [
  { icon: Home, key: 'mobile.tab.home', active: true },
  { icon: Car, key: 'mobile.tab.garage' },
  { icon: Wrench, key: 'mobile.tab.service' },
  { icon: User, key: 'mobile.tab.account' },
]

const STEP_KEYS: TranslationKey[] = [
  'mobile.steps.received',
  'mobile.steps.inspection',
  'mobile.steps.inProgress',
  'mobile.steps.completed',
]

// The booking animation cycles through three states. Each frame defines
// status pill, date label, current step, and (optionally) a notification.
interface Frame {
  statusKey: TranslationKey
  statusStyle: string
  dateKey: TranslationKey
  step: number
  notificationKey?: TranslationKey
}

const FRAMES: Frame[] = [
  {
    statusKey: 'mobile.booking.status.pending',
    statusStyle: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    dateKey: 'mobile.booking.dateTomorrow',
    step: 0,
  },
  {
    statusKey: 'mobile.booking.status.confirmed',
    statusStyle: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    dateKey: 'mobile.booking.dateToday',
    step: 1,
    notificationKey: 'mobile.notification.confirmed',
  },
  {
    statusKey: 'mobile.booking.status.inProgress',
    statusStyle: 'bg-accent/15 text-accent border-accent/30',
    dateKey: 'mobile.booking.dateNow',
    step: 2,
    notificationKey: 'mobile.notification.inProgress',
  },
]

export default function MobileMockup() {
  const { t } = useT()
  const greeting = t(timeAwareGreetingKey())

  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % FRAMES.length), 3200)
    return () => clearInterval(id)
  }, [])

  const f = FRAMES[idx]

  return (
    <div className="relative">
      {/* Ambient glow */}
      <div className="absolute -inset-8 bg-accent/[0.06] rounded-full blur-3xl" />

      <div className="relative w-[290px] rounded-[2.75rem] border-[3px] border-zinc-800 bg-[#050a0f] shadow-2xl shadow-black/80 overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-20 border-b-[3px] border-x-[3px] border-zinc-800" />

        {/* App background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080A10] to-[#050A0F] pointer-events-none" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-accent/[0.08] rounded-full blur-3xl pointer-events-none" />

        <div className="relative pt-9 pb-2 min-h-[640px]">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 mb-4 text-[10px] text-white/80">
            <span className="font-semibold">9:41</span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-1.5 rounded-sm border border-white/40 relative">
                <span className="absolute inset-0.5 right-px bg-white/80 rounded-[1px]" />
              </span>
            </span>
          </div>

          {/* Header */}
          <div className="px-5 mb-5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="relative w-11 h-11 rounded-full shrink-0 overflow-hidden border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-dark" />
                  <div className="absolute inset-0 flex items-center justify-center text-[12px] font-bold text-white tracking-tight">
                    CR
                  </div>
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] text-white/50 leading-tight">
                    {greeting}
                  </div>
                  <div className="text-white text-[15px] font-bold tracking-tight leading-tight truncate">
                    {t('mobile.brand')}
                  </div>
                </div>
              </div>
              <div className="relative shrink-0">
                <div className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center">
                  <Bell size={14} className="text-white/70" />
                </div>
                <AnimatePresence>
                  {f.notificationKey && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-accent rounded-full border-2 border-[#050a0f]"
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Vehicle card */}
          <div className="px-4 mb-4">
            <div className="relative rounded-[1.4rem] overflow-hidden border border-white/[0.08] shadow-[0_18px_50px_-18px_rgba(59,130,246,0.45)]">
              <div className="aspect-[16/11] w-full relative bg-[#040810]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/futuristic-car.jpg')" }}
                />
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/55 backdrop-blur-md border border-white/10 rounded-full px-2.5 py-1">
                  <Zap size={10} className="text-accent" />
                  <span className="text-[9px] font-semibold text-white/90 tracking-wide">
                    {t('mobile.fuelType.electric')}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3.5 flex items-end justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-[9px] uppercase tracking-[1.5px] text-white/50 font-semibold">
                      {FICTIVE_YEAR}
                    </div>
                    <div className="text-white text-[15px] font-bold tracking-tight leading-tight truncate">
                      {t('mobile.myCar')}
                    </div>
                  </div>
                  <span className="font-mono font-bold text-[10px] text-white bg-white/10 border border-white/20 backdrop-blur-md px-2 py-1 rounded-md tracking-[2px] shrink-0">
                    {FICTIVE_PLATE}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <div className="px-4 mb-5">
            <div className="grid grid-cols-4 gap-2">
              {QUICK_ACTIONS.map(({ icon: Icon, key }) => (
                <div
                  key={key}
                  className="bg-white/[0.03] border border-white/[0.06] rounded-xl py-2.5 flex flex-col items-center gap-1"
                >
                  <Icon size={15} className="text-accent" />
                  <span className="text-[8.5px] text-white/60">{t(key)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section title */}
          <div className="px-5 mb-2 flex items-center justify-between">
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider">
              {t('mobile.activeOrder.title')}
            </span>
            <span className="text-[10px] text-accent flex items-center gap-0.5">
              {t('mobile.activeOrder.viewAll')} <ChevronRight size={11} />
            </span>
          </div>

          {/* Booking animation card — cycles through pending → confirmed →
              in progress with a notification toast and a 4-step pipeline. */}
          <div className="px-4 mb-3">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-white/[0.01] backdrop-blur-xl">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent" />
              <div className="p-3.5 pl-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={f.statusKey}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                    className="flex items-center gap-3 mb-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                      <Calendar size={16} className="text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[12px] text-white font-semibold truncate">
                        {t('mobile.booking.service')}
                      </div>
                      <div className="text-[10px] text-white/40 mt-0.5">
                        {t(f.dateKey)}
                      </div>
                    </div>
                    <span
                      className={`text-[9px] px-2 py-0.5 rounded-full border whitespace-nowrap ${f.statusStyle}`}
                    >
                      {t(f.statusKey)}
                    </span>
                  </motion.div>
                </AnimatePresence>

                {/* Notification toast */}
                <div className="h-7 mb-2">
                  <AnimatePresence>
                    {f.notificationKey && (
                      <motion.div
                        key={f.notificationKey}
                        initial={{ opacity: 0, y: -4, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -4, scale: 0.97 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-2 bg-white/[0.04] border border-white/10 rounded-xl px-2.5 py-1.5"
                      >
                        <div className="w-5 h-5 rounded-md bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0">
                          <Bell size={9} className="text-accent" />
                        </div>
                        <span className="text-[10px] text-white/85 leading-tight flex-1 truncate">
                          {t(f.notificationKey)}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Step pipeline */}
                <div className="flex items-center justify-between gap-1">
                  {STEP_KEYS.map((key, i) => {
                    const done = i < f.step
                    const current = i === f.step
                    return (
                      <div
                        key={key}
                        className="flex flex-col items-center flex-1"
                      >
                        <motion.div
                          animate={{ scale: current ? [1, 1.18, 1] : 1 }}
                          transition={{
                            duration: 1.4,
                            repeat: current ? Infinity : 0,
                          }}
                          className={`w-5 h-5 rounded-full flex items-center justify-center mb-1 ${
                            done
                              ? 'bg-accent'
                              : current
                              ? 'bg-accent/25 border border-accent'
                              : 'bg-white/[0.04] border border-white/10'
                          }`}
                        >
                          {done && <CheckCircle2 size={10} className="text-white" />}
                        </motion.div>
                        <span
                          className={`text-[8px] ${
                            done || current ? 'text-white/80' : 'text-white/30'
                          }`}
                        >
                          {t(key)}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="relative border-t border-white/[0.06] bg-black/40 backdrop-blur-xl">
          <div className="flex justify-around py-2.5">
            {BOTTOM_TABS.map(({ icon: Icon, key, active }) => (
              <div
                key={key}
                className={`flex flex-col items-center gap-0.5 ${
                  active ? 'text-accent' : 'text-white/30'
                }`}
              >
                <Icon size={16} />
                <span className="text-[8px] font-medium">{t(key)}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center pb-1">
            <div className="w-24 h-1 bg-white/30 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
