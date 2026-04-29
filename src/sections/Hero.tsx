import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import HeroShowcase from '../components/HeroShowcase'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.04)_0%,transparent_70%)]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-24">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <img
            src="/logo-text-transparent.png"
            alt="CarRevio"
            className="w-64 sm:w-80 mx-auto brightness-0 invert"
          />
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          The complete digital solution
          <br />
          for a modern{' '}
          <span className="text-accent">auto repair shop.</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-zinc-500 max-w-3xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          One platform to manage your entire auto repair shop — from appointments
          and work orders to real-time customer communication, retention
          campaigns, and growth analytics. All connected to a mobile app your
          customers can access via a simple QR code.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <a
            href="#cta"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent hover:bg-accent-dark text-white font-semibold text-lg transition-all hover:shadow-2xl hover:shadow-accent/25"
          >
            Get a Demo
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/10 hover:border-accent/50 text-white font-medium text-lg transition-all hover:bg-accent/5"
          >
            See How It Works
          </a>
        </motion.div>

        {/* Animated showcase: dashboard with auto-clicking cursor + phone */}
        <motion.div
          className="mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <HeroShowcase />
        </motion.div>
      </div>
    </section>
  )
}
