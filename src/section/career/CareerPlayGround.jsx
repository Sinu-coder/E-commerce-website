import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import playimg from "../../assets/images/career.map.png"
import playimg2 from "../../assets/images/play.png"
import "../../assets/css/CareerPlayGround.css"
function CareerPlayGround() {
  return (
    <section className="play-ground">
      <div className="play-background bg-cover" style={{ backgroundImage: `url(${playimg})` }}></div>
      <div className="auto-container">
        <Row className="g-4 justify-content-center align-items-center g-p" style={{ gap: "60px" }}>
          <Col xs={12} md={6} lg={6} xl={5} className="width-work-play">
            <div className="play-img-section">
              <div className="play-img">
                <img src={playimg2} alt="Play" style={{ width: "100%", height: "700px" }}/>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} lg={6} xl={6} className="width-work-play">
            <div className="play-content-section">
              <div className="play-content">
                <div className="play-title">
                  <h4 className="play-h4">Why Join Eximius Next?</h4>
                  <p className="play-para">
                    Eximius Next is more than a workplace—it’s a growth platform for leaders and
                    professionals who want to make an impact. Here, you’ll:
                  </p>
                </div>

                <ul className="para-ul">
                  <li>
                    <p className="li-para">
                      Work at the intersection of business process, technology, and compliance
                    </p>
                  </li>
                  <li>
                    <p className="li-para">
                      Drive transformation for mid-sized global companies across industries.
                    </p>
                  </li>
                  <li>
                    <p className="li-para">
                      Be part of a team that values discipline, efficiency, and innovation.
                    </p>
                  </li>
                  <li>
                    <p className="li-para">
                      Collaborate with international clients and technology partners.
                    </p>
                  </li>
                  <li>
                    <p className="li-para">
                      Grow your career with structured leadership pathways and global exposure.
                    </p>
                  </li>
                </ul>

                <p className="li-para">
                  When you join Eximius Next, you don’t just take a role—you become part of a mission
                  to build the next generation of intelligent operations.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default CareerPlayGround;
