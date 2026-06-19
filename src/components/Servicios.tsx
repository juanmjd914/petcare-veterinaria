import { useEffect, useRef, useState } from 'react'
import { Stethoscope, Syringe, Scissors, Zap, FlaskConical, Heart } from 'lucide-react'

const servicios = [
  { icon: Stethoscope, titulo: 'Consulta General', desc: 'Revisión completa del estado de salud de tu mascota con diagnóstico profesional.', color: 'bg-teal/10 text-teal' },
  { icon: Syringe,     titulo: 'Vacunas',          desc: 'Plan de vacunación completo y personalizado según la especie y edad de tu mascota.', color: 'bg-blue-50 text-blue-600' },
  { icon: Heart,       titulo: 'Cirugía',           desc: 'Procedimientos quirúrgicos con equipos de última generación y anestesia segura.', color: 'bg-red-50 text-red-500' },
  { icon: Scissors,    titulo: 'Grooming',          desc: 'Baño, corte y estética profesional para que tu mascota siempre luzca impecable.', color: 'bg-purple-50 text-purple-500' },
  { icon: Zap,         titulo: 'Urgencias',         desc: 'Atención de emergencia disponible para cuando tu mascota más te necesita.', color: 'bg-orange/10 text-orange' },
  { icon: FlaskConical,titulo: 'Laboratorio',       desc: 'Análisis clínicos y exámenes diagnósticos con resultados rápidos y precisos.', color: 'bg-green-50 text-green-600' },
]

export default function Servicios() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="servicios" ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-teal text-sm font-semibold uppercase tracking-widest">Lo que ofrecemos</span>
          <h2 className="text-4xl font-900 text-gray-900 mt-3 mb-4" style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900 }}>
            Servicios veterinarios completos
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Contamos con todo lo necesario para mantener a tu mascota saludable y feliz en cada etapa de su vida.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={s.titulo}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(28px)',
                  transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms, box-shadow 0.3s, translate 0.3s`,
                }}>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${s.color}`}>
                  <Icon size={26} />
                </div>
                <h3 className="font-800 text-lg text-gray-900 mb-2" style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800 }}>{s.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
