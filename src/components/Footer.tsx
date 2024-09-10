import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-yellow-400 transition duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-400 transition duration-300">About</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition duration-300">Services</a></li>
              <li><a href="#calendar" className="hover:text-yellow-400 transition duration-300">Schedule</a></li>
              <li><a href="#contact" className="hover:text-yellow-400 transition duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/m" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition duration-300">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Scorpion Gym. WebSite Desgined By Amri Chiheb</p>
          <p className="mt-2">
            <a href="/privacy-policy" className="hover:text-yellow-400 transition duration-300">Privacy Policy</a>
            {' | '}
            <a href="/terms-of-service" className="hover:text-yellow-400 transition duration-300">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
