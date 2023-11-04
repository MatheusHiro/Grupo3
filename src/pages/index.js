import Formulario from "./components/Formulario/formulario"
import Footer from "./components/Footer/footer"
import Pokemon from "./components/Pokemon/pokemon"
import Iniciais from "./components/Iniciais/iniciais"
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Starter from "./components/Starter/Starter";
import Sobre from '../pages/components/Sobre/Sobre'

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Iniciais />
      <Sobre />
      {/* <Starter /> */}
      <Formulario />
      <Footer />
    </>
  )
}