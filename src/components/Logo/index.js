import React from "react";
import "./style.css";

function Logo() {
  return (
    <div>
      <img
        src="./images/animeLightning.gif"
        id="lightningLeft"
        alt="lightning bolt left"
      ></img>
      <img src="./images/ff.png" id="logo" alt="logo"></img>
      <img src="./images/pulse.gif" id="pulse" alt="energy pulse"></img>
      <img
        src="./images/animeLightning.gif"
        id="lightningRight"
        alt="lightning bolt right"
      ></img>
    </div>
  );
}

export default Logo;
