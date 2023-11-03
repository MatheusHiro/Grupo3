import TabelaPokemons from "../TabelaPokemons/TabelaPokemons"
import Tipo from "../Tipo/Tipo"
import json from '../../../../content/pokemons.json';
import border from "../../../styles/borders.module.css"
import { getBorderClassByColor, getBorderClassByType } from '../../../utils/borderUtils';
import styles from "./starter.module.css"
import Agua from "@img/agua";
import Fogo from "@img/fogo";
import Planta from "@img/planta"

function ColoredImage({ ImageComponent, fillColor, borderClass }) {
    return (

        <div className={styles.elements}>
            <button className={`${borderClass} ${border.pixelCorners} `}>

                <ImageComponent fill={fillColor} />
            </button>
        </div>


    );
}

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
                super_efetivos.push(Tipo(json[key]['superEfetivo'][key_elemento]))
            }


            return <>
                <div className={styles.container}>
                    <div className={styles.container_description}>
                        {/*Adiciona a tipo e modifica a cor do texto de acordo com ele*/}
                        <p style={{ color: json[key]['mainColor'] }}>
                            {tipo}
                        </p>
                        {/*Bota a tabela de pokemons*/}

                        <TabelaPokemons json={json[key]} />

                        <div className={styles.tipos}>
                            <ColoredImage ImageComponent={Agua} fillColor={json[key]['mainColor']} borderClass={borderClass} />
                            <ColoredImage ImageComponent={Planta} fillColor={json[key]['mainColor']} borderClass={borderClass} />
                            <ColoredImage ImageComponent={Fogo} fillColor={json[key]['mainColor']} borderClass={borderClass} />

                        </div>
                    </div>
                    <div className={styles.container_description}>
                        <div>
                            <img src="/img/neko-piscando.png" />
                        </div>
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

