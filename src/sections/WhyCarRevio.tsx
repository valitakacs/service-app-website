import { motion } from 'framer-motion'
import { TrendingUp, Repeat, Timer, BarChart3 } from 'lucide-react'

const reasons = [
  {
    icon: TrendingUp,
    title: 'More Capacity',
    desc: 'Same team. More jobs. More revenue.',
  },
  {
    icon: Repeat,
    title: 'Customer Retention',
    desc: 'Customers who come back. Without you chasing them.',
  },
  {
    icon: Timer,
    title: 'Less Dead Time',
    desc: 'Cut idle time & manual operations. Multiply productive hours.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Growth',
    desc: 'Grow based on real-time number reports.',
  },
]

export default function WhyCarRevio() {
  return (
    <section id="why-car-revio" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.03)_0%,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Why Car Revio
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            It's not just software.
            <br />
            It's how you grow.
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            You gain time, control, transparency, retention, and clear data to
            grow. Four concrete ways Car Revio grows your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              className="group relative p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-accent/[0.03] hover:border-accent/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="w-11 h-11 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
                <r.icon size={20} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{r.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
