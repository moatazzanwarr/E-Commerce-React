// Imports
import React from "react";
import DealsStructure from "./dealsStructure";
import "./deals.css";
import data from "./data.json";
import { Link } from "react-router-dom";

// Images
import dealsBanner_1 from "../../../assets/images/dealsBanner-1.png";
import dealsBanner_2 from "../../../assets/images/dealsBanner-2.png";
import dealsBanner_3 from "../../../assets/images/dealsBanner-3.png";
import dealsBanner_4 from "../../../assets/images/dealsBanner-4.png";

// Icons
import icons from "../../../assets/icons";

let bannerSrc = [dealsBanner_1, dealsBanner_2, dealsBanner_3, dealsBanner_4];

function Deals() {
  return (
    <section className="deals">
      <div className="bar">
        <h1>Deals Of The Day</h1>
        <Link to="#">
          All Deals <icons.ArrowForwardIosIcon className="i" />
        </Link>
      </div>
      <div>
        {data.map((deal, i) => (
          <DealsStructure
            src={bannerSrc[i]}
            title={deal.title}
            rate={deal.rate}
            company={deal.company}
            price={deal.price}
            previous={deal.previous}
            key={deal.id}
          />
        ))}
      </div>
    </section>
  );
}

export default Deals;
