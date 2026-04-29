import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import type * as React from 'react'
import {
  Calendar,
  Wrench,
  FileText,
  Users,
  MessageCircle,
  Settings as Cog,
  Send,
  Plus,
  CheckCircle2,
} from 'lucide-react'

type ViewKey =
  | 'appointments'
  | 'work-orders'
  | 'estimates'
  | 'clients'
  | 'chat'
  | 'settings'

interface NavItem {
  key: ViewKey
  icon: typeof Calendar
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

const TAG_STYLE: Record<string, string> = {
  New: 'bg-accent/15 text-accent border-accent/30',
  Confirmed: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  Rescheduled: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
  'In progress': 'bg-amber-500/15 text-amber-400 border-amber-500/30',
  Received: 'bg-accent/15 text-accent border-accent/30',
  Inspection: 'bg-accent/15 text-accent border-accent/30',
  'Waiting parts': 'bg-amber-500/15 text-amber-400 border-amber-500/30',
  Completed: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  Draft: 'bg-white/10 text-zinc-400 border-white/10',
  Sent: 'bg-accent/15 text-accent border-accent/30',
  Approved: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  Active: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
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
      {/* Header */}
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
      {/* Stats */}
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
      {/* Rows */}
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
      {/* Pipeline columns */}
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
      {/* Active jobs */}
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
        <button className="text-[10px] flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent text-white">
          <Plus size={10} /> New estimate
        </button>
      </div>
      {/* Stats */}
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
      {/* Estimate rows */}
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

function ChatView() {
  return (
    <div className="flex flex-col h-[260px]">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white text-[13px] font-semibold">Live chat</h3>
        <span className="flex items-center gap-1 text-[10px] text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Connected
        </span>
      </div>
      <div className="flex-1 space-y-2 overflow-hidden">
        {/* Customer */}
        <div className="flex items-end gap-1.5">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-accent to-accent-dark shrink-0" />
          <div className="bg-white/[0.05] border border-white/5 rounded-2xl rounded-bl-sm px-2.5 py-1.5 max-w-[75%]">
            <div className="text-[10.5px] text-white/90">
              Hi, when can I bring my car in?
            </div>
          </div>
        </div>
        {/* Shop reply */}
        <div className="flex justify-end">
          <div className="bg-accent/15 border border-accent/30 rounded-2xl rounded-br-sm px-2.5 py-1.5 max-w-[75%]">
            <div className="text-[10.5px] text-white">
              Hello! Tomorrow 09:30 works, slot is reserved.
            </div>
          </div>
        </div>
        {/* Estimate card embedded */}
        <div className="flex items-end gap-1.5">
          <div className="w-5 h-5 rounded-full bg-zinc-800 shrink-0" />
          <div className="bg-accent/[0.06] border border-accent/30 rounded-2xl rounded-bl-sm px-2.5 py-1.5 max-w-[75%]">
            <div className="flex items-center gap-1 mb-0.5">
              <FileText size={10} className="text-accent" />
              <span className="text-[10px] text-accent font-semibold">
                Estimate · 1 240 RON
              </span>
            </div>
            <div className="text-[9.5px] text-white/70">
              Tap to review and approve
            </div>
          </div>
        </div>
      </div>
      {/* Composer */}
      <div className="flex items-center gap-2 mt-2 px-2.5 py-1.5 rounded-full bg-white/[0.04] border border-white/5">
        <div className="flex-1 text-[10.5px] text-zinc-600">
          Type a message…
        </div>
        <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
          <Send size={11} className="text-white" />
        </div>
      </div>
    </div>
  )
}

function SettingsView() {
  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white text-[13px] font-semibold">Settings</h3>
        <span className="text-[10px] text-zinc-500">Saved · 2 min ago</span>
      </div>
      {/* Tabs */}
      <div className="flex gap-1.5 mb-3">
        {['Profile', 'Services', 'Locations'].map((t, i) => (
          <span
            key={t}
            className={`text-[10px] px-2.5 py-1 rounded-full border ${
              i === 0
                ? 'bg-accent/10 text-accent border-accent/30'
                : 'bg-white/[0.03] text-zinc-500 border-white/5'
            }`}
          >
            {t}
          </span>
        ))}
      </div>
      {/* Form rows */}
      <div className="space-y-2">
        {[
          { label: 'Shop name', value: 'Your Auto Service' },
          { label: 'Phone', value: '+40 ··· ··· ···' },
          { label: 'Locations', value: '2 active' },
          { label: 'Services in catalog', value: '14' },
        ].map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between py-2 px-2.5 rounded-lg bg-white/[0.02] border border-white/5"
          >
            <div className="text-[10.5px] text-zinc-500">{row.label}</div>
            <div className="text-[10.5px] text-white font-medium">
              {row.value}
            </div>
          </div>
        ))}
      </div>
      {/* Working hours preview */}
      <div className="mt-3 p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
        <div className="text-[10px] text-zinc-500 mb-1.5">Working hours</div>
        <div className="grid grid-cols-7 gap-1">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
            <div
              key={i}
              className={`h-6 rounded flex items-center justify-center text-[9px] font-semibold ${
                i < 5
                  ? 'bg-accent/15 text-accent'
                  : i === 5
                  ? 'bg-amber-500/15 text-amber-400'
                  : 'bg-white/[0.03] text-zinc-600'
              }`}
            >
              {d}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

const VIEWS: Record<ViewKey, () => React.ReactElement> = {
  'appointments': AppointmentsView,
  'work-orders': WorkOrdersView,
  estimates: EstimatesView,
  clients: ClientsView,
  chat: ChatView,
  settings: SettingsView,
}

const HEADERS: Record<ViewKey, string> = {
  appointments: 'Appointments',
  'work-orders': 'Work orders',
  estimates: 'Estimates',
  clients: 'Clients',
  chat: 'Live chat',
  settings: 'Settings',
}

// ── Main component ────────────────────────────────────────────────────────

export default function InteractiveDashboard() {
  const [active, setActive] = useState<ViewKey>('appointments')
  const View = VIEWS[active]

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-accent/[0.04] rounded-2xl blur-2xl" />
      <div className="relative rounded-xl border border-white/10 bg-[#0a0d12] overflow-hidden shadow-2xl shadow-black/60">
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
            <CheckCircle2 size={9} /> live
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-44 border-r border-white/5 bg-[#0d1117] p-2.5 hidden sm:block">
            <div className="flex items-center gap-2 mb-4 px-1.5 pt-1">
              <img
                src="/icon-transparent.png"
                alt=""
                className="w-7 h-7 brightness-0 invert"
              />
              <span className="text-white text-xs font-semibold">CarRevio</span>
            </div>
            {NAV.map((item) => {
              const isActive = item.key === active
              return (
                <button
                  key={item.key}
                  onClick={() => setActive(item.key)}
                  className={`w-full flex items-center gap-2 text-[11px] py-1.5 px-2 rounded-lg mb-0.5 transition-colors ${
                    isActive
                      ? 'bg-accent/10 text-accent'
                      : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.02]'
                  }`}
                >
                  <item.icon size={12} />
                  {item.label}
                </button>
              )
            })}
          </div>

          {/* Content */}
          <div className="flex-1 p-4 min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25 }}
              >
                <View />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
