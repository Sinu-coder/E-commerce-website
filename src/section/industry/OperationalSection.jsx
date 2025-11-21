import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../assets/css/OperationalSection.css";

function OperationalSection() {
  return (
    <section className="operational-section">
      <div className="auto-container">
        <Row className="justify-content-center text-center">
          <Col md={12} lg={10} xl={10}>
            <div className="opp-head text-center">
              <h2 className="opp-h2">Industries We Serve</h2>
            </div>

            <div className="opp-big-head text-center">
              <h3 className="opp-h3 pos-rel">Tailored Operational Excellence</h3>
            </div>

            <div className="opp-para-sec text-center">
              <p className="opp-para">
                We don't offer one-size-fits-all solutions. At Eximius Next, we have invested in
                understanding the unique pressures and process requirements of your industry.
              </p>
              <p className="opp-para">
                We build Next Gen Processes, Built Today by transforming industry-specific operational
                burdens into strategic assets, delivering measurable ROI and a distinct competitive
                advantage for mid-market leaders.
              </p>
              <p className="opp-para">
                Below is a look at the specific problems we solve and how our intelligent BPM solutions are
                applied within your world.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default OperationalSection;
