// imports
import React, { useState } from "react";
import "./cart.css";

// Icons
import icons from "../../assets/icons";

function CartProduct({ src, title, rate, price, id, removeFromCart }) {
  const [count, setCount] = useState(1);

  return (
    <ul className="cart-product">
      <li>
        <input type="checkbox" name="" id="" />
      </li>
      <li className="product">
        <div className="img">
          <img src={src} alt="product" />
        </div>
        <div className="text">
          <p>{title}</p>
          <span className="rate">
            <icons.StarIcon className="i" />({rate})
          </span>
        </div>
      </li>
      <li className="price">${price}</li>
      <li className="counter">
        <div>{count}</div>
        <div>
          <icons.KeyboardArrowUpIcon
            className="i"
            onClick={() => {
              count >= 0 && setCount(count + 1);
            }}
          />
          <icons.KeyboardArrowDownIcon
            className="i"
            onClick={() => {
              count > 1 && setCount(count - 1);
            }}
          />
        </div>
      </li>

      <li>{parseInt(price * count)}</li>

      <li>
        <icons.DeleteIcon className="i" onClick={() => removeFromCart(id)} />
      </li>
    </ul>
  );
}

export default CartProduct;
