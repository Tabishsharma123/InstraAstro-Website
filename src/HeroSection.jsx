import React from "react";
import heroImage from "./images/InstaAstro.jpg";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-image">
        <img src={heroImage} alt="Phones" />{" "}
      </div>
      <div className="hero-content">
        <h2>Talk to India’s </h2>
        <h1>Best Astrologers at ₹1</h1>
        <h2>And get ₹100 talk time</h2>
        <div className="hero-buttons">
          <button className="hero-chat-btn">
            <i class="fa-solid fa-comment"></i> Chat With Astrologer
          </button>
          <button className="hero-talk-btn">
            {" "}
            <i class="fa-solid fa-phone"></i> Talk To Astrologer
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
