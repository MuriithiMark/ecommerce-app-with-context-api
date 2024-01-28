import React from "react";
import ProductComponent from "../ProductComponent";

const ProductListComponent = ({ products }) => {
  return (
    <div>
      ProductListComponent
      {products.map((product) => (
        <ProductComponent product={product} />
      ))
      }
    </div>
  );
};

export default ProductListComponent;
