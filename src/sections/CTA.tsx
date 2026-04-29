import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.04)_0%,transparent_50%)]" />
      </div>

      <motion.div
        className="relative max-w-4xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="relative rounded-2xl border border-accent/10 bg-accent/[0.02] backdrop-blur-sm p-12 sm:p-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] via-transparent to-accent/[0.03]" />

          <div className="relative">
            <img
              src="/icon-transparent.png"
              alt="CarRevio"
              className="w-32 h-32 mx-auto mb-6 brightness-0 invert"
            />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to modernize your shop?
            </h2>
            <p className="text-zinc-500 text-lg max-w-xl mx-auto mb-8">
              Join the next generation of auto service shops. Start your free trial
              today — no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@carrevio.com"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent hover:bg-accent-dark text-white font-semibold text-lg transition-all hover:shadow-2xl hover:shadow-accent/25"
              >
                Get Started
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="mailto:contact@carrevio.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/10 hover:border-accent/50 text-white font-medium text-lg transition-all hover:bg-accent/5"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
