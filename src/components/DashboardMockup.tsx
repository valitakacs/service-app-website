import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import {
  Calendar,
  Wrench,
  FileText,
  Users,
  MessageCircle,
  Settings as Cog,
  ArrowUpRight,
} from 'lucide-react'

// Animated CarRevio dashboard mockup. Pure visual — no real customer data.
// Loops through 3 states (booking arrives → mechanic assigned → estimate sent)
// to show the platform "moving" without needing a real video file.

const STATES = [
  {
    label: 'Booking received',
    rows: [
      { svc: 'Oil & filter', plate: 'XX 00 ABC', time: '09:30', tag: 'New' },
      { svc: 'Brake check', plate: 'XX 00 DEF', time: '10:45', tag: 'Confirmed' },
      { svc: 'AC service', plate: 'XX 00 GHI', time: '13:00', tag: 'New' },
    ],
    stats: [12, 8, 5, 342],
  },
  {
    label: 'Mechanic assigned',
    rows: [
      { svc: 'Oil & filter', plate: 'XX 00 ABC', time: '09:30', tag: 'In progress' },
      { svc: 'Brake check', plate: 'XX 00 DEF', time: '10:45', tag: 'Confirmed' },
      { svc: 'AC service', plate: 'XX 00 GHI', time: '13:00', tag: 'New' },
    ],
    stats: [13, 9, 5, 342],
  },
  {
    label: 'Estimate sent',
    rows: [
      { svc: 'Oil & filter', plate: 'XX 00 ABC', time: '09:30', tag: 'In progress' },
      { svc: 'Brake check', plate: 'XX 00 DEF', time: '10:45', tag: 'Estimate sent' },
      { svc: 'AC service', plate: 'XX 00 GHI', time: '13:00', tag: 'Confirmed' },
    ],
    stats: [13, 9, 6, 343],
  },
]

const TAG_STYLE: Record<string, string> = {
  'New': 'bg-accent/15 text-accent border-accent/30',
  'Confirmed': 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  'In progress': 'bg-amber-500/15 text-amber-400 border-amber-500/30',
  'Estimate sent': 'bg-violet-500/15 text-violet-400 border-violet-500/30',
}

const STAT_LABELS = ['Today', 'Active jobs', 'Estimates', 'Customers']

export default function DashboardMockup() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % STATES.length), 2800)
    return () => clearInterval(id)
  }, [])

  const state = STATES[step]

  return (
    <div className="relative mx-auto max-w-4xl">
      {/* Glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-accent/15 via-accent/5 to-accent/15 rounded-2xl blur-2xl" />

      <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0a0d12] shadow-2xl shadow-black/80">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#11151c]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-zinc-700" />
            <div className="w-3 h-3 rounded-full bg-zinc-700" />
            <div className="w-3 h-3 rounded-full bg-zinc-700" />
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-black rounded-md px-4 py-1.5 text-xs text-zinc-600 text-center">
              dashboard.carrevio.com
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={state.label}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.35 }}
              className="hidden sm:flex items-center gap-1.5 text-[10px] text-zinc-500"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {state.label}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="hidden sm:flex flex-col w-44 border-r border-white/5 bg-[#0d1117] p-3">
            <div className="flex items-center gap-2 mb-5 px-2 pt-1">
              <img
                src="/icon-transparent.png"
                alt=""
                className="w-7 h-7 brightness-0 invert"
              />
              <span className="text-white text-sm font-semibold">CarRevio</span>
            </div>
            {[
              { icon: Calendar, label: 'Appointments', active: true },
              { icon: Wrench, label: 'Work Orders' },
              { icon: FileText, label: 'Estimates' },
              { icon: Users, label: 'Clients' },
              { icon: MessageCircle, label: 'Chat' },
              { icon: Cog, label: 'Settings' },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 text-xs py-2 px-2 rounded-lg mb-1 transition-colors ${
                  item.active
                    ? 'bg-accent/10 text-accent'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                <item.icon size={13} />
                {item.label}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 p-5">
            {/* Stats */}
            <div className="grid grid-cols-4 gap-3 mb-5">
              {state.stats.map((val, i) => (
                <div
                  key={i}
                  className="bg-[#11151c] rounded-lg p-3 border border-white/5"
                >
                  <div className="flex items-baseline gap-1">
                    <motion.div
                      key={`${i}-${val}`}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className={`text-2xl font-bold ${
                        i === 0 ? 'text-accent' : 'text-white'
                      }`}
                    >
                      {val}
                    </motion.div>
                    {i === 3 && (
                      <span className="text-[9px] text-emerald-400 flex items-center gap-0.5">
                        <ArrowUpRight size={9} />
                        +1
                      </span>
                    )}
                  </div>
                  <div className="text-[10px] text-zinc-600 mt-1">
                    {STAT_LABELS[i]}
                  </div>
                </div>
              ))}
            </div>

            {/* Filter pills */}
            <div className="flex items-center gap-2 mb-3">
              {['All', 'New', 'Confirmed', 'In progress'].map((p, i) => (
                <span
                  key={p}
                  className={`text-[10px] px-2.5 py-1 rounded-full border ${
                    i === 0
                      ? 'bg-accent/10 text-accent border-accent/30'
                      : 'bg-white/[0.03] text-zinc-500 border-white/5'
                  }`}
                >
                  {p}
                </span>
              ))}
            </div>

            {/* Rows */}
            <div className="space-y-1">
              {state.rows.map((row, i) => (
                <motion.div
                  key={`${row.plate}-${row.tag}`}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-white/[0.02] border border-white/5"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <Wrench size={11} className="text-accent" />
                    </div>
                    <div>
                      <div className="text-xs text-white">{row.svc}</div>
                      <div className="text-[10px] text-zinc-600 font-mono">
                        {row.plate}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-zinc-500">{row.time}</span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full border ${
                        TAG_STYLE[row.tag] ??
                        'bg-white/5 text-zinc-400 border-white/10'
                      }`}
                    >
                      {row.tag}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
