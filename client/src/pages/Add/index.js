import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Create from "../../components/Create";

function Add() {
  return (
    <div>
      {/* <!-- Go Back to Home Page  --> */}
      <Link
        to="/"
        className="btn-floating btn-large waves-effect waves-light blue back-button"
      >
        <i className="material-icons right">arrow_forward</i>
      </Link>
      <Create />

      {/* <!-- Fighter Form Creation --> */}
    </div>
  );
}

export default Add;
