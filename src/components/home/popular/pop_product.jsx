// Imports
import React from "react";
import { Link } from "react-router-dom";

// Icons
import icons from "../../../assets/icons";

function Pop_product({
  src,
  type,
  title,
  company,
  rate,
  price,
  discount,
  onAddToCart,
  id,

}) {

  return (
    <div className="pop_product" onClick={()=> console.log(id)}>
      <Link to={`/productView/${id}`} className="img">
        <img src={src} alt="" />
      </Link>
      <div className="text">
        <span>{type}</span>
        <h4>{title}</h4>
        <div className="rate">
          <icons.StarIcon className="i" />
          <span>({rate})</span>
        </div>
        <p className="company">
          By <span>{company}</span>
        </p>
        <div className="price_add">
          <p>
            <span>${price}</span>
            <span>${discount}</span>
          </p>
          <div className="add" onClick={onAddToCart}>
            <icons.ShoppingCartCheckoutIcon className="i" /> <span>Add</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pop_product;
