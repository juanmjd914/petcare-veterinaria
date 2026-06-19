import { useEffect, useRef, useState } from 'react'

const equipo = [
  { nombre: 'Dra. Valentina Rojas', especialidad: 'Medicina Interna & Cirugía', exp: '12 años de experiencia', emoji: '👩‍⚕️' },
  { nombre: 'Dr. Sebastián Mora',   especialidad: 'Dermatología Veterinaria',   exp: '8 años de experiencia',  emoji: '👨‍⚕️' },
  { nombre: 'Dra. Camila Torres',   especialidad: 'Medicina Preventiva',        exp: '6 años de experiencia',  emoji: '👩‍⚕️' },
]

export default function Equipo() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="equipo" ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-teal text-sm font-semibold uppercase tracking-widest">Nuestro equipo</span>
          <h2 className="text-4xl font-900 text-gray-900 mt-3 mb-4" style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900 }}>
            Profesionales que aman los animales
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Conoce a los veterinarios que cuidarán a tu mascota con dedicación y experiencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {equipo.map((v, i) => (
            <div key={v.nombre}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(28px)',
                transition: `opacity 0.5s ease ${i * 120}ms, transform 0.5s ease ${i * 120}ms`,
              }}>
              {/* Avatar */}
              <div className="bg-gradient-to-br from-teal/20 to-teal/5 h-52 flex items-center justify-center">
                <div className="text-8xl">{v.emoji}</div>
              </div>
              <div className="p-6">
                <h3 className="font-800 text-lg text-gray-900 mb-1" style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800 }}>{v.nombre}</h3>
                <p className="text-teal text-sm font-medium mb-2">{v.especialidad}</p>
                <p className="text-gray-400 text-xs">{v.exp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
