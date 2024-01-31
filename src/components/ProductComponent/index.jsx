import React from "react";
import './Product.css'
import { useContext } from "react";
import CartContext from "../../services/context/CartContext";


function ProductComponent({product}) {
  
  const [state, dispatch] = useContext(CartContext);

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product
    })
  }
  return (
    <div className="product">
      
      <img src={product.thumbnail} alt="" />
      
      <h1>{product.title}</h1>
      <p>Price: ${product.price} </p>
      <p>Quantity: {product.stock}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}


export default ProductComponent;
