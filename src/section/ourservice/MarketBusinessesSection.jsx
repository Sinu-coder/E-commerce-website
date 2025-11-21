import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import marketImg from "../../assets/images/market.png";
import servicesHomeImg from "../../assets/images/services-home2.png";
import "../../assets/css/MarketBusinessesSection.css"

const MarketBusinessesSection = () => {
  return (
    <section className="market-businesses-section">
      <div className="auto-container">
        
        <Row className="g-4" style={{ paddingBottom: "60px" }}>
          <Col lg={6}>
            <div className="market-img-sec">
              <img src={marketImg} alt="Market" className="img-fluid bs-img" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="market-content">
              <div className="mar-head">
                <h2 className="mar-h2">Mid-Market Businesses Face a Dilemma</h2>
                <p className="mar-p">
                  Too large to operate manually. Too lean for bloated enterprise
                  solutions.
                </p>
              </div>
              <div className="mar-para-content">
                <h5 className="mar-h5">Eximius Next bridges the gap.</h5>
                <p className="mar-para">
                  We help mid-sized companies unlock operational efficiency, not
                  just for cost control—but to build a smarter, scalable
                  foundation for long-term growth.
                </p>
                <p className="mar-para">
                  Reduced DSO by 28% in 4 months. Eliminated 3,000+ AP invoice
                  backlog. Doubled order fulfillment speed.
                </p>
              </div>
            </div>
          </Col>
        </Row>

        
        <Row className="g-4">
          <Col lg={6}>
            <div className="market-content">
              <div className="mar-head">
                <h2 className="mar-h2">
                  Powering Efficiency and Growth for Your Industry
                </h2>
                <p className="mar-p">
                  At Eximius Next, we go Beyond Outsourcing. We become your engine
                  for strategic growth.
                </p>
                <p className="mar-para">
                  Our tailored Business Process Management (BPM) solutions turn your
                  non-core operations into high-performance levers, delivering
                  measurable ROI and long-term competitive advantage.
                </p>
              </div>
              <div className="mar-para-content">
                <h5 className="mar-h5">We are Tech-First with Human-in-Loop. That means:</h5>
                <ul className="mar-ul">
                  <li>
                    <p className="mar-para">
                      Automation handles routine, repetitive tasks
                    </p>
                  </li>
                  <li>
                    <p className="mar-para">
                      Eximius experts handle the strategic, complex, and exception
                      cases
                    </p>
                  </li>
                  <li>
                    <p className="mar-para">
                      You get scalable precision, operational clarity, and outcomes
                      that matter
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="market-img-sec">
              <img src={servicesHomeImg} alt="Services Home" fluid />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default MarketBusinessesSection;
