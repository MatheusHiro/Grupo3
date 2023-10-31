// import "./styles/footer.css";

export default function Footer() {
  return (
    <div class="footer">
      <div class="links">
        {/* Link para o site oficial */}
        <a href="https://www.pokemon.com/br/">
          <img class="aumentavel" alt="Logo pokemon" src="img/pokemon-logo.png" />
        </a>

        {/* // Link para o instagram da IDE */}
        <a href="https://www.instagram.com/ide_jr/">
          <img class="aumentavel" alt="Logo instagram" src="img/instagram-logo.png" />
        </a>

        {/* Link do linkedin da IDE */}
        <a href="https://www.linkedin.com/company/empresa-j%C3%BAnior-ide/">
          <img class="aumentavel" alt="Logo linkedin" src="img/linkedin-logo.png" />
        </a>

        {/* Link para o site da IDE */}
        <a href="https://www.idejr.com.br/">
          <img class="aumentavel" alt="Logo ide" src="img/ide-logo.png" />
        </a>
      </div>
      <div class="direitos">
        <p>
          株式会社ポケモン (The Pokémon Company) © x IDE © Todos os direitos
          reservados.
        </p>        
        <p>Termos de Uso | Politica de Privacidade | Política de Cookies</p>
      </div>
      <img class="logo-final" alt="Logo ide" src="img/ide-logo.png" />
    </div>
  );
}
