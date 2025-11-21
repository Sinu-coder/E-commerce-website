import React from "react";
import cusimg from "../../assets/images/108.png"
import "../../assets/css/CustomerExpHero.css"

function CustomerExpHero() {
  return (
    <section
      className="home-section pos-rel bg-cover"
      style={{ backgroundImage: `url(${cusimg})` }}
    >
      <div className="auto-container">
        <div className="home-title pos-rel">
          <div className="home-icon d-flx">
            <p><a href="#">HOME</a></p>
            <i className="bi bi-chevron-right"></i>
            <p><a href="#">Ourservices</a></p>
            <i className="bi bi-chevron-right"></i>
            <p>Customer Experience & Support</p>
          </div>
          <h5 className="home-h5">Customer Experience & Support</h5>
        </div>
      </div>
    </section>
  );
}

export default CustomerExpHero;
