import { motion, AnimatePresence } from 'framer-motion'
import type { ComponentType } from 'react'
import { useEffect, useState } from 'react'
import {
  Calendar,
  Wrench,
  FileText,
  Users,
  MessageCircle,
  Settings as Cog,
  Plus,
  CheckCircle2,
} from 'lucide-react'
import MobileMockup from './MobileMockup'

// ── Types ─────────────────────────────────────────────────────────────────

type ViewKey =
  | 'appointments'
  | 'work-orders'
  | 'estimates'
  | 'clients'
  | 'chat'
  | 'settings'

interface NavItem {
  key: ViewKey
  icon: ComponentType<{ size?: number; className?: string }>
  label: string
}

const NAV: NavItem[] = [
  { key: 'appointments', icon: Calendar, label: 'Appointments' },
  { key: 'work-orders', icon: Wrench, label: 'Work Orders' },
  { key: 'estimates', icon: FileText, label: 'Estimates' },
  { key: 'clients', icon: Users, label: 'Clients' },
  { key: 'chat', icon: MessageCircle, label: 'Chat' },
  { key: 'settings', icon: Cog, label: 'Settings' },
]

// Loop only through 4 main views for the demo
const DEMO_LOOP: ViewKey[] = [
  'appointments',
  'work-orders',
  'estimates',
  'clients',
]

const TAG_STYLE: Record<string, string> = {
  New: 'bg-accent/15 text-accent border-accent/30',
  Confirmed: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  'In progress': 'bg-amber-500/15 text-amber-400 border-amber-500/30',
  Inspection: 'bg-accent/15 text-accent border-accent/30',
  'Waiting parts': 'bg-amber-500/15 text-amber-400 border-amber-500/30',
  Sent: 'bg-accent/15 text-accent border-accent/30',
  Approved: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  Draft: 'bg-white/10 text-zinc-400 border-white/10',
}

function StatusPill({ tag }: { tag: string }) {
  return (
    <span
      className={`text-[9px] px-2 py-0.5 rounded-full border whitespace-nowrap ${
        TAG_STYLE[tag] ?? 'bg-white/5 text-zinc-400 border-white/10'
      }`}
    >
      {tag}
    </span>
  )
}

// ── Views ─────────────────────────────────────────────────────────────────

