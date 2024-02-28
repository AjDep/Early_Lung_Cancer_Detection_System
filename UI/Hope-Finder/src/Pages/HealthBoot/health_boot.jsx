import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Header from "../../components/Header/header";
import style from "./health_boot.module.css";
import Girl from "./../../assets/Girl.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function HealthBoot() {
  return (
    <div className={style.contaner}>
      <Navbar />
      <div className={style.header}> 
        <Header name="HealthBoot" />
        <div className={style.content}>
          <Row>
            <Col className={style.firstColumn}>
              <h2>Update your details here...</h2>
              <Form>
                <div
                  className={`${style.measurementInputsOne} ${style.customPlaceholderFontSize}`}
                >
                  <Form.Group controlId={style.weight}>
                    <Form.Control
                      type="text"
                      placeholder="Enter/Update your Weight"
                      name="weight"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId={style.height}>
                    <Form.Control
                      type="text"
                      placeholder="Enter/Update your Height"
                      name="height"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId={style.Co2}>
                    <Form.Control
                      type="text"
                      placeholder="Enter/Update your Co2 Concentration"
                      name="Co2"
                      required
                    />
                  </Form.Group>
                </div>

                <div
                  className={`${style.measurementInputsTwo} ${style.customSelectFontSize}`}
                >
                  <Form.Group controlId={style.bloodType}>
                    <Form.Select name={style.bloodType} required>
                      <option value="">Select Your Blood Type</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                     
                    </Form.Select>
                  </Form.Group>
                  <Form.Group controlId={style.smokingStatus}>
                    <Form.Select name={style.smokingStatus} required>
                      <option value="">Select Your Smoking Status</option>
                      <option value="smoker">Smoker</option>
                      <option value="non-smoker">Non-Smoker</option>
                      <option value="ex-smoker">Ex-Smoker</option>
                      
                    </Form.Select>
                  </Form.Group>
                </div>

                <div className={style.submit}>
                  <Button type="submit" className={style.submitBtn}>
                    Submit
                  </Button>
                </div>
                <div className={style.bottomButtons}>
                  <Button className={style.downloadBtn}>Download PDF</Button>
                  <Button className={style.uploadBtn}>Upload Documents</Button>
                </div>
              </Form>
            </Col>
            <Col className={style.secondColumn}>
              <Col className={style.one}>
                <h4>Hello </h4>
                <h3>Josaphine!</h3>

                <h5>Today it's great day to be fit</h5>

                <div className={style.boxes}>
                  <p className={style.line1}>A+</p>
                  <p className={style.line2}>Blood</p>
                </div>

                <div className={style.boxes}>
                  <p className={style.line1}>55kg</p>
                  <p className={style.line2}>Weight</p>
                </div>

                <div className={style.boxes}>
                  <p className={style.line1}>153cm</p>
                  <p className={style.line2}>Height</p>
                </div>
              </Col>

              <Col className={style.two}>
                <div className={style.image}>
                  <img src={Girl} alt="A Girl" className={style.girl} />
                </div>
              </Col>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default HealthBoot;
