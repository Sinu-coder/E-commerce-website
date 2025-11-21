import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../assets/css/GoogleMapSection.css"

function GoogleMapSection () {
  return (
    <section className="google-map pos-rel">
      <div className="auto-container">
        
        <Row className="g-5 row-rev  row-wd " style={{ width: "100%" }}>
          
         
          <Col lg={6} className="map-content pos-rel">
            <div className="map-section pos-rel">
              <div className="map-title">
                <h4 className="map-h4">Get in touch</h4>
                <p className="map-para">
                  We’re here to answer your questions and provide the support you need.
                  Reach out to us today and our team will get back to you as soon as possible.
                </p>
              </div>

              <div className="map-area pos-rel">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3984.0292370651964!2d101.6687858!3d3.0868711!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4b6b5ad3d8bd%3A0x222078c4453587b2!2sMillerz%20Square%20by%20MyKey%20Global!5e0!3m2!1sen!2sin!4v1756794013706!5m2!1sen!2sin"
                  width="100%"
                  height="550"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </Col>

          
          <Col lg={6} className="map-form-contect pos-rel">
            <div className="map-title">
              <h4 className="map-h4">Fill Up The Form</h4>
              <p className="para">
                Your email address will not be published. Required fields are marked *
              </p>
            </div>

            <div className="con-content">
              <form className="needs-validation" noValidate>

                
                <Row className="g-3 pad-b">
                  <Col>
                    <label htmlFor="validationCustom01" className="form-label">Name</label>
                    <input type="text" className="form-control  form-con-pad" id="validationCustom01" />
                    <div className="valid-feedback">Looks good!</div>
                  </Col>

                  <Col>
                    <label htmlFor="validationCustom02" className="form-label">Company</label>
                    <input type="text" className="form-control form-con-pad" id="validationCustom02" />
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </Row>

                
                <Row className="g-3 pad-b">
                  <Col>
                    <label htmlFor="validationCustom03" className="form-label">Email Address</label>
                    <input type="text" className="form-control form-con-pad" id="validationCustom03" />
                    <div className="valid-feedback">Hurry up!</div>
                  </Col>

                  <Col>
                    <label htmlFor="validationCustom04" className="form-label">Phonenumber</label>
                    <input type="text" className="form-control form-con-pad" id="validationCustom04" />
                    <div className="valid-feedback">Hurry up!</div>
                  </Col>
                </Row>

                
                <Row className="g-3 pad-b">
                  <Col>
                    <label htmlFor="validationCustom04" className="form-label">State</label>
                    <select className="form-select pad-b form-se-pad" id="validationCustom04" required>
                      <option disabled value="">Choose...</option>
                      <option>...</option>
                    </select>
                    <div className="invalid-feedback">Please select a valid state.</div>
                  </Col>
                </Row>

                
                <Row className="g-3 pad-b">
                  <Col>
                    <label htmlFor="validationCustom05" className="form-label">MESSAGE</label>
                    <input type="text" className="form-control pad-top form-con-pad" id="validationCustom05" required />
                    <div className="invalid-feedback">Please Enter your valid message.</div>
                  </Col>
                </Row>

                
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="invalidCheck" required />
                    <label className="form-check-label" htmlFor="invalidCheck">
                      Agree to terms and conditions
                    </label>
                    <div className="invalid-feedback">You must agree before submitting.</div>
                  </div>
                </div>

                
                <div className="mb-3">
                  <label className="form-label">Solve the CAPTCHA:</label>

                  <div className="d-flex align-items-center">
                    <span id="num1" className="fw-bold fs-5 me-1"></span>
                    <span id="operator" className="fw-bold fs-5 me-1"></span>
                    <span id="num2" className="fw-bold fs-5 me-3"></span>
                    <span className="fw-bold fs-5 me-2">=</span>

                    <input type="number" className="form-control w-25 me-2 form-con-pad" id="captchaInput" required />
                    <button type="button" className="btn btn-outline-primary" id="checkCaptcha">
                      Check
                    </button>
                  </div>
                </div>

                <p id="captchaResult" className="mt-2 fw-bold"></p>

                
                <div className="col-12">
                  <button className=" btn-style-two d-flex" type="submit">
                    <i className="bi bi-telegram"></i>Get in touch
                  </button>
                </div>

              </form>
            </div>
          </Col>

        </Row>
      </div>
    </section>
  );
};

export default GoogleMapSection;
