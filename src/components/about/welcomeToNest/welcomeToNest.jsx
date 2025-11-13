// Imports
import React from "react";
import "./welcomeToNest.css";

// Images
import welcomeImg_1 from "../../../assets/images/aboutWelcome.png";
import welcomeImg_2 from "../../../assets/images/aboutWelcome_2.png";
import welcomeImg_3 from "../../../assets/images/aboutWelcome_3.png";
import welcomeImg_4 from "../../../assets/images/aboutWelcome_4.png";

// Icons
import icons from "../../../assets/icons";

function WelcomeToNest() {
  return (
    <div className="welcomeToNest">
      <div className="img">
        <img src={welcomeImg_1} alt="" />
      </div>
      <div className="right">
        <div className="text">
          <h2>Welcome to Nest</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate id est laborum.
          </p>
        </div>

        <div className="slider">
          <div className="container">
            <div className="img">
              <img src={welcomeImg_2} alt="img" />
            </div>
            <div className="img">
              <img src={welcomeImg_3} alt="img" />
            </div>
            <div className="img">
              <img src={welcomeImg_4} alt="img" />
            </div>
          </div>
          <div className="icon">
            <icons.ArrowBackIcon className="i" />
          </div>
          <div className="icon">
            <icons.ArrowForwardIcon className="i" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeToNest;
