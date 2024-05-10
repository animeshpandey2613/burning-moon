import React from "react";
import "./Back.css";
function Back() {
  return (
    <div className="BackContainer">
      <div className="BackcenterPart">
        <div className="Backheading">
          <div className="BackleftHead">Burning</div>
          <div className="BackrightHead">Moon</div>
        </div>
        <div
          className="Backbutton"
          onClick={() => {
            window.location.href = "/login";
          }}
        >
          Get Started
        </div>
      </div>
    </div>
  );
}

export default Back;
