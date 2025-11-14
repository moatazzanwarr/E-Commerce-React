import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext();

export function ProductSProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return(
    <ProductsContext.Provider value={{products}}>
        {children}
    </ProductsContext.Provider>
  )
}
