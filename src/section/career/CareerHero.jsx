import React from "react";
import bgImage from "../../assets/images/1122.png"; 
import "../../assets/css/CareerHero.css"

function CareerHero() {
  return (
    <section
      className="home-section pos-rel bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }} 
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
}

export default CareerHero;
