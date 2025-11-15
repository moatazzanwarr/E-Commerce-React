// Imports
import React, { useState, useEffect, useContext } from "react";
import "./shop.css";
import "./shopRespon.css";
import Pop_product from "../home/popular/pop_product";
import Deals from "../home/deals/deals";
import FilterMenu from "./filterMenu";

// Icons
import icons from "../../assets/icons";

// Images
import categoryImg_1 from "../../assets/images/category-1.png";
import categoryImg_2 from "../../assets/images/category-2.png";
import categoryImg_3 from "../../assets/images/category-3.png";
import categoryImg_4 from "../../assets/images/category-4.png";
import categoryImg_5 from "../../assets/images/category-5.png";

// import context
import { ProductsContext } from "../../context/productsContext";
import { CartContext } from "../../context/cartContext";
import { FilterProductsContext } from "../../context/filterProductsContext";

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

function Shop() {
  const [isFiltered, setIsFiltered] = useState(true);
  // useContext
  const { products } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);
  const { filterByCategory, filteredProducts } = useContext(
    FilterProductsContext
  );

  const [newProducts, setNewProducts] = useState([]);
  useEffect(() => {
    fetch("/newProducts.json")
      .then((res) => res.json())
      .then((item) => {
        setNewProducts(item.slice(3, 6));
      });
  }, []);

  const [openFilter, SetOpenFilter] = useState(false);
  const filter = () => {
    SetOpenFilter(!openFilter);
  };

  return (
    <section className="shop">
      <div className="mainContent">
        <aside>
          <div className="category">
            <h1>Category</h1>
            {categorySrc.map((e, i) => (
              <div key={e.id} onClick={() => {filterByCategory(e.Category) ; setIsFiltered(false)}}>
                <div className="img">
                  <img src={e.src} alt="" />
                </div>
                <h6>{e.title}</h6>
                <span className="counter">{e.counter}</span>
              </div>
            ))}
          </div>

          <div className="fillByPrice">
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
          </div>

          <div className="newProducts">
            <h1>New products</h1>
            {newProducts.map((e, i) => (
              <div key={e.id}>
                <div className="img">
                  <img src={e.src} alt="newProduct" />
                </div>
                <div className="info">
                  <h4>{e.title}</h4>
                  <p>${e.price}</p>
                  <div className="rate">
                    <icons.StarIcon className="i" />({e.rate})
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>
        <div className="container">
          <div className="bar">
            <div className="mobileFilter" onClick={filter}>
              <icons.FilterAltIcon className="i" />
            </div>
            <div>
              <div>
                <span>
                  <icons.HeightIcon className="i" />
                  Sort by:
                </span>
                <select name="" id="">
                  <option value="Featured ">Featured </option>
                  <option value="Featured ">Featured </option>
                  <option value="Featured ">Featured </option>
                </select>
              </div>
            </div>
          </div>
          <div className="products">
            {isFiltered
              ? products.map((product) => (
                  <Pop_product
                    key={product.id}
                    id={product.id}
                    src={product.src}
                    type={product.type}
                    title={product.title}
                    rate={product.rate}
                    company={product.company}
                    price={product.price}
                    discount={product.discount}
                    addToCart={addToCart}
                    product={product}
                  />
                ))
              : filteredProducts.map((product) => (
                  <Pop_product
                    key={product.id}
                    id={product.id}
                    src={product.src}
                    type={product.type}
                    title={product.title}
                    rate={product.rate}
                    company={product.company}
                    price={product.price}
                    discount={product.discount}
                    addToCart={addToCart}
                    product={product}
                  />
                ))}
          </div>
          <div className="changeProducts">
            <div>
              <icons.ArrowBackIcon className="i" />
            </div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <span>. . .</span>
            <div>6</div>
            <div>
              <icons.ArrowForwardIcon className="i" />
            </div>
          </div>
        </div>
      </div>
      <Deals />
      <div className={openFilter ? "open mobileFilter" : "close mobileFilter"}>
        <FilterMenu isFiltered={isFiltered} setIsFiltered={setIsFiltered}/>
      </div>
    </section>
  );
}

export default Shop;
