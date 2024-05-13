import React from "react";
import VideoArea from "../components/PlayVideo/VideoArea";
import RelatedMovies from "../components/PlayVideo/RelatedMovies";
import Footer from "../components/Common/Footer";
import Sidebar from "../components/Common/Sidebar";
function PlayVideo() {
  return (
    <div>
      <VideoArea />
      <RelatedMovies />
      <Footer />
      <Sidebar />
    </div>
  );
}

export default PlayVideo;