function AppointmentsView() {
  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white text-[13px] font-semibold">Appointments</h3>
        <div className="flex gap-1.5">
          {['All', 'New', 'Confirmed'].map((t, i) => (
            <span
              key={t}
              className={`text-[10px] px-2.5 py-0.5 rounded-full border ${
                i === 0
                  ? 'bg-accent/10 text-accent border-accent/30'
                  : 'bg-white/[0.03] text-zinc-500 border-white/5'
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 mb-3">
        {[
          { label: 'Total', val: '47' },
          { label: 'New', val: '12' },
          { label: 'Confirmed', val: '28' },
          { label: 'Today', val: '6' },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-white/[0.03] rounded-lg p-2 border border-white/5"
          >
            <div className="text-white text-base font-bold leading-none">
              {s.val}
            </div>
            <div className="text-[9px] text-zinc-600 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="space-y-1.5">
        {[
          { svc: 'Oil Change', plate: 'XX 00 ABC', time: '10:00', tag: 'New' },
          {
            svc: 'Brake Inspection',
            plate: 'XX 00 DEF',
            time: '11:30',
            tag: 'Confirmed',
          },
          { svc: 'Full Service', plate: 'XX 00 GHI', time: '14:00', tag: 'New' },
        ].map((row) => (
          <div
            key={row.svc}
            className="flex items-center justify-between py-2 px-2.5 rounded-lg bg-white/[0.02] border border-white/5"
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <div>
                <div className="text-[11px] text-white">{row.svc}</div>
                <div className="text-[9px] text-zinc-600 font-mono">
                  {row.plate}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-zinc-500">{row.time}</span>
              <StatusPill tag={row.tag} />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

function WorkOrdersView() {
  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white text-[13px] font-semibold">Work Orders</h3>
        <div className="flex gap-1.5">
          {['All', 'In progress', 'Waiting'].map((t, i) => (
            <span
              key={t}
              className={`text-[10px] px-2.5 py-0.5 rounded-full border ${
                i === 1
                  ? 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                  : 'bg-white/[0.03] text-zinc-500 border-white/5'
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-1.5 mb-3">
        {[
          { stage: 'Received', count: 4, color: 'bg-accent' },
          { stage: 'Inspection', count: 3, color: 'bg-accent' },
          { stage: 'In progress', count: 5, color: 'bg-amber-400' },
          { stage: 'Completed', count: 8, color: 'bg-emerald-400' },
        ].map((s) => (
          <div
            key={s.stage}
            className="bg-white/[0.03] rounded-lg p-2 border border-white/5"
          >
            <div className="flex items-center gap-1 mb-1">
              <span className={`w-1.5 h-1.5 rounded-full ${s.color}`} />
              <div className="text-[8.5px] text-zinc-500 truncate">
                {s.stage}
              </div>
            </div>
            <div className="text-white text-sm font-bold">{s.count}</div>
          </div>
        ))}
      </div>
      <div className="space-y-1.5">
        {[
          { svc: 'Brake pads + discs', plate: 'XX 00 ABC', tag: 'In progress' },
          { svc: 'Oil & filter', plate: 'XX 00 DEF', tag: 'Inspection' },
          { svc: 'AC service', plate: 'XX 00 GHI', tag: 'Waiting parts' },
        ].map((row) => (
          <div
            key={row.svc}
            className="flex items-center justify-between py-2 px-2.5 rounded-lg bg-white/[0.02] border border-white/5"
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Wrench size={10} className="text-accent" />
              </div>
              <div>
                <div className="text-[11px] text-white">{row.svc}</div>
                <div className="text-[9px] text-zinc-600 font-mono">
                  {row.plate}
                </div>
              </div>
            </div>
            <StatusPill tag={row.tag} />
          </div>
        ))}
      </div>
    </>
  )
}

function EstimatesView() {
  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white text-[13px] font-semibold">Estimates</h3>
        <span className="text-[10px] flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent text-white">
          <Plus size={10} /> New estimate
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { label: 'Draft', val: '4', color: 'text-zinc-400' },
          { label: 'Sent', val: '7', color: 'text-accent' },
          { label: 'Approved', val: '12', color: 'text-emerald-400' },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-white/[0.03] rounded-lg p-2 border border-white/5"
          >
            <div className={`text-base font-bold leading-none ${s.color}`}>
              {s.val}
            </div>
            <div className="text-[9px] text-zinc-600 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="space-y-1.5">
        {[
          { title: 'Brake replacement', total: '1 240', tag: 'Sent' },
          { title: 'Major service', total: '890', tag: 'Approved' },
          { title: 'AC recharge + filter', total: '420', tag: 'Draft' },
        ].map((row) => (
          <div
            key={row.title}
            className="flex items-center justify-between py-2 px-2.5 rounded-lg bg-white/[0.02] border border-white/5"
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center">
                <FileText size={10} className="text-accent" />
              </div>
              <div>
                <div className="text-[11px] text-white">{row.title}</div>
                <div className="text-[9px] text-zinc-600">
                  {row.total} RON
                </div>
              </div>
            </div>
            <StatusPill tag={row.tag} />
          </div>
        ))}
      </div>
    </>
  )
}

function ClientsView() {
  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white text-[13px] font-semibold">Clients</h3>
        <span className="text-[10px] text-zinc-500">342 active</span>
      </div>
      <div className="space-y-1.5">
        {[
          { initials: 'AM', vehicles: 1, last: 'Yesterday' },
          { initials: 'CD', vehicles: 2, last: '3 days ago' },
          { initials: 'RP', vehicles: 1, last: '1 week ago' },
          { initials: 'MN', vehicles: 3, last: '2 weeks ago' },
          { initials: 'SK', vehicles: 1, last: 'Last month' },
        ].map((c, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 py-2 px-2.5 rounded-lg bg-white/[0.02] border border-white/5"
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-[10px] font-bold text-white shrink-0">
              {c.initials}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[11px] text-white">Customer #{1000 + i}</div>
              <div className="text-[9px] text-zinc-600">
                {c.vehicles} vehicle{c.vehicles > 1 ? 's' : ''} · last visit{' '}
                {c.last}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

const VIEWS: Record<ViewKey, ComponentType> = {
  appointments: AppointmentsView,
  'work-orders': WorkOrdersView,
  estimates: EstimatesView,
  clients: ClientsView,
  chat: AppointmentsView, // placeholder, not used in demo loop
  settings: AppointmentsView,
}

const HEADERS: Record<ViewKey, string> = {
  appointments: 'Appointments',
  'work-orders': 'Work orders',
  estimates: 'Estimates',
  clients: 'Clients',
  chat: 'Live chat',
  settings: 'Settings',
}

// ── Main showcase ─────────────────────────────────────────────────────────

export default function HeroShowcase() {
  const [stepIdx, setStepIdx] = useState(0)
  const active = DEMO_LOOP[stepIdx]
  const View = VIEWS[active]

  // Auto-advance through the views — no cursor, just clean nav highlight cycle.
  useEffect(() => {
    const next = setTimeout(
      () => setStepIdx((s) => (s + 1) % DEMO_LOOP.length),
      2800,
    )
    return () => clearTimeout(next)
  }, [stepIdx])

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10">
      {/* Dashboard with autoplaying cursor */}
      <div className="relative w-full max-w-[640px]">
        {/* Glow */}
        <div className="absolute -inset-6 bg-gradient-to-r from-accent/20 via-accent/5 to-accent/20 rounded-3xl blur-3xl" />

        <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0a0d12] shadow-2xl shadow-black/80">
          {/* Browser bar */}
          <div className="flex items-center gap-2 px-3 py-2 border-b border-white/5 bg-[#11151c]">
            <div className="flex gap-1">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            </div>
            <div className="flex-1 text-center text-[9px] text-zinc-600">
              dashboard.carrevio.com / {HEADERS[active]}
            </div>
            <div className="flex items-center gap-1 text-[9px] text-emerald-400">
              <CheckCircle2 size={9} /> live demo
            </div>
          </div>

          <div className="flex relative">
            {/* Sidebar */}
            <div className="w-44 border-r border-white/5 bg-[#0d1117] p-2.5 hidden sm:block relative">
              <div className="flex items-center gap-2 mb-4 px-1.5 pt-1">
                <img
                  src="/icon-transparent.png"
                  alt=""
                  className="w-7 h-7 brightness-0 invert"
                />
                <span className="text-white text-xs font-semibold">
                  CarRevio
                </span>
              </div>
              {NAV.map((item) => {
                const isActive = item.key === active
                return (
                  <motion.div
                    key={item.key}
                    animate={{
                      backgroundColor: isActive
                        ? 'rgba(59,130,246,0.10)'
                        : 'rgba(59,130,246,0)',
                    }}
                    transition={{ duration: 0.4 }}
                    className={`relative flex items-center gap-2 text-[11px] py-1.5 px-2 rounded-lg mb-0.5 ${
                      isActive ? 'text-accent' : 'text-zinc-500'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="dash-nav-indicator"
                        className="absolute left-0 top-1.5 bottom-1.5 w-[2px] rounded-full bg-accent"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <item.icon size={12} />
                    {item.label}
                  </motion.div>
                )
              })}
            </div>

            {/* Content */}
            <div className="flex-1 p-4 min-h-[320px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <View />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Phone mockup with futuristic floating + tilt */}
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative shrink-0"
        style={{
          transform: 'perspective(900px) rotateY(-8deg) rotateX(2deg)',
        }}
      >
        {/* Aura behind phone */}
        <div className="absolute -inset-12 bg-gradient-to-br from-accent/15 via-accent/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        {/* Conic glow on edge */}
        <div
          className="absolute -inset-1 rounded-[2.75rem] opacity-50 blur-md pointer-events-none"
          style={{
            background:
              'conic-gradient(from 90deg, rgba(59,130,246,0.5), transparent 35%, transparent 65%, rgba(96,165,250,0.4))',
          }}
        />
        <MobileMockup />
      </motion.div>
    </div>
  )
}
