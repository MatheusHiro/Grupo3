import Formulario from "./components/Formulario/Formulario"
import Footer from "./components/Footer/Footer"
import TabelaPokemons from "./components/TabelaPokemons/TabelaPokemons"
import Tipo from "./components/Tipo/Tipo"
import json from '../../content/pokemons.json';

export default function Home() {
  // let tipo = "AGUA"
  let tipo = "PLANTA"
  // let tipo = "FOGO"

  let fraquezas = []
  let super_efetivos = []




  for (const key in json) {
    if (tipo == key) {

      for (const key_elemento in json[key]['fraquezas']) {
        fraquezas.push(Tipo(json[key]['fraquezas'][key_elemento]))
      }

      for (const key_elemento in json[key]['superEfetivo']) {
        fraquezas.push(Tipo(json[key]['superEfetivo'][key_elemento]))
      }

      return <>
        <TabelaPokemons json={json[key]} />
        <div className="tipos">
          {...fraquezas}
        </div>
        <div className="tipos">
          {...super_efetivos}
          <p>{json[key]['description']}
          </p>
        </div>
      </>
    }
  }
}