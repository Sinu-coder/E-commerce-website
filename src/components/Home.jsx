import React from "react";
import "../assets/css/Home.css"; 
import home1 from "../assets/images/eximi.home.png";
import home2 from "../assets/images/eximi.home2.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {
  
const navigate= useNavigate();

const handleLearnMore = () => {
    navigate("/ourservice");
  };

  return (
    <div id="carouselExampleRide" className="carousel slide pos-rel" data-bs-ride="carousel">
      <div className="carousel-inner carousel-img-size">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={home1} className="d-block w-100  img-fluid" alt="Slide 1" />
          <div className="carousel-h d-md-block ">
            <h5 className="banner-title">
              <strong>Intelligent Operations,</strong>
              <br />
              Built for Growth
            </h5>
            <div>
            <p className="text-white font-size-18">
              We deliver scalable BPM solutions that eliminate operations
              roadblocks,
              <br />
              allowing your leadership to focus on innovation and growth.
            </p>
            <button type="button" className="btn-style-one btn-lg" onClick={handleLearnMore}  >
              Learn More 
            </button>
             </div>
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="2000">
          <img src={home2} className="d-block w-100  img-fluid" alt="Slide 2" />
          <div className="carousel-h d-md-block">
            <h5 className="banner-title">
              <strong>Next Gen Processes,</strong>
              <br />
              Delivery Today
            </h5>
            <p className="text-wite font-size-18">
              Our unique "Tech-first, Human-in-Loop" model transforms your
              operational,
              <br />
              bottlenecks into a strategic advantage for your business.
            </p>
            <button type="button" className="btn-style-one btn-lg" onClick={handleLearnMore} 
            >
              Learn More
            </button>

 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
