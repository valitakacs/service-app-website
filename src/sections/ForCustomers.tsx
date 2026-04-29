import { motion } from 'framer-motion'
import {
  CalendarPlus,
  Car,
  Bell,
  FileCheck,
  MessageCircle,
  Star,
  Clock,
  Tag,
} from 'lucide-react'

const mobileFeatures = [
  {
    icon: CalendarPlus,
    title: 'Easy Booking',
    desc: 'Book service appointments in seconds. Pick your vehicle, choose a service, and select a time slot.',
  },
  {
    icon: Car,
    title: 'Digital Garage',
    desc: 'Store all your vehicles with full details. Service history for every car at your fingertips.',
  },
  {
    icon: FileCheck,
    title: 'Approve Estimates',
    desc: 'Receive detailed cost breakdowns. Approve or decline with one tap — no phone calls needed.',
  },
  {
    icon: MessageCircle,
    title: 'Direct Messaging',
    desc: 'Chat directly with the service team about your car. All conversations saved for reference.',
  },
  {
    icon: Bell,
    title: 'Live Updates',
    desc: 'Get notified when your car moves to the next stage, when an estimate is ready, or when the job is done.',
  },
  {
    icon: Star,
    title: 'Rate & Review',
    desc: 'Share your experience after each service. Help the shop improve and help others choose.',
  },
  {
    icon: Clock,
    title: 'Smart Reminders',
    desc: "Get notified when it's time for ITP, oil change, or seasonal service. Your car never misses a beat — and you never get a surprise expense.",
  },
  {
    icon: Tag,
    title: 'Exclusive Offers from Your Shop',
    desc: "Get exclusive deals from your shop — seasonal promotions, loyalty rewards, and discounts you won't find anywhere else. The best for your car at the best price.",
  },
]

export default function ForCustomers() {
  return (
    <section id="for-customers" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.01] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: feature list */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              For Customers
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Your car, one tap away.
              <br />
              Full control. Real-time transparency.
            </h2>
            <p className="text-zinc-500 mb-8">
              Connected to your auto-repair shop, the mobile app keeps customers
              in the loop at every step — bookings, estimates, status updates,
              chat with the shop. Every vehicle gets a digital Car Passport: full
              service history, exportable PDF, perfect for resale.
            </p>

            <div className="grid gap-4">
              {mobileFeatures.map((f) => (
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

          {/* Right: phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-8 bg-accent/[0.03] rounded-full blur-3xl" />
              {/* Phone frame */}
              <div className="relative w-[280px] rounded-[2.5rem] border-[3px] border-zinc-800 bg-black shadow-2xl shadow-black/80 overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-10 border-b-[3px] border-x-[3px] border-zinc-800" />
                {/* Screen content */}
                <div className="pt-10 pb-6 px-5">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-[10px] text-zinc-600">Welcome back</div>
                      <div className="text-white text-sm font-semibold">Alex M.</div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent-dark" />
                  </div>

                  {/* Quick actions */}
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {[
                      { label: 'Book Service', icon: '📅' },
                      { label: 'My Garage', icon: '🚗' },
                      { label: 'History', icon: '📋' },
                      { label: 'Estimates', icon: '💰' },
                    ].map((a) => (
                      <div
                        key={a.label}
                        className="bg-zinc-900 rounded-xl p-3 text-center border border-white/5"
                      >
                        <div className="text-lg mb-1">{a.icon}</div>
                        <div className="text-[10px] text-zinc-500">{a.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Upcoming */}
                  <div className="text-xs text-white font-semibold mb-2">
                    Upcoming
                  </div>
                  <div className="bg-zinc-900 rounded-xl p-3 border border-white/5 mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-medium text-white">
                        Full Service
                      </span>
                      <span className="text-[9px] px-2 py-0.5 bg-accent/10 text-accent rounded-full">
                        Confirmed
                      </span>
                    </div>
                    <div className="text-[10px] text-zinc-600">
                      Tomorrow, 10:00 AM
                    </div>
                    <div className="text-[10px] text-zinc-600">BMW 320d - B 123 ABC</div>
                  </div>

                  {/* Work order status */}
                  <div className="text-xs text-white font-semibold mb-2">
                    Active Work Order
                  </div>
                  <div className="bg-zinc-900 rounded-xl p-3 border border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-medium text-white">
                        Brake Replacement
                      </span>
                      <span className="text-[9px] px-2 py-0.5 bg-accent/10 text-accent rounded-full">
                        In Progress
                      </span>
                    </div>
                    {/* Progress bar */}
                    <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="w-3/5 h-full bg-gradient-to-r from-accent to-accent-light rounded-full" />
                    </div>
                    <div className="flex justify-between mt-1.5">
                      <span className="text-[9px] text-zinc-600">Step 3 of 5</span>
                      <span className="text-[9px] text-accent">View Details</span>
                    </div>
                  </div>
                </div>
                {/* Bottom bar */}
                <div className="flex justify-around py-3 border-t border-white/5">
                  {['Home', 'Garage', 'Service', 'Account'].map((tab, i) => (
                    <div
                      key={tab}
                      className={`text-[9px] ${
                        i === 0 ? 'text-accent' : 'text-zinc-700'
                      }`}
                    >
                      {tab}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
