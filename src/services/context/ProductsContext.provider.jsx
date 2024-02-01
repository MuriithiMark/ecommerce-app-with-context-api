import React, { useState } from "react";
import ProductsContext from "./ProductsContext";
import { useEffect } from "react";
import { getAllProducts } from "../api";


const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  // // If the products are empty array, this message should be displayed
  // const [message, setMessage] = useState("");
  // const [pageData, setPageData] = useState({
  //   hasPrevPage: false,
  //   hasNextPage: false,
  //   page: 1,
  // });

  /**
   *
   * @param {{searchText: string, searchBy: string}} param0
   */
  const handleSearch = async ({ searchText, searchBy }) => {
    let url = "";
    if (searchBy === "name") {
      url = `https://dummyjson.com/products/search?q=${searchText.trim()}`;
    }

    if (searchBy === "categories") {
      url = `https://dummyjson.com/products/category/${searchText
        .trim()
        .replace(" ", "-")
        .toLowerCase()}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    setProducts(data.products);
    // TODO handle moving from one page to prev or next if they are many products
  };

  // const onPageTransition = (newPage) => {
  //   setPageData((prevData) => {
  //     return {
  //       ...prevData,
  //       page: newPage,
  //     };
  //   });
  // };

  useEffect(() => {
    getAllProducts({ skip: 0, limit: 100 }).then((result) => {
      if (!result.success) {
        setProducts([]);
        return;
      }
       const { products, total, skip, limit, message } = result;
      // setMessage(() => message);
      setProducts(() => products);
      // TODO implement page transition, prev, next
      // setPageData((prevData) => ({
      //   ...prevData,
      //   hasNextPage: total - (skip + limit) !== 0,
      //   hasPrevPage: skip !== 0,
      // }));

      // // scroll to top
      // document.documentElement.scrollTo(0, 0);
    });
    // }, [pageData.page]
  }, []);

  console.log(products);
  return (
    <ProductsContext.Provider value={[products, setProducts]}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
