import { useState } from 'react'
import { motion } from 'framer-motion'

type ScheduleItem = {
  time: string
  class: string
  trainer: string
}

type ScheduleData = {
  [key: string]: ScheduleItem[]
}

export default function ScheduleComponent() {
  const [activeDay, setActiveDay] = useState('Mon')

  const schedule: ScheduleData = {
    Mon: [
      { time: '06:00', class: 'Morning HIIT', trainer: 'Alex' },
      { time: '09:00', class: 'Yoga Flow', trainer: 'Emma' },
      { time: '12:00', class: 'Strength Training', trainer: 'Chris' },
      { time: '17:00', class: 'Spin Class', trainer: 'Sarah' },
      { time: '19:00', class: 'Boxing', trainer: 'Mike' },
    ],
    Tue: [
      { time: '07:00', class: 'Pilates', trainer: 'Emma' },
      { time: '10:00', class: 'CrossFit', trainer: 'Alex' },
      { time: '13:00', class: 'Zumba', trainer: 'Sarah' },
      { time: '16:00', class: 'Bodyweight Basics', trainer: 'Chris' },
      { time: '18:30', class: 'Kickboxing', trainer: 'Mike' },
    ],
    Wed: [
      { time: '06:00', class: 'Morning HIIT', trainer: 'Alex' },
      { time: '09:00', class: 'Yoga Flow', trainer: 'Emma' },
      { time: '12:00', class: 'Strength Training', trainer: 'Chris' },
      { time: '17:00', class: 'Spin Class', trainer: 'Sarah' },
      { time: '19:00', class: 'Boxing', trainer: 'Mike' },
    ],
    Thu: [
      { time: '07:00', class: 'Pilates', trainer: 'Emma' },
      { time: '10:00', class: 'CrossFit', trainer: 'Alex' },
      { time: '13:00', class: 'Zumba', trainer: 'Sarah' },
      { time: '16:00', class: 'Bodyweight Basics', trainer: 'Chris' },
      { time: '18:30', class: 'Kickboxing', trainer: 'Mike' },
    ],
    Fri: [
      { time: '06:00', class: 'Morning HIIT', trainer: 'Alex' },
      { time: '09:00', class: 'Yoga Flow', trainer: 'Emma' },
      { time: '12:00', class: 'Strength Training', trainer: 'Chris' },
      { time: '17:00', class: 'Spin Class', trainer: 'Sarah' },
      { time: '19:00', class: 'Boxing', trainer: 'Mike' },
    ],
    Sat: [
      { time: '08:00', class: 'Weekend Warrior', trainer: 'Alex' },
      { time: '10:00', class: 'Yoga Flow', trainer: 'Emma' },
      { time: '12:00', class: 'Family Fitness', trainer: 'Sarah' },
      { time: '14:00', class: 'Strength Training', trainer: 'Chris' },
    ],
    Sun: [
      { time: '09:00', class: 'Gentle Yoga', trainer: 'Emma' },
      { time: '11:00', class: 'Core Blast', trainer: 'Chris' },
      { time: '13:00', class: 'Meditation', trainer: 'Sarah' },
    ],
  }

  return (
    <section id="schedule" className="py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Class Schedule</h2>
      <div className="bg-gray-900 p-4 rounded-lg">
        <div className="flex justify-between mb-4 overflow-x-auto">
          {Object.keys(schedule).map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-3 py-2 rounded-full ${
                activeDay === day ? 'bg-yellow-400 text-black' : 'bg-black text-white'
              } transition-colors duration-200 ease-in-out`}
            >
              {day}
            </button>
          ))}
        </div>
        <div className="space-y-2">
          {schedule[activeDay].map((session, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex justify-between items-center bg-black p-3 rounded-lg"
            >
              <span className="text-yellow-400 font-bold">{session.time}</span>
              <span className="flex-grow mx-4">{session.class}</span>
              <span className="text-sm text-gray-400">{session.trainer}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}