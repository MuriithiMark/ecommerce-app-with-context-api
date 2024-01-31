import React, { useState } from "react";
import ProductsContext from "./ProductsContext";
import { useEffect } from "react";

const ProductsContextProvider = ({ children }) => {
  const productsStore = useState([]);
  useEffect(() => {
    
  })
  return (
    <ProductsContext.Provider value={productsStore}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
