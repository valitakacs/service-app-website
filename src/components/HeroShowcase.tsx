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
import { useT } from '../i18n/LanguageContext'
import type { TranslationKey } from '../i18n/translations'

type ViewKey = 'appointments' | 'work-orders' | 'estimates' | 'clients'

interface NavItem {
  key: ViewKey
  icon: ComponentType<{ size?: number; className?: string }>
  labelKey: TranslationKey
}

const NAV: NavItem[] = [
  { key: 'appointments', icon: Calendar, labelKey: 'dash.appointments.header' },
  { key: 'work-orders', icon: Wrench, labelKey: 'dash.workOrders.header' },
  { key: 'estimates', icon: FileText, labelKey: 'dash.estimates.header' },
  { key: 'clients', icon: Users, labelKey: 'dash.clients.header' },
  { key: 'chat', icon: MessageCircle, labelKey: 'dash.chat.header' },
  { key: 'settings', icon: Cog, labelKey: 'dash.settings.header' },
] as unknown as NavItem[]

const DEMO_LOOP: ViewKey[] = ['appointments', 'work-orders', 'estimates', 'clients']

const HEADER_KEY: Record<ViewKey, TranslationKey> = {
  appointments: 'dash.appointments.header',
  'work-orders': 'dash.workOrders.header',
  estimates: 'dash.estimates.header',
  clients: 'dash.clients.header',
}

type TagToken =
  | 'new'
  | 'confirmed'
  | 'inProgress'
  | 'inspection'
  | 'waitingParts'
  | 'sent'
  | 'approved'
  | 'draft'

const TAG_STYLE: Record<TagToken, string> = {
  new: 'bg-accent/15 text-accent border-accent/30',
  confirmed: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  inProgress: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
  inspection: 'bg-accent/15 text-accent border-accent/30',
  waitingParts: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
  sent: 'bg-accent/15 text-accent border-accent/30',
  approved: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  draft: 'bg-white/10 text-zinc-400 border-white/10',
}

const TAG_KEY: Record<TagToken, TranslationKey> = {
  new: 'dash.tag.new',
  confirmed: 'dash.tag.confirmed',
  inProgress: 'dash.tag.inProgress',
  inspection: 'dash.tag.inspection',
  waitingParts: 'dash.tag.waitingParts',
  sent: 'dash.tag.sent',
  approved: 'dash.tag.approved',
  draft: 'dash.tag.draft',
}

function StatusPill({ tag }: { tag: TagToken }) {
  const { t } = useT()
  return (
    <span
      className={`text-[9px] px-2 py-0.5 rounded-full border whitespace-nowrap ${TAG_STYLE[tag]}`}
    >
      {t(TAG_KEY[tag])}
    </span>
  )
}

