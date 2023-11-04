import styles from "../TabelaPokemons/tabela.module.css";
import Card from "../Card/Card"

export default function TabelaPokemons(props) {

  let cards = []

  let pokemonsJson = Object.values(props)[0]['pokemons']
  let borderColor = Object.values(props)[0]['mainColor']
  for (const key in pokemonsJson) {
    cards.push(Card(pokemonsJson[key], borderColor))

  }

  return (
    <div className={styles.tabela}>
      {...cards}
    </div>
  )
}
