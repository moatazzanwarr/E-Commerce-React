//Imports
import React, { useContext } from "react";
import "./checkOut.css";
import "./checkOutRespon.css";

import { Link } from "react-router-dom";

// Icons
import icons from "../../assets/icons";

// context
import { CartContext } from "../../context/cartContext";

function CheckOut() {
  const { cart, totalPrice } = useContext(CartContext);

  return (
    <section className="checkOut">
      <div className="bar">
        <ul>
          <li>
            <Link to="/">
              <icons.HomeIcon className="i" />
              Home
            </Link>
          </li>
          <icons.ArrowForwardIosIcon className="i" />
          <li>
            <Link to="#">Shop</Link>
          </li>
          <icons.ArrowForwardIosIcon className="i" />
          <li>
            <Link to="#">Checkout</Link>
          </li>
        </ul>
      </div>

      <div className="container">
        <h1>Checkout</h1>
        <p>
          There are <span>{localStorage.getItem("length")} </span>products in
          your cart
        </p>

        <div className="container-2">
          <div className="left">
            <div>
              <div>
                <div>
                  <icons.PersonOutlineIcon className="i" />
                  Already have an Account?
                </div>
                <Link to="/signIn">Click here to login</Link>
              </div>
              <div>
                <icons.LocalOfferIcon className="i" />
                <input type="text" placeholder="Enter Coupon Code..." />
                <button>Apply Coupon</button>
              </div>
            </div>

            <div>
              <h2>Billing Details</h2>
              <form action="">
                <div>
                  <input type="text" placeholder="First name *" />
                  <input type="text" placeholder="Last name *" />
                </div>
                <div>
                  <input type="text" placeholder="Address *" />
                  <input type="text" placeholder="Address line2" />
                </div>
                <div>
                  <select name="" id="">
                    <option value="">Select an option...</option>
                    <option value="">Select an option...</option>
                    <option value="">Select an option...</option>
                    <option value="">Select an option...</option>
                  </select>
                  <input type="text" placeholder="City / Town *" />
                </div>
                <div>
                  <input type="text" placeholder="Postcode / ZIP *" />
                  <input type="text" placeholder="Phone *" />
                </div>
                <div>
                  <input type="text" placeholder="Company Name" />
                  <input type="text" placeholder="Email address *" />
                </div>
                <div>
                  <textarea name="" id=""></textarea>
                </div>
                <div>
                  <input type="checkbox" name="" id="account" />
                  <label htmlFor="account">Create an account?</label>
                </div>
                <div>
                  <input type="checkbox" name="" id="address" />
                  <label htmlFor="address">Ship to different address?</label>
                </div>
              </form>
            </div>
          </div>

          <div className="right">
            <div className="head">
              <h2>Your Order</h2>
              <p>Subtotal</p>
            </div>
            {cart.map((item, index) => (
              <div className="product" key={item.id}>
                <div className="img">
                  <img src={item.src} alt="product image" />
                </div>
                <div className="title">
                  <h4>{item.title}</h4>
                  <div className="rate">
                    <icons.StarIcon className="i" />({item.rate})
                  </div>
                </div>
                <p>x{item.qty}</p>
                <h4>${parseInt(item.price)}</h4>
              </div>
            ))}

            <div className="total">
                <h3>Total: ${totalPrice}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CheckOut;
