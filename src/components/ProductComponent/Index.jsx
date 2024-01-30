import React from "react";
import './product.css'


function ProductComponent({product}) {
  
  console.log(product)
  return (
    <div className="product">
      
      <img src={product.thumbnail} alt="" />
      
      <h1>{product.title}</h1>
      <p>Price:Ksh.{product.price} </p>
      <p>Quantity:{product.stock}</p>
      
    </div>
  );
}


export default ProductComponent;
