import style from "./details.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Details(props) {
  return (
    <Col className={style.card}>
      <Row>
        <h6>{props.title}</h6>
      </Row>
      
      <Row id={style.box} className="p-2">
        <p className={style.text}>{props.value}</p>
      </Row>
    </Col>
  );
}
export default Details;
