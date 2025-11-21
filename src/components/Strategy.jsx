import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/Strategy.css"; 
import mid from "../assets/images/mid.png"
import mid2 from "../assets/images/123.png"
import mid3 from "../assets/images/12.png"

function Strategy() {
  return (
    <section className="strategy">
     
        <Row className="align-items-center">
          
          <Col xl={6} lg={6} md={12}>
            <div className="strategy-area">
              <div className="strategic-h">
                <h4 className="str-h4">
                  Why Do CXOs Choose <br /> Eximius Next?
                </h4>
              </div>

              <div className="str-para">
                <p className="str-p">
                  You need a strategic partner who delivers more than <br />
                  outsourcing. EximiusNext is built to drive process excellence, <br />
                  compliance, and efficiency—helping mid-sized companies scale <br />
                  confidently.
                </p>
              </div>

              <div className="str-icon-area">
                
                <div className="str-icon-content">
                  <div className="icon-div">
                    <i className="bi bi-rocket-takeoff icon-1"></i>
                  </div>
                  <div className="icon-text">
                    <div className="icon-h">
                      <h3 className="icon-h3">
                        Intelligent Processes with Human Assurance
                      </h3>
                    </div>
                    <div className="icon-para">
                      <p className="icon-p">
                        We combine modern platforms with expert oversight to ensure
                        accuracy, compliance, and efficiency.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="str-icon-content">
                  <div className="icon-div">
                    <i className="bi bi-person icon-1"></i>
                  </div>
                  <div className="icon-text">
                    <div className="icon-h">
                      <h3 className="icon-h3">Results That Minimize Risk</h3>
                    </div>
                    <div className="icon-para">
                      <p className="icon-p">
                        Our solutions enhance efficiency and timeliness while embedding
                        compliance and governance at every stage.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="str-icon-content">
                  <div className="icon-div">
                    <i className="bi bi-briefcase-fill icon-1"></i>
                  </div>
                  <div className="icon-text">
                    <div className="icon-h">
                      <h3 className="icon-h3">A Partner for Mid-Market Leaders</h3>
                    </div>
                    <div className="icon-para">
                      <p className="icon-p">
                        With proven expertise in supporting mid-sized companies, we act
                        as an extension of your team—running your processes with
                        precision so you can focus on strategy and innovation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6} md={12}>
            <div className="img-container">
              <div className="img-icon">
                <img src={mid} alt="Mid Icon" className="mid-icon" />
              </div>
              <Row className="gx-0">
                <Col lg={6} md={4} xs={4}>
                  <div className="img-section">
                    <img
                      src={mid2}
                      className="img-fluid img-1"
                      alt="123"
                      style={{ height: "290px" }}
                    />
                  </div>
                </Col>
                <Col lg={6} md={4} xs={4}>
                  <div className="img-section-text">
                    <div className="img-text">
                      <h3 className="img-h">
                        Strategic <br /> Partner
                      </h3>
                    </div>
                  </div>
                </Col>
                <Col lg={6} md={12} xs={6} className="d-lg-flex d-none">
                  <div className="mar-40">
                    <div className="img-section-text">
                      <div className="img-text">
                        <h3 className="img-h">
                          Strategic <br /> Partner
                        </h3>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={6} md={4} xs={4}>
                  <div className="mar-40">
                    <div className="img-section">
                      <img
                        src= {mid3}
                        className="img-fluid img-3"
                        alt="12"
                        style={{ height: "290px" }}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      
    </section>
  );
}

export default Strategy;
