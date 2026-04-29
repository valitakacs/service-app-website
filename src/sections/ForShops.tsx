import { motion } from 'framer-motion'
import {
  CalendarCheck,
  ClipboardList,
  FileText,
  Users,
  MessageCircle,
  Settings,
  Megaphone,
  BarChart3,
} from 'lucide-react'
import InteractiveDashboard from '../components/InteractiveDashboard'

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
  {
    icon: Megaphone,
    title: 'Customer Retention & Marketing',
    desc: "Create promotional campaigns and send them straight to your customers' phones. Automate reminders for ITP, service intervals, and seasonal needs. Turn one-time customers into recurring revenue.",
  },
  {
    icon: BarChart3,
    title: 'Business Analytics',
    desc: 'Track appointments, revenue, customer retention, and team productivity with real-time dashboards. Identify growth opportunities backed by data.',
  },
]

export default function ForShops() {
  return (
    <section id="for-shops" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.01] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: interactive dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <InteractiveDashboard />
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
              One dashboard.
              <br />
              Your service operation,
              <br />
              fully under control.
            </h2>
            <p className="text-zinc-500 mb-8">
              The web dashboard gives your team complete control over daily
              operations — in real time. Multi-role access, designed for speed,
              connection, and clarity.
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
