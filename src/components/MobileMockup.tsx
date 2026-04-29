import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import {
  Calendar,
  Wrench,
  FileText,
  Bell,
  Car,
  MessageCircle,
  CheckCircle2,
} from 'lucide-react'

// Animated phone screen — cycles through 3 home states (booking, work
// in progress, estimate ready) so it feels like the user is navigating
// the app. Pure CSS/motion, no real data.

type Status = 'Confirmed' | 'In progress' | 'Estimate ready'

interface Frame {
  greeting: string
  serviceTitle: string
  serviceTime: string
  serviceStatus: Status
  workOrderStep: number
  notification?: string
}

const FRAMES: Frame[] = [
  {
    greeting: 'Good morning',
    serviceTitle: 'Oil & filter change',
    serviceTime: 'Tomorrow · 09:30',
    serviceStatus: 'Confirmed',
    workOrderStep: 1,
  },
  {
    greeting: 'Good morning',
    serviceTitle: 'Oil & filter change',
    serviceTime: 'Today · 09:30',
    serviceStatus: 'In progress',
    workOrderStep: 3,
    notification: 'Mechanic just started your service',
  },
  {
    greeting: 'Good morning',
    serviceTitle: 'Brake pads + discs',
    serviceTime: 'Estimate · 1 240 RON',
    serviceStatus: 'Estimate ready',
    workOrderStep: 4,
    notification: 'Estimate from your shop · tap to review',
  },
]

const STATUS_STYLE: Record<Status, string> = {
  'Confirmed': 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
  'In progress': 'bg-amber-500/15 text-amber-400 border border-amber-500/30',
  'Estimate ready': 'bg-violet-500/15 text-violet-400 border border-violet-500/30',
}

const STEPS = ['Received', 'Inspection', 'Decision', 'In progress', 'Done']

export default function MobileMockup() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % FRAMES.length), 2800)
    return () => clearInterval(id)
  }, [])

  const f = FRAMES[idx]

  return (
    <div className="relative">
      {/* Glow */}
      <div className="absolute -inset-8 bg-accent/[0.04] rounded-full blur-3xl" />

      {/* Phone frame */}
      <div className="relative w-[280px] rounded-[2.5rem] border-[3px] border-zinc-800 bg-black shadow-2xl shadow-black/80 overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-10 border-b-[3px] border-x-[3px] border-zinc-800" />

        {/* Screen */}
        <div className="pt-10 pb-6 px-5 min-h-[500px]">
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <div className="text-[10px] text-zinc-600">{f.greeting}</div>
              <div className="text-white text-sm font-semibold">Welcome back</div>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-[10px] font-bold text-white">
              CR
            </div>
          </div>

          {/* Floating notification */}
          <div className="h-12 mb-3 relative">
            <AnimatePresence>
              {f.notification && (
                <motion.div
                  key={f.notification}
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-xl px-3 py-2"
                >
                  <Bell size={14} className="text-accent shrink-0" />
                  <span className="text-[11px] text-white leading-tight">
                    {f.notification}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Quick actions */}
          <div className="grid grid-cols-4 gap-2 mb-5">
            {[
              { icon: Calendar, label: 'Book' },
              { icon: Car, label: 'Garage' },
              { icon: FileText, label: 'Estimates' },
              { icon: MessageCircle, label: 'Chat' },
            ].map((a) => (
              <div
                key={a.label}
                className="bg-zinc-900 rounded-xl p-2.5 text-center border border-white/5"
              >
                <a.icon size={16} className="text-accent mx-auto mb-1" />
                <div className="text-[9px] text-zinc-400">{a.label}</div>
              </div>
            ))}
          </div>

          {/* Upcoming card with rotating content */}
          <div className="text-[10px] uppercase tracking-wide text-zinc-600 mb-2">
            Your service
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={f.serviceTitle + f.serviceStatus}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="bg-zinc-900 rounded-xl p-3 border border-white/5 mb-3"
            >
              <div className="flex items-start justify-between mb-2 gap-2">
                <span className="text-[11px] font-medium text-white leading-tight">
                  {f.serviceTitle}
                </span>
                <span
                  className={`text-[9px] px-2 py-0.5 rounded-full whitespace-nowrap ${
                    STATUS_STYLE[f.serviceStatus]
                  }`}
                >
                  {f.serviceStatus}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-zinc-500">
                <Calendar size={10} />
                {f.serviceTime}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Work order timeline */}
          <div className="text-[10px] uppercase tracking-wide text-zinc-600 mb-2">
            Progress
          </div>
          <div className="bg-zinc-900 rounded-xl p-3 border border-white/5">
            <div className="flex items-center justify-between mb-2">
              {STEPS.map((s, i) => {
                const done = i < f.workOrderStep
                const current = i === f.workOrderStep
                return (
                  <div key={s} className="flex flex-col items-center flex-1">
                    <motion.div
                      animate={{
                        scale: current ? [1, 1.15, 1] : 1,
                      }}
                      transition={{
                        duration: 1.6,
                        repeat: current ? Infinity : 0,
                      }}
                      className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        done
                          ? 'bg-accent'
                          : current
                          ? 'bg-accent/30 border border-accent'
                          : 'bg-zinc-800 border border-zinc-700'
                      }`}
                    >
                      {done && <CheckCircle2 size={10} className="text-white" />}
                    </motion.div>
                  </div>
                )
              })}
            </div>
            {/* Progress bar */}
            <div className="relative h-0.5 bg-zinc-800 rounded-full overflow-hidden mt-1 mb-3">
              <motion.div
                animate={{
                  width: `${(f.workOrderStep / (STEPS.length - 1)) * 100}%`,
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-accent to-accent-light"
              />
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-zinc-500">
              <Wrench size={10} className="text-accent" />
              <span>
                Step {f.workOrderStep + 1} of {STEPS.length} ·{' '}
                {STEPS[f.workOrderStep]}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="flex justify-around py-3 border-t border-white/5">
          {['Home', 'Garage', 'Service', 'Account'].map((tab, i) => (
            <div
              key={tab}
              className={`text-[9px] ${
                i === 0 ? 'text-accent font-medium' : 'text-zinc-700'
              }`}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
