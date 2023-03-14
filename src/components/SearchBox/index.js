import React from "react";
import "./search-box.styles.css";

// this is an implicit return where you use small brackets

const SearchBox = ({ onChangeHandler, placeholder, className }) => (
  <div>
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  </div>
);

export default SearchBox;
