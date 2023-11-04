import styles from "../Iniciais/iniciais.module.css";
import { getBorderClassByColor, getBorderClassByType } from '../../../utils/borderUtils';
import border from '../../../styles/borders.module.css'
import { symlink } from "fs";
import React, { useState } from 'react';
import BotoesTipos from "../BotoesTipos/BotoesTipos"

export default function iniciais() {

    const [tipo, setTipo] = useState('');

    const mudaTipo = (tipo) => {
        setTipo(tipo)
    }

    const borderClass = getBorderClassByColor('#603B88');
    const fillColor = '#603B88';

    if (tipo == 'agua') {
        return T
    }
    return (
        <div className={styles.iniciais}>
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
            <div className={styles.bar_container}>
                <div className={styles.tipos}>
                    <BotoesTipos
                        borderClass={borderClass}
                        fillColor={fillColor}
                        funcAgua={() => mudaTipo('agua')}
                        funcPlanta={() => mudaTipo('planta')}
                        funcFogo={() => mudaTipo('fogo')}
                    />
                </div>
                <a href="https://www.idejr.com.br/" target="_blank">
                    <button className={`${styles.button} ${borderClass} ${border.pixelCorners} `}>
                        <img src="img/logo-pixelado-roxo.png" alt="Logo" />
                    </button>
                </a>
            </div>



        </div>
    );
}
