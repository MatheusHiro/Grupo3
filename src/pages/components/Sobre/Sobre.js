import styles from './sobre.module.css'
import Image from 'next/image'
import nekoComemorando from '../../../../public/img/neko-comemorando.png'
import logo from '../../../../public/img/logo-pixelado-branco.png'
import Image from 'next/image'
import nekoComemorando from '../../../../public/img/neko-comemorando.png'
import logo from '../../../../public/img/logo-pixelado-branco.png'

export default function Sobre() {
    return (
        <body className={styles.sobre}>
            <div>
                <div>
                    <h2 className={styles.sobrenos}>
                        SOBRE NOS
                    </h2>
                    <div className={styles.texto_container}>
                        <p className={styles.letras}>
                            A IDE é a empresa júnior dos cursos Ciência e Engenharia de Computação da Universidade Federal do Rio Grande do Sul. Formada por alunos interessados em se tornarem empreendedores e profissionais excepcionais, a IDE fornece soluções em software, como sites e sistemas, com preços abaixo do mercado, aliados à excelência da UFRGS, o Instituto de Informática e seus professores, que fornecem apoio técnico e aconselhamento aos estudantes.
                            <p></p>
                            <Image src={logo} width={50}/>
                        </p>
                    </div>
                </div> 

                <div className={styles.neko}>
                    <Image src={nekoComemorando} width={300}/>
                </div>
                
            </div>

            
        </body>
    )
}

/*
 <div class="sobre">
 <div class=texto style="background-color:#242424;height:180;width:40;">
         <p class=letras style="color: white";>
             </p>
         
         <img class=ide src="logo-pixelado-branco.png"height="30">
        
 </div>
 <img class=neko src="img/neko-comemorando.png" height="500">
</div>

 <head>
 <link rel="stylesheet" 
         href="globals.css">
</head>
*/

