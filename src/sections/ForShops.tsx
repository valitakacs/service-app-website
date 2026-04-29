import { motion } from 'framer-motion'
import {
  CalendarCheck,
  ClipboardList,
  FileText,
  Users,
  MessageCircle,
  Settings,
} from 'lucide-react'

const dashboardFeatures = [
  {
    icon: CalendarCheck,
    title: 'Appointment Management',
    desc: 'View, confirm, reschedule or cancel appointments. See daily stats at a glance with real-time counters.',
  },
  {
    icon: ClipboardList,
    title: 'Work Order Pipeline',
    desc: 'Track jobs through every stage: received, inspection, in-progress, waiting parts, and completed.',
  },
  {
    icon: FileText,
    title: 'Estimate Builder',
    desc: 'Create detailed estimates with labor and parts line items. Send to customers for instant approval.',
  },
  {
    icon: Users,
    title: 'Team & Client Management',
    desc: 'Manage staff roles (admin, reception, mechanic). View client profiles with their vehicles and history.',
  },
  {
    icon: MessageCircle,
    title: 'Live Customer Chat',
    desc: 'WebSocket-powered real-time messaging. Every conversation linked to a work order for full context.',
  },
  {
    icon: Settings,
    title: 'Shop Configuration',
    desc: 'Set business hours, manage service catalog with pricing, configure multiple locations.',
  },
]

export default function ForShops() {
  return (
    <section id="for-shops" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.01] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/[0.03] rounded-2xl blur-2xl" />
              <div className="relative rounded-xl border border-white/10 bg-dark-card overflow-hidden shadow-2xl shadow-black/60">
                {/* Sidebar + content */}
                <div className="flex">
                  {/* Sidebar */}
                  <div className="w-48 border-r border-white/5 bg-surface p-4 hidden sm:block">
                    <div className="flex items-center gap-2 mb-6">
                      <img src="/icon-transparent.png" alt="" className="w-9 h-9 brightness-0 invert" />
                      <span className="text-white text-sm font-semibold">CarRevio</span>
                    </div>
                    {['Appointments', 'Work Orders', 'Clients', 'Staff', 'Chat', 'Estimates', 'Settings'].map(
                      (item, i) => (
                        <div
                          key={item}
                          className={`text-xs py-2 px-3 rounded-lg mb-1 ${
                            i === 0
                              ? 'bg-accent/10 text-accent font-medium'
                              : 'text-zinc-600'
                          }`}
                        >
                          {item}
                        </div>
                      )
                    )}
                  </div>
                  {/* Content */}
                  <div className="flex-1 p-5">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-white text-sm font-semibold">Appointments</h3>
                      <div className="flex gap-2">
                        {['All', 'New', 'Confirmed'].map((t, i) => (
                          <span
                            key={t}
                            className={`text-xs px-3 py-1 rounded-full ${
                              i === 0
                                ? 'bg-accent/10 text-accent'
                                : 'bg-white/5 text-zinc-600'
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Stats */}
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {[
                        { label: 'Total', val: '47' },
                        { label: 'New', val: '12' },
                        { label: 'Confirmed', val: '28' },
                        { label: 'Today', val: '6' },
                      ].map((s) => (
                        <div key={s.label} className="bg-surface rounded-lg p-2.5 text-center border border-white/5">
                          <div className="text-white text-lg font-bold">{s.val}</div>
                          <div className="text-[10px] text-zinc-600">{s.label}</div>
                        </div>
                      ))}
                    </div>
                    {/* Table rows */}
                    {[
                      { status: 'New', name: 'Oil Change', time: '10:00' },
                      { status: 'Confirmed', name: 'Brake Inspection', time: '11:30' },
                      { status: 'New', name: 'Full Service', time: '14:00' },
                    ].map((row) => (
                      <div
                        key={row.name}
                        className="flex items-center justify-between py-2.5 border-b border-white/5 last:border-0"
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${row.status === 'New' ? 'bg-accent' : 'bg-zinc-500'}`} />
                          <span className="text-xs text-white">{row.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-zinc-600">{row.time}</span>
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-full ${
                              row.status === 'New'
                                ? 'bg-accent/10 text-accent'
                                : 'bg-zinc-800 text-zinc-400'
                            }`}
                          >
                            {row.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: feature list */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              For Shop Owners
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Your entire operation,
              <br />
              one dashboard
            </h2>
            <p className="text-zinc-500 mb-8">
              The web dashboard gives your team complete control over daily
              operations. Designed for speed and clarity.
            </p>

            <div className="grid gap-4">
              {dashboardFeatures.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <f.icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">{f.title}</h4>
                    <p className="text-zinc-500 text-sm mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
