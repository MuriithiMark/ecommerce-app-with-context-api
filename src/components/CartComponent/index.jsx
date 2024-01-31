import React from "react";
import { useContext } from "react";
import CartContext from "../../services/context/CartContext";
import "./cart-component.css";

const CartComponent = () => {
  const [state, dispatch] = useContext(CartContext);

  const closeSidebar = () => {
    dispatch({
        type: "CLOSE_CART"
    })
  }
  if (!state.isSideBarOpen) {
    return <></>;
  }

  return (
    <div className="cart-component">
        <div className="title">
            <span>Your Cart</span>
            <button onClick={closeSidebar}>X</button>
        </div>
      {state.products.map((product) => {
        return (
          <div key={product.id} className="cart-item">
            <span>{product.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CartComponent;
