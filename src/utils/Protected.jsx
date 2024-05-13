import React, { useEffect, useState } from "react";
import Logout from "../pages/Logout";
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
          setIsSuccess(false);
        }
      } catch (error) {
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
    return <Logout />;
  }

  return <Outlet />;
}

export default Protected;
