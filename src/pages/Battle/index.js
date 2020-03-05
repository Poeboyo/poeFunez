import React from "react";
import "./style.css";
import { Row, Col } from "react-materialize";
import { Link } from "react-router-dom";
import PlayerOne from "../../components/PlayerOne";
import PlayerTwo from "../../components/PlayerTwo";

function Battle() {
  return (
    <div>
      {/* Go Back to Home Page */}

      <Link to="/">
        <a class="btn-floating btn-large waves-effect waves-light red back-button">
          <i class="material-icons right">arrow_back</i>
        </a>
      </Link>

      {/*  Character Selection */}
      <Row id="characterSelectScreen">
        <Col s={5}>
          <div id="characterSelectionOne">
            <PlayerOne />
          </div>
        </Col>
        <Col s={2}></Col>
        <Col s={5}>
          <div id="characterSelectionTwo">
            <PlayerTwo />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Battle;
