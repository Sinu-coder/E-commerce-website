import React from "react";
import "../../assets/css/GrowthLeader.css"
import { Container, Row, Col } from "react-bootstrap";
import manufactureIcon from "../../assets/images/manufacture.png";
import engineeringIcon from "../../assets/images/engineering.png";
import shoppingCartIcon from "../../assets/images/shopping-cart.png";
import logisticIcon from "../../assets/images/logicstic.png";
import constructionIcon from "../../assets/images/construction.png";
import oilRigIcon from "../../assets/images/oil-rig.png";
import healthcareIcon from "../../assets/images/healthcare.png";
import serviceIcon from "../../assets/images/service.png";
import professionalIcon from "../../assets/images/professionalism.png";

function GrowthLeader() {
  return (
    <section className="growth-leader pos-rel">
      <div className="auto-container">
        <div className="grow-head text-center">
          <h4 className="grow-h4">
            Precision Payroll Engineered for Malaysian Growth Leaders
          </h4>
          <p className="grow-para">
            Eximius Next Payroll is meticulously crafted for the ambitious mid-sized enterprises driving
            Malaysia’s economy. If your company is scaling rapidly, and current operational complexities are
            challenging your strategic focus, this solution is purpose-built for you.
          </p>
        </div>

        <Row className="g-4 pad-t">
          <Col xl={4} lg={4} md={6} sm={6}>
            <div className="card-section">
              <div className="card-head">
                <h5 className="card-h5">Employee Base</h5>
              </div>
              <div className="card-para">
                <p className="card-p">
                  50 to 1,000 employees – a critical growth phase requiring robust solutions.
                </p>
              </div>
            </div>
          </Col>

         <Col xl={4} lg={4} md={6} sm={6}>
            <div className="card-section">
              <div className="card-head">
                <h5 className="card-h5">Revenue Profile</h5>
              </div>
              <div className="card-para">
                <p className="card-p">
                  Annual Revenue from MYR 5M to 500M (approx.) – where operational efficiency directly
                  impacts profitability.
                </p>
              </div>
            </div>
          </Col>

         <Col xl={4} lg={4} md={6} sm={6}>
            <div className="card-section">
              <div className="card-head">
                <h5 className="card-h5">Operational Strain</h5>
              </div>
              <div className="card-para">
                <p className="card-p">
                  Managing escalating HR complexity with limited, overstretched in-house payroll
                  bandwidth.
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <div className="grow-icon-section">
          <div className="gr-icn-head">
            <h3 className="gr-icn-h3">Industries We Empower</h3>
          </div>

          <Row className="g-3" style={{ paddingBottom: "20px" }}>
            <Col>
              <div className="icn-div">
                <div className="icn-img">
                  <img src={manufactureIcon} alt="Manufacturing"  style={{ height: "30px" }} />
                </div>
                <p className="icn-p">Manufacturing</p>
              </div>
            </Col>

            <Col>
              <div className="icn-div">
                <div className="icn-img">
                  <img src={engineeringIcon} alt="Engineering"  style={{ height: "30px" }} />
                </div>
                <p className="icn-p">Engineering</p>
              </div>
            </Col>

            <Col>
              <div className="icn-div">
                <div className="icn-img">
                  <img src={shoppingCartIcon} alt="Retail"  style={{ height: "30px" }} />
                </div>
                <p className="icn-p">Retail</p>
              </div>
            </Col>

            <Col>
              <div className="icn-div">
                <div className="icn-img">
                  <img src={logisticIcon} alt="Logistic"  style={{ height: "30px" }} />
                </div>
                <p className="icn-p">Logistic</p>
              </div>
            </Col>

            <Col>
              <div className="icn-div">
                <div className="icn-img">
                  <img src={manufactureIcon} alt="Manufacturing"  style={{ height: "30px" }} />
                </div>
                <p className="icn-p">Manufacturing</p>
              </div>
            </Col>

            <Col>
              <div className="icn-div">
                <div className="icn-img">
                  <img src={constructionIcon} alt="Construction"  style={{ height: "30px" }} />
                </div>
                <p className="icn-p">Construction</p>
              </div>
            </Col>
          </Row>

          <Row className="g-3">
            <Col>
              <div className="icn-div">
                <div className="icn-img">
                  <img src={oilRigIcon} alt="Oil & Gas"  style={{ height: "30px" }} />
                </div>
                <p className="icn-p">Oil & Gas</p>
              </div>
            </Col>

            <Col>
              <div className="icn-div">
                <div className="icn-img">
                  <img src={healthcareIcon} alt="Medical & Health"  style={{ height: "30px" }} />
                </div>
                <p className="icn-p">Medical & Health</p>
              </div>
            </Col>

            <Col>
              <div className="icn-div">
                <div className="icn-img">
                  <img src={serviceIcon} alt="IT & Service"  style={{ height: "30px" }} />
                </div>
                <p className="icn-p">IT & Service</p>
              </div>
            </Col>

            <Col>
              <div className="icn-div">
                <div className="icn-img">
                  <img src={professionalIcon} alt="Professional Services"  style={{ height: "30px" }} />
                </div>
                <p className="icn-p">Professional Services</p>
              </div>
            </Col>
          </Row>
        </div>

        <div className="common">
          <div className="comm-head">
            <h4 className="comm-h4">Common Challenges We Resolve:</h4>
          </div>

          <Row className="g-4 pad-t">
            <Col xs={12}>
              <div className="comm-box">
                <div className="comm-icon">
                  <i className="bi bi-clock-history"></i>
                </div>
                <p className="icn-p">Outdated Processes: Struggling with manual payroll via Excel sheets or rigid legacy tools.</p>
              </div>
            </Col>

            <Col xs={12}>
              <div className="comm-box">
                <div className="comm-icon">
                  <i className="bi bi-stack"></i>
                </div>
                <p className="icn-p">Disconnected Systems: Operating with fragmented HR/payroll data from time tracking, claims, and leave systems.</p>
              </div>
            </Col>

            <Col xs={12}>
              <div className="comm-box">
                <div className="comm-icon">
                  <i className="bi bi-exclamation-circle"></i>
                </div>
                <p className="icn-p">Accuracy & Morale Hits: Frequent errors in overtime handling and multi-shift pay calculations leading to employee dissatisfaction.</p>
              </div>
            </Col>

            <Col xs={12}>
              <div className="comm-box">
                <div className="comm-icon">
                  <i className="bi bi-shield"></i>
                </div>
                <p className="icn-p">Compliance Anxiety: Constant worry over LHDN, EPF, SOCSO, and EIS statutory compliance and potential penalties.</p>
              </div>
            </Col>

            <Col xs={12}>
              <div className="comm-box">
                <div className="comm-icon">
                  <i className="bi bi-person-plus-fill"></i>
                </div>
                <p className="icn-p">Talent Drain: High employee attrition rates due to recurring payroll delays or inaccuracies.</p>
              </div>
            </Col>
          </Row>

          <p className="para">
            <i>“If your business is scaling — and payroll feels increasingly complex, this is built for you.”</i>
          </p>
        </div>

        <div className="d-flex justify-content-center align-items-center" style={{ marginTop: "5rem" }}>
          <button type="button" className=" btn-secondary btn-talk" style={{ marginTop: "28px" }}>Talk to US</button>
        </div>
      </div>
    </section>
  );
}

export default GrowthLeader;
