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
import MobileMockup from '../components/MobileMockup'

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

          {/* Right: animated phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <MobileMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
