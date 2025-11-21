import React from "react";
import "../../assets/css/ClientLogo.css";
import slide1 from "../../assets/images/slide-1.png";
import slide2 from "../../assets/images/slide-2.png";
import slide3 from "../../assets/images/slide-3.png";
import slide4 from "../../assets/images/slide-4.png";
import slide5 from "../../assets/images/slide-5.png";

const ClientLogo = () => {
  const slides = [ slide1, slide2, slide3, slide4, slide5 ];

 
  const allSlides = [...slides, ...slides];

  return (
    <section className="client-logo-cl1">
      <div className="auto-container">
        <div className="text-center logo-h-cl-h">
          <h2 className="logo-h-h2-cl-h2">Life at Eximius Next</h2>
          <p className="slide-para-cl-p">
            At Eximius Next, we believe the best teams are built on trust, expertise, and
            shared ambition. Our people work in an environment where ideas are valued, 
            processes are respected, and results speak for themselves.
          </p>
        </div>

        <div className="slider-cl-sldr">
          <div className="slide-track-cl-sld-tr">
            {allSlides.map((slide, index) => (
              <div className="slide-cl-sld" key={index}>
                <img src={slide} className="img-fluid" alt="slide" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogo;
