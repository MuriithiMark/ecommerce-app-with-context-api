import React, { useState } from "react";
import "./index.css";
import { useContext } from "react";
import ProductsContext from "../../services/context/ProductsContext";

const SearchFilterComponent = () => {
  const [products, setProducts] = useContext(ProductsContext);

  const [searchText, setSearchText] = useState("");
  const [searchBy, setSearchBy] = useState("name");

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSearchBy(event.target.value);
  };

  const handleSearch = (event) => {
    // Search for products according to name or category when `Enter` key is pressed
    if (event.key !== "Enter") {
      return;
    }
    if (searchBy === "name") {
      const filteredProducts = products.filter(
        (product) =>
          // null -> false, else -> true
          !!product.title.toLowerCase().match(searchText.toLowerCase())
      );
      setProducts(filteredProducts);
    }

    if (searchBy === "categories") {
      const filteredProducts = products.filter(
        (product) =>
          // null -> false, else -> true
          !!product.category.toLowerCase().match(searchText.toLowerCase())
      );
      setProducts(filteredProducts);
    }
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        value={searchText}
        placeholder="Search a product..."
        onChange={handleChange}
        onKeyDown={handleSearch}
      />

      <select name="" id="" value={searchBy} onChange={handleSelectChange}>
        <option value="name"> Search by name</option>
        <option value="categories">Search by category</option>
      </select>
    </div>
  );
};

export default SearchFilterComponent;
