import React, { useState, useRef, useEffect } from "react";
import { GoUnmute } from "react-icons/go";
import { GoMute } from "react-icons/go";
import { BsFillPlayFill } from "react-icons/bs";
import { IoIosAdd } from "react-icons/io";
import { IoIosCheckmark } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import video from "../../videos/demo.mp4";
import "./MovieSlider.css";
function MovieSlider() {
  const MovieItems = [
    {
      index: 1,
      link: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/7475/1557475-i-e371b3e8fdb4",
      titleImage:
        "https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/7474/1557474-t-c7f82f7f99df",
      video,
      year: 2022,
      duration: "2h 29m",
      language: ["Hindi", "English", "Tamil", "Telgu", "Malyalam"],
      restrictions: "U/A 16+",
      description:
        "The band of heroic renegates embark on the action-packed mission to protect one of their own. And a new force threatens to bring the Guardian down for good.",
      newlyAdded: true,
      tags: ["SuperHero", "Action", "Adventure", "Comedy"],
      wishlist: false,
    },
    {
      index: 2,
      link: "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/8746/1598746-i-b0cc78ab1b43",
      titleImage:
        "https://img10.hotstar.com/image/upload/f_auto,h_136/sources/r1/cms/prod/8745/1598745-t-83df026437dd",
      video,
      year: 2022,
      description:
        "Delving into the psyche of vicious criminals, the police go in-depth to unravel the mysteries of a crime. And the chase is as harrowing as it gets.",
      restrictions: "U/A 16+",
      duration: "2h 29m",
      language: ["Hindi", "English", "Tamil", "Telgu", "Malyalam"],
      tags: ["Crime", "True Crime", "Investigation", "Outlaw"],
      wishlist: true,
    },
    {
      index: 3,
      link: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/1220/1581220-i-dbc25bff7710",
      titleImage:
        "https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/1219/1581219-t-103181c673a3",
      video,
      language: ["Hindi", "English", "Tamil", "Telgu", "Malyalam"],
      description:
        "Embracing life after divorce, Kirti moves to a hill station with her son. Soon, she meets a mysterious admirer Vikrant, whose secrets may ignite destruction.",
      year: 2023,
      restrictions: "U/A 13+",
      duration: "7 Seasons",
      tags: ["Thriller", "Mystery", "Adventure", "Comedy"],
      wishlist: true,
    },
    {
      index: 4,
      link: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/7475/1557475-i-e371b3e8fdb4",
      titleImage:
        "https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/7474/1557474-t-c7f82f7f99df",
      video,
      year: 2022,
      duration: "2h 29m",
      language: ["Hindi", "English", "Tamil", "Telgu", "Malyalam"],
      restrictions: "U/A 16+",
      description:
        "The band of heroic renegates embark on the action-packed mission to protect one of their own. And a new force threatens to bring the Guardian down for good.",
      newlyAdded: true,
      tags: ["SuperHero", "Action", "Adventure", "Comedy"],
      wishlist: true,
    },
    {
      index: 5,
      link: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/7475/1557475-i-e371b3e8fdb4",
      titleImage:
        "https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/7474/1557474-t-c7f82f7f99df",
      video,
      year: 2022,
      duration: "2h 29m",
      language: ["Hindi", "English", "Tamil", "Telgu", "Malyalam"],
      restrictions: "U/A 16+",
      description:
        "The band of heroic renegates embark on the action-packed mission to protect one of their own. And a new force threatens to bring the Guardian down for good.",
      newlyAdded: true,
      tags: ["SuperHero", "Action", "Adventure", "Comedy"],
      wishlist: false,
    },
    {
      index: 6,
      link: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/7475/1557475-i-e371b3e8fdb4",
      titleImage:
        "https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/7474/1557474-t-c7f82f7f99df",
      video,
      year: 2022,
      duration: "2h 29m",
      language: ["Hindi", "English", "Tamil", "Telgu", "Malyalam"],
      restrictions: "U/A 16+",
      description:
        "The band of heroic renegates embark on the action-packed mission to protect one of their own. And a new force threatens to bring the Guardian down for good.",
      newlyAdded: true,
      tags: ["SuperHero", "Action", "Adventure", "Comedy"],
      wishlist: false,
    },
    {
      index: 7,
      link: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/7475/1557475-i-e371b3e8fdb4",
      titleImage:
        "https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/7474/1557474-t-c7f82f7f99df",
      video,
      year: 2022,
      duration: "2h 29m",
      language: ["Hindi", "English", "Tamil", "Telgu", "Malyalam"],
      restrictions: "U/A 16+",
      description:
        "The band of heroic renegates embark on the action-packed mission to protect one of their own. And a new force threatens to bring the Guardian down for good.",
      newlyAdded: true,
      tags: ["SuperHero", "Action", "Adventure", "Comedy"],
      wishlist: true,
    },
    {
      index: 8,
      link: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/7475/1557475-i-e371b3e8fdb4",
      titleImage:
        "https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/7474/1557474-t-c7f82f7f99df",
      video,
      year: 2022,
      duration: "2h 29m",
      language: ["Hindi", "English", "Tamil", "Telgu", "Malyalam"],
      restrictions: "U/A 16+",
      description:
        "The band of heroic renegates embark on the action-packed mission to protect one of their own. And a new force threatens to bring the Guardian down for good.",
      newlyAdded: true,
      tags: ["SuperHero", "Action", "Adventure", "Comedy"],
      wishlist: true,
    },
    {
      index: 9,
      link: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/7475/1557475-i-e371b3e8fdb4",
      titleImage:
        "https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/7474/1557474-t-c7f82f7f99df",
      video,
      year: 2022,
      duration: "2h 29m",
      language: ["Hindi", "English", "Tamil", "Telgu", "Malyalam"],
      restrictions: "U/A 16+",
      description:
        "The band of heroic renegates embark on the action-packed mission to protect one of their own. And a new force threatens to bring the Guardian down for good.",
      newlyAdded: true,
      tags: ["SuperHero", "Action", "Adventure", "Comedy"],
      wishlist: true,
    },
  ];
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
  const [WishlistCheck, setWishlistCheck] = useState(
    MovieItems[ActiveIndex].wishlist
  );
  useEffect(() => {
    setStartMovie(false);
    const Timeout = setTimeout(() => {
      setStartMovie(true);
    }, 3000);
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
              <source src={video} type="video/mp4" />
            </video>
          ) : (
            <>
              <div className="MovieSliderGradientLeft" />
              <img
                src={MovieItems[ActiveIndex].link}
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
                {MovieItems[ActiveIndex].language.length} languages
              </div>
              {"•"}
              <div className="MovieSlidertemp2">
                {MovieItems[ActiveIndex].restrictions}
              </div>
            </div>
            <div className="MovieSliderMainDescription">
              {MovieItems[ActiveIndex].description}
            </div>
            <div className="MovieSliderTags">
              {MovieItems[ActiveIndex].tags.join(" | ")}
            </div>
            <div className="MovieSliderButtonSection">
              <a href="/user/play">
                <div className="MovieSliderPlayButton">
                  <BsFillPlayFill /> Subscribe to watch
                </div>
              </a>
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
                    <img src={ele.link} alt="sdfgsdag" />
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
