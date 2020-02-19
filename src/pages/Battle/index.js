import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Battle() {
  return (
    <div>
      {/* Go Back to Home Page */}
      <Link to="/">
        <a class="btn-floating btn-large waves-effect waves-light red back-button">
          <i class="material-icons right">arrow_back</i>
        </a>
      </Link>
      {/* Charecter Selection */}
    </div>
  );
}

export default Battle;
