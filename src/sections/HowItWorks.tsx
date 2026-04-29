import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Sign Up Your Shop',
    desc: 'Create your account, configure your services, business hours, and locations. Add your staff and assign roles.',
  },
  {
    num: '02',
    title: 'Customers Download the App',
    desc: 'Your customers install the CarRevio mobile app, create an account, and add their vehicles to their digital garage.',
  },
  {
    num: '03',
    title: 'Manage Everything in Real-Time',
    desc: 'Appointments flow in, your team manages work orders, sends estimates, and communicates — all from one dashboard.',
  },
  {
    num: '04',
    title: 'Grow Your Business',
    desc: 'Collect reviews, build your reputation, and scale with multi-location support. Your customers keep coming back.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.03)_0%,transparent_60%)]" />

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Up and running in minutes
          </h2>
          <p className="text-zinc-500 text-lg max-w-xl mx-auto">
            Getting started with CarRevio is simple. Four steps to transform how
            you run your shop.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/30 via-accent/10 to-transparent hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="flex gap-8 items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shadow-lg shadow-accent/5 relative z-10">
                  <span className="text-accent font-bold text-lg">{step.num}</span>
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-zinc-500 leading-relaxed max-w-lg">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
