import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Define the TypeScript type for a trainer
type Trainer = {
  name: string
  image: string
  specialty: string
  bio: string
}

const trainers: Trainer[] = [
  {
    name: 'John Doe',
    image: '/trainer-1.jpg',
    specialty: 'Expert en Entraînement de Force',
    bio: 'John a plus de 10 ans d\'expérience dans l\'entraînement de force et a aidé de nombreux clients à atteindre leurs objectifs de remise en forme.',
  },
  {
    name: 'Jane Smith',
    image: '/trainer-2.jpg',
    specialty: 'Spécialiste du Yoga et de la Flexibilité',
    bio: 'Jane est passionnée par l\'aide qu\'elle apporte à ses clients pour améliorer leur flexibilité et trouver la paix intérieure grâce au yoga.',
  },
  {
    name: 'Mike Johnson',
    image: '/trainer-3.jpg',
    specialty: 'Coach de Cardio et HIIT',
    bio: 'Mike est spécialisé dans l\'entraînement par intervalles de haute intensité et les exercices cardio qui poussent les clients à leurs limites.',
  },
]

export default function Trainers() {
  // Define the state with the correct type
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-16 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-yellow-400"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Nos Entraîneurs Experts
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              className="bg-yellow-600 rounded-lg overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onClick={() => setSelectedTrainer(trainer)}
            >
              <img src={trainer.image} alt={trainer.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-black">{trainer.name}</h3>
                <p className="text-sm text-black">{trainer.specialty}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedTrainer && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedTrainer(null)}
        >
          <div className="bg-yellow-300 text-black rounded-lg p-6 max-w-md" onClick={(e) => e.stopPropagation()}>
            <img src={selectedTrainer.image} alt={selectedTrainer.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-center">{selectedTrainer.name}</h3>
            <p className="text-lg font-semibold mb-4 text-center text-red-600">{selectedTrainer.specialty}</p>
            <p className="mb-4">{selectedTrainer.bio}</p>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded w-full"
              onClick={() => setSelectedTrainer(null)}
            >
              Fermer
            </button>
          </div>
        </motion.div>
      )}
    </section>
  )
}
