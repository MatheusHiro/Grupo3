
import styles from "../Iniciais/iniciais.module.css";
import Fogo from "@img/fogo";
import Planta from "@img/planta";
import Agua from "@img/agua";
import border from '../../../styles/borders.module.css'
import { useState } from "react";

function ColoredImage({ ImageComponent, fillColor, borderClass, type, hideText, style }) {
    return (
        <div className={styles.tipos_text}>
            {/* Condição para tirar o texto quando vai para a tela dos pokemons */}
            {hideText ? null : (
                <p>
                    {type}
                </p>
            )}
            <div className={styles.elements}>
                <button style={style} className={`${borderClass} ${border.pixelCorners}`}>
                    <ImageComponent fill={fillColor} />
                </button>
            </div>
        </div>
    );
}

export default function BotoesTipos(props) {

    function clicaBotao(tipo) {
        if (tipo == 'AGUA') {
            setStylebtn1({ backgroundColor: '#3B6388' })
            setStylebtn2({ backgroundColor: 'white' })
            setStylebtn3({ backgroundColor: 'white' })

            setImgbt1('white')
            setImgbt2('#3B6388')
            setImgbt3('#3B6388')
        } else if (tipo == 'PLANTA') {
            setStylebtn1({ backgroundColor: 'white' })
            setStylebtn2({ backgroundColor: '#3B8863' })
            setStylebtn3({ backgroundColor: 'white' })

            setImgbt1('#3B8863')
            setImgbt2('white')
            setImgbt3('#3B8863')
        } else {
            setStylebtn1({ backgroundColor: 'white' })
            setStylebtn2({ backgroundColor: 'white' })
            setStylebtn3({ backgroundColor: '#AD3F3F' })

            setImgbt1('#AD3F3F')
            setImgbt2('#AD3F3F')
            setImgbt3('white')
        }
    }

    const [corBt1, setImgbt1] = useState('#603B88');
    const [corBt2, setImgbt2] = useState('#603B88');
    const [corBt3, setImgbt3] = useState('#603B88');

    const [stylebtn1, setStylebtn1] = useState({ backgroundColor: 'white' });
    const [stylebtn2, setStylebtn2] = useState({ backgroundColor: 'white' });
    const [stylebtn3, setStylebtn3] = useState({ backgroundColor: 'white' });

    const [hideText, setHideText] = useState(false);

    const mudaTipo = (tipo) => {
        setHideText(true); {/* Quando muda tipo é acionado tira o texto */ }
    };

    return (
        <>
            <div className={styles.move}>
                <div onClick={() => {
                    props.funcAgua();
                    clicaBotao('AGUA')
                }}>
                    <ColoredImage
                        style={stylebtn1}
                        ImageComponent={Agua}
                        fillColor={corBt1}
                        borderClass={props.borderClass}
                        type={"AGUA"}
                        hideText={hideText}
                    />
                </div>
            </div>
            <div className={styles.move}>
                <div onClick={() => {
                    props.funcPlanta();
                    clicaBotao('PLANTA')
                }}>
                    <ColoredImage
                        style={stylebtn2}
                        ImageComponent={Planta}
                        fillColor={corBt2}
                        borderClass={props.borderClass}
                        type={"PLANTA"}
                        hideText={hideText}
                    />
                </div>
            </div>
            <div className={styles.move}>
                <div onClick={() => {
                    props.funcFogo();
                    clicaBotao('FOGO')
                }}>
                    <ColoredImage
                        style={stylebtn3}
                        ImageComponent={Fogo}
                        fillColor={corBt3}
                        borderClass={props.borderClass}
                        type={"FOGO"}
                        hideText={hideText}
                    />
                </div>
            </div>
        </>
    );
}