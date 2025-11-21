import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../assets/css/HRSection.css"

function HRSection () {
  return (
    <section className="HR2000 pos-rel">
      <div className="auto-container">
        
        
        <div className="hr-head text-center" style={{ color: "white", paddingBottom: "30px" }}>
          <h1 className="hr-h1">The Eximius Next + HR2000 iPayroll Difference</h1>
          <h5>Tech-Driven. Human-Perfect.</h5>
        </div>

        
        <div className="hr-card">
          <h3 style={{ color: "white", paddingBottom: "20px" }}>Eximius Expertise</h3>

          <Row className="g-4">
            <Col lg={4} md={6}  className="wd-100">
              <div className="hr-box">
                <i className="bi bi-check-circle-fill"></i>
                <h4 className="hr-box-h4">Payroll with Precision &</h4>
                <p className="hr-box-p">8+ years in Malaysian payroll & compliance</p>
              </div>
            </Col>

            <Col lg={4} md={6} className="wd-100">
              <div className="hr-box">
                <i className="bi bi-people-fill"></i>
                <h4 className="hr-box-h4">Dedicated Payroll Team</h4>
                <p className="hr-box-p">
                  Handling complex calculations for shifts, bonuses, OT, and monthly PCB,
                  EPF/SOCSO, EA/Form E — done right every time
                </p>
              </div>
            </Col>

            <Col lg={4} md={6} className="wd-100">
              <div className="hr-box">
                <i className="bi bi-shield-lock-fill"></i>
                <h4 className="hr-box-h4">Reliable & Audit-Ready</h4>
                <p className="hr-box-p">
                  Human-in-the-loop oversight ensures 100% audit readiness. No missed
                  filings or penalties and quick resolution of payroll queries/issues.
                  Accurate, on-time payroll delivery – trusted by growing mid-sized companies.
                </p>
              </div>
            </Col>
          </Row>
        </div>

        
        <div className="hr-card">
          <h3 style={{ color: "white", padding: "40px 0px" }}>HR2000 iPayroll Platform</h3>

          <Row className="g-4">
            <Col lg={4} md={6} className="wd-100">
              <div className="hr-box">
                <i className="bi bi-award-fill"></i>
                <h4 className="hr-box-h4">Malaysia’s Trusted Payroll Engine</h4>
                <ul>
                  <li><p className="hr-box-p">25+ years in Malaysia | 3,500+ active clients</p></li>
                  <li><p className="hr-box-p">
                    Cloud platform – Malaysian-compliant, ISO & SOC2-certified data centers
                  </p></li>
                </ul>
              </div>
            </Col>

            <Col lg={4} md={6} className="wd-100">
              <div className="hr-box">
                <i className="bi bi-tools"></i>
                <h4 className="hr-box-h4">Convenient Tools</h4>
                <ul>
                  <li><p className="hr-box-p">Self-service portals + mobile app</p></li>
                  <li><p className="hr-box-p">Auto-updates with LHDN, EPF, SOCSO, EIS changes</p></li>
                  <li><p className="hr-box-p">e-Payroll module</p></li>
                </ul>
              </div>
            </Col>

            <Col lg={4} md={6} className="wd-100">
              <div className="hr-box">
                <i className="bi bi-person-badge-fill"></i>
                <h4 className="hr-box-h4">HR & Performance Modules</h4>
                <ul>
                  <li><p className="hr-box-p">e-Leave, e-TMS, e-Claims modules</p></li>
                  <li><p className="hr-box-p">e-HR module</p></li>
                  <li><p className="hr-box-p">e-Appraisal module</p></li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>

      </div>
    </section>
  );
};

export default HRSection;
