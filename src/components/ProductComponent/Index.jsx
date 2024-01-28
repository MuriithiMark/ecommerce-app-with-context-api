import React from "react";


function ProductComponent({product}) {
  
  console.log(product)
  return (
    <div className="product">
      <img src="" alt="" />
      <div>
      <h1>Productname:{product.name}</h1>
      <p>Price:{product.price}</p>
      <p>Quantity:{product.quantity}</p>

      </div>
      
      
    </div>
  );
}


export default ProductComponent;
