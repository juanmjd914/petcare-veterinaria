import { Shield, Clock, Award, HeartHandshake } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const pilares = [
  { icon: Award,         titulo: 'Veterinarios certificados', desc: 'Todo nuestro equipo cuenta con títulos universitarios y certificaciones de especialidad.' },
  { icon: Clock,         titulo: 'Atención 6 días a la semana', desc: 'Lunes a sábado para que nunca tengas que esperar cuando tu mascota lo necesita.' },
  { icon: Shield,        titulo: 'Equipos de última generación', desc: 'Tecnología diagnóstica moderna para un tratamiento rápido y preciso.' },
  { icon: HeartHandshake,titulo: 'Amor por los animales',    desc: 'Cada mascota que entra por nuestra puerta recibe el mismo cuidado que daríamos a la nuestra.' },
]

export default function PorQueNosotros() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="nosotros" ref={ref} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="text-teal text-sm font-semibold uppercase tracking-widest">¿Por qué elegirnos?</span>
            <h2 className="text-4xl font-900 text-gray-900 mt-3 mb-6" style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900 }}>
              Más que una clínica,<br />somos tu familia veterinaria
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Desde 2018 hemos atendido a miles de mascotas con el mismo compromiso: brindar atención de calidad con un trato humano y cercano. Porque sabemos que tu mascota no es solo un animal, es parte de tu familia.
            </p>
            <button
              onClick={() => document.querySelector('#agendar')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-teal text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-d transition-colors cursor-pointer">
              Agenda una cita hoy
            </button>
          </div>

          {/* Right — pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pilares.map((p, i) => {
              const Icon = p.icon
              return (
                <div key={p.titulo}
                  className="p-6 rounded-2xl border border-gray-100 hover:border-teal/30 hover:shadow-sm transition-all"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(24px)',
                    transition: `opacity 0.5s ease ${i * 100}ms, transform 0.5s ease ${i * 100}ms`,
                  }}>
                  <div className="w-11 h-11 bg-teal/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={22} className="text-teal" />
                  </div>
                  <h3 className="font-800 text-sm text-gray-900 mb-2" style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800 }}>{p.titulo}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
