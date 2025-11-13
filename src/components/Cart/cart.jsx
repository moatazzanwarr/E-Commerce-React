// Imports
import React, { useState } from "react";
import "./cart.css";
import "./cartRespon.css";
import CartProduct from "./cartProduct";

import { Link } from "react-router-dom";

// Icons
import icons from "../../assets/icons";

const cartstorage = localStorage.getItem("cart");
const cartStorageParse = JSON.parse(cartstorage);

function Cart() {
  const [total, setTotal] = useState(50);
  const [estimate, setEstimate] = useState("Egypt");

  return (
    <section className="cart">
      <div className="bar">
        <ul>
          <li>
            <Link to="#">
              <icons.HomeIcon className="i" />
              Home
            </Link>
          </li>
          <icons.ArrowForwardIosIcon className="i" />
          <li>
            <Link to="#">Pages</Link>
          </li>
          <icons.ArrowForwardIosIcon className="i" />
          <li>
            <Link to="#">Cart</Link>
          </li>
        </ul>
      </div>

      <section className="container">
        <h1>Your Cart</h1>
        <div>
          <p>
            There are <span>{localStorage.getItem("length")} </span>products in
            your cart
          </p>
          <div>
            <icons.DeleteIcon className="i" />
            Clear Cart
          </div>
        </div>

        <div className="container-2">
          <div className="left">
            <div className="table">
              <ul className="title">
                <li>
                  <input type="checkbox" name="" id="" />
                </li>
                <li>
                  <h1>Product</h1>
                </li>
                <li>
                  <h1>Price</h1>
                </li>
                <li>
                  <h1>Quantity</h1>
                </li>
                <li>
                  <h1>Subtotal</h1>
                </li>
                <li>
                  <h1>Remove</h1>
                </li>
              </ul>

              {cartStorageParse.map((item) => (
                <CartProduct
                  key={item.id}
                  src={item.src}
                  title={item.title}
                  rate={item.rate}
                  price={item.price}
                />
              ))}
            </div>

            <div>
              <div className="btns">
                <Link to="#"><icons.ArrowBackIcon className="i"/>Continue Shopping</Link>
                <button><icons.CachedIcon className="i"/>Update Cart</button>
              </div>

              <div className="bottom">
                <div className="left">
                  <h3>Calculate Shipping</h3>
                  <p>Flat rate:<span>5%</span></p>
                  <select name="" id="">
                    <option value="egypt">Egypt</option>
                    <option value="egypt">Egypt</option>
                    <option value="egypt">Egypt</option>
                    <option value="egypt">Egypt</option>
                  </select>
                  <div>
                    <input type="text" placeholder="State / Country"/>
                    <input type="text" placeholder="PostCode / ZIP"/>
                  </div>
                </div>
                <div className="right">
                  <h3>Apply Coupon</h3>
                  <p>Using A Promo Code?</p>
                  <div>
                    <input type="text" placeholder="Enter Your Coupon"/>
                    <button><icons.LocalMallIcon className="i"/>Apply</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right all-info">
            <div className="data">
              <div>
                <span>Subtotal</span>
                <span className="total">${total}</span>
              </div>
              <div>
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div>
                <span>Estimate for</span>
                <span>{estimate}</span>
              </div>
              <div>
                <span>Total</span>
                <span className="total">${total}</span>
              </div>
            </div>
            <div className="btn">
              <Link to="/checkOut">Proceed To CheckOut <icons.LogoutIcon className="i"/></Link>
            </div>
          </div>
        </div>

      </section>

      
    </section>
  );
}

export default Cart;
