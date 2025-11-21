// Payroll.jsx
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../../assets/css/PayrollHero.css"
import payrollImg from "../../assets/images/payroll.home.png"

function PayrollHero() {
  return (
    <section className="payroll-sec pos-rel bg-cover"  style={{backgroundImage: `url(${payrollImg})`}}>
      <div className="auto-container">
        <Row>
          <Col lg={6} className="pos-rel">
            <div className="payroll-content">
              <div className="payroll-head">
                <h4 className="payroll-h3">
                  Flawless Compliance.
                  <br />
                  On-Time Payroll.
                  <br />
                  Unbreakable Employee
                  <br />
                  Trust.
                </h4>
              </div>
              <ul className="pay-ul">
                <li className="pay-li">
                  <p className="pay-para">
                    Secure your enterprise’s future with EximiusNext’s strategic Malaysia payroll solutions.
                  </p>
                </li>
                <li className="pay-li">
                  <p className="pay-para">
                    Simplify compliance, streamline processes, and ensure accurate, on-time salary management.
                  </p>
                </li>
                <li className="pay-li">
                  <p className="pay-para">
                    Empower your business to focus on growth while we handle payroll complexities.
                  </p>
                </li>
              </ul>
            </div>
          </Col>

          <Col lg={6} className="pos-rel">
            <div className="input-content">
              <Form className="needs-validation" noValidate>
                <Row className="g-3 pad-b">
                  <Col>
                    <Form.Label htmlFor="validationCustom01">Name</Form.Label>
                    <Form.Control type="text" id="validationCustom01" />
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                  <Col>
                    <Form.Label htmlFor="validationCustom02">Company</Form.Label>
                    <Form.Control type="text" id="validationCustom02" />
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </Row>

                <Row className="g-3 pad-b">
                  <Col>
                    <Form.Label htmlFor="validationCustom03">Email Address</Form.Label>
                    <Form.Control type="text" id="validationCustom03" />
                    <div className="valid-feedback">Hurry up!</div>
                  </Col>
                  <Col>
                    <Form.Label htmlFor="validationCustom04">Phonenumber</Form.Label>
                    <Form.Control type="text" id="validationCustom04" />
                    <div className="valid-feedback">Hurry up!</div>
                  </Col>
                </Row>

                <Row className="g-3 pad-b">
                  <Col>
                    <Form.Label htmlFor="validationCustom04">Head Count Number</Form.Label>
                    <Form.Control type="text" className="pad-top" id="validationCustom04" required />
                    <div className="invalid-feedback">Please select head count number.</div>
                  </Col>
                </Row>

                <Row className="g-3 pad-b">
                  <Col>
                    <Form.Label htmlFor="validationCustom05">MESSAGE</Form.Label>
                    <Form.Control type="text" className="pad-top" id="validationCustom05" required />
                    <div className="invalid-feedback">Please Enter your valid message.</div>
                  </Col>
                </Row>

                <div className="col-12">
                  <Form.Check
                    type="checkbox"
                    id="invalidCheck"
                    required
                    label="Agree to terms and conditions"
                  />
                  <div className="invalid-feedback">You must agree before submitting.</div>
                </div>

                <div className="mb-3">
                  <Form.Label>Solve the CAPTCHA:</Form.Label>
                  <div className="d-flex align-items-center">
                    <span id="num1" className="fw-bold fs-5 me-1">0</span>
                    <span id="operator" className="fw-bold fs-5 me-1">+</span>
                    <span id="num2" className="fw-bold fs-5 me-3">0</span>
                    <span className="fw-bold fs-5 me-2">=</span>
                    <Form.Control type="number" className="w-25 me-2" />
                    <Button type="button" variant="outline-primary">Check</Button>
                  </div>
                  <p id="captchaResult" className="mt-2 fw-bold"></p>
                </div>

                <div className="col-12 d-flex align-items-center justify-content-center">
                  <button className="btn-style-two" type="submit">
                    Get in touch
                  </button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default PayrollHero;
