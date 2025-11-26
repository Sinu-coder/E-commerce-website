import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import comMan from "../assets/images/com-man.png";
import "../assets/css/Manexperiance.css"
function Manexperiance() {
  return (
    <section className='difference bg-light fix section-padding'>
    <div className='auto-container'>
        <Row className='g-4 align-items-center'>
            <Col lg={6}>
                <div className='pos-rel'>
                <div className='diff-img'>
                    <img src={comMan} alt='Man' className='img-fliud'/>
                </div>
                <div className="about-counter2">
                            <div className="count-box counted">
                                <h2 className="text-white">
                                    <span className="count-text text-white">25</span>
                                    +
                                </h2>
                                <p className="text-white">"Year of"
                                    <br/>
                                    "Experince"
                                </p>
                            </div>
                        </div>
                        </div>
            </Col>
        <Col lg={6}>
            <div className="diff-text">
                            <div className="diff-h mb-0">
                                <h2 className="diff-h2">The Eximius Difference</h2>
                            </div>
                            <h5 className="diff-h5">Intelligent Operations for Ambitious Companies</h5>
                            <p className="about-text">At 
                                <strong>Eximius Next</strong>
                                 we don’t just envision the future of business operations – we build it.
                            </p>
                            <p className="about-text">We deliver scalable Business Process Management (BPM) solutions
                                powered by advanced automation, seamlessly integrated with expert human intelligence.
                            </p>
                            <p className="about-text">For ambitious mid-sized companies, we remove operational hurdles so
                                your leadership can focus on innovation, strategy, and growth.</p>
                            <p className="about-text">Our intelligent optimization goes beyond traditional outsourcing,
                                driving:</p>
                            <div className="about-list-type">
                                <ul>
                                    <li>Tangible efficiency gains</li>
                                    <li>Compliance assurance</li>
                                    <li>Cost reductions</li>
                                </ul>
                                <ul>
                                    <li>Continuous improvement</li>
                                    <li>Sustained business value</li>
                                </ul>
                            </div>
                            <p className="about-text">With solutions designed to scale as you grow, Eximius Next becomes a
                                true extension of your team—managing the journey to operational excellence.</p>
            </div>
              <button type="button" className="btn-style-one btn-lg md-btn">Know More</button>
        </Col>
        </Row>
        <Row className="justify-content-center align-items-center g-4 mt-5">
          <Col xl={4} lg={6} md={6} xs={12}>
            <div className="line">
                  <div className="line-div">
        <h2 className="line-h2">
                  <span className="line-h2">20</span>+
                
            </h2>
                    <p className="line-p">
                  Years of experience
                  <br />
                  in BPM & SSO
                   </p>
              </div>
                 </div>
          </Col>

          <Col xl={4} lg={6} md={6} xs={12}>
            <div className="line">
              <div className="line-div">
                <h2 className="line-h2">
                  <span className="line-h2">10</span>+
                </h2>
                <p className="line-p">
                  Industries served
                  <br />
                  globally
                </p>
              </div>
            </div>
          </Col>

                 <Col xl={4} lg={6} md={6} xs={12}>
            <div className="line">
                   <div className="line-div">
                <h2 className="line-h2">
        <span className="line-h2">&gt;90%</span>
                </h2>
        <p className="line-p">Regulatory compliances achieved</p>
              </div>
              </div>
          </Col>
        </Row>
    </div>
    </section>
  )
}

export default Manexperiance
