import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../assets/css/Challenges.css"
import float1 from "../../assets/images/img-float.png"
import float2 from "../../assets/images/img-float.png"
import float3 from "../../assets/images/img-float.png"
import float4 from "../../assets/images/img-float.png"
import float5 from "../../assets/images/img-float.png"

const Challenges = () => {
  return (
    <section className="Challenges">
      <div className="auto-container">

        <div className="chall-head">
          <h1 className="chall-h1 text-center">
            The Evolving Malaysian Payroll Landscape: Challenges & Insights
          </h1>
          <p className="chall-p text-center">
            Mid-sized Malaysian companies often face significant hurdles in HR and
            Payroll management. These are no longer just administrative tasks; 
            they’re critical strategic concerns.
          </p>
        </div>

        <div className="chall-div-card">

          
          <Row className="pad-t">
            <Col sm={6} className="mb-3 mb-sm-0 wd-100">
              <div className="card-ch">
                <div className="card-body-ch-b pos-rel">
                  <div className="car-content-ch-cc">
                    <h5 className="card-title-ch-ct">Industry Insight</h5>
                    <p className="card-text-ch-tx">
                      Nearly 20% of Malaysian SMEs faced penalties due to PCB payroll
                      errors in 2025, with an average penalty of RM10,000 per case.
                    </p>
                  </div>
                  <div className="img-float pos-abs">
                    <img src={float1} alt="" />
                  </div>
                </div>
              </div>
            </Col>

            <Col sm={6} className="wd-100">
              <div className="card-ch">
                <div className="card-body-ch-b pos-rel">
                  <div className="car-content-ch-cc">
                    <h5 className="card-title-ch-ct">Complex Malaysian Regulation</h5>
                    <ul style={{ marginBottom: 0 }}>
                      <li><p className="card-text-ch-tx">PCB, EPF, SOCSO, EIS Compliance is ever-changing.</p></li>
                      <li><p className="card-text-ch-tx">Miss a PCB deadline? 10% penalties, potential audits.</p></li>
                    </ul>
                  </div>
                  <div className="img-float pos-abs">
                    <img src={float2} alt="" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          
          <Row className="pad-t">
            <Col sm={6} className="mb-3 mb-sm-0 wd-100">
              <div className="card-ch">
                <div className="card-body-ch-b pos-rel">
                  <div className="car-content-ch-cc">
                    <h5 className="card-title-ch-ct">Manual Juggling of Complexities</h5>
                    <ul style={{ marginBottom: 0 }}>
                      <li>
                        <p className="card-text-ch-tx">
                          Multiple shifts, overtime, various pay cycles, contract vs permanent staff.
                        </p>
                      </li>
                      <li>
                        <p className="card-text-ch-tx">
                          Errors directly impact trust and morale.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="img-float pos-abs">
                    <img src={float3} alt="" />
                  </div>
                </div>
              </div>
            </Col>

            <Col sm={6} className="wd-100">
              <div className="card-ch">
                <div className="card-body-ch-b pos-rel">
                  <div className="car-content-ch-cc">
                    <h5 className="card-title-ch-ct">Data Protection Headaches</h5>
                    <ul style={{ marginBottom: 0 }}>
                      <li><p className="card-text-ch-tx">Payroll = most sensitive data.</p></li>
                      <li><p className="card-text-ch-tx">Breaches damage trust & attract fines.</p></li>
                    </ul>
                  </div>
                  <div className="img-float pos-abs">
                    <img src={float4} alt="" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          
          <Row className="pad-t">
            <Col sm={6} className="wd-100">
              <div className="card-ch">
                <div className="card-body-ch-b pos-rel">
                  <div className="car-content-ch-cc">
                    <h5 className="card-title-ch-ct">Growth Bottleneck</h5>
                    <ul style={{ marginBottom: 0 }}>
                      <li><p className="card-text-ch-tx">What worked for 50 employees breaks at 150+.</p></li>
                      <li><p className="card-text-ch-tx">Payroll needs to scale with your ambition.</p></li>
                    </ul>
                  </div>
                  <div className="img-float pos-abs">
                    <img src={float5} alt="" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>

        </div>
      </div>
    </section>
  );
};

export default Challenges;
