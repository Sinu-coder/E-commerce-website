import React from "react";
import bbllgg from "../../assets/images/bbllgg.png";
import "../../assets/css/BlogHome.css"

function BlogHome  () {
  return (
    <section
      className="home-section pos-rel bg-cover"
      style={{ backgroundImage: `url(${bbllgg})` }}
    >
      <div className="auto-container">
        <div className="home-title pos-rel">
          <div className="home-icon d-flx">
            <p>
              <a href="#">HOME</a>
            </p>
            <i className="bi bi-chevron-right"></i>
            <p>Blog</p>
          </div>
          <h5 className="home-h5">Careers at Eximius Next</h5>
        </div>
      </div>
    </section>
  );
};

export default BlogHome;
