import React,{useEffect} from "react";
import "./page.css";
import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";
const Page=()=> {
  
  useEffect(() => {
    // Clear authentication data and prevent going back to this page
    if (localStorage.getItem("Authentication")) {
      localStorage.clear();
    }
    // Replace current history entry with the login page
    window.history.replaceState(null, "", "/logout");
  }, []);
  return (
    <div className="Container">
      <div className="Container2">
        <div className="colorSet">
          <MdError />
        </div>
        You have been logged out. Please login!
        <Link to="/login">
        <button
          className="FormButton"
        >
          Login
        </button></Link>
      </div>
    </div>
  );
}

export default Page;
