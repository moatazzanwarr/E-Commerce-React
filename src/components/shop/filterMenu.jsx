// Imports
import React, { useState, useContext } from "react";

// import context
import { FilterProductsContext } from "../../context/filterProductsContext";
import { ProductsContext } from "../../context/productsContext";

// Images
import categoryImg_1 from "../../assets/images/category-1.png";
import categoryImg_2 from "../../assets/images/category-2.png";
import categoryImg_3 from "../../assets/images/category-3.png";
import categoryImg_4 from "../../assets/images/category-4.png";
import categoryImg_5 from "../../assets/images/category-5.png";

// import css
import "./filterMenu.css";

const categorySrc = [
  {
    id: 1,
    src: categoryImg_1,
    title: "Milks & Dairies",
    counter: 11,
    Category: "Milks & Dairies",
  },
  {
    id: 2,
    src: categoryImg_2,
    title: "Clothing",
    counter: 13,
    Category: "Clothing",
  },
  {
    id: 3,
    src: categoryImg_3,
    title: "Pet Foods",
    counter: 15,
    Category: "Pet Foods",
  },
  {
    id: 4,
    src: categoryImg_4,
    title: "Baking material",
    counter: 25,
    Category: "Baking material",
  },
  {
    id: 5,
    src: categoryImg_5,
    title: "Fresh Fruit",
    counter: 32,
    Category: "Fresh Fruit",
  },
];

function FilterMenu({ setIsFiltered }) {
  const { filterByCategory } = useContext(FilterProductsContext);
  const { products } = useContext(ProductsContext);

  return (
    <>
      <div className="categoryInMobile">
        <h1>Category</h1>
        {categorySrc.map((e, i) => (
          <div
            key={e.id}
            onClick={() => {
              filterByCategory(e.Category);
              setIsFiltered(false);
            }}
          >
            <div className="img">
              <img src={e.src} alt="" />
            </div>
            <h6>{e.title}</h6>
            {/* <span className="counter">{e.counter}</span> */}
          </div>
        ))}
      </div>

      {/* <div className="fillByPrice">
        <h1>Fill by price</h1>
        <div className="range">
          <input type="range" name="" id="" />
        </div>
        <div className="rangeValue">
          <p>
            from: <span>$500</span>
          </p>
          <p>
            to: <span>$1000</span>
          </p>
        </div>
        <div className="color">
          <h4>color</h4>
          <div>
            <input type="checkbox" name="" id="red" />
            <label htmlFor="red">Red(56)</label>
          </div>
          <div>
            <input type="checkbox" name="" id="green" />
            <label htmlFor="green">Green(78)</label>
          </div>
          <div>
            <input type="checkbox" name="" id="blue" />
            <label htmlFor="blue">Blue(54)</label>
          </div>
        </div>

        <div className="itemCondition">
          <h4>Item Condition</h4>
          <div>
            <input type="checkbox" name="" id="new" />
            <label htmlFor="new">New (1506)</label>
          </div>
          <div>
            <input type="checkbox" name="" id="refurbished" />
            <label htmlFor="refurbished">Refurbished (27)</label>
          </div>
          <div>
            <input type="checkbox" name="" id="used" />
            <label htmlFor="used">Used (45)</label>
          </div>
        </div>
        <button>
          <icons.FilterAltIcon className="i" /> Fillter
        </button>
      </div> */}
    </>
  );
}

export default FilterMenu;
