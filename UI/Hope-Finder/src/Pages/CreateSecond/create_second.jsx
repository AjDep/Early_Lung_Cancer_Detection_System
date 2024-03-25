import React from "react";
import style from "./create_second.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import girl_with_laptop from "./../../assets/Girl_with_laptop.png";

function CreateSecond() {
  return (
    <div className={style.container}>
      <Row>
        {/* Right Column */}
        <Col md={6} className={`order-md-2 ${style.rightColumn}`}>
          <h1>CREATE ACCOUNT</h1>
          <p>How do I get healthy!</p>
          <Form>
            <div className={style.formGroup}>
              <input
                type="text"
                placeholder="Enter Username"
                name="username"
                required
              />
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                name="password"
                required
              />
            </div>

            <div className={style.check}>
              <input
                type="checkbox"
                className="form-check-input"
                id="agreement"
                required
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

              <div className={`d-flex justify-content-center align-items-center ${style.button}`}>
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
              <div className={style.mem}>
                <h6>
                  Already a member?{" "}
                  <strong className={style.login}> Log In</strong>
                </h6>
              </div>
            </div>
          </Form>
        </Col>

        {/* Left Column */}
        <Col md={6} className={`order-md-1 ${style.leftColumn}`}>
          <div className={`col-md-4 ${style.box2}`}></div>
          <div className={`col-md-8 ${style.box1}`}>
            <img
              src={girl_with_laptop}
              alt="Girl"
              className={style.girl_with_laptop}
            />
            <div className={style.innerBox}>
              <p>
                Welcome to <strong>HOPE FINDER</strong> Early Lung Cancer
                Detecting System
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default CreateSecond;
