// Imports
import React, { useState, useEffect } from "react";
import "./slider.css";

// Icons
import icons from "../../../assets/icons";

const slides = [
  {
    id: 1,
    title: `Fresh Vegetables Big discount`,
    desc: "Save up to 50% off on your first order 1111",
  },
  {
    id: 2,
    title: `Fresh Vegetables Big discount`,
    desc: "Save up to 50% off on your first order 2222",
  },
];

function Slider() {
  const [slideNumber, setSlideNumber] = useState(1);

      const next = ()=>{
        return setSlideNumber(prev => prev === 1 ? prev + 1 : prev - 1 )
      }

  return (
    <div className="main">
      <div className="container-slides">
        {slides.map((e, i) => {
          return (
            <div
              key={i}
              className={`slide ${
                e.id === slideNumber ? "active" : "notActive"
              }`}
            >
              <div className="text">
                <h1>{e.title}</h1>
                <span>{e.desc}</span>
                <form action="">
                  <input type="text" placeholder="Your Email Address" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          );
        })}
      </div>

      <span onClick={()=> next()}>
        <icons.ArrowCircleLeftIcon className="slide-left i" />
      </span>
      <span onClick={()=> next()}>
        <icons.ArrowCircleRightIcon className="slide-right i" />
      </span>
    </div>
  );
}

export default Slider;
