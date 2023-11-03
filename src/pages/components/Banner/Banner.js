import borders from "../../../styles/borders.module.css"
import styles from '../../../styles/Home.module.css'
import Image from 'next/image'
import nekoAnotando from '../../../../public/img/neko-anotando.png'
import Iniciais from '../../iniciais'


export default function Banner() {
    return (
        <div className={styles.home_background}>
            <div className={styles.neko_container}>
                <Image src={nekoAnotando} width={500} />
            </div>
            <h1>
                <p className={styles.texto_branco}>POKE</p>
                <l className={styles.texto_rosa}>IDE</l>
                <l className={styles.texto_branco}>X</l>
                <p></p>
                <div className={styles.grow}>
                    <h2 className={borders.pixelCorners}>
                        <a href="iniciais">
                            <button align='center' className={styles.button} onClick={Iniciais}>START</button>
                        </a>
                    </h2>
                </div>

            </h1>
        </div>
    )
}

