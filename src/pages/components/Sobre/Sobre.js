import styles from './sobre.module.css'

export default function Sobre() {
    return (
        <div className={styles.sobre}>
            <p className={styles.sobrenos}>SOBRE NOS</p>
            <div className={styles.textobox} >
                <p className={styles.letras}>
                    A IDE é a empresa júnior dos cursos Ciência e
                    Engenharia de Computação da Universidade
                    Federal do Rio Grande do Sul. Formado por alunos
                    interessados em se tornarem empreendedores a
                    profissionais excepcionais, a IDE fornece soluções
                    em software, como sites e sistemas, com preços
                    abaixo do mercado, aliados à excelência da
                    UFRGS, o Instituto de Informática e seus
                    professores, que fornecem apoio técnico e
                    aconselhamento aos estudantes.
                </p>
                <img src='img/logo-pixelado-branco.png' className={styles.ide} />

            </div>
            <div>
                <img src='img/neko-comemorando.png' className={styles.neko} />
            </div>
        </div>


    );
}


