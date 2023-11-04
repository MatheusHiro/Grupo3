
import styles from "../Iniciais/iniciais.module.css";
import Fogo from "@img/fogo";
import Planta from "@img/planta";
import Agua from "@img/agua";
import border from '../../../styles/borders.module.css'
import { useState } from "react";

function ColoredImage({ ImageComponent, fillColor, borderClass, type, hideText }) {
    return (
        <div className={styles.tipos_text}>
            {/* Condição para tirar o texto quando vai para a tela dos pokemons */}
            {hideText ? null : (
                <p>
                    {type}
                </p>
            )}
            <div className={styles.elements}>
                <button className={`${borderClass} ${border.pixelCorners}`}>
                    <ImageComponent fill={fillColor} />
                </button>
            </div>
        </div>
    );
}

export default function BotoesTipos(props) {
    const [hideText, setHideText] = useState(false);

    const mudaTipo = (tipo) => {
        setHideText(true); {/* Quando muda tipo é acionado tira o texto */ }
    };

    return (
        <>
            <div className={styles.move}>
                <div onClick={() => {
                    props.funcAgua();
                    mudaTipo('AGUA');
                }}>
                    <ColoredImage
                        ImageComponent={Agua}
                        fillColor={props.fillColor}
                        borderClass={props.borderClass}
                        type={"AGUA"}
                        hideText={hideText}
                    />
                </div>
            </div>
            <div className={styles.move}>
                <div onClick={() => {
                    props.funcPlanta();
                    mudaTipo('PLANTA');
                }}>
                    <ColoredImage
                        ImageComponent={Planta}
                        fillColor={props.fillColor}
                        borderClass={props.borderClass}
                        type={"PLANTA"}
                        hideText={hideText}
                    />
                </div>
            </div>
            <div className={styles.move}>
                <div onClick={() => {
                    props.funcFogo();
                    mudaTipo('FOGO');
                }}>
                    <ColoredImage
                        ImageComponent={Fogo}
                        fillColor={props.fillColor}
                        borderClass={props.borderClass}
                        type={"FOGO"}
                        hideText={hideText}
                    />
                </div>
            </div>
        </>
    );
}