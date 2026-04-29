import { motion } from 'framer-motion'
import {
  CalendarCheck,
  ClipboardList,
  FileText,
  MessageCircle,
  Users,
  Car,
  Star,
  Bell,
  Shield,
  BarChart3,
  Wrench,
  MapPin,
} from 'lucide-react'

const features = [
  {
    icon: CalendarCheck,
    title: 'Smart Scheduling',
    desc: 'Customers book appointments online. Your team confirms, reschedules, or manages them from the dashboard.',
  },
  {
    icon: ClipboardList,
    title: 'Work Order Tracking',
    desc: 'Track every job from intake to completion with real-time status updates visible to both staff and customers.',
  },
  {
    icon: FileText,
    title: 'Digital Estimates',
    desc: 'Create detailed cost estimates with line items for labor and parts. Customers approve with one tap.',
  },
  {
    icon: MessageCircle,
    title: 'Real-Time Chat',
    desc: 'Built-in messaging between your shop and customers. Everything in one thread, tied to each work order.',
  },
  {
    icon: Users,
    title: 'Staff Management',
    desc: 'Role-based access for admins, receptionists, and mechanics. Each team member sees exactly what they need.',
  },
  {
    icon: Car,
    title: 'Vehicle Garage',
    desc: 'Customers maintain a digital garage with all their vehicles. Full service history at your fingertips.',
  },
  {
    icon: Star,
    title: 'Reviews & Ratings',
    desc: 'Collect feedback after every service. Build your reputation and identify areas for improvement.',
  },
  {
    icon: Bell,
    title: 'Push Notifications',
    desc: 'Automatic alerts for confirmations, status updates, estimate approvals, and new messages.',
  },
  {
    icon: Shield,
    title: 'Multi-Tenant Security',
    desc: 'Each shop operates in complete isolation. Your data is yours — fully separated and encrypted.',
  },
  {
    icon: BarChart3,
    title: 'Business Analytics',
    desc: 'Track appointments, revenue, customer retention, and staff performance with real-time dashboards.',
  },
  {
    icon: Wrench,
    title: 'Service Catalog',
    desc: 'Define your services with pricing, duration, and descriptions. Customers pick what they need when booking.',
  },
  {
    icon: MapPin,
    title: 'Multi-Location',
    desc: 'Manage multiple branches from one account. Each location with its own hours, staff, and offerings.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.03)_0%,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Features
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Everything you need to run
            <br />a modern auto service shop
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            A complete platform for shop owners and their customers. Built for
            efficiency, designed for clarity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="group relative p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-accent/[0.03] hover:border-accent/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="w-11 h-11 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
                <f.icon size={20} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
