import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import brain from "./brain.png";

function Logo() {
  return (
    <div className="ma4 mt0" style={{ paddingTop: "0px" }}>
      <Tilt
        className="tilt br2 shadow-2"
        tiltEnable={true}
        tiltMaxAngleX={55}
        tiltMaxAngleY={55}
      >
        <div className="pa3">
          <img style={{ paddingTop: "5px" }} src={brain} alt="logoBrain" />
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
