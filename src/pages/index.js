import Formulario from "./components/Formulario/formulario"
import Footer from "./components/Footer/footer"
import Pokemon from "./components/Pokemon/pokemon"
import Iniciais from "./components/Iniciais/iniciais"
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Starter from "./components/Starter/Starter";


export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Iniciais />
      {/* <Starter /> */}
      <Formulario />
      <Footer />
    </>
  )
}