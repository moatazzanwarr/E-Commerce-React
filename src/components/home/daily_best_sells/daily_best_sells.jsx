// Imports
import React from "react";
import "./daily_best_sells.css";
import { NavLink } from "react-router-dom";
import Best_sells_product from "./best_sells_product";

// images
import product_1 from "../../../assets/images/product-1.png";
import product_2 from "../../../assets/images/product-2.png";
import product_3 from "../../../assets/images/product-3.png";
import product_4 from "../../../assets/images/product-4.png";

// Icons
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

// Data
const productData = [
  {
    id: 1,
    src: product_1,
    type: "snack",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    rate: "4.0",
    price: 28.85,
    previous: 32.02,
    sold: 90,
  },
  {
    id: 2,
    src: product_2,
    type: "Hodo Foods",
    title: "All Natural Italian-Style Chicken Meatballs",
    rate: "5.0",
    price: 28.85,
    previous: 32.02,
    sold: 90,
  },
  {
    id: 3,
    src: product_3,
    type: "snack",
    title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    rate: "4.0",
    price: 28.85,
    previous: 32.02,
    sold: 90,
  },
  {
    id: 4,
    src: product_4,
    type: "Vegetables",
    title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
    rate: "4.0",
    price: 28.85,
    previous: 32.02,
    sold: 90,
  },
];

function Daily_best_sells() {
  return (
    <section className="daily_best_sells">
      <div className="bar">
        <h1>Daily Best Sells</h1>
        <ul>
          <li>
            <NavLink to="#">Featured</NavLink>
          </li>
          <li>
            <NavLink to="#">Popular</NavLink>
          </li>
          <li>
            <NavLink to="#">New added</NavLink>
          </li>
        </ul>
      </div>

      <div className="cards">
        <div className="sliderContainer">
          <div className="slider">
            {productData.map((item, i) => (
              <Best_sells_product
                src={item.src}
                type={item.type}
                title={item.title}
                rate={item.rate}
                price={item.price}
                previous={item.previous}
                sold={item.sold}
                key={item.id}
              />
            ))}
          </div>
          <span>
              <WestIcon className="i" />
            </span>
            <span>
              <EastIcon className="i" />
            </span>
        </div>
      </div>
    </section>
  );
}

export default Daily_best_sells;
