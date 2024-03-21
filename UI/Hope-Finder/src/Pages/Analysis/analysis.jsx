import Bottem_card from "./../../components/Analysis/bottem_card";
import Pie_chart from "./../../components/Analysis/pie_chart";
import Prediction from "./../../components/Analysis/Prediction";
import style from "./anlysis.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import girlImage from './../../assets/Girl.png'

function Analysis() {
  const cards = [
    { Details: "Number of people with the same result.", value: "2563" },
    {
      Details: "Number of cancer patients with identical alkane levels.",
      value: "1538",
    },
    {
      Details: "Non-cancer individuals with equivalent alkane levels.",
      value: "1025",
    },
    {
      Details: "Similar alkane levels as a percentage of total users.",
      value: "25.3%",
    },
    {
      Details: "Cancer-diagnosed individuals as a percentage.",
      value: "60.0%",
    },
    {
      Details: "Cancer-diagnosed individuals as a percentage.",
      value: "40.0%",
    },
  ];

  return (
    <>
      <Row className="content">
        <Col>
          <Row>
            <Col>
              <div className={style.top_container}>
                <Pie_chart />
              </div>
            </Col>
            <Col>
              <p>Perdiction</p>
              <Prediction />
              <p>Recommendation</p>
              <Prediction />
            </Col>
          </Row>
          <Row>
            <div className={style.bottem_container}>
              <div className={style.bottem_left}>
                {cards.map((card, index) => {
                  return (
                    <Bottem_card
                      key={index}
                      Details={card.Details}
                      value={card.value}
                    />
                  );
                })}
              </div>
              <div className={style.bottem_right}></div>
            </div>
          </Row>
        </Col>
        <Col>
        <img src={girlImage} alt="" height={'90%'}/>
        </Col>
      </Row>
    </>
  );
}

export default Analysis;
