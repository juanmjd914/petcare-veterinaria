import { PawPrint, MapPin, Phone, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + desc */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <PawPrint size={24} className="text-orange" />
              <span className="text-white font-800 text-xl" style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800 }}>PetCare</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-6">
              Clínica veterinaria de confianza. Cuidamos a los que más quieres con profesionalismo y amor por los animales.
            </p>
            <a href="https://wa.me/56965174454?text=Hola!%20Quiero%20agendar%20una%20cita"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-teal-d transition-colors">
              Agendar por WhatsApp
            </a>
          </div>

          {/* Horarios */}
          <div>
            <h4 className="text-white font-700 mb-4 text-sm uppercase tracking-wide" style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700 }}>
              Horarios
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><Clock size={14} className="mt-0.5 text-teal shrink-0" />Lunes – Viernes<br /><span className="text-white">09:00 – 18:00</span></li>
              <li className="flex items-start gap-2"><Clock size={14} className="mt-0.5 text-teal shrink-0" />Sábado<br /><span className="text-white">09:00 – 13:00</span></li>
              <li className="text-xs text-gray-500 mt-2">Domingos: cerrado</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-700 mb-4 text-sm uppercase tracking-wide" style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700 }}>
              Contacto
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 text-teal shrink-0" />Av. Principal 1234, Rancagua, Chile</li>
              <li className="flex items-center gap-2"><Phone size={14} className="text-teal" />
                <a href="tel:+56965174454" className="hover:text-white transition-colors">+56 9 6517 4454</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>© 2024 PetCare Veterinaria. Todos los derechos reservados.</p>
          <p>Desarrollado por <a href="https://technecreativ.com" target="_blank" rel="noopener noreferrer" className="text-teal hover:text-teal-l transition-colors font-semibold">Techne Creativ</a></p>
        </div>
      </div>
    </footer>
  )
}
