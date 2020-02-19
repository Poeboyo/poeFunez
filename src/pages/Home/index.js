import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div class="highlight-white"></div>
      <div class="highlight-white-2"></div>
      <img
        src="./images/fflogo.png"
        class="fighter-logo fadeInDown"
        alt="logo"
      />{" "}
      <Link to="/add">
        <a class="waves-effect waves-light btn-large create-new light-blue darken-4">
          <i class="material-icons right">add face</i>Add A Character{" "}
        </a>
      </Link>
      <Link to="/battle">
        <a class="waves-effect waves-light btn-large battle-button-home red">
          <i class="material-icons right">directions_run flash_on</i>VERSUS
          BATTLE!
        </a>
      </Link>
      <a href="https://github.com/Poeboyo/fighting-game" class="lower-links">
        GitHub Repository
      </a>{" "}
      ||
      <a href="/api/fighters" class="lower-links">
        Fighters API
      </a>
    </div>
  );
}

export default Home;
