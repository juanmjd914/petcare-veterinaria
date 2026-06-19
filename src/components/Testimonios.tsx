import { useEffect, useRef, useState } from 'react'
import { Star } from 'lucide-react'

const testimonios = [
  {
    nombre: 'María González',
    mascota: 'Dueña de Luna, Golden Retriever',
    texto: 'Llevé a Luna de urgencia y la atendieron de inmediato. El Dr. Mora fue muy claro explicando el diagnóstico y el tratamiento. Ya está perfectamente. ¡100% recomendados!',
    rating: 5,
    emoji: '🐕',
  },
  {
    nombre: 'Carlos Herrera',
    mascota: 'Dueño de Michi, gato persa',
    texto: 'La Dra. Torres fue increíble con Michi, que se pone muy nervioso en el veterinario. Mucha paciencia y profesionalismo. Se nota que genuinamente aman a los animales.',
    rating: 5,
    emoji: '🐈',
  },
  {
    nombre: 'Valentina Robles',
    mascota: 'Dueña de Paco, conejo',
    texto: 'No cualquier veterinaria atiende conejos, pero aquí lo hicieron sin problema. Excelente atención, me explicaron todo el plan de vacunación y el seguimiento fue impecable.',
    rating: 5,
    emoji: '🐇',
  },
]

export default function Testimonios() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-teal text-sm font-semibold uppercase tracking-widest">Testimonios</span>
          <h2 className="text-4xl font-900 text-gray-900 mt-3 mb-4" style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900 }}>
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-500">Más de 500 familias confían en nosotros para cuidar a sus mascotas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((t, i) => (
            <div key={t.nombre}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-teal/20 hover:shadow-sm transition-all"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.5s ease ${i * 100}ms, transform 0.5s ease ${i * 100}ms`,
              }}>
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => <Star key={j} size={16} className="text-orange fill-orange" />)}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.texto}"</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 bg-teal/10 rounded-full flex items-center justify-center text-lg">{t.emoji}</div>
                <div>
                  <p className="font-700 text-sm text-gray-900" style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700 }}>{t.nombre}</p>
                  <p className="text-xs text-gray-400">{t.mascota}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