function AppointmentsView() {
  const { t } = useT()
  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white text-[13px] font-semibold">
          {t('dash.appointments.header')}
        </h3>
        <div className="flex gap-1.5">
          {[
            { key: 'dash.filter.all' as TranslationKey, active: true },
            { key: 'dash.filter.new' as TranslationKey, active: false },
            { key: 'dash.filter.confirmed' as TranslationKey, active: false },
          ].map((f) => (
            <span
              key={f.key}
              className={`text-[10px] px-2.5 py-0.5 rounded-full border ${
                f.active
                  ? 'bg-accent/10 text-accent border-accent/30'
                  : 'bg-white/[0.03] text-zinc-500 border-white/5'
              }`}
            >
              {t(f.key)}
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 mb-3">
        {[
          { key: 'dash.stat.total' as TranslationKey, val: '47' },
          { key: 'dash.stat.new' as TranslationKey, val: '12' },
          { key: 'dash.stat.confirmed' as TranslationKey, val: '28' },
          { key: 'dash.stat.today' as TranslationKey, val: '6' },
        ].map((s) => (
          <div
            key={s.key}
            className="bg-white/[0.03] rounded-lg p-2 border border-white/5"
          >
            <div className="text-white text-base font-bold leading-none">
              {s.val}
            </div>
            <div className="text-[9px] text-zinc-600 mt-1">{t(s.key)}</div>
          </div>
        ))}
      </div>
      <div className="space-y-1.5">
        {[
          { svc: 'dash.svc.oilChange' as TranslationKey, plate: 'XX 00 ABC', time: '10:00', tag: 'new' as TagToken },
          { svc: 'dash.svc.brakeInspection' as TranslationKey, plate: 'XX 00 DEF', time: '11:30', tag: 'confirmed' as TagToken },
          { svc: 'dash.svc.fullService' as TranslationKey, plate: 'XX 00 GHI', time: '14:00', tag: 'new' as TagToken },
        ].map((row) => (
          <div
            key={row.svc}
            className="flex items-center justify-between py-2 px-2.5 rounded-lg bg-white/[0.02] border border-white/5"
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <div>
                <div className="text-[11px] text-white">{t(row.svc)}</div>
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
  const { t } = useT()
  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white text-[13px] font-semibold">
          {t('dash.workOrders.header')}
        </h3>
        <div className="flex gap-1.5">
          {[
            { key: 'dash.filter.all' as TranslationKey, active: false },
            { key: 'dash.filter.inProgress' as TranslationKey, active: true },
            { key: 'dash.filter.waiting' as TranslationKey, active: false },
          ].map((f) => (
            <span
              key={f.key}
              className={`text-[10px] px-2.5 py-0.5 rounded-full border ${
                f.active
                  ? 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                  : 'bg-white/[0.03] text-zinc-500 border-white/5'
              }`}
            >
              {t(f.key)}
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-1.5 mb-3">
        {[
          { key: 'dash.stage.received' as TranslationKey, count: 4, color: 'bg-accent' },
          { key: 'dash.stage.inspection' as TranslationKey, count: 3, color: 'bg-accent' },
          { key: 'dash.stage.inProgress' as TranslationKey, count: 5, color: 'bg-amber-400' },
          { key: 'dash.stage.completed' as TranslationKey, count: 8, color: 'bg-emerald-400' },
        ].map((s) => (
          <div
            key={s.key}
            className="bg-white/[0.03] rounded-lg p-2 border border-white/5"
          >
            <div className="flex items-center gap-1 mb-1">
              <span className={`w-1.5 h-1.5 rounded-full ${s.color}`} />
              <div className="text-[8.5px] text-zinc-500 truncate">
                {t(s.key)}
              </div>
            </div>
            <div className="text-white text-sm font-bold">{s.count}</div>
          </div>
        ))}
      </div>
      <div className="space-y-1.5">
        {[
          { svc: 'dash.svc.brakePadsDiscs' as TranslationKey, plate: 'XX 00 ABC', tag: 'inProgress' as TagToken },
          { svc: 'dash.svc.oilFilter' as TranslationKey, plate: 'XX 00 DEF', tag: 'inspection' as TagToken },
          { svc: 'dash.svc.acService' as TranslationKey, plate: 'XX 00 GHI', tag: 'waitingParts' as TagToken },
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
                <div className="text-[11px] text-white">{t(row.svc)}</div>
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
  const { t } = useT()
  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white text-[13px] font-semibold">
          {t('dash.estimates.header')}
        </h3>
        <span className="text-[10px] flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent text-white">
          <Plus size={10} /> {t('dash.estimates.new')}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { key: 'dash.stat.draft' as TranslationKey, val: '4', color: 'text-zinc-400' },
          { key: 'dash.stat.sent' as TranslationKey, val: '7', color: 'text-accent' },
          { key: 'dash.stat.approved' as TranslationKey, val: '12', color: 'text-emerald-400' },
        ].map((s) => (
          <div
            key={s.key}
            className="bg-white/[0.03] rounded-lg p-2 border border-white/5"
          >
            <div className={`text-base font-bold leading-none ${s.color}`}>
              {s.val}
            </div>
            <div className="text-[9px] text-zinc-600 mt-1">{t(s.key)}</div>
          </div>
        ))}
      </div>
      <div className="space-y-1.5">
        {[
          { title: 'dash.svc.brakeReplacement' as TranslationKey, total: '1 240', tag: 'sent' as TagToken },
          { title: 'dash.svc.majorService' as TranslationKey, total: '890', tag: 'approved' as TagToken },
          { title: 'dash.svc.acRecharge' as TranslationKey, total: '420', tag: 'draft' as TagToken },
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
                <div className="text-[11px] text-white">{t(row.title)}</div>
                <div className="text-[9px] text-zinc-600">{row.total} RON</div>
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
  const { t } = useT()
  const rows: { initials: string; vehicles: number; lastKey: TranslationKey }[] = [
    { initials: 'AM', vehicles: 1, lastKey: 'dash.clients.last.yesterday' },
    { initials: 'CD', vehicles: 2, lastKey: 'dash.clients.last.threeDays' },
    { initials: 'RP', vehicles: 1, lastKey: 'dash.clients.last.oneWeek' },
    { initials: 'MN', vehicles: 3, lastKey: 'dash.clients.last.twoWeeks' },
    { initials: 'SK', vehicles: 1, lastKey: 'dash.clients.last.lastMonth' },
  ]
  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white text-[13px] font-semibold">
          {t('dash.clients.header')}
        </h3>
        <span className="text-[10px] text-zinc-500">
          {t('dash.clients.activeCount')}
        </span>
      </div>
      <div className="space-y-1.5">
        {rows.map((c, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 py-2 px-2.5 rounded-lg bg-white/[0.02] border border-white/5"
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-[10px] font-bold text-white shrink-0">
              {c.initials}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[11px] text-white">
                {t('dash.clients.customer')} #{1000 + i}
              </div>
              <div className="text-[9px] text-zinc-600">
                {c.vehicles}{' '}
                {c.vehicles > 1
                  ? t('dash.clients.vehicles')
                  : t('dash.clients.vehicle')}{' '}
                · {t('dash.clients.lastVisit')} {t(c.lastKey)}
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
}

// ── Main showcase ─────────────────────────────────────────────────────────

export default function HeroShowcase() {
  const { t } = useT()
  const [stepIdx, setStepIdx] = useState(0)
  const active = DEMO_LOOP[stepIdx]
  const View = VIEWS[active]

  useEffect(() => {
    const next = setTimeout(
      () => setStepIdx((s) => (s + 1) % DEMO_LOOP.length),
      2800,
    )
    return () => clearTimeout(next)
  }, [stepIdx])

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
      {/* Dashboard — slightly wider for better proportions vs. phone */}
      <div className="relative w-full max-w-[760px]">
        <div className="absolute -inset-6 bg-gradient-to-r from-accent/20 via-accent/5 to-accent/20 rounded-3xl blur-3xl" />

        <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0a0d12] shadow-2xl shadow-black/80">
          <div className="flex items-center gap-2 px-3 py-2 border-b border-white/5 bg-[#11151c]">
            <div className="flex gap-1">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            </div>
            <div className="flex-1 text-center text-[9px] text-zinc-600">
              dashboard.carrevio.com / {t(HEADER_KEY[active])}
            </div>
            <div className="flex items-center gap-1 text-[9px] text-emerald-400">
              <CheckCircle2 size={9} /> {t('dash.liveDemo')}
            </div>
          </div>

          <div className="flex relative">
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
                    {t(item.labelKey)}
                  </motion.div>
                )
              })}
            </div>

            <div className="flex-1 p-4 min-h-[360px]">
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

      {/* Phone mockup — scaled down so it sits proportional to the dashboard
          without getting too tall once the booking animation is added back. */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative shrink-0 origin-center scale-[0.6] -my-28"
        style={{
          transform:
            'perspective(900px) rotateY(-8deg) rotateX(2deg) scale(0.6)',
        }}
      >
        <div className="absolute -inset-12 bg-gradient-to-br from-accent/15 via-accent/5 to-transparent rounded-full blur-3xl pointer-events-none" />
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
