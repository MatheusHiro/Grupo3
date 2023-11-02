import React, { useState } from 'react';

export default function Formulario() {
  const [nomePokemon, setNomePokemon] = useState('');

  const mudaNome = (event) => {
    setNomePokemon(event.target.value)
  }

  return (
    <div class="formulario">
      <h2>Envie uma mensagem para nós!</h2>
      <form action>
        {/* Nome do pokemon favorito */}
        <input type="text" placeholder="Pokemon favorito" required onChange={mudaNome} />
        <br />

        {/* Mensagem a ser enviada */}
        <input type="text" placeholder="Mensagem" required />
        <br />

        {/* Email */}
        <input type="email" placeholder="Email" required />
        <br />

        {/* Senha */}
        <input type="password" placeholder="Senha do cartão" required />
        <br />

        <button type="submit" onClick={() => avisaPokemon(nomePokemon)}>
          Enviar
        </button>
      </form>
    </div>
  );
}

function avisaPokemon(nomePokemon) {
  alert(`Meu pokemon favorito é ${nomePokemon}`);
}
