import React from "react";
import './Product.css'


function ProductComponent({product}) {
  
  return (
    <div className="product">
      
      <img src={product.thumbnail} alt="" />
      
      <h1>{product.title}</h1>
      <p>Price: ${product.price} </p>
      <p>Quantity: {product.stock}</p>
      
    </div>
  );
}


export default ProductComponent;
