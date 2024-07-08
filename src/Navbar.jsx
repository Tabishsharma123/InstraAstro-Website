import React, { useState } from "react";
// import logo from "./images/download.jpg";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img
            src="https://d1hltzobzpmnzr.cloudfront.net/static/img/instaastro-logo.svg"
            alt="InstaAstro"
            width={100}
            height={50}
          />
        </div>
        <div className="navbar-buttons">
          <button className="chat-btn">
            <i class="fa-regular fa-comment"></i> Chat with Astrologer
          </button>
          <button className="talk-btn">
            <i class="fa-solid fa-phone"></i> Talk with Astrologer
          </button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
      <section>
        <div className="navbar-links">
          <ul>
            <li>Home</li>
            <li>Kundli</li>
            <li>Matchmaking</li>
            <li>Horoscope</li>
            <li>Live</li>
            <li>Panchang</li>
            <li>Calendar</li>
            <li onClick={handleDropdownToggle}>
              Resource <i className="fas fa-caret-down"></i>
              {dropdownVisible && (
                <div className="dropdown">
                  <ul>
                    <li>Online Pooja</li>
                    <li>Heading</li>
                    <li>Gemstone</li>
                    <li>Spells</li>
                  </ul>
                </div>
              )}
            </li>
            <li>Blog</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Navbar;
