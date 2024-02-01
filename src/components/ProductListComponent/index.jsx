import React from "react";
import ProductComponent from "../ProductComponent";
import './ProductList.css'
import { useContext } from "react";
import ProductsContext from "../../services/context/ProductsContext";

const ProductListComponent = () => {

  const [products] = useContext(ProductsContext);
  
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
