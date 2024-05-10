import React from "react";
import SearchBar from "../components/Search/SearchBar";
import MovieSearch from "../components/Search/MovieSearch";
import Footer from "../components/Common/Footer";
import Sidebar from "../components/Common/Sidebar";
function Search() {
  return (
    <div>
      <div className="SearchContainer">
        <div className="SearchContainer2">
          <SearchBar />
          <MovieSearch />
        </div>
      </div>
      <Footer />
      <Sidebar />
    </div>
  );
}

export default Search;
