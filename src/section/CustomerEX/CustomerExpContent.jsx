import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "../../assets/css/CustomerExpContent.css"
import EXp1 from "../../assets/images/cal2.png"
import EXp2 from "../../assets/images/call1.png"
import EXp3 from "../../assets/images/worker.png"
import EXp4 from "../../assets/images/apps.png"

function CustomerExpContent() {
  return (
    <section className="market-businesses-section">
      <div className="auto-container">
        <h1 className="business-h1 pad-b">Turn support into loyalty.</h1>
        <p className="mar-para">
          Build lasting customer loyalty with responsive, empathetic, and efficient support
          services that act as a true extension of your brand.
        </p>

        
        <Row style={{ paddingBottom: "60px" }}>
          <Col lg={6}>
            <div className="market-img-sec">
              <img src={EXp1} alt="" className="img-fluid" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="market-content">
              <div className="mar-head">
                <h2 className="mar-h2">Omni-Channel Service</h2>
                <p className="mar-p">
                  We build seamless and responsive customer interactions across all channels.
                  AI-powered chatbots and automated routing efficiently manage initial customer inquiries
                  across voice, email, live chat, and social media. Eximius's human agents then seamlessly
                  orchestrate the full omni-channel customer service experience, providing empathetic
                  support for complex issues and ensuring a smooth customer journey.
                </p>
              </div>
              <div className="mar-para-content">
                <ul className="mar-ul">
                  <li>
                    <p className="mar-para">Automation: Chatbots, email routing, knowledge base responses</p>
                  </li>
                  <li>
                    <p className="mar-para">Eximius Role: Live agents handle escalations and complex service cases</p>
                  </li>
                  <li>
                    <p className="mar-para">Why it matters: Boost CSAT, reduce churn</p>
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
                <h2 className="mar-h2">Technical Support (L1/L2)</h2>
                <p className="mar-para">
                  We provide efficient L1/L2 technical helpdesk services. Automated diagnostics and knowledge base tools handle initial requests and offer self-service options. Our Eximius L1/L2 helpdesk professionals oversee the complete technical support process, delivering in-depth troubleshooting and effective problem resolution for your products and services.
                </p>
              </div>
              <div className="mar-para-content">
                <ul className="mar-ul">
                  <li>
                    <p className="mar-para">Automation: Self-serve diagnostics and ticket triage</p>
                  </li>
                  <li>
                    <p className="mar-para">Eximius Role: Troubleshooting, resolution, documentation</p>
                  </li>
                  <li>
                    <p className="mar-para">Why it matters: Better product experience, less downtime</p>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="market-img-sec">
              <img src={EXp2} alt="" className="img-fluid" />
            </div>
          </Col>
        </Row>

        
        <Row style={{ paddingBottom: "60px" }}>
          <Col lg={6}>
            <div className="market-img-sec">
              <img src={EXp3} alt="" className="img-fluid" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="market-content">
              <div className="mar-head">
                <h2 className="mar-h2">Order Management & Fulfillment</h2>
                <p className="mar-p">
                  We streamline your order processing and post-sales support for enhanced customer satisfaction.
                  Automation streamlines order entry and real-time tracking updates, minimizing manual effort.
                  Eximius's dedicated teams coordinate the entire order management and fulfillment support process, including efficient returns (RMA) processing and comprehensive post-sales support..
                </p>
              </div>
              <div className="mar-para-content">
                <ul className="mar-ul">
                  <li>
                    <p className="mar-para">Automation: Order entries and tracking updates</p>
                  </li>
                  <li>
                    <p className="mar-para">Eximius Role: Post-sales support, RMA, logistics coordination</p>
                  </li>
                  <li>
                    <p className="mar-para">Why it matters: Happier customers, lower returns</p>
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
                <h2 className="mar-h2">Customer Lifecycle Management</h2>
                <p className="mar-para">
                  We strategically manage customer interactions from onboarding to retention. Automated triggers facilitate onboarding and initial engagement, ensuring timely outreach. Our Eximius experts strategically direct comprehensive customer lifecycle programs, driving retention efforts and systematic feedback collection to build stronger relationships.
                </p>
              </div>
              <div className="mar-para-content">
                <ul className="mar-ul">
                  <li>
                    <p className="mar-para">Automation: Triggers for onboarding, NPS surveys, upsell alerts</p>
                  </li>
                  <li>
                    <p className="mar-para">Eximius Role: Direct lifecycle programs, retention, feedback</p>
                  </li>
                  <li>
                    <p className="mar-para">Why it matters: Higher LTV, stronger brand connection</p>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="market-img-sec">
              <img src={EXp4} alt="" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default CustomerExpContent;
