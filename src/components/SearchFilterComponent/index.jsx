import React, { useState } from "react";
import './index.css'

const SearchFilterComponent = ({ searchText, handleChange, handleKeyDown }) => {
  return(
  <div className="search-filter">
    <input
      type="text"
      value={searchText}
      placeholder="enter a product name..."
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />

    <select name="" id="">
      <option value="name"> Search by name</option>
      <option value="categories">Search by category</option>
    </select>
  </div>
  )
};

export default SearchFilterComponent;
