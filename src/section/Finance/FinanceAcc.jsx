import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "../../assets/css/FinanceAcc.css";
import P2PImage from "../../assets/images/P2P.png";
import O2CImage from "../../assets/images/p2 cash.png";
import R2RImage from "../../assets/images/record 2 report.png";
import FPAImage from "../../assets/images/pi-2.png";

function FinanceAcc() {
  return (
    <section className="market-businesses-section">
      <div className="auto-container">
        <h1 className="business-h1 pad-b">
          Transform finance into a data-driven engine for growth.
        </h1>

        
        <Row style={{ paddingBottom: "60px" }}>
          <Col lg={6}>
            <div className="market-img-sec">
              <img src={P2PImage} alt="P2P" className="img-fluid" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="market-content">
              <div className="mar-head">
                <h2 className="mar-h2">Procure-to-Pay (P2P)</h2>
                <p className="mar-p">
                  We optimize your Procure-to-Pay process to ensure efficient, compliant, and
                  cost-effective purchasing. Automation handles high-volume invoice capture and initial
                  processing, reducing manual errors and speeding up cycle times. Our dedicated Eximius
                  team then actively manages the entire P2P process, overseeing accounts payable, complex
                  vendor relationships, and ensuring secure, timely payment execution, with expert
                  handling of exceptions..
                </p>
              </div>
              <div className="mar-para-content">
                <ul className="mar-ul">
                  <li>
                    <p className="mar-para">
                      Automation: High-volume invoice capture, 3-way matching, and initial validations
                    </p>
                  </li>
                  <li>
                    <p className="mar-para">
                      Eximius Role: Manages AP, vendor coordination, and timely payments—even complex exceptions
                    </p>
                  </li>
                  <li>
                    <p className="mar-para">
                      Why it matters: Cut processing time, improve vendor satisfaction
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>

        
        <Row style={{ paddingBottom: "60px" }}>
          <Col lg={6}>
            <div className="market-content">
              <div className="mar-head">
                <h2 className="mar-h2">Order-to-Cash (O2C)</h2>
                <p className="mar-para">
                  We accelerate your Order-to-Cash cycle for improved revenue recognition and cash flow. Automated order processing and billing streamline the initiation of the revenue cycle. Our Eximius experts then take full ownership of the O2C workflow, managing credit assessment, optimizing accounts receivable, and driving proactive collections for consistent cash flow..
                </p>
              </div>
              <div className="mar-para-content">
                <ul className="mar-ul">
                  <li>
                    <p className="mar-para">Automation: Streamlines billing, credit checks, and routine collections</p>
                  </li>
                  <li>
                    <p className="mar-para">Eximius Role: Owns AR performance, drives collections, improves cash flow</p>
                  </li>
                  <li>
                    <p className="mar-para">Why it matters: Shorter DSO, stronger revenue recognition</p>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="market-img-sec">
              <img src={O2CImage} alt="O2C" className="img-fluid" />
            </div>
          </Col>
        </Row>

        
        <Row style={{ paddingBottom: "60px" }}>
          <Col lg={6}>
            <div className="market-img-sec">
              <img src={R2RImage} alt="R2R" className="img-fluid" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="market-content">
              <div className="mar-head">
                <h2 className="mar-h2">Record-to-Report (R2R)</h2>
                <p className="mar-p">
                  We ensure precise and timely financial reporting for robust compliance and strategic insights. Automated processes manage routine general ledger accounting and basic bank/account reconciliations, ensuring foundational accuracy. Eximius's certified accountants meticulously govern the entire Record-to-Report process, handling complex reconciliations, accurate fixed asset accounting, and the precise preparation of all financial statements with integrated controls.
                </p>
              </div>
              <div className="mar-para-content">
                <ul className="mar-ul">
                  <li>
                    <p className="mar-para">Automation: Handles ledger entries and bank reconciliations</p>
                  </li>
                  <li>
                    <p className="mar-para">Eximius Role: Performs complex reconciliations, asset accounting, and final reporting</p>
                  </li>
                  <li>
                    <p className="mar-para">Why it matters: Fast, audit-ready close cycles</p>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>

        
        <Row style={{ paddingBottom: "60px" }}>
          <Col lg={6}>
            <div className="market-content">
              <div className="mar-head">
                <h2 className="mar-h2">FP&A</h2>
                <p className="mar-para">
                  We enhance your FP&A capabilities to provide forward-looking insights for strategic decision-making. Leveraging tech-driven platforms for rapid budgeting and forecasting, our Eximius FP&A strategists lead your financial analysis efforts, conducting in-depth variance analysis and providing targeted management reporting for truly actionable insights..
                </p>
              </div>
              <div className="mar-para-content">
                <ul className="mar-ul">
                  <li>
                    <p className="mar-para">Automation: Forecast modeling, dashboards, and variance auto-flags</p>
                  </li>
                  <li>
                    <p className="mar-para">Eximius Role: Delivers in-depth analysis and actionable insights</p>
                  </li>
                  <li>
                    <p className="mar-para">Why it matters: Strategic clarity for leadership</p>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="market-img-sec">
              <img src={FPAImage} alt="FP&A" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default FinanceAcc;
