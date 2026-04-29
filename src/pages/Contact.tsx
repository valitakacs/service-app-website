import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import ContactForm from '../components/ContactForm'
import FAQ from '../components/FAQ'
import { useT } from '../i18n/LanguageContext'

export default function ContactPage() {
  const { t } = useT()

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <main className="pt-32 pb-24">
        <section className="relative overflow-hidden mb-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.05)_0%,transparent_60%)]" />

          <motion.div
            className="relative max-w-3xl mx-auto px-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              {t('contact.page.title')}
            </h1>
            <p className="text-zinc-500 text-lg leading-relaxed">
              {t('contact.page.subtitle')}
            </p>
          </motion.div>
        </section>

        <section className="px-6 mb-24">
          <ContactForm />
        </section>

        <section className="px-6">
          <FAQ />
        </section>
      </main>

      <Footer />
    </div>
  )
}
