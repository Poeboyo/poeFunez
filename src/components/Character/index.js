import React, { Component } from "react";
import { Card, CardTitle, Row, Col, Icon } from "react-materialize";

class Character extends Component {
  render() {
    return (
      <Card
        className="character-box"
        closeIcon={<Icon>close</Icon>}
        header={
          <CardTitle image="https://materializecss.com/images/sample-1.jpg"></CardTitle>
        }
      >
        Here is the standard card with an image thumbnail.
      </Card>
    );
  }
}

export default Character;
