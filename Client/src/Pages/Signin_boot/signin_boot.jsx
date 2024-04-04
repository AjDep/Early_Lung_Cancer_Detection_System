import React from "react";
import girl_with_laptop from "./../../assets/Girl_with_laptop.png";
import style from "./signin_boot.module.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Signin_boot() {
    return (
      <Container fluid>
        <Row>
          <Col xs={7} className={style.firstColumn}>
          <h1>LOGIN</h1>
            <p>Stay Update On Your Healthy World!</p>
            <Form>
              <Form.Group controlId={style.username}>
                <Form.Control type="text" placeholder="Email or Phone" />
              </Form.Group>
              <Form.Group controlId={style.password}>
                <Form.Control type="password" placeholder="Enter password" />
              </Form.Group>
              
  
              <div className={style.forgot}>
                  <p>Forgot Password?</p>
                </div>
              <div>
                <div className={`text-center ${style.button}`}>
                  <Button
                    variant="primary"
                    type="submit"
                    className={style.customButton}
                  >
                   LOGIN NOW
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
                    {/* <Button variant="outline-dark" className={style.loginbtn}>
                      Login with <strong>GOOGLE</strong>
                    </Button> */}
                 
                  </div>
                  <div className={style.fbLogin}>
                  {/* <Button variant="outline-dark" className={style.loginbtn}>
                     Login with <strong>FACEBOOK</strong>
                    </Button> */}
                  </div>
                </div>
              </div>
              <div className={style.mem}>
              <h6>
                New member? {" "}
                <strong className={style.create}> Create an Account</strong>
              </h6>
            </div>
            </Form>
         
          </Col>
  
          <Col xs={5} className={style.secondColumn}>
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
        </Row>
      </Container>
    );
  }
  
  export default Signin_boot;
  