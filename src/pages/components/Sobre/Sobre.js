import styles from './sobre.module.css'

export default function Sobre() {
    return (
        <div className={styles.sobre}>
            <div className={styles.container}>
                <div>
                    <h2 className={styles.sobrenos}>
                        SOBRE NOS
                    </h2>
                    <div className={styles.texto_container}>
                        <p className={styles.letras}>
                            A IDE é a empresa júnior dos cursos Ciência e Engenharia de Computação da Universidade Federal do Rio Grande do Sul. Formada por alunos interessados em se tornarem empreendedores e profissionais excepcionais, a IDE fornece soluções em software, como sites e sistemas, com preços abaixo do mercado, aliados à excelência da UFRGS, o Instituto de Informática e seus professores, que fornecem apoio técnico e aconselhamento aos estudantes.
                        
                            <img src='img/logo-pixelado-branco.png' className={styles.ide} />
                        </p>
                    </div>
                </div>

                <div className={styles.neko}>
                    <img src='img/neko-comemorando.png' className={styles.neko} />
                </div>

            </div>


        </div>
    )
}