import React, { useContext, useReducer } from "react";
import CartContext from "./CartContext";
import { cartReducer } from "../reducers/cart-reducer";

const CartContextProvider = ({ children }) => {
  const cartReducerStore = useReducer(cartReducer, {isSideBarOpen: false, products: []});

  return (
    <CartContext.Provider value={cartReducerStore}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
