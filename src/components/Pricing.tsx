import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Basique',
    price: 29,
    features: ['Accès aux équipements de gym', 'Accès aux vestiaires', '1 cours collectif par semaine'],
    color: 'from-yellow-700 to-yellow-900',
  },
  {
    name: 'Pro',
    price: 59,
    features: ['Toutes les fonctionnalités Basique', 'Cours collectifs illimités', '1 séance de coaching personnel/mois'],
    color: 'from-yellow-600 to-yellow-800',
    popular: true,
  },
  {
    name: 'Élite',
    price: 99,
    features: ['Toutes les fonctionnalités Pro', '4 séances de coaching personnel/mois', 'Consultation nutritionnelle'],
    color: 'from-yellow-800 to-yellow-900',
  },
]

export default function Pricing() {
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
          Choisissez votre plan
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`bg-gradient-to-b ${plan.color} rounded-lg overflow-hidden shadow-lg text-white`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {plan.popular && (
                <div className="bg-yellow-300 text-black text-center py-1 text-sm font-semibold">
                  Le plus populaire
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold mb-6">${plan.price}<span className="text-lg">/mois</span></p>
                <ul className="mb-6 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="w-5 h-5 mr-2 text-yellow-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
