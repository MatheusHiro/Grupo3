import TabelaPokemons from "../TabelaPokemons/TabelaPokemons"
import Tipo from "../Tipo/Tipo"
import json from '../../../../content/pokemons.json';
import border from "../../../styles/borders.module.css"
import { getBorderClassByColor, getBorderClassByType } from '../../../utils/borderUtils';
import styles from "./starter.module.css"

export default function Starter() {
    // let tipo = "AGUA"
    let tipo = "PLANTA"
    // let tipo = "FOGO"

    let fraquezas = []
    let super_efetivos = []

    let borderClass = getBorderClassByType(tipo)


    for (const key in json) {
        if (tipo == key) {

            for (const key_elemento in json[key]['fraquezas']) {
                fraquezas.push(Tipo(json[key]['fraquezas'][key_elemento]))
            }

            for (const key_elemento in json[key]['superEfetivo']) {
                fraquezas.push(Tipo(json[key]['superEfetivo'][key_elemento]))
            }


            return <>
                <p style={{ color: json[key]['mainColor'] }}>
                    {tipo}
                </p>

                <TabelaPokemons json={json[key]} />
                <div className="tipos">
                    {...fraquezas}
                </div>
                <div className="tipos">
                    {...super_efetivos}
                    <div className={`${borderClass} ${border.pixelCornersDescription} ${styles.description}`}>
                        <p>
                            {json[key]['description']}
                        </p>
                    </div>

                </div>
            </>
        }
    }
}

