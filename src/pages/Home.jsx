import React, { useState } from "react";
import Sidebar from "../components/Common/Sidebar";
import AddBar from "../components/Home/AddBar";
import MovieSlider from "../components/Home/MovieSlider";
import MovieGrid from "../components/Home/MovieGrid";
import StartingPage from "../components/Home/StartingPage";
import MovieJson from "../components/Common/MovieJson";
import Footer from "../components/Common/Footer";
function Home() {
  const [Open, setOpen] = useState(false);
  return (
    <div>
      {Open ? (
        <>
          <AddBar />
          <MovieSlider />
          <MovieGrid Catagory={"Watching Now"} MovieJson={MovieJson} />
          <MovieGrid Catagory={"Trending"} MovieJson={MovieJson} />
          <Sidebar />
          <Footer />
        </>
      ) : (
        <StartingPage setOpen={setOpen} />
      )}
    </div>
  );
}

export default Home;
