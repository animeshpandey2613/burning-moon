import React from "react";
import "./RelatedMovies.css";
import MovieSearch from "../Search/MovieSearch";
function RelatedMovies() {
  return (
    <div className="RelatedMoviesContainer2">
      <div className="RelatedMoviesContainer">
        <div className="RelatedMoviesHeading">Related Movies</div>
        <MovieSearch />
      </div>
    </div>
  );
}

export default RelatedMovies;
