import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import "../../assets/css/CultureSection.css"
import culImg from '../../assets/images/cul-img.png';
function CultureSection() {
    return (
        <section className="culture-section">
            <div className='auto-container'>
                <Row className="align-items-center">

                    <Col xl={6} lg={6}>
                        <div className="cul-head">
                            <h4 className="cul-h4">Our Culture & Values</h4>
                            <p className="cul-para">
                                Our culture reflects how we deliver for clients and how we work with each other.
                            </p>
                        </div>

                        <div className="cul-content">
                            <ul>
                                <li className="cul-li">
                                    <p className="cul-li-para">
                                        Efficiency & Excellence: Every process we manage is held to the highest standards.
                                    </p>
                                </li>
                                <li className="cul-li">
                                    <p className="cul-li-para">
                                        Collaboration: We succeed together—clients, colleagues, and partners.
                                    </p>
                                </li>
                                <li className="cul-li">
                                    <p className="cul-li-para">
                                        Integrity & Compliance: Trust and transparency are at the core of everything we do.
                                    </p>
                                </li>
                                <li className="cul-li">
                                    <p className="cul-li-para">
                                        Leadership Mindset: Every role, at every level, is designed to create impact.
                                    </p>
                                </li>
                            </ul>

                            <p className="cul-text">
                                We foster an environment where professionals are empowered to lead change, challenge the status quo, and create long-term value.
                            </p>
                        </div>
                    </Col>


                    <Col xl={6} lg={6} md={12}>
                        <div className="cul-img-section" style={{ height: '300px' }} >
                            <img src={culImg} className="img-fluid" alt="Culture and Values" />
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default CultureSection;
