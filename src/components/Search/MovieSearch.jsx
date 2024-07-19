import MovieJson from "../Common/MovieJson";
import {useEffect, useState} from 'react';
import { useSelector } from "react-redux";
import "./MovieSearch.css";
function MovieSearch() {
  const [text, setText] = useState("");
  const [data, setdata] = useState(MovieJson);
const currentSearch = useSelector((state) => state.currentSearch);
useEffect(() => {
  setText(currentSearch);
  const regex = new RegExp(text, 'gi');
  const newData = MovieJson.filter((ele)=>{
    console.log(text, ele.name);
    if(ele.name.match(regex)) return ele;
    else return null;
  })
  setdata(newData);
}, [currentSearch, text]);
  return (
    <div className="MovieSearchCardContainer">
      {data.map((ele) => {
        return (
          <div className="MovieSearchCard">
            <a href="/user/play">
              <img src={ele.Image} alt="asdf" />
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default MovieSearch;
