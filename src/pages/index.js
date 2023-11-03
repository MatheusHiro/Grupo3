import Formulario from "./components/Formulario/formulario"
import Footer from "./components/Footer/footer"
import Pokemon from "./components/Pokemon/pokemon"
import Iniciais from "./components/Iniciais/iniciais"

export default function Home() {
  return (
    <>
      <Iniciais />
      <Formulario />
      <Footer />
    </>
  )
}