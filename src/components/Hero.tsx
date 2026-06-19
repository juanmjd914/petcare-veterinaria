import { motion } from 'motion/react'
import { CalendarCheck, Phone } from 'lucide-react'

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Foto de fondo completa */}
      <img
        src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1600&q=85"
        alt="Veterinaria atendiendo a una mascota"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
      />

      {/* Overlay gradiente izquierda */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.2) 65%, transparent 100%)'
      }} />

      {/* Contenido */}
      <div className="relative w-full max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-lg">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase border border-white/20">
              Clínica veterinaria de confianza
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl leading-tight text-white mb-6"
            style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900 }}>
            Cuidamos a los<br />
            <span style={{ color: '#5eead4' }}>que más quieres</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 text-lg leading-relaxed mb-8 max-w-sm">
            Atención veterinaria integral con profesionales certificados. Tu mascota merece el mejor cuidado.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => scrollTo('#agendar')}
              className="flex items-center justify-center gap-2 bg-teal text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-teal-d transition-colors shadow-lg cursor-pointer">
              <CalendarCheck size={20} />
              Agendar cita ahora
            </button>
            <a href="tel:+56965174454"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-white/10 transition-colors">
              <Phone size={20} />
              Llamar ahora
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
            className="flex gap-10 mt-12">
            {[
              { num: '+2.000', label: 'Mascotas atendidas' },
              { num: '6', label: 'Años de experiencia' },
              { num: '98%', label: 'Clientes satisfechos' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-2xl text-white" style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900 }}>{s.num}</div>
                <div className="text-xs text-white/60 mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Badges */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }}
        className="absolute bottom-10 right-10 hidden md:block">
        <div className="bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-orange/10 rounded-full flex items-center justify-center text-xl">⭐</div>
          <div>
            <div className="text-sm text-gray-900" style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700 }}>4.9 / 5</div>
            <div className="text-xs text-gray-500">+500 reseñas</div>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }}
        className="absolute top-24 right-10 hidden md:block">
        <div className="bg-teal text-white rounded-2xl shadow-xl px-5 py-3">
          <div className="text-sm" style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700 }}>Abierto hoy</div>
          <div className="text-xs opacity-80">09:00 – 18:00</div>
        </div>
      </motion.div>
    </section>
  )
}
