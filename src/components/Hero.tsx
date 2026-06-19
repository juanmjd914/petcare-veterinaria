import { motion } from 'motion/react'
import { CalendarCheck, Phone } from 'lucide-react'

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex overflow-hidden">

      {/* Foto full derecha */}
      <div className="absolute inset-0 hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1200&q=85"
          alt="Veterinaria atendiendo a una mascota"
          className="absolute right-0 top-0 h-full w-1/2 object-cover"
          loading="eager"
        />
        {/* Gradiente de transición izquierda → foto */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to right, #ffffff 38%, rgba(255,255,255,0.92) 50%, rgba(255,255,255,0.3) 65%, transparent 80%)'
        }} />
      </div>

      {/* Fondo mobile (sin foto) */}
      <div className="absolute inset-0 md:hidden bg-gradient-to-br from-teal/10 via-white to-orange/5" />

      {/* Contenido — columna izquierda */}
      <div className="relative w-full max-w-6xl mx-auto px-6 pt-28 pb-20 flex items-center">
        <div className="w-full md:max-w-lg">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block bg-teal/10 text-teal text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
              Clínica veterinaria de confianza
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl leading-tight text-gray-900 mb-6"
            style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900 }}>
            Cuidamos a los<br />
            <span className="text-teal">que más quieres</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 text-lg leading-relaxed mb-8 max-w-sm">
            Atención veterinaria integral con profesionales certificados. Tu mascota merece el mejor cuidado, y nosotros estamos aquí para darlo.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => scrollTo('#agendar')}
              className="flex items-center justify-center gap-2 bg-teal text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-teal-d transition-colors shadow-lg shadow-teal/25 cursor-pointer">
              <CalendarCheck size={20} />
              Agendar cita ahora
            </button>
            <a href="tel:+56965174454"
              className="flex items-center justify-center gap-2 border-2 border-teal text-teal px-8 py-4 rounded-full font-semibold text-base hover:bg-teal/5 transition-colors">
              <Phone size={20} />
              Llamar ahora
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
            className="flex gap-8 mt-12">
            {[
              { num: '+2.000', label: 'Mascotas atendidas' },
              { num: '6', label: 'Años de experiencia' },
              { num: '98%', label: 'Clientes satisfechos' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-2xl text-teal" style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900 }}>{s.num}</div>
                <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Badges flotantes sobre la foto */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }}
          className="hidden md:block absolute bottom-12 right-[calc(50%-120px)]">
          <div className="bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-orange/10 rounded-full flex items-center justify-center text-xl">⭐</div>
            <div>
              <div className="text-sm text-gray-900" style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700 }}>4.9 / 5</div>
              <div className="text-xs text-gray-500">+500 reseñas</div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }}
          className="hidden md:block absolute top-28 right-8">
          <div className="bg-teal text-white rounded-2xl shadow-xl px-5 py-3">
            <div className="text-sm" style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700 }}>Abierto hoy</div>
            <div className="text-xs opacity-80">09:00 – 18:00</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
