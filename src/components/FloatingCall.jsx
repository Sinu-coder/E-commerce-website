import React from "react";
import "../assets/css/Floating.css";

function FloatingCall() {
  const handleCall = () => {
    window.location.href = "tel:+917846961860";
  };

  return (
    <div className="floating-call" onClick={handleCall}>
      📞
    </div>
  );
}

export default FloatingCall;
