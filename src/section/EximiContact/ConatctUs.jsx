import React from "react";
import ccoon from "../../assets/images/ccoonn.png"; 
import "../../assets/css/ContactUs.css"

function ContactUs  () {
  return (
    <section
      className="home-section pos-rel bg-cover"
      style={{ backgroundImage: `url(${ccoon})` }}
    >
      <div className="auto-container">
        <div className="home-title pos-rel">
          <div className="home-icon d-flx">
            <p><a href="#">HOME</a></p>
            <i className="bi bi-chevron-right"></i>
            <p>CONTACT Us</p>
          </div>
          <h5 className="home-h5">Contact Us</h5>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
