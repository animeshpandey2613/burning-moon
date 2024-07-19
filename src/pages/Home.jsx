import React, { useState } from "react";
import Sidebar from "../components/Common/Sidebar";
import AddBar from "../components/Home/AddBar";
import MovieSlider from "../components/Home/MovieSlider";
import MovieGrid from "../components/Home/MovieGrid";
import StartingPage from "../components/Home/StartingPage";
import Footer from "../components/Common/Footer";
import { useSelector } from "react-redux";
function Home() {
  const [Open, setOpen] = useState(false);
  const Movies = useSelector((ele)=>ele.movies);
  const Thriller = Movies.filter(ele=>{
    if(ele.tags.includes("Thriller"))
      return ele;
    else return null;
  })
  const Drama = Movies.filter(ele=>{
    if(ele.tags.includes("Drama"))
      return ele;
    else return null;
  })
  const Comedy = Movies.filter(ele=>{
    if(ele.tags.includes("Comedy"))
      return ele;
    else return null;
  })
  const Adventure = Movies.filter(ele=>{
    if(ele.tags.includes("Adventure"))
      return ele;
    else return null;
  })
  const Romance = Movies.filter(ele=>{
    if(ele.tags.includes("Romance"))
      return ele;
    else return null;
  })
  return (
    <div>
      {Open ? (
        <>
          <AddBar />
          <MovieSlider />
          <MovieGrid Catagory={"Romance"} MovieJson={Romance} />
          <MovieGrid Catagory={"Comedy"} MovieJson={Comedy} />
          <MovieGrid Catagory={"Drama"} MovieJson={Drama} />
          <MovieGrid Catagory={"Adventure"} MovieJson={Adventure} />
          <MovieGrid Catagory={"Thriller"} MovieJson={Thriller} />
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
