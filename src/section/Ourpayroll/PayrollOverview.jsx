import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import   cash from "../../assets/images/cash-pay.png"
import "../../assets/css/PayrollOverview.css"

function PayrollOverview() {
  return (
    <section className="market-businesses-section">
      <div className="auto-container">
        <Row className="g-4" style={{ paddingBottom: "60px" }}>
          <Col lg={6}>
            <div className="market-img-sec">
              <img
                src={cash}
                alt=""
                className="img-fluid"
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="market-content">
              <div className="mar-head">
                <h2 className="mar-h2">Overview Malaysia Payroll</h2>
                <p className="mar-p">
                  As a leader in Malaysia, you know payroll impacts more than just
                  finances. It’s the bedrock of employee trust, demanding impeccable
                  compliance and absolute timeliness.
                </p>
              </div>
              <div className="mar-para-content">
                <p className="mar-para">
                  Eximius Next delivers the payroll solutions that transform these
                  critical demands into your competitive advantage.
                </p>
              </div>
              <button type="button" className=" btn-secondary btn-talk">
                Talk to US
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default PayrollOverview;
