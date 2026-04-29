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
} from 'lucide-react'
import { useT, timeAwareGreetingKey } from '../i18n/LanguageContext'
import type { TranslationKey } from '../i18n/translations'
import CarIllustration from './CarIllustration'

// Fictive data — never use real plates / years to avoid implying a customer.
const FICTIVE_PLATE = 'XX 00 ABC'
const FICTIVE_YEAR = 2025

// Quick-action buttons under the vehicle card. Icon + i18n label key.
const QUICK_ACTIONS: { icon: typeof Calendar; key: TranslationKey }[] = [
  { icon: Calendar, key: 'mobile.actions.book' },
  { icon: Car, key: 'mobile.actions.garage' },
  { icon: FileText, key: 'mobile.actions.estimates' },
  { icon: MessageCircle, key: 'mobile.actions.chat' },
]

// Bottom tab bar. `Home` tab is the active one in the mockup.
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

export default function MobileMockup() {
  const { t } = useT()
  const greeting = t(timeAwareGreetingKey())

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

          {/* Header — matches mobile HomeHeader: greeting + brand label + avatar + bell */}
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
                    {t('mobile.welcome')}
                  </div>
                  <div className="text-[8.5px] text-white/35 font-medium tracking-[1.5px] uppercase mt-0.5">
                    {t('mobile.brand')}
                  </div>
                </div>
              </div>
              <div className="relative shrink-0">
                <div className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center">
                  <Bell size={14} className="text-white/70" />
                </div>
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-accent rounded-full border-2 border-[#050a0f]" />
              </div>
            </div>
          </div>

          {/* Vehicle card — centerpiece. Full-bleed futuristic car image with
              a glass info strip overlaid at the bottom (label + plate). */}
          <div className="px-4 mb-5">
            <div className="relative rounded-[1.4rem] overflow-hidden border border-white/[0.08] shadow-[0_18px_50px_-18px_rgba(59,130,246,0.45)]">
              <div className="aspect-[16/11] w-full relative">
                <CarIllustration className="absolute inset-0 w-full h-full" />

                {/* Top-right fuel-type badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/55 backdrop-blur-md border border-white/10 rounded-full px-2.5 py-1">
                  <Zap size={10} className="text-accent" />
                  <span className="text-[9px] font-semibold text-white/90 tracking-wide">
                    {t('mobile.fuelType.electric')}
                  </span>
                </div>

                {/* Bottom gradient for legibility of overlaid info strip */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />

                {/* Info strip */}
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

          {/* Quick actions row */}
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
        </div>

        {/* Bottom nav (blurred bottom bar) */}
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
          {/* Home indicator */}
          <div className="flex justify-center pb-1">
            <div className="w-24 h-1 bg-white/30 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
