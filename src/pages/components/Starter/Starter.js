import TabelaPokemons from "../TabelaPokemons/TabelaPokemons"
import Tipo from "../Tipo/Tipo"
import json from '../../../../content/pokemons.json';
import border from "../../../styles/borders.module.css"
import { getBorderClassByColor, getBorderClassByType } from '../../../utils/borderUtils';
import styles from "../Starter/starter.module.css"

export default function Starter(props) {

    let fraquezas = []
    let super_efetivos = []

    let borderClass = getBorderClassByType(props.tipo)

    for (const key in json) {
        if (props.tipo == key) {

            for (const key_elemento in json[key]['fraquezas']) {
                fraquezas.push(Tipo(json[key]['fraquezas'][key_elemento]))
            }

            for (const key_elemento in json[key]['superEfetivo']) {
                super_efetivos.push(Tipo(json[key]['superEfetivo'][key_elemento]))
            }


            return <>
                <div className={styles.container}>
                    <div className={styles.description_container}>
                        {/*Adiciona a tipo e modifica a cor do texto de acordo com ele*/}
                        <h2 className={styles.tipoTitulo} style={{ color: json[key]['mainColor'] }}>
                            {props.tipo}
                        </h2>
                        {/*Bota a tabela de pokemons*/}

                        <TabelaPokemons json={json[key]} />
                    </div>
                    <div className={styles.description_container}>

                        <img className={styles.nekoPiscando} src="/img/neko-piscando.png" />

                        {/*div para as fraquezas e super efetivos*/}
                        <div className={`${'tipos'} ${styles.efects_container}`}>
                            <div>
                                <p>
                                    FRA:
                                </p>
                                {...fraquezas}
                            </div>
                            <div>
                                <p>
                                    SE:
                                </p>
                                {...super_efetivos}

                            </div>
                        </div>
                        {/* Adiciona borda para a descrição */}
                        <div className={`${borderClass} ${border.pixelCornersDescription} ${styles.description}`}>
                            <p>
                                {json[key]['description']}
                            </p>
                        </div>
                    </div>
                </div>
            </>
        }
    }
}

