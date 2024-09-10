import { Home, Info, Dumbbell, Calendar, DollarSign, Phone } from 'lucide-react'

export default function Navigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-80 backdrop-blur-sm py-2 px-4">
      <ul className="flex justify-around max-w-md mx-auto">
        <li>
          <a href="#hero" className="flex flex-col items-center text-white hover:text-yellow-600 transition duration-300">
            <Home className="w-6 h-6" />
            <span className="text-xs mt-1">Home</span>
          </a>
        </li>
        <li>
          <a href="#about" className="flex flex-col items-center text-white hover:text-yellow-600 transition duration-300">
            <Info className="w-6 h-6" />
            <span className="text-xs mt-1">About</span>
          </a>
        </li>
        <li>
          <a href="#services" className="flex flex-col items-center text-white hover:text-yellow-600 transition duration-300">
            <Dumbbell className="w-6 h-6" />
            <span className="text-xs mt-1">Services</span>
          </a>
        </li>
        <li>
          <a href="#calendar" className="flex flex-col items-center text-white hover:text-yellow-600 transition duration-300">
            <Calendar className="w-6 h-6" />
            <span className="text-xs mt-1">Schedule</span>
          </a>
        </li>
        <li>
          <a href="#pricing" className="flex flex-col items-center text-white hover:text-yellow-600 transition duration-300">
            <DollarSign className="w-6 h-6" />
            <span className="text-xs mt-1">Pricing</span>
          </a>
        </li>
        <li>
          <a href="#contact" className="flex flex-col items-center text-white hover:text-yellow-600 transition duration-300">
            <Phone className="w-6 h-6" />
            <span className="text-xs mt-1">Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}