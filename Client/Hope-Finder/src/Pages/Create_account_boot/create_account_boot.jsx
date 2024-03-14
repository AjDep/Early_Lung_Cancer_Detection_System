import React from "react";
import girl_with_laptop from "./../../assets/Girl_with_laptop.png";
import style from "./create_account_boot.module.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Create_account_boot() {
  return (
    <Container fluid>
      <Row>
        <Col xs={5} className={style.firstColumn}>
        <div className={style.box2}></div>
          <div className={style.box1}>
            <img src={girl_with_laptop} alt="" className={style.girl_with_laptop} />
            <div className={style.innerBox}>
              <p className={style.welcomeMessage}>
                Welcome<span className={style.backText}>Back!</span>
              </p>
            </div>
          </div>
        </Col>

        <Col xs={7} className={style.secondColumn}>
          <h1>CREATE ACCOUNT</h1>
          <p>How to I get healthy!</p>
          <Form>
            <Form.Group controlId={style.username}>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group controlId={style.password}>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Form.Group controlId={style.confirmPassword}>
              <Form.Control type="password" placeholder="Confirm password" />
            </Form.Group>

            <div className={style.check} >
              <input
                type="checkbox"
                className="form-check-input"
                id="agreement"
              />
              <label className="form-check-label" htmlFor="agreement">
                <span className={style.blackText}>
                Creating an account means you’re okay with our
                </span>
                <br />
                <span>
                  <strong className={style.blueText}>Terms of Service</strong>
                  <span className={style.and}> and </span>
                  <strong className={style.blueText}>Privacy Policy</strong>
                </span>
              </label>

              
            </div>

            <div>
              <div className={`text-center ${style.button}`}>
                <Button
                  variant="primary"
                  type="submit"
                  className={style.customButton}
                >
                  CREATE MY FREE ACCOUNT
                </Button>
              </div>
              <div
                className={`d-flex align-items-center justify-content-center ${style.wordOr}`}
              >
                <div
                  className={`border-top border-bottom flex-grow-1 ${style.line}`}
                ></div>
                <span className={`mx-2 ${style.or}`}>or</span>
                <div
                  className={`border-top border-bottom flex-grow-1 ${style.line}`}
                ></div>
              </div>
              <div className={`text-center ${style.socialLogin}`}>
                <div className={style.googleLogin}>
                  <Button variant="outline-dark" className={style.loginbtn}>
                    LOG IN WITH <strong>APPLE</strong>
                  </Button>
                </div>
              </div>
            </div>
            <div className={style.mem}>
              <h6>
                Already a member? {" "}
                <strong className={style.login}> Log In</strong>
              </h6>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Create_account_boot;
