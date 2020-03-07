import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";

function Home() {
  return (
    <div>
      <Logo></Logo>
      <Link to="/add">
        <a
          className="waves-effect waves-light btn-large create-new light-blue darken-4"
          href
        >
          <i className="material-icons right">add face</i>Add A Character{" "}
        </a>
      </Link>
      <Link to="/battle">
        <a
          className="waves-effect waves-light btn-large battle-button-home red"
          href
        >
          <i className="material-icons right">directions_run flash_on</i>VERSUS
          BATTLE!
        </a>
      </Link>
    </div>
  );
}

export default Home;
