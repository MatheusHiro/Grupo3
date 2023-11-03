import border from "../../../styles/borders.module.css"
import { getBorderClassByColor, getBorderClassByType } from '../../../utils/borderUtils';

export default function Card(props) {
  return (
    <img src={props.imgUrl} />
  );
}
