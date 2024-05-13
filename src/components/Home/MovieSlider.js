import React, { useState, useRef, useEffect } from "react";
import { GoUnmute } from "react-icons/go";
import { GoMute } from "react-icons/go";
import { BsFillPlayFill } from "react-icons/bs";
import { IoIosAdd } from "react-icons/io";
import { IoIosCheckmark } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { setCurrentMovie } from "../../features/Movie/movieSlice";
import { useDispatch } from "react-redux";

import "./MovieSlider.css";
function MovieSlider() {
  const MovieItems = useSelector((state) =>
    state.movies.map((movie, index) => ({ ...movie, index: index + 1 }))
  );

  const dispatch = useDispatch();
  const [ActiveIndex, setActiveIndex] = useState(0);
  const [FirstIndex, setFirstIndex] = useState(0);
  const [StartMovie, setStartMovie] = useState(false);
  const [Muted, setMuted] = useState(true);
  const MovieHolderRef = useRef();
  const BackRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", ScrollHandler);
  });

  const ScrollHandler = () => {
    if (BackRef.current) {
      if (window.scrollY <= 1000) {
        if (window.scrollY >= 380) {
          BackRef.current.style.top = `${window.scrollY - 380}px`;
          const fragment = (1000 - window.scrollY) / (1000 - 380);
          BackRef.current.style.filter = `brightness(${fragment})`;
        } else {
          BackRef.current.style.filter = `brightness(1)`;
        }
      }
    }
  };

  const [WishlistCheck, setWishlistCheck] = useState(false);
  useEffect(() => {
    if (FirstIndex + 4 <= ActiveIndex && FirstIndex < MovieItems.length - 4) {
      MovieHolderRef.current.style.right = `${(FirstIndex + 3) * 90}px`;
      setFirstIndex((ele) => ele + 3);
    } else if (ActiveIndex <= FirstIndex + 1 && FirstIndex > 0) {
      MovieHolderRef.current.style.right = `${(FirstIndex - 3) * 90}px`;
      setFirstIndex((ele) => ele - 3);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ActiveIndex, MovieItems.length]);
  useEffect(() => {
    MovieHolderRef.current.style.gridTemplateColumns = `repeat(${MovieItems.length}, 1fr)`;
  }, [MovieItems.length]);
  if (MovieItems[ActiveIndex].wishlist)
    setWishlistCheck(MovieItems[ActiveIndex].wishlist);
  useEffect(() => {
    setStartMovie(false);
    const Timeout = setTimeout(() => {
      setStartMovie(true);
    }, 3000);
    localStorage.setItem("currentMovie", ActiveIndex);
    return () => {
      clearTimeout(Timeout);
    };
  }, [ActiveIndex]);

  useEffect(() => {
    const Timeout = setTimeout(() => {
      setActiveIndex((ele) => ele + 1);
    }, 60000);
    return () => {
      clearTimeout(Timeout);
    };
  }, [ActiveIndex]);

  const HandlePlayButton = () => {
    dispatch(setCurrentMovie(ActiveIndex));
    window.location.href = "/user/play";
  };

  return (
    <div className="MovieSlidercontainer">
      <div className="MovieSliderSticking">
        <div className="MovieSliderback" ref={BackRef}>
          {StartMovie ? (
            <video
              className="MovieSliderVideoStyle"
              autoPlay
              muted={Muted && true}
            >
              <source src={MovieItems[ActiveIndex].video} type="video/mp4" />
            </video>
          ) : (
            <>
              <div className="MovieSliderGradientLeft" />
              <img
                src={MovieItems[ActiveIndex].landscapeImage}
                alt="asdfg"
                className="MovieSliderBackImg"
              />
            </>
          )}
        </div>
      </div>
      <div className="MovieSliderData">
        <div className="MovieSliderLeftpart">
          <div className="MovieSliderContentArea">
            <img src={MovieItems[ActiveIndex].titleImage} alt="dfg" />
            <div className="MovieSliderSmallDisc">
              <div className="MovieSlidertemp">
                {MovieItems[ActiveIndex].year}
              </div>
              {"•"}
              <div className="MovieSlidertemp">
                {MovieItems[ActiveIndex].duration}
              </div>
              {"•"}
              <div className="MovieSlidertemp">
                {MovieItems[ActiveIndex].languages.length} languages
              </div>
              {"•"}
              <div className="MovieSlidertemp2">
                {MovieItems[ActiveIndex].restricions}
              </div>
            </div>
            <div className="MovieSliderMainDescription">
              {MovieItems[ActiveIndex].description}
            </div>
            <div className="MovieSliderTags">
              {MovieItems[ActiveIndex].tags.join(" | ")}
            </div>
            <div className="MovieSliderButtonSection">
              <div className="MovieSliderPlayButton" onClick={HandlePlayButton}>
                <BsFillPlayFill /> Watch the movie
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
        <div className="MovieSliderRightpart">
          {StartMovie && (
            <div
              className="MovieSliderMuteButton"
              onClick={() => setMuted(!Muted)}
            >
              {Muted ? <GoMute /> : <GoUnmute />}
            </div>
          )}
          <div className="MovieSliderparent">
            {FirstIndex !== 0 && (
              <div
                className="MovieSliderleft MovieSliderButton"
                onClick={() => {
                  setActiveIndex((ele) => ele - 1);
                }}
              >
                <FaAngleLeft />
              </div>
            )}
            {FirstIndex <= MovieItems.length - 4 && (
              <div
                className="MovieSliderright MovieSliderButton"
                onClick={() => {
                  setActiveIndex((ele) => ele + 1);
                }}
              >
                <FaAngleRight />
              </div>
            )}
            <div className="MovieSliderMovieHolder" ref={MovieHolderRef}>
              {MovieItems.map((ele) => {
                return (
                  <div
                    className={
                      ele.index - 1 === ActiveIndex
                        ? "MovieSlideractiveChunk MovieSliderchunks"
                        : "MovieSliderchunks"
                    }
                    key={ele.index}
                    onClick={() => {
                      setActiveIndex(ele.index - 1);
                    }}
                  >
                    <img src={ele.landscapeImage} alt="sdfgsdag" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieSlider;
