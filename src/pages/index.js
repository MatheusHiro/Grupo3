import Formulario from "./components/Formulario/formulario"
import Footer from "./components/Footer/footer"
import Pokemon from "./components/Pokemon/pokemon"
import Iniciais from "./components/Iniciais/iniciais"
import Header from '../../components/Header'
import Banner from '../../components/Banner'

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Iniciais />
      <Formulario />
      <Footer />
    </>
  )
}