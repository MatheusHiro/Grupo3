import styles from "../Iniciais/iniciais.module.css";
import { getBorderClassByColor, getBorderClassByType } from '../../../utils/borderUtils';
import border from '../../../styles/borders.module.css'
import { symlink } from "fs";
import React, { useState } from 'react';
import BotoesTipos from "../BotoesTipos/BotoesTipos"
import Starter from "../Starter/Starter";

export default function iniciais() {

    const [tipo, setTipo] = useState('');
    const mudaTipo = (value) => {
        setTipo(value)
    }

    const borderClass = getBorderClassByColor('#603B88');
    const fillColor = '#603B88';

    return (
        <>
            {tipo === "AGUA" ? <Starter tipo={'AGUA'} /> : null}
            {tipo === "PLANTA" ? <Starter tipo={'PLANTA'} /> : null}
            {tipo === "FOGO" ? <Starter tipo={'FOGO'} /> : null}
            {tipo === "" ? <div className={styles.iniciais}>
                <p className={styles.intro_text}>
                    CONHECENDO OS STARTERS
                </p>

                <div className={`${styles.description_container} ${borderClass} ${border.pixelCorners}`}>
                    <div>

                        <p>
                            ESCOLHA UM!
                        </p>
                        <img src="img/neko-dormindo.png" />
                    </div>
                    <div>
                        <img src="img/aspas.png" />
                        <p>
                            Treinadores Pokémon enfrentam uma decisão crucial ao escolher seu Pokémon inicial, pois isso moldará suas aventuras. Os tipos - Água, Fogo e Planta - influenciam as batalhas e estratégias. Água domina Fogo, Fogo vence Planta, e Planta supera Água. Escolher com sabedoria é a chave para o sucesso nas jornadas Pokémon. Conheça um pouco mais sobre esses tipos!
                        </p>
                        <img src="img/aspas.png" />
                    </div>
                </div>
            </div> : null}

            <div className={styles.bar_container}>
                <div className={styles.tipos}>
                    <BotoesTipos
                        borderClass={borderClass}
                        fillColor={fillColor}
                        funcAgua={() => mudaTipo('AGUA')}
                        funcPlanta={() => mudaTipo('PLANTA')}
                        funcFogo={() => mudaTipo('FOGO')}
                    />
                </div>
                {tipo === "" ? <a href="https://www.idejr.com.br/" target="_blank">
                    <button className={`${styles.button} ${borderClass} ${border.pixelCorners} `}>
                        <img src="img/logo-pixelado-roxo.png" alt="Logo" />
                    </button>
                </a> : null}


            </div>
        </>
    );
}
