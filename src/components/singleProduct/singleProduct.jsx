// Imports
import React, { useState } from "react";

// Icons
import icons from "../../assets/icons";


function SingleProduct({
  src,
  src_1,
  src_2,
  src_3,
  src_4,
  title,
  length,
  mainPrice,
  off,
}) {
  const [count, setCount] = useState(1);
  return (
    <div className="singleProduct">
      <div className="images">
        <div className="mainImg">
          <img src={src} alt="product" />
        </div>
        <div className="selection">
          <div className="img">
            <img src={src_1} alt="" />
          </div>
          <div className="img">
            <img src={src_2} alt="" />
          </div>
          <div className="img">
            <img src={src_3} alt="" />
          </div>
          <div className="img">
            <img src={src_4} alt="" />
          </div>
        </div>
      </div>
      <div className="text">
        <h5>Sale Off</h5>
        <h1>{title}</h1>
        <div className="reviews">
          <icons.StarIcon className="i" />({length} reviews)
        </div>
        <div className="price">
          <span>${mainPrice}</span>
          <div>
            <p>%{off} Off</p>
            <span>${mainPrice}</span>
          </div>
        </div>
        <p className="info">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem
          officia, corrupti reiciendis minima nisi modi, quasi, odio minus
          dolore impedit fuga eum eligendi.
        </p>
        <div className="size">
          <p>Size / Weight:</p>
          <div className="selection">
            <button>50g</button>
            <button>60g</button>
            <button>80g</button>
            <button>100g</button>
            <button>150g</button>
          </div>
        </div>
        <div className="control">
          <div className="counter">
            <span>{count}</span>
            <div>
              <div>
                <span
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  <icons.KeyboardArrowUpIcon className="i" />
                </span>
              </div>
              <div>
                <span
                  onClick={() => {
                    setCount(count - 1);
                  }}
                >
                  <icons.KeyboardArrowDownIcon className="i" />
                </span>
              </div>
            </div>
          </div>

          <button className="addTo">
            <icons.ShoppingCartCheckoutIcon className="i" />
            Add to cart
          </button>

          <button className="wishlist">
            <icons.FavoriteBorderIcon className="i" />
          </button>
          <button>
            <icons.ShuffleIcon className="i" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
