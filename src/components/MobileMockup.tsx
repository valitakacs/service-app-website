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
  CheckCircle2,
  ChevronRight,
} from 'lucide-react'

// Mirrors the real CarRevio mobile app: dark navy bg, glass cards with
// primary blue accent stripe, fictive plate (XX 00 ABC), no real names.
// Cycles through 3 home-screen states to simulate live navigation.

type Status = 'În așteptare' | 'Confirmată' | 'Reprogramată'

interface Frame {
  reminderTitle: string
  reminderDate: string
  reminderTime: string
  reminderStatus: Status
  workOrderStep: number
  notification?: string
}

const FRAMES: Frame[] = [
  {
    reminderTitle: 'Schimb ulei + filtru',
    reminderDate: 'Mâine, Mar 30',
    reminderTime: '09:30 — 10:30',
    reminderStatus: 'În așteptare',
    workOrderStep: 0,
  },
  {
    reminderTitle: 'Schimb ulei + filtru',
    reminderDate: 'Astăzi, Mar 30',
    reminderTime: '09:30 — 10:30',
    reminderStatus: 'Confirmată',
    workOrderStep: 2,
    notification: 'Programarea ta a fost confirmată',
  },
  {
    reminderTitle: 'Plăcuțe frână + discuri',
    reminderDate: 'Astăzi, Mar 30',
    reminderTime: '14:00 — 15:30',
    reminderStatus: 'Reprogramată',
    workOrderStep: 3,
    notification: 'Mecanicul lucrează la mașina ta',
  },
]

const STATUS_STYLE: Record<Status, string> = {
  'În așteptare': 'bg-amber-500/15 text-amber-400 border border-amber-500/30',
  'Confirmată': 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
  'Reprogramată': 'bg-accent/15 text-accent border border-accent/30',
}

const STEPS = ['Primit', 'Inspecție', 'În lucru', 'Finalizat']

export default function MobileMockup() {
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

      {/* Phone frame */}
      <div className="relative w-[290px] rounded-[2.75rem] border-[3px] border-zinc-800 bg-[#050a0f] shadow-2xl shadow-black/80 overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-20 border-b-[3px] border-x-[3px] border-zinc-800" />

        {/* Subtle background gradient like AppGradientBackground in mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080A10] to-[#050A0F] pointer-events-none" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-accent/[0.08] rounded-full blur-3xl pointer-events-none" />

        {/* Screen */}
        <div className="relative pt-9 pb-2 min-h-[540px]">
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
            <div className="flex items-start justify-between mb-1">
              <div>
                <div className="text-[11px] text-white/50">Bună dimineața</div>
                <div className="text-white text-[20px] font-bold tracking-tight">
                  Acasă
                </div>
              </div>
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center">
                  <Bell size={15} className="text-white/70" />
                </div>
                <AnimatePresence>
                  {f.notification && (
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

          {/* Notification toast */}
          <div className="px-4 mb-3 h-9">
            <AnimatePresence>
              {f.notification && (
                <motion.div
                  key={f.notification}
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.97 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-2 bg-white/[0.04] border border-white/10 backdrop-blur-md rounded-2xl px-3 py-2"
                >
                  <div className="w-6 h-6 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center">
                    <Bell size={11} className="text-accent" />
                  </div>
                  <span className="text-[10.5px] text-white/90 leading-tight flex-1">
                    {f.notification}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Service reminder card — glassmorphism with left accent border */}
          <div className="px-4 mb-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={f.reminderTitle + f.reminderStatus}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-white/[0.01] backdrop-blur-xl"
              >
                {/* Left accent border */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent" />
                <div className="p-3.5 pl-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <Calendar size={16} className="text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[12px] text-white font-semibold truncate">
                      {f.reminderTitle}
                    </div>
                    <div className="text-[10px] text-white/40 mt-0.5">
                      {f.reminderDate} · {f.reminderTime}
                    </div>
                  </div>
                  <span
                    className={`text-[9px] px-2 py-0.5 rounded-full whitespace-nowrap ${
                      STATUS_STYLE[f.reminderStatus]
                    }`}
                  >
                    {f.reminderStatus}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quick actions row */}
          <div className="px-4 mb-4">
            <div className="grid grid-cols-4 gap-2">
              {[
                { icon: Calendar, label: 'Programare' },
                { icon: Car, label: 'Garaj' },
                { icon: FileText, label: 'Devize' },
                { icon: MessageCircle, label: 'Chat' },
              ].map((a) => (
                <div
                  key={a.label}
                  className="bg-white/[0.03] border border-white/[0.06] rounded-xl py-2 flex flex-col items-center gap-1"
                >
                  <a.icon size={15} className="text-accent" />
                  <span className="text-[8.5px] text-white/60">{a.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section title */}
          <div className="px-5 mb-2 flex items-center justify-between">
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider">
              Comandă activă
            </span>
            <span className="text-[10px] text-accent flex items-center gap-0.5">
              vezi tot <ChevronRight size={11} />
            </span>
          </div>

          {/* Work order glass card with status ring */}
          <div className="px-4 mb-3">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-white/[0.01] backdrop-blur-xl p-3.5">
              <div className="flex items-center gap-3 mb-3">
                {/* Status ring */}
                <div className="relative w-12 h-12 shrink-0">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 48 48">
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      fill="none"
                      stroke="rgba(255,255,255,0.06)"
                      strokeWidth="3"
                    />
                    <motion.circle
                      cx="24"
                      cy="24"
                      r="20"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 20}
                      animate={{
                        strokeDashoffset:
                          2 * Math.PI * 20 *
                          (1 - f.workOrderStep / (STEPS.length - 1)),
                      }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Wrench size={14} className="text-accent" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11.5px] font-semibold text-white truncate">
                    Renault Clio
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-[8.5px] font-mono font-bold text-white bg-white/10 border border-white/15 px-1.5 py-px rounded tracking-wider">
                      XX 00 ABC
                    </span>
                    <span className="text-[9px] text-white/40">2018</span>
                  </div>
                </div>
              </div>

              {/* Step pills */}
              <div className="flex items-center justify-between gap-1">
                {STEPS.map((s, i) => {
                  const done = i < f.workOrderStep
                  const current = i === f.workOrderStep
                  return (
                    <div key={s} className="flex flex-col items-center flex-1">
                      <motion.div
                        animate={{ scale: current ? [1, 1.18, 1] : 1 }}
                        transition={{
                          duration: 1.6,
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
                        {done && (
                          <CheckCircle2 size={10} className="text-white" />
                        )}
                      </motion.div>
                      <span
                        className={`text-[8px] ${
                          done || current ? 'text-white/80' : 'text-white/30'
                        }`}
                      >
                        {s}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom nav (blurred bottom bar) */}
        <div className="relative border-t border-white/[0.06] bg-black/40 backdrop-blur-xl">
          <div className="flex justify-around py-2.5">
            {[
              { icon: Home, label: 'Acasă', active: true },
              { icon: Car, label: 'Garaj' },
              { icon: Wrench, label: 'Service' },
              { icon: User, label: 'Cont' },
            ].map((tab) => (
              <div
                key={tab.label}
                className={`flex flex-col items-center gap-0.5 ${
                  tab.active ? 'text-accent' : 'text-white/30'
                }`}
              >
                <tab.icon size={16} />
                <span className="text-[8px] font-medium">{tab.label}</span>
              </div>
            ))}
          </div>
          {/* Home indicator */}
          <div className="flex justify-center pb-1">
            <div className="w-24 h-1 bg-white/30 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
