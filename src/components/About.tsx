import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-16 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.img
          src="/gym-interior.jpg"
          alt="Intérieur de la salle de sport Scorpion Gym"
          className="w-full h-64 object-cover rounded-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        />
        <motion.h2
          className="text-3xl font-bold mb-4 text-yellow-400"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          À propos d'Scorpion Gym
        </motion.h2>
        <motion.p
          className="text-lg mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Chez Scorpion Gym, nous sommes plus qu'une simple salle de sport. Nous sommes une communauté dédiée à vous aider à atteindre vos objectifs de remise en forme et à transformer votre vie. Avec des équipements de pointe, des entraîneurs experts, et une atmosphère de soutien, nous offrons tout ce dont vous avez besoin pour réussir votre parcours de remise en forme.
        </motion.p>
        <motion.div
          className="w-16 h-1 bg-yellow-400 rounded"
          initial={{ width: 0 }}
          animate={inView ? { width: 64 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        />
      </div>
    </section>
  )
}
