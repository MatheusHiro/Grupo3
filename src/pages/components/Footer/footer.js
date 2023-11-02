import styles from "../Footer/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        {/* Link para o site oficial */}
        <a href="https://www.pokemon.com/br/" target="_blank">
          <img className={styles.aumentavel} alt="Logo pokemon" src="img/pokemon-logo.png" />
        </a>

        {/* // Link para o instagram da IDE */}
        <a href="https://www.instagram.com/ide_jr/" target="_blank">
          <img className={styles.aumentavel} alt="Logo instagram" src="img/instagram-logo.png" />
        </a>

        {/* Link do linkedin da IDE */}
        <a href="https://www.linkedin.com/company/empresa-j%C3%BAnior-ide/" target="_blank">
          <img className={styles.aumentavel} alt="Logo linkedin" src="img/linkedin-logo.png" />
        </a>

        {/* Link para o site da IDE */}
        <a href="https://www.idejr.com.br/" target="_blank">
          <img className={styles.aumentavel} alt="Logo ide" src="img/ide-logo.png" />
        </a>
      </div>
    <div className={styles.direitos}>
        <p>
          株式会社ポケモン (The Pokémon Company) © x IDE © Todos os direitos
          reservados.
        </p>        
        <p>Termos de Uso | Politica de Privacidade | Política de Cookies</p>
      </div>
      <img className={styles.logo_final} alt="Logo ide" src="img/ide-logo.png" />
    </div>
  );
}
