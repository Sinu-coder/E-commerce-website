import React from "react";
import "../../assets/css/FinanceHero.css"; 
import  fimg from "../../assets/images/finance.png"

function FinanceHero() {
  return (
    <section
      className="home-section pos-rel bg-cover"
      style={{ backgroundImage: `url(${fimg})` }}
    >
      <div className="auto-container">
        <div className="home-title pos-rel">
          <div className="home-icon d-flx">
            <p>
              <a href="#">HOME</a>
            </p>
            <i className="bi bi-chevron-right"></i>
            <p>
              <a href="#">Ourservices</a>
            </p>
            <i className="bi bi-chevron-right"></i>
            <p>Finance & Accounting Services</p>
          </div>
          <h5 className="home-h5">Finance & Accounting Services</h5>
        </div>
      </div>
    </section>
  );
}

export default FinanceHero;
