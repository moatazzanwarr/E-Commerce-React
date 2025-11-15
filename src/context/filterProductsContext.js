import { useState, useEffect, useContext, createContext } from "react";

import { ProductsContext } from "./productsContext";

export const FilterProductsContext = createContext();

export const FilterProductsProvider = ({ children }) => {
  const { products } = useContext(ProductsContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  function filterByCategory(cat) {
    const filtered = products.filter((e) => e.category === cat);
    setFilteredProducts(filtered);
    console.log(filteredProducts, filtered, cat);
  }

  return (
    <FilterProductsContext.Provider
      value={{ filteredProducts, filterByCategory }}
    >
      {children}
    </FilterProductsContext.Provider>
  );
};
