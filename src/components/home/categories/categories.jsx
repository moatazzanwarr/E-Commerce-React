// Imports
import React from "react";
import "./categories.css";

import Card from "./card";
import cart_1 from "../../../assets/images/cart-1.png";
import cart_2 from "../../../assets/images/cart-2.png";
import cart_3 from "../../../assets/images/cart-3.png";
import cart_4 from "../../../assets/images/cart-4.png";
import cart_5 from "../../../assets/images/cart-5.png";
import cart_6 from "../../../assets/images/cart-6.png";
import cart_7 from "../../../assets/images/cart-7.png";
import cart_8 from "../../../assets/images/cart-8.png";
import cart_9 from "../../../assets/images/cart-9.png";
import cart_10 from "../../../assets/images/cart-10.png";

import Banner from "./banner";
import banner_bg_1 from "../../../assets/images/banner-1.png.png";
import banner_bg_2 from "../../../assets/images/banner-2.png.png";
import banner_bg_3 from "../../../assets/images/banner-3.png.png";
import { NavLink } from "react-router-dom";

// Icons
import icons from "../../../assets/icons";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const cardData = {
  src: [
    cart_1,
    cart_2,
    cart_3,
    cart_4,
    cart_5,
    cart_6,
    cart_7,
    cart_8,
    cart_9,
    cart_10,
  ],
  titels: [
    "Cake & Milk",
    "Oganic Kiwi",
    "Peach",
    "Red Apple",
    "Snack",
    "Vegetables",
    "Strawberry",
    "Black plum",
    "Custard apple",
    "Coffe & Tea",
  ],
};

function Categories() {
  return (
    <section className="Categories">
      <div className="bar">
        <div className="left">
          <h1>Featured Categories</h1>
          <ul>
            <li>
              <NavLink to="#">Cake & Milk</NavLink>
            </li>
            <li>
              <NavLink to="#">Coffes & Teas</NavLink>
            </li>
            <li>
              <NavLink to="#">Pet Foods</NavLink>
            </li>
            <li>
              <NavLink to="#">Vegetables</NavLink>
            </li>
          </ul>
        </div>
        <div className="right">
          <icons.ArrowBackIcon className="i" />
          <icons.ArrowForwardIcon className="i" />
        </div>
      </div>

      <div className="cards">
        <Swiper
          spaceBetween={10}
          slidesPerView={2.5}
          breakpoints={{
            480: { slidesPerView: 1.2, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1200: { slidesPerView: 7, spaceBetween: 30 },
          }}
        >
          {cardData.src.map((src, i) => (
            <SwiperSlide>
              <Card
                key={src}
                src={cardData.src[i]}
                title={cardData.titels[i]}
                number="26"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="banners">
        <Banner
          src={banner_bg_1}
          title="Everyday Fresh &Clean with Our Products"
        />
        <Banner
          src={banner_bg_2}
          title="Make your Breakfast Healthy and Easy"
        />
        <Banner src={banner_bg_3} title="The best Organic Products Online" />
      </div>
    </section>
  );
}

export default Categories;
