import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { movieSearch } from "../../features/Movie/movieSlice";
function SearchBar() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  useEffect(() => {
    dispatch(movieSearch(text));
  }, [text, dispatch]);
  const KeyHandler = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="SearchBarSearchArea">
      <div className="SearchBarSearchIcon">
        <CiSearch />
      </div>
      <input
        type="text"
        onKeyUp={KeyHandler}
        className="SearchBarInputTag"
        placeholder="Movies, Shows and more"
      />
    </div>
  );
}

export default SearchBar;
