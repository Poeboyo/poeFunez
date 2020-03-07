import React from "react";
import Select from "react-select";

import "./style.css";
import { Button, TextInput, Row, Col, Icon } from "react-materialize";

const options = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
  { value: 7, label: "7" },
  { value: 8, label: "8" },
  { value: 9, label: "9" },
  { value: 10, label: "10" },
  { value: 11, label: "11" },
  { value: 12, label: "12" },
  { value: 13, label: "13" },
  { value: 14, label: "14" },
  { value: 15, label: "15" },
  { value: 16, label: "16" },
  { value: 17, label: "17" },
  { value: 18, label: "18" },
  { value: 19, label: "19" },
  { value: 20, label: "20" },
  { value: 21, label: "21" },
  { value: 22, label: "22" },
  { value: 23, label: "23" },
  { value: 24, label: "24" },
  { value: 25, label: "25" }
];

class Create extends React.Component {
  render() {
    return (
      <div>
        <img src="./images/brain.gif" id="brain" alt="brain"></img>
        <img
          src="./images/characterCreate.png"
          id="create-your-character"
          alt="character create"
        ></img>
        <div className="charForm">
          <Row className="center-align " id="characterName">
            <TextInput
              placeholder="Character Name"
              className="white"
              s={8}
              id="characterNameInput"
              value=""
            />
          </Row>

          <Row className="center-align text-white" id="characterImage">
            <TextInput
              id="characterImageInput"
              placeholder="Character Image URL"
              className="white"
              value=""
              s={8}
            />
          </Row>

          <Row className=" selections">
            <Col className=" black-text white" s={2}>
              <Select id="attack" options={options} placeholder="Attack" />
            </Col>{" "}
            <Col className=" black-text white" s={2}>
              <Select id="defense" options={options} placeholder="Defense" />
            </Col>{" "}
            <Col className=" black-text white" s={2}>
              <Select id="speed" options={options} placeholder="Speed" />
            </Col>{" "}
            <Col className=" black-text white" s={2}>
              <Select id="evasion" options={options} placeholder="Evasion" />
            </Col>
          </Row>
          <Row>
            <Button
              node="button"
              type="submit"
              waves="light"
              className="blue submit"
            >
              Submit
              <Icon right>send</Icon>
            </Button>
          </Row>
        </div>
      </div>
    );
  }
}

export default Create;
