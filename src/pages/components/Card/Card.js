import border from "../../../styles/borders.module.css"
import { getBorderClassByColor, getBorderClassByType } from '../../../utils/borderUtils';

export default function Card(props, borderColor) {

  let borderClass = getBorderClassByColor(borderColor)
  console.log(borderColor)
  return (
    <div className={`${border.pixelCorners} ${borderClass}`}>
      < img src={props.imgUrl} />

    </div>
  );
}
