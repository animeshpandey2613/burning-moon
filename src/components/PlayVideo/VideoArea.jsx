import React, { useState, useRef, useEffect } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { IoIosAdd } from "react-icons/io";
import { IoIosCheckmark } from "react-icons/io";
import CustomisedPlayer from "./CustomisedPlayer";
import "./VideoArea.css";
import { useSelector } from "react-redux";
function VideoArea() {
  const index = localStorage.getItem("currentMovie");
  const MovieItems = useSelector((state) =>
    state.movies.map((movie, index) => ({ ...movie, index: index + 1 }))
  );
  const CurrentMovie = { ...MovieItems[index] };
  const [StartMovie, setStartMovie] = useState(false);
  const [WishlistCheck, setWishlistCheck] = useState(false);
  const BackRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", ScrollHandler);
  });
  const ScrollHandler = () => {
    if (BackRef.current) {
      if (window.scrollY <= 650) {
        BackRef.current.style.top = `${window.scrollY}px`;
        if (window.scrollY >= 100) {
          const fragment = (650 - window.scrollY) / 550;
          BackRef.current.style.filter = `brightness(${fragment})`;
        } else {
          BackRef.current.style.filter = `brightness(1)`;
        }
      }
    }
  };
  return (
    <div className="VideoAreacontainer">
      <div className="videoContainer">
        <div className="MovieSliderback" ref={BackRef}>
          {StartMovie ? (
            <CustomisedPlayer
              currentMovie={CurrentMovie}
              setStartMovie={setStartMovie}
            />
          ) : (
            <>
              <div className="MovieSliderGradientLeft" />
              <img
                src={CurrentMovie.landscapeImage}
                alt="asdfg"
                className="MovieSliderBackImg"
              />
            </>
          )}
        </div>
        {!StartMovie && (
          <div className="MovieSliderData VideoAdjust">
            <div className="MovieSliderLeftpart">
              <div className="MovieSliderContentArea">
                <img src={CurrentMovie.titleImage} alt="dfg" />
                <div className="MovieSliderSmallDisc">
                  <div className="MovieSlidertemp">{CurrentMovie.year}</div>
                  {"•"}
                  <div className="MovieSlidertemp">{CurrentMovie.duration}</div>
                  {"•"}
                  <div className="MovieSlidertemp">
                    {CurrentMovie.languages.length} languages
                  </div>
                  {"•"}
                  <div className="MovieSlidertemp2">
                    {CurrentMovie.restricions}
                  </div>
                </div>
                <div className="MovieSliderMainDescription">
                  {CurrentMovie.description}
                </div>
                <div className="MovieSliderTags">
                  {CurrentMovie.tags.join(" | ")}
                </div>
                <div className="MovieSliderButtonSection">
                  <div
                    className="MovieSliderPlayButton"
                    onClick={() => setStartMovie(true)}
                  >
                    <BsFillPlayFill /> Start from beginning
                  </div>
                  <div
                    className="MovieSliderWishlistButton"
                    onClick={() => setWishlistCheck(!WishlistCheck)}
                  >
                    {WishlistCheck ? <IoIosCheckmark /> : <IoIosAdd />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoArea;
