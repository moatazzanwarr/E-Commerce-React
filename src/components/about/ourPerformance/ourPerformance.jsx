// Imports
import React from "react";
import "./ourPerformance.css";

// Images
import performance_img from "../../../assets/images/performance_img.png";

function OurPerformance() {
  return (
    <div className="ourPerformance">
      <div className="top">
        <div className="img">
          <img src={performance_img} alt="performance_img" />
        </div>
        <div className="text">
          <h5>Our performance</h5>
          <h2>Your Partner for e-commerce grocery solution</h2>
          <p>
            Ed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto
          </p>
          <p>
            Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia
          </p>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>Who we are</h3>
          <p>
            Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim
            ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac
            odio orci ultrices in.
          </p>
        </div>

        <div>
          <h3>Our history</h3>
          <p>
            Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim
            ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac
            odio orci ultrices in.
          </p>
        </div>

        <div>
          <h3>Our mission</h3>
          <p>
            Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim
            ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac
            odio orci ultrices in.
          </p>
        </div>

      </div>
    </div>
  );
}

export default OurPerformance;
