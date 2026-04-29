import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import WhyCarRevio from './sections/WhyCarRevio'
import Features from './sections/Features'
import ForShops from './sections/ForShops'
import ForCustomers from './sections/ForCustomers'
import HowItWorks from './sections/HowItWorks'
import CTA from './sections/CTA'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyCarRevio />
      <Features />
      <ForShops />
      <ForCustomers />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
