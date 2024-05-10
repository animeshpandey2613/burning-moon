import React from "react";
import "./SearchBar.css";
import { CiSearch } from "react-icons/ci";
function SearchBar() {
  return (
    <div className="SearchBarSearchArea">
      <div className="SearchBarSearchIcon">
        <CiSearch />
      </div>
      <input
        type="text"
        className="SearchBarInputTag"
        placeholder="Movies, Shows and more"
      />
    </div>
  );
}

export default SearchBar;
