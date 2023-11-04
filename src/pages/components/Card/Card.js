import border from "../../../styles/borders.module.css"
import { getBorderClassByColor, getBorderClassByType } from '../../../utils/borderUtils';

export default function Card(props, borderColor) {
  //pega a cor da borda
  let borderClass = getBorderClassByColor(borderColor)
  //adiciona a borda com as imagens dos pokemons
  return (
    <div className={`${border.pixelCorners} ${borderClass}`}>
      < img src={props.imgUrl} />

    </div>
  );
}
