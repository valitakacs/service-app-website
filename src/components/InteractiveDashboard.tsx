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
import { useT } from '../i18n/LanguageContext'
import type { TranslationKey } from '../i18n/translations'

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
  labelKey: TranslationKey
}

const NAV: NavItem[] = [
  { key: 'appointments', icon: Calendar, labelKey: 'dash.appointments.header' },
  { key: 'work-orders', icon: Wrench, labelKey: 'dash.workOrders.header' },
  { key: 'estimates', icon: FileText, labelKey: 'dash.estimates.header' },
  { key: 'clients', icon: Users, labelKey: 'dash.clients.header' },
  { key: 'chat', icon: MessageCircle, labelKey: 'dash.chat.header' },
  { key: 'settings', icon: Cog, labelKey: 'dash.settings.header' },
]

// Tag style applies to translated tag labels via the original key, but since
// labels are localized we look up by a stable internal token.
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

// ── Views ─────────────────────────────────────────────────────────────────

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
          {
            svc: 'dash.svc.oilChange' as TranslationKey,
            plate: 'XX 00 ABC',
            time: '10:00',
            tag: 'new' as TagToken,
          },
          {
            svc: 'dash.svc.brakeInspection' as TranslationKey,
            plate: 'XX 00 DEF',
            time: '11:30',
            tag: 'confirmed' as TagToken,
          },
          {
            svc: 'dash.svc.fullService' as TranslationKey,
            plate: 'XX 00 GHI',
            time: '14:00',
            tag: 'new' as TagToken,
          },
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
          {
            svc: 'dash.svc.brakePadsDiscs' as TranslationKey,
            plate: 'XX 00 ABC',
            tag: 'inProgress' as TagToken,
          },
          {
            svc: 'dash.svc.oilFilter' as TranslationKey,
            plate: 'XX 00 DEF',
            tag: 'inspection' as TagToken,
          },
          {
            svc: 'dash.svc.acService' as TranslationKey,
            plate: 'XX 00 GHI',
            tag: 'waitingParts' as TagToken,
          },
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
        <button className="text-[10px] flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent text-white">
          <Plus size={10} /> {t('dash.estimates.new')}
        </button>
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
          {
            title: 'dash.svc.brakeReplacement' as TranslationKey,
            total: '1 240',
            tag: 'sent' as TagToken,
          },
          {
            title: 'dash.svc.majorService' as TranslationKey,
            total: '890',
            tag: 'approved' as TagToken,
          },
          {
            title: 'dash.svc.acRecharge' as TranslationKey,
            total: '420',
            tag: 'draft' as TagToken,
          },
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

function ChatView() {
  const { t } = useT()
  return (
    <div className="flex flex-col h-[260px]">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white text-[13px] font-semibold">
          {t('dash.chat.header')}
        </h3>
        <span className="flex items-center gap-1 text-[10px] text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          {t('dash.chat.connected')}
        </span>
      </div>
      <div className="flex-1 space-y-2 overflow-hidden">
        <div className="flex items-end gap-1.5">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-accent to-accent-dark shrink-0" />
          <div className="bg-white/[0.05] border border-white/5 rounded-2xl rounded-bl-sm px-2.5 py-1.5 max-w-[75%]">
            <div className="text-[10.5px] text-white/90">
              {t('dash.chat.msgCustomer')}
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-accent/15 border border-accent/30 rounded-2xl rounded-br-sm px-2.5 py-1.5 max-w-[75%]">
            <div className="text-[10.5px] text-white">
              {t('dash.chat.msgShop')}
            </div>
          </div>
        </div>
        <div className="flex items-end gap-1.5">
          <div className="w-5 h-5 rounded-full bg-zinc-800 shrink-0" />
          <div className="bg-accent/[0.06] border border-accent/30 rounded-2xl rounded-bl-sm px-2.5 py-1.5 max-w-[75%]">
            <div className="flex items-center gap-1 mb-0.5">
              <FileText size={10} className="text-accent" />
              <span className="text-[10px] text-accent font-semibold">
                {t('dash.chat.estimateLabel')} · 1 240 RON
              </span>
            </div>
            <div className="text-[9.5px] text-white/70">
              {t('dash.chat.estimateTap')}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-2 px-2.5 py-1.5 rounded-full bg-white/[0.04] border border-white/5">
        <div className="flex-1 text-[10.5px] text-zinc-600">
          {t('dash.chat.placeholder')}
        </div>
        <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
          <Send size={11} className="text-white" />
        </div>
      </div>
    </div>
  )
}

function SettingsView() {
  const { t } = useT()
  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white text-[13px] font-semibold">
          {t('dash.settings.header')}
        </h3>
        <span className="text-[10px] text-zinc-500">
          {t('dash.settings.savedAgo')}
        </span>
      </div>
      <div className="flex gap-1.5 mb-3">
        {[
          { key: 'dash.settings.tab.profile' as TranslationKey, active: true },
          { key: 'dash.settings.tab.services' as TranslationKey, active: false },
          { key: 'dash.settings.tab.locations' as TranslationKey, active: false },
        ].map((tab) => (
          <span
            key={tab.key}
            className={`text-[10px] px-2.5 py-1 rounded-full border ${
              tab.active
                ? 'bg-accent/10 text-accent border-accent/30'
                : 'bg-white/[0.03] text-zinc-500 border-white/5'
            }`}
          >
            {t(tab.key)}
          </span>
        ))}
      </div>
      <div className="space-y-2">
        {[
          {
            label: 'dash.settings.shopName' as TranslationKey,
            value: t('dash.settings.shopNameValue'),
          },
          {
            label: 'dash.settings.phone' as TranslationKey,
            value: '+40 ··· ··· ···',
          },
          {
            label: 'dash.settings.locations' as TranslationKey,
            value: t('dash.settings.locationsValue'),
          },
          {
            label: 'dash.settings.catalog' as TranslationKey,
            value: '14',
          },
        ].map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between py-2 px-2.5 rounded-lg bg-white/[0.02] border border-white/5"
          >
            <div className="text-[10.5px] text-zinc-500">{t(row.label)}</div>
            <div className="text-[10.5px] text-white font-medium">
              {row.value}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
        <div className="text-[10px] text-zinc-500 mb-1.5">
          {t('dash.settings.workingHours')}
        </div>
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
  appointments: AppointmentsView,
  'work-orders': WorkOrdersView,
  estimates: EstimatesView,
  clients: ClientsView,
  chat: ChatView,
  settings: SettingsView,
}

const HEADER_KEY: Record<ViewKey, TranslationKey> = {
  appointments: 'dash.appointments.header',
  'work-orders': 'dash.workOrders.header',
  estimates: 'dash.estimates.header',
  clients: 'dash.clients.header',
  chat: 'dash.chat.header',
  settings: 'dash.settings.header',
}

export default function InteractiveDashboard() {
  const { t } = useT()
  const [active, setActive] = useState<ViewKey>('appointments')
  const View = VIEWS[active]

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-accent/[0.04] rounded-2xl blur-2xl" />
      <div className="relative rounded-xl border border-white/10 bg-[#0a0d12] overflow-hidden shadow-2xl shadow-black/60">
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
            <CheckCircle2 size={9} /> {t('dash.live')}
          </div>
        </div>

        <div className="flex">
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
                  {t(item.labelKey)}
                </button>
              )
            })}
          </div>

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
