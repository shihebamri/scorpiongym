import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingPage from './components/Loading'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Sch from './components/Sch'
import Testimonials from './components/Testimonials'
import Trainers from './components/Trainers'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navigation from './components/Navigation'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // 3 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingPage key="loading" />
      ) : (
        <div className="bg-black text-white min-h-screen">
          <section id="hero">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="calendar">
            <Sch />
          </section>
          <section id="testimonials">
            <Testimonials />
          </section>
          <section id="trainers">
            <Trainers />
          </section>
          <section id="pricing">
            <Pricing />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <Footer />
          <Navigation />
        </div>
      )}
    </AnimatePresence>
  )
}

export default App