import React from "react";
import "../../assets/css/CareerWorkWith.css"
function CareerWorkWith() {
  return (
    <section className="work-with-section text-center">
      <div className="auto-container">
        <div className="work-head">
          <h2 className="work-h2">Work With Eximius Next</h2>
          <h5 className="work-h5">Build the Future of Intelligent Operations</h5>
        </div>
        <div className="work-para">
          At Eximius Next, we don’t just run processes—we reimagine them. As a Tech-first,
          Human-in-Loop BPM partner, we help ambitious companies achieve
          <br />
          operational excellence. Join us to shape
          the future of business processes while building a career defined by leadership, innovation, and impact.
        </div>
        <button className=" btn-style-one btn-style" type="submit">
          Apply Now
          <i className="bi bi-arrow-up-right btn-i"></i>
        </button>
      </div>
    </section>
  );
}

export default CareerWorkWith;
