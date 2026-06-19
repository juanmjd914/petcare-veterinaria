import { useState, useMemo } from 'react'
import { CalendarCheck, CheckCircle, Loader } from 'lucide-react'

const SERVICIOS = ['Consulta General', 'Vacunas', 'Cirugía', 'Grooming', 'Urgencias', 'Laboratorio']
const ESPECIES  = ['Perro', 'Gato', 'Ave', 'Conejo', 'Otro']

function getHoras(fecha: string) {
  if (!fecha) return []
  const day = new Date(fecha + 'T12:00:00').getDay()
  const horas: string[] = []
  const start = 9 * 60
  const end   = day === 6 ? 13 * 60 : 18 * 60
  for (let m = start; m < end; m += 30) {
    const h = String(Math.floor(m / 60)).padStart(2, '0')
    const min = String(m % 60).padStart(2, '0')
    horas.push(`${h}:${min}`)
  }
  return horas
}

function isDisabledDate(dateStr: string) {
  const d = new Date(dateStr + 'T12:00:00')
  return d.getDay() === 0
}

const today = new Date().toISOString().split('T')[0]

export default function Formulario() {
  const [form, setForm] = useState({
    nombre: '', email: '', whatsapp: '',
    mascota: '', especie: '', raza: '', edad: '',
    servicio: '', fecha: '', hora: '', notas: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle')

  const horas = useMemo(() => getHoras(form.fecha), [form.fecha])

  const set = (k: string, v: string) => {
    setForm(f => ({ ...f, [k]: v }))
    setErrors(e => ({ ...e, [k]: '' }))
    if (k === 'fecha') setForm(f => ({ ...f, fecha: v, hora: '' }))
  }

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.nombre.trim())    e.nombre    = 'Ingresa tu nombre'
    if (!form.email.includes('@')) e.email  = 'Email inválido'
    if (form.whatsapp.length < 7) e.whatsapp = 'Número inválido'
    if (!form.mascota.trim())   e.mascota   = 'Ingresa el nombre de tu mascota'
    if (!form.especie)          e.especie   = 'Selecciona la especie'
    if (!form.servicio)         e.servicio  = 'Selecciona un servicio'
    if (!form.fecha)            e.fecha     = 'Selecciona una fecha'
    if (!form.hora)             e.hora      = 'Selecciona una hora'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    if (!validate()) return
    setStatus('loading')
    setTimeout(() => setStatus('done'), 1800)
  }

  const inputCls = (k: string) =>
    `w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all focus:border-teal focus:ring-2 focus:ring-teal/10 ${errors[k] ? 'border-red-400' : 'border-gray-200'}`

  if (status === 'done') {
    return (
      <section id="agendar" className="py-24 bg-gradient-to-br from-teal/5 to-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <CheckCircle size={72} className="text-teal mx-auto mb-6" />
          <h2 className="text-3xl font-900 text-gray-900 mb-4" style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900 }}>
            ¡Solicitud recibida!
          </h2>
          <p className="text-gray-500 text-lg mb-2">
            Hemos registrado tu cita para <strong>{form.mascota}</strong> el día <strong>{form.fecha}</strong> a las <strong>{form.hora}</strong>.
          </p>
          <p className="text-gray-400 text-sm">
            Te contactaremos por WhatsApp al <strong>{form.whatsapp}</strong> para confirmarla. ¡Hasta pronto! 🐾
          </p>
          <button onClick={() => { setStatus('idle'); setForm({ nombre:'', email:'', whatsapp:'', mascota:'', especie:'', raza:'', edad:'', servicio:'', fecha:'', hora:'', notas:'' }) }}
            className="mt-8 bg-teal text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-d transition-colors cursor-pointer">
            Agendar otra cita
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="agendar" className="py-24 bg-gradient-to-br from-teal/5 to-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-teal text-sm font-semibold uppercase tracking-widest">Reserva en línea</span>
          <h2 className="text-4xl font-900 text-gray-900 mt-3 mb-3" style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900 }}>
            Agenda la cita de tu mascota
          </h2>
          <p className="text-gray-500">Llena el formulario y te confirmaremos por WhatsApp. Sin esperas, sin llamadas.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-lg p-8 md:p-10 space-y-6">
          {/* Datos del dueño */}
          <div>
            <h3 className="font-800 text-gray-700 mb-4 pb-2 border-b border-gray-100" style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800 }}>
              Tus datos
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">Nombre completo *</label>
                <input value={form.nombre} onChange={e => set('nombre', e.target.value)} placeholder="Juan Pérez" className={inputCls('nombre')} />
                {errors.nombre && <p className="text-red-400 text-xs mt-1">{errors.nombre}</p>}
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">Email *</label>
                <input type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="juan@email.com" className={inputCls('email')} />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">WhatsApp *</label>
                <input value={form.whatsapp} onChange={e => set('whatsapp', e.target.value)} placeholder="+56 9 1234 5678" className={inputCls('whatsapp')} />
                {errors.whatsapp && <p className="text-red-400 text-xs mt-1">{errors.whatsapp}</p>}
              </div>
            </div>
          </div>

          {/* Datos de la mascota */}
          <div>
            <h3 className="font-800 text-gray-700 mb-4 pb-2 border-b border-gray-100" style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800 }}>
              Tu mascota
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">Nombre *</label>
                <input value={form.mascota} onChange={e => set('mascota', e.target.value)} placeholder="Firulais" className={inputCls('mascota')} />
                {errors.mascota && <p className="text-red-400 text-xs mt-1">{errors.mascota}</p>}
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">Especie *</label>
                <select value={form.especie} onChange={e => set('especie', e.target.value)} className={inputCls('especie')}>
                  <option value="">Seleccionar</option>
                  {ESPECIES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                {errors.especie && <p className="text-red-400 text-xs mt-1">{errors.especie}</p>}
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">Raza</label>
                <input value={form.raza} onChange={e => set('raza', e.target.value)} placeholder="Labrador" className={inputCls('raza')} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">Edad</label>
                <input value={form.edad} onChange={e => set('edad', e.target.value)} placeholder="3 años" className={inputCls('edad')} />
              </div>
            </div>
          </div>

          {/* Cita */}
          <div>
            <h3 className="font-800 text-gray-700 mb-4 pb-2 border-b border-gray-100" style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800 }}>
              Detalles de la cita
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">Servicio *</label>
                <select value={form.servicio} onChange={e => set('servicio', e.target.value)} className={inputCls('servicio')}>
                  <option value="">Seleccionar</option>
                  {SERVICIOS.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                {errors.servicio && <p className="text-red-400 text-xs mt-1">{errors.servicio}</p>}
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">Fecha * <span className="text-gray-400 font-normal">(lun–sáb)</span></label>
                <input type="date" value={form.fecha} min={today}
                  onChange={e => {
                    if (isDisabledDate(e.target.value)) return
                    set('fecha', e.target.value)
                  }}
                  className={inputCls('fecha')} />
                {errors.fecha && <p className="text-red-400 text-xs mt-1">{errors.fecha}</p>}
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">Hora *</label>
                <select value={form.hora} onChange={e => set('hora', e.target.value)}
                  disabled={!form.fecha} className={`${inputCls('hora')} disabled:opacity-50`}>
                  <option value="">-- elige fecha primero --</option>
                  {horas.map(h => <option key={h} value={h}>{h}</option>)}
                </select>
                {errors.hora && <p className="text-red-400 text-xs mt-1">{errors.hora}</p>}
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-xs font-semibold text-gray-500 mb-1">Notas adicionales</label>
              <textarea value={form.notas} onChange={e => set('notas', e.target.value)}
                rows={3} placeholder="Síntomas, comportamiento, medicamentos actuales..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all resize-none" />
            </div>
          </div>

          <button type="submit" disabled={status === 'loading'}
            className="w-full bg-teal text-white py-4 rounded-xl font-700 text-base hover:bg-teal-d transition-colors flex items-center justify-center gap-3 disabled:opacity-70 cursor-pointer"
            style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700 }}>
            {status === 'loading'
              ? <><Loader size={20} className="animate-spin" /> Enviando solicitud...</>
              : <><CalendarCheck size={20} /> Confirmar cita</>}
          </button>
        </form>
      </div>
    </section>
  )
}
