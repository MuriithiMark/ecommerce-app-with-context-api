import React from "react";
import ProductComponent from "../ProductComponent";
import './productList.css'

const ProductListComponent = ({ products }) => {
  return (
    <div className="product-list">
     
      {products.map((product) => (
        <ProductComponent product={product}/>
      ))
      }
    </div>
  );
};

export default ProductListComponent;
