import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { getAllProducts } from "./services";
import HeaderComponent from "./components/HeaderComponent";
import SearchFilterComponent from "./components/SearchFilterComponent";
import ProductListComponent from "./components/ProductListComponent";
import ProductPageTransition from "./components/ProductPageTransition";

function App() {
  const [products, setProducts] = useState([]);
  // If the products are empty array, this message should be displayed
  const [message, setMessage] = useState("");
  const [pageData, setPageData] = useState({
    hasPrevPage: false,
    hasNextPage: false,
    page: 1,
  });

  const handleSearch = async ({ searchText, searchBy }) => {
    let url = '';
    if (searchBy === "name") {
      url = `https://dummyjson.com/products/search?q=${searchText}`;
    }

    if (searchBy === "categories") {
      url = `https://dummyjson.com/products/category/${searchText.replace(" ", "-").toLowerCase()}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    setProducts(data.products)
  };

  const onPageTransition = (newPage) => {
    setPageData((prevData) => {
      return {
        ...prevData,
        page: newPage,
      };
    });
  };

  useEffect(() => {
    getAllProducts({ skip: pageData.page - 1, limit: 10 }).then((result) => {
      if (!result.success) {
        setMessage(() => result.message);
        setProducts([]);
        return;
      }
      const { products, total, skip, limit, message } = result;
      setMessage(() => message);
      setProducts(() => products);
      setPageData((prevData) => ({
        ...prevData,
        hasNextPage: total - (skip + limit) !== 0,
        hasPrevPage: skip !== 0,
      }));

      // scroll to top
      document.documentElement.scrollTo(0, 0);
    });
  }, [pageData.page]);

  return (
    <>
      <HeaderComponent />
      <SearchFilterComponent handleSearch={handleSearch} />
      <ProductListComponent products={products} />
      <ProductPageTransition
        pageData={pageData}
        onPageTransition={onPageTransition}
      />
    </>
  );
}

export default App;
