import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    image: '/testimonial-1.jpg',
    text: 'Scorpion Gym a transformé mon parcours de remise en forme. Les entraîneurs sont exceptionnels et l\'atmosphère est motivante !',
    rating: 5,
  },
  {
    name: 'Mike Thompson',
    image: '/testimonial-2.jpg',
    text: 'J\'ai obtenu des résultats que je n\'aurais jamais cru possibles. Le coaching nutritionnel a été un véritable changement pour moi.',
    rating: 5,
  },
  {
    name: 'Emily Davis',
    image: '/testimonial-3.jpg',
    text: 'Les cours collectifs sont tellement amusants ! J\'ai hâte de faire mes entraînements chaque jour grâce à Scorpion Gym.',
    rating: 4,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={ref} className="py-16 px-4 bg-black text-yellow-300">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-yellow-400"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Ce Que Disent Nos Membres
        </motion.h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white text-black rounded-lg p-6 shadow-lg"
            >
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <p className="text-lg mb-4 italic">{testimonials[currentIndex].text}</p>
              <p className="font-semibold text-center">{testimonials[currentIndex].name}</p>
              <div className="flex justify-center mt-2">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
