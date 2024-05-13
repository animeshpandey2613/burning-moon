import React, { useRef, useEffect, useState } from "react";
import "./CustomisedPlayer.css";
import { CiPlay1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./ArrowDown.css";
function CustomisedPlayer({ currentMovie, setStartMovie }) {
  const VideoRef = useRef();
  const overlayRef = useRef();
  const controlsRef = useRef();
  const SliderRef = useRef();
  const [playVideo, setplayVideo] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [Dragging, setDragging] = useState(false);
  const [overlayOpacity, setOverlayOpacity] = useState(true);

  useEffect(() => {
    if (overlayOpacity === true) {
      const Timeout = setTimeout(() => {
        overlayRef.current.style.opacity = 0;
        controlsRef.current.style.opacity = 0;
        setOverlayOpacity(false);
      }, 3000);
      return () => clearTimeout(Timeout);
    }
  }, [overlayOpacity]);

  useEffect(() => {
    if (!Dragging) {
      SliderRef.current.value = currentTime;
    }
  }, [currentTime, Dragging]);
  const ChangeHandler = (e) => {
    const value = parseFloat(e.target.value);
    setCurrentTime(value);
    VideoRef.current.currentTime = value;
  };
  useEffect(() => {
    const videoElement = VideoRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(videoElement.currentTime);
    };
    const handleLoadedMetadata = () => {
      setTotalTime(videoElement.duration);
    };

    videoElement.addEventListener("timeupdate", handleTimeUpdate);
    videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      videoElement.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const playHandler = () => {
    setplayVideo((e) => !e);
    if (VideoRef.current.paused) {
      VideoRef.current.play();
    } else {
      VideoRef.current.pause();
    }
  };

  const mouseMovehandler = () => {
    setOverlayOpacity(true);
    overlayRef.current.style.opacity = 1;
    controlsRef.current.style.opacity = 1;
  };
  return (
    <>
      <div>
        <video className="MovieSliderVideoStyle" autoPlay ref={VideoRef}>
          <source src={currentMovie.video} type="video/mp4" />
        </video>
        <div
          className="CustomisedPlayerOverlay"
          onClick={() => {
            playHandler();
            mouseMovehandler();
          }}
          ref={overlayRef}
          onMouseMove={mouseMovehandler}
        >
          <div className="CustomisedPlayerBackButton" onClick={()=>setStartMovie(false)}><IoMdArrowRoundBack /></div>
          {playVideo ? <CiPlay1 /> : <CiPause1 />}

          <div
            href="#"
            class="scroll-down-link scroll-down-arrow"
            data-iconfont="ETmodules"
            data-icon
          ></div>
        </div>
        <div className="CustomisedPlayercontrols" ref={controlsRef}>
          <div className="CustomisedPlayerplay" onClick={playHandler}>
            {playVideo ? <CiPlay1 /> : <CiPause1 />}
          </div>
          <div className="CustomisedPlayertimeline">
            <div>
              {Math.floor(currentTime / 3600)}:
              {Math.floor(currentTime / 60) < 10
                ? `0${Math.floor(currentTime / 60)}`
                : Math.floor(currentTime / 60)}
              :
              {Math.floor(currentTime % 60) < 10
                ? `0${Math.floor(currentTime % 60)}`
                : Math.floor(currentTime % 60)}
            </div>
            <input
              type="range"
              min={0}
              max={totalTime}
              step={0.01}
              className="CustomisedPlayerRange"
              ref={SliderRef}
              onChange={ChangeHandler}
              onMouseDown={() => setDragging(true)}
              onMouseUp={() => setDragging(false)}
              onMouseMove={mouseMovehandler}
            />
            <div>
              {Math.floor(totalTime / 3600)}:
              {Math.floor(totalTime / 60) < 10
                ? `0${Math.floor(totalTime / 60)}`
                : Math.floor(totalTime / 60)}
              :
              {Math.floor(totalTime % 60) < 10
                ? `0${Math.floor(totalTime % 60)}`
                : Math.floor(totalTime % 60)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomisedPlayer;
