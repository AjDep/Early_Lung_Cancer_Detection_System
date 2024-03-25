import style from "./details.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Details(props) {
  return (
    <div className={style.card}>
      <div id={style.box} className="p-2">
      <h6 className={style.Titlebox}>{props.title}</h6>
        <p className={style.text}>{props.value}</p>
      </div>
    </div>
  );
}
export default Details;
