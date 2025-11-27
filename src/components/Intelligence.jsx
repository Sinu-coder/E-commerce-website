import React from "react";
import "../assets/css/Intelligent.css"; 
import intimg from "../assets/images/teamwork.png"
import { Link } from "react-router-dom";


function Intelligent() {
  const handleCall = () => {
    window.location.href = "tel:+917846961860";  
  };

  return (
    <section className="intelligent">
      <div className="auto-container">
        <div className="intl-div" style={{background: `url(${intimg}) no-repeat center center / cover`,}}>
          <div className="intl-div-text">
            <h5 className="intl-h5">
              Ready to Accelerate Growth with Intelligent
              <br />
              Operations?
            </h5>
            <p className="intl-p">
              Let’s discuss how Eximius Next can automate, optimize, and scale your
              business operations.
            </p>
          </div>

          <Link to="/ourservice" className="btn-style-one btn-lg" style={{ textDecoration: "none" }} >
            Talk to A BPM Expert Today
          </Link>
        </div>
      </div>
      <div className="floating-call" onClick={handleCall}>
      📞
    </div>
    </section>
  );
}

export default Intelligent;
