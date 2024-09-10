import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    '/gym-image-1.jpg',
    '/gym-image-2.jpg',
    '/gym-image-3.jpg'
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={slide}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide})` }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </motion.div>
      ))}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400"
        >
          Transformez votre corps, transformez votre vie
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl mb-8 text-white"
        >
          Rejoignez Scorpion Gym et libérez votre potentiel
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-x-4"
        >
          <a 
            href="#contact" 
            className="bg-gradient-to-r from-yellow-600 to-yellow-800 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
          >
            Rejoignez-nous
          </a>
        </motion.div>
      </div>
    </section>
  )
}
