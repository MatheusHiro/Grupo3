import React, { useState } from 'react';
import styles from "../Formulario/form.module.css";

export default function Formulario() {
  const [nomePokemon, setNomePokemon] = useState('');

  const mudaNome = (event) => {
    setNomePokemon(event.target.value)
  }

  return (
    <div class="formulario">
      <h2 className={styles.tituloForm}>Envie uma mensagem para nós!</h2>
      <form action  >
        <div className={styles.camposPreencher}>
        {/* Nome do pokemon favorito */}
        <input type="text" placeholder="Pokemon favorito" required onChange={mudaNome} className={styles.caixaPreencher} />
        <br />
        </div>
        
        <div className={styles.camposPreencher}>
        {/* Mensagem a ser enviada */}
        <input type="text" placeholder="Mensagem" required className={styles.caixaPreencher}/>
        <br />
        </div>
        <div className={styles.camposPreencher}>
        {/* Email */}
        <input type="email" placeholder="Email" required className={styles.caixaPreencher}/>
        <br />
        </div>
        <div className={styles.camposPreencher}>
        {/* Senha */}
        <input type="password" placeholder="Senha do cartão" required className={styles.caixaPreencher}/>
        <br />
        </div>
        <div className={styles.campoBotao}>
        <button type="submit" onClick={() => avisaPokemon(nomePokemon)} className={styles.caixaBotao}>
          Enviar
        </button>
        </div>
      </form>
    </div>
  );
}

function avisaPokemon(nomePokemon) {
  alert(`Meu pokemon favorito é ${nomePokemon}`);
}
