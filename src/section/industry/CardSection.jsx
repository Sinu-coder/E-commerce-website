import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../assets/css/CardSection.css";
function CardSection() {
  return (
    <section className="card-section-c1">
      <div className="auto-container">
        <Row className="row-gap-gutter">

          
          <Col xs={12} sm={6} md={6} lg={4} xl={3} className="pad-b">
            <div className="card-div-cv">
              <div className="card-icon-ci">
                <i className="bi bi-truck"></i>
              </div>
              <div className="card-content-cc">
                <h5 className="card-h5-ch">
                  Logistics & <br /> Warehousing
                </h5>
                <p className="card-para-cp">
                  Streamlined freight processes, data support, and inventory accuracy across networks.
                </p>
              </div>
            </div>
          </Col>

          
          <Col xs={12} sm={6} md={6} lg={4} xl={3} className="pad-b">
            <div className="card-div-cv">
              <div className="card-icon-ci">
                <i className="bi bi-paint-bucket"></i>
              </div>
              <div className="card-content-cc">
                <h5 className="card-h5-ch">Oil & Gas</h5>
                <p className="card-para-cp">
                  Operational optimization, compliance support, and supply chain efficiency improvement.
                </p>
              </div>
            </div>
          </Col>

          
          <Col xs={12} sm={6} md={6} lg={4} xl={3} className="pad-b">
            <div className="card-div-cv">
              <div className="card-icon-ci">
                <i className="bi bi-airplane"></i>
              </div>
              <div className="card-content-cc">
                <h5 className="card-h5-ch">Travel & Hospitality</h5>
                <p className="card-para-cp">
                  Reservation support, guest experience enhancement, and backend process handling.
                </p>
              </div>
            </div>
          </Col>

          
          <Col xs={12} sm={6} md={6} lg={4} xl={3} className="pad-b">
            <div className="card-div-cv">
              <div className="card-icon-ci">
                <i className="bi bi-heart-pulse"></i>
              </div>
              <div className="card-content-cc">
                <h5 className="card-h5-ch">
                  Medical & Healthcare <br /> (Non-Clinical)
                </h5>
                <p className="card-para-cp">
                  Support in billing, data entry, patient coordination, and compliance workflows.
                </p>
              </div>
            </div>
          </Col>

          
          <Col xs={12} sm={6} md={6} lg={4} xl={3} className="pad-b">
            <div className="card-div-cv">
              <div className="card-icon-ci">
                <i className="bi bi-shop-window"></i>
              </div>
              <div className="card-content-cc">
                <h5 className="card-h5-ch">Retail & Wholesale</h5>
                <p className="card-para-ch">
                  Inventory tracking, customer support, and order management for fast operations.
                </p>
              </div>
            </div>
          </Col>

          
          <Col xs={12} sm={6} md={6} lg={4} xl={3} className="pad-b">
            <div className="card-div-cv">
              <div className="card-icon-ci">
                <i className="bi bi-globe-central-south-asia"></i>
              </div>
              <div className="card-content-cv">
                <h5 className="card-h5-ch">E-commerce</h5>
                <p className="card-para-cp">
                  Order fulfillment, return handling, and real-time customer communication support.
                </p>
              </div>
            </div>
          </Col>

          
          <Col xs={12} sm={6} md={6} lg={4} xl={3} className="pad-b">
            <div className="card-div-cv">
              <div className="card-icon-ci">
                <i className="bi bi-hospital-fill"></i>
              </div>
              <div className="card-content-cc">
                <h5 className="card-h5-ch">
                  Construction & <br /> Manufacture
                </h5>
                <p className="card-para-cp">
                  Project documentation, supplier coordination, and on-site administrative support.
                </p>
              </div>
            </div>
          </Col>

          
          <Col xs={12} sm={6} md={6} lg={4} xl={3} className="pad-b">
            <div className="card-div-cv">
              <div className="card-icon-ci">
                <i className="bi bi-buildings"></i>
              </div>
              <div className="card-content-cc">
                <h5 className="card-h5-ch">Manufacturing</h5>
                <p className="card-para-cp">
                  Production planning, procurement support, and performance reporting systems.
                </p>
              </div>
            </div>
          </Col>

          
          <Col xs={12} sm={6} md={6} lg={4} xl={3}>
            <div className="card-div-cv">
              <div className="card-icon-ci">
                <i className="bi bi-truck"></i>
              </div>
              <div className="card-content-cc">
                <h5 className="card-h5-ch">Professional Service</h5>
                <p className="card-para-cp">
                  Process automation, document handling, and scheduling support for consultants.
                </p>
              </div>
            </div>
          </Col>

        </Row>
      </div>
    </section>
  );
}

export default CardSection;
