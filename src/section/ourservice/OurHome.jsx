import React from "react";
import careerImg from "../../assets/images/career.png"
import "../../assets/css/OurHome.css"

function OurHome ()  {
  return (
    <section
      className="home-section pos-rel bg-cover"
      style={{ backgroundImage: `url(${careerImg})` }}
    >
      <div className="auto-container">
        <div className="home-title pos-rel">
          <div className="home-icon d-flx">
            <p>
              <a href="#">HOME</a>
            </p>
            <i className="bi bi-chevron-right"></i>
            <p>Career</p>
          </div>
          <h5 className="home-h5">Careers at Eximius Next</h5>
        </div>
      </div>
    </section>
  );
};

export default OurHome;
