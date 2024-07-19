import React, { useEffect, useState } from "react";
import Login from "../pages/Login"
import { MovieImporter } from "./MovieManager";
import { useDispatch } from "react-redux";
import { movieInput } from "../features/Movie/movieSlice";
import { Outlet } from "react-router-dom";

function Protected() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await MovieImporter();
        dispatch(movieInput(data.data));
        if (data.status === "success") {
          setIsSuccess(true);
        } else {
          localStorage.removeItem('Authentication');
          console.log("helllo");
          setIsSuccess(false);
        }
      } catch (error) {
        localStorage.removeItem('Authentication');
        console.log("helllo");
        console.error("Error fetching data:", error);
        setIsSuccess(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isSuccess) {
    return <Login />;
  }

  return <Outlet />;
}

export default Protected;
