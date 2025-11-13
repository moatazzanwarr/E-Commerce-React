// Imports
import React from "react";
import "./slider.css";

// Icons
import icons from "../../../assets/icons";


function Slider() {
  return (
    <div className="main-slider">
      <div className="slide-1 slide">
        <div className="text">
          <h1>Fresh Vegetables <br/>Big discount</h1>
          <span>Save up to 50% off on your first order</span>
          <form action="">
            <input type="text" placeholder="Your emaill address" />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </div>

      <span>
        <icons.ArrowCircleLeftIcon className="slide-left i" />
      </span>
      <span>
        <icons.ArrowCircleRightIcon className="slide-right i" />
      </span>
    </div>
  );
}

export default Slider;
