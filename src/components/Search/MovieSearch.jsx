import MovieJson from "../Common/MovieJson";
import "./MovieSearch.css";
function MovieSearch() {
  return (
    <div className="MovieSearchCardContainer">
      {MovieJson.map((ele) => {
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
