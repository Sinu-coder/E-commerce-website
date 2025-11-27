import React from 'react'
import { Container,Row,Col } from 'react-bootstrap' 
import "../assets/css/FooterSection.css"
import logo from "../assets/images/next.png"

function FooterSection() {
 return (
    <section className="footer-section">
      <div className="auto-container">
        <div className="footer-div">
          <Row className="justify-content-center footer-container">
            <Col xl={3} lg={3} md={6} sm={6} className="mt-5">
              <div className="foo-section">
                <div className="foo-logo">
                  <a href="#">
                    <img src={logo} className="img-fluid" alt="Logo" width="270"/>
                  </a>
                </div>
                <div className="foo-icon mt-4">
                  <h3 className="foo-h3">Follow Us:</h3>
                  <div className="foo-icon-icon mt-4">
                    <a href="#">
                      <i className="bi bi-facebook social-media"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-linkedin social-media"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram social-media"></i>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={2} lg={3} md={6} sm={6} className="mt-5 offset-lg-1">
              <div className="f1-div">
                <h3 className="f-h3">Company</h3>
                <ul className="f1-ul">
                  <li className="pb-4">
                    <a href="#">About Eximius</a>
                  </li>
                  <li className="pb-4">
                    <a href="#">Service</a>
                  </li>
                  <li className="pb-4">
                    <a href="#">Industries</a>
                  </li>
                  <li className="pb-4">
                    <a href="#">Contact us</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xl={2} lg={3} md={6} sm={6} className="mt-5">
              <div className="f1-div">
                <h3 className="f-h3">Quick Links</h3>
                <ul className="f1-ul">
                  <li className="pb-4">
                    <a href="#">Career</a>
                  </li>
                  <li className="pb-4">
                    <a href="#">Blog</a>
                  </li>
                  <li className="pb-4">
                    <a href="#">Privacy & Policy</a>
                  </li>
                  <li className="pb-4">
                    <a href="#">Terms & Condition</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xl={4} lg={3} md={6} sm={6} className="mt-5">
              <div className="f1-div">
                <h3 className="f-h3">Contact Us</h3>
                <ul className="f1-ul">
                  <li className="pb-4">
                    <a href="#">
                      <i className="bi bi-telephone social-icon"></i> +6 017 276
                      8628
                    </a>
                  </li>
                  <li className="pb-4  align-items-center">
                    <i className="bi bi-envelope social-icon"></i>
                    <span className="message-icon">contact@eximiusnext.com</span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={12}>
              <div className="location-section text-center">
                
                <div className="loc-div">
                  <div className="loc-box">
                    <h3 className="loc-h3">Malaysia Address</h3>
                    <div className="loc-about d-flex align-items-center flex-col mt-2" style={{ gap: "10px" }}>
                      <i className="bi bi-geo-alt"></i>
                      <p className="loc-para mb-0">
                        D-16-18, Millerz Square, Jalan Klang Lama, 58000, Kuala Lumpur, Malaysia
                      </p>
                    </div>
                  </div>
                </div>
                <div className="loc-div">
                  <div className="loc-box">
                    <h3 className="loc-h3">India Address</h3>
                    <div className="loc-about d-flex align-items-center flex-col mt-2" style={{ gap: "10px" }}>
                      <i className="bi bi-geo-alt"></i>
                      <p className="loc-para mb-0">
                        Gurugram: 791, Udyog Vihar Phase 5, <br />
                        Gurugram, India 122016
                      </p>
                    </div>
                  </div>
                </div>
                <div className="loc-div">
                  <div className="loc-box">
                    <h3 className="loc-h3">India Address</h3>
                    <div className="loc-about d-flex align-items-center flex-col mt-2" style={{ gap: "10px" }}>
                      <i className="bi bi-geo-alt"></i>
                      <p className="loc-para mb-0">
                        Punjab: 616 – Industrial area B, Miller Ganj, Ludhiana, Punjab, India, 141003
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className="footer-last-section text-center mt-4">
            <h5 className="last-sec-h5">
              Copyright © 2025 Eximius Ventures. All Rights Reserved
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
  
}

export default FooterSection
