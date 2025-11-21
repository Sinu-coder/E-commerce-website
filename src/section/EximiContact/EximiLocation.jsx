import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../assets/css/EximiLocation.css"

function EximiLocation ()  {
  return (
    <section className="location-section-1">
      <div className="auto-container">
        <Row className="justify-content-center g-5 row-wd mar-0 "     style={{ width: "100%" }}>
          
          
          <Col md={6} lg={4} >
            <div className="loc-div-1 text-center d-flex justify-content-center align-items-center">
              <div className="loc-box-1">
                <div className="loc-icon-1">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="loc-content">
                  <p className="loc-para-1">Address Line</p>
                  <p className="loc-para-1">+6 017 276 8628</p>
                </div>
              </div>
            </div>
          </Col>

          
          <Col md={6} lg={4}>
            <div className="loc-div-1 text-center d-flex justify-content-center align-items-center">
              <div className="loc-box-1">
                <div className="loc-icon-1">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="loc-content-1">
                  <p className="loc-para-1">Mail Address</p>
                  <p className="loc-para-1">Contact@eximiusnext.com</p>
                </div>
              </div>
            </div>
          </Col>

          
          <Col md={6} lg={4} className="wd-100">
            <div className="loc-div-1 text-center d-flex justify-content-center align-items-center">
              <div className="loc-box-1">
                <div className="loc-icon-1">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="loc-content-1">
                  <p className="loc-para-1">Malaysia Address</p>
                  <p className="loc-para-1">
                    D-16-18, Millerz Square, Jalan Klang Lama, 58000, Kuala Lumpur, Malaysia
                  </p>
                </div>
              </div>
            </div>
          </Col>

          
          <Col md={6} lg={8}className="wd-100">
            <div className="loc-div-l-1 text-center d-flex justify-content-center align-items-center">
              <div className="loc-box-1">
                <div className="loc-icon-1">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div className="loc-content-1">
                  <p className="loc-para-1">India Address</p>
                  <p className="loc-para-1">
                    Gurugram: 791, Udyog Vihar Phase 5, Gurugram, India 122016 <br /><br />
                    Punjab: 616 – Industrial area B, Miller Ganj, Ludhiana, Punjab, India, 141003
                  </p>
                </div>
              </div>
            </div>
          </Col>

        </Row>
      </div>
    </section>
  );
};

export default EximiLocation;
