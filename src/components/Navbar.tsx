import { useState, useEffect } from 'react'
import { Menu, X, PawPrint } from 'lucide-react'

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Contacto', href: '#footer' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-head font-800 text-xl text-teal">
          <PawPrint size={26} className="text-orange" />
          <span style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800 }}>
            PetCare
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <button key={l.href} onClick={() => scrollTo(l.href)}
              className="text-sm font-medium text-gray-600 hover:text-teal transition-colors cursor-pointer bg-transparent border-none">
              {l.label}
            </button>
          ))}
          <button onClick={() => scrollTo('#agendar')}
            className="bg-teal text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-teal-d transition-colors cursor-pointer">
            Agendar cita
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button className="md:hidden text-gray-700" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <button key={l.href} onClick={() => scrollTo(l.href)}
              className="text-left text-sm font-medium text-gray-700 hover:text-teal cursor-pointer bg-transparent border-none">
              {l.label}
            </button>
          ))}
          <button onClick={() => scrollTo('#agendar')}
            className="bg-teal text-white px-5 py-2 rounded-full text-sm font-semibold text-center cursor-pointer">
            Agendar cita
          </button>
        </div>
      )}
    </header>
  )
}
