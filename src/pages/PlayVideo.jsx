import React from "react";
import VideoArea from "../components/PlayVideo/VideoArea";
import RelatedMovies from "../components/PlayVideo/RelatedMovies";
import Footer from "../components/Common/Footer";
function PlayVideo() {
  return (
    <div>
      <VideoArea />
      <RelatedMovies />
      <Footer />
    </div>
  );
}

export default PlayVideo;
