import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { getAllProducts } from "./services/api";
import HeaderComponent from "./components/HeaderComponent";
import SearchFilterComponent from "./components/SearchFilterComponent";
import ProductListComponent from "./components/ProductListComponent";
import ProductPageTransition from "./components/ProductPageTransition";
import ProductsContextProvider from "./services/context/ProductsContext.provider";
import CartContextProvider from "./services/context/CartContext.provider";
import CartComponent from "./components/CartComponent";

function App() {
  return (
    <>
      {/** Cart Context is needed in HeaderComp, CartComp, MainBody to allow adding of products */}
      <CartContextProvider>
        <HeaderComponent />
        <CartComponent />

        {/** Product Context is only necessary in the Main Body */}
        <ProductsContextProvider>
          <SearchFilterComponent />
          <ProductListComponent />
          {/* <ProductPageTransition
            pageData={pageData}
            onPageTransition={onPageTransition}
          /> */}
        </ProductsContextProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
