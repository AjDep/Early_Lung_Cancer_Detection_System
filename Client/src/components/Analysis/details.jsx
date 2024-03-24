import style from "./details.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Details(props) {
  return (
    <div className={style.card}>
      <div>
        <h6>{props.title}</h6>
      </div>
      
      <div id={style.box} className="p-2">
        <p className={style.text}>{props.value}</p>
      </div>
    </div>
  );
}
export default Details;
