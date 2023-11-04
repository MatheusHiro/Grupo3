
import styles from "../Iniciais/iniciais.module.css";
import Fogo from "@img/fogo";
import Planta from "@img/planta";
import Agua from "@img/agua";
import border from '../../../styles/borders.module.css'

function ColoredImage({ ImageComponent, fillColor, borderClass, type }) {
    return (
        <div className={styles.tipos_text}>
            <p >
                {type}
            </p>
            <div className={styles.elements}>
                <button className={`${borderClass} ${border.pixelCorners} `}>

                    <ImageComponent fill={fillColor} />
                </button>
            </div>


        </div>
    );
}


export default function BotoesTipos(props) {
    console.log(props)
    return (
        <>
            <div onClick={props.funcAgua}>
                <ColoredImage ImageComponent={Agua} fillColor={props.fillColor} borderClass={props.borderClass} type={"AGUA"} />
            </div>
            <div onClick={props.funcPlanta}>
                <ColoredImage ImageComponent={Planta} fillColor={props.fillColor} borderClass={props.borderClass} type={"PLANTA"} />
            </div>
            <div onClick={props.funcFogo}>
                <ColoredImage ImageComponent={Fogo} fillColor={props.fillColor} borderClass={props.borderClass} type={"FOGO "} />
            </div>
        </>
    );
}
