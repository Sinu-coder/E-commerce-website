import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../assets/css/CareerCardSection.css"; 

function CareerCardSection() {
  return (
    <section className="card-section-cc-cd1">
      <div className="auto-container">
        <div className="card-head-cd-h text-center">
          <h3 className="card-h3-cd-h3">Career Tracks at Eximius Next</h3>
          <p className="card-para-cd-p">
            We welcome professionals who bring both expertise and vision. Our key career tracks include:
          </p>
        </div>

        <Row className="row-gap-gutter">
          <Col xs={12} sm={6} md={6} lg={4} xl={3} className="pad-b">
            <div className="card-div-cd-v">
              <div className="card-icon-cd-i">
                <i className="bi bi-buildings-fill"></i>
              </div>
              <div className="card-content-cd-cc">
                <h5 className="card-h5-cd-h5">
                  Finance & Accounting
                  <br />
                  Leadership
                </h5>
                <p className="card-para-cd-p">
                  Own and transform AR, AP, R2R, and FP&A processes for global clients.
                </p>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={6} md={6} lg={4} xl={3} className="pad-b">
            <div className="card-div-cd-v">
              <div className="card-icon-cd-i">
                <i className="bi bi-coin"></i>
              </div>
              <div className="card-content-cd-cc">
                <h5 className="card-h5-cd-h5">
                  Operations & Process
                  <br />
                  Management
                </h5>
                <p className="card-para-cd-p">
                  Drive process excellence, governance, and shared service delivery models.
                </p>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={6} md={6} lg={4} xl={3} className="pad-b">
            <div className="card-div-cd-v">
              <div className="card-icon-cd-i">
                <i className="bi bi-gear"></i>
              </div>
              <div className="card-content-cd-cc">
                <h5 className="card-h5-cd-h5">Technology & Data</h5>
                <p className="card-para-cd-p">
                  Enable clients with ERP, BPM platforms, and advanced analytics for smarter decisions.
                </p>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={6} md={6} lg={4} xl={3} className="pad-b">
            <div className="card-div-cd-v">
              <div className="card-icon-cd-i">
                <i className="bi bi-graph-up-arrow"></i>
              </div>
              <div className="card-content-cd-cc">
                <h5 className="card-h5-cd-h5">
                  People & Compliance
                  <br />
                  Function
                </h5>
                <p className="card-para-cd-p">
                  Lead payroll, HR services, and compliance frameworks that keep businesses future-ready.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default CareerCardSection;
