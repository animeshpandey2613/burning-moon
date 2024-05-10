import React from "react";
import "./page.css";
import { MdError } from "react-icons/md";
function page() {
  if (localStorage.getItem("Authentication")) {
    localStorage.clear();
  }
  return (
    <div className="Container">
      <div className="Container2">
        <div className="colorSet">
          <MdError />
        </div>
        You have been logged out. Please login!
        <button
          className="FormButton"
          onClick={()=>(window.location.href = "/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default page;
