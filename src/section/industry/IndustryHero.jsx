import React from "react";
import "../../assets/css/IndustryHero.css";
import indsImage from "../../assets/images/inds.png"; 
function IndustryHero() {
  return (
    <section
      className="home-section pos-rel bg-cover"
      style={{ backgroundImage: `url(${indsImage})` }}
    >
      <div className="auto-container">
        <div className="home-title pos-rel">
          <div className="home-icon d-flx">
            <p>
              <a href="#">HOME</a>
            </p>
            <i className="bi bi-chevron-right"></i>
            <p>Industrice</p>
          </div>
          <h5 className="home-h5">Industrice</h5>
        </div>
      </div>
    </section>
  );
}

export default IndustryHero;
