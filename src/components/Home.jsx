import React from "react";
import "../assets/css/Home.css"; 
import home1 from "../assets/images/eximi.home.png";
import home2 from "../assets/images/eximi.home2.png";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();
  const handleLearnMore = () => navigate("/ourservice");

  return (
    <section className="Top-section">

      {/* Overlay */}
      <div className="carousel-overlay"></div>

      <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">

        <div className="carousel-inner ">

          <div className="carousel-item active ">
            <img src={home1} className="carousel-img d-block " alt="Slide 1" />
          </div>

          <div className="carousel-item ">
            <img src={home2} className="carousel-img d-block " alt="Slide 2" />
          </div>

        </div>

        {/* Text on top like Industry Banner */}
        <div className="carousel-caption-custom">
          <h5 className="banner-title">
            Intelligent Operations,
            <br />
            Built for Growth
          </h5>

          <p className="banner-text">
            We deliver scalable BPM solutions that eliminate operations roadblocks,
            <br />
            allowing your leadership to focus on innovation and growth.
          </p>

          <button
            type="button"
            className="btn-style-one btn-lg"
            onClick={handleLearnMore}
          >
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}

export default Home;
