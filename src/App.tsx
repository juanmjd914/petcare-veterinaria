import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import PorQueNosotros from './components/PorQueNosotros'
import Equipo from './components/Equipo'
import Formulario from './components/Formulario'
import Testimonios from './components/Testimonios'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <PorQueNosotros />
        <Equipo />
        <Formulario />
        <Testimonios />
      </main>
      <Footer />
    </>
  )
}
