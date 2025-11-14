// Imports
import React, { useEffect, useState, useContext } from "react";
import "./popular.css";
import "../homeRespon.css";
import { NavLink } from "react-router-dom";
import Pop_product from "./pop_product";
// context

import { ProductsContext } from "../../../context/productsContext";

function Popular() {
  // Cart
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("length", cart.length);
  }, [setCart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // product data from context
  const { products } = useContext(ProductsContext);

  return (
    <section className="popular">
      <div className="bar">
        <h1>Popular Products</h1>
        <ul>
          <li>
            <NavLink to="#">All</NavLink>
          </li>
          <li>
            <NavLink to="#">Milks & Dairies</NavLink>
          </li>
          <li>
            <NavLink to="#">Coffes & Teas</NavLink>
          </li>
          <li>
            <NavLink to="#">Pet Foods</NavLink>
          </li>
          <li>
            <NavLink to="#">Meats</NavLink>
          </li>
          <li>
            <NavLink to="#">Vegetables</NavLink>
          </li>
          <li>
            <NavLink to="#">Fruits</NavLink>
          </li>
        </ul>
      </div>
      <div className="products">
        {products.slice(0,12).map((item, i) => (
          <Pop_product
            key={i}
            src={item.src}
            type={item.type}
            title={item.title}
            company={item.company}
            rate="4.5"
            price={item.price}
            discount={item.discount}
            id={item.id}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default Popular;
