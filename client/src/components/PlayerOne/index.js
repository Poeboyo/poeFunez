import React from "react";
import { Carousel } from "react-materialize";

function PlayerOne() {
  return (
    <div>
      <div className="carousel">
        <a class="carousel-item" href="#one!">
          <img src="./images/ff.png" alt="one" />
        </a>
        <a class="carousel-item" href="#two!">
          <img src="https://picsum.photos/200/300?image=0" alt="two" />
        </a>
        <a class="carousel-item" href="#three!">
          <img src="https://picsum.photos/200/300?image=0" alt="three" />
        </a>
        <a class="carousel-item" href="#four!">
          <img src="https://picsum.photos/200/300?image=0" alt="four" />
        </a>
        <a class="carousel-item" href="#five!">
          <img src="https://picsum.photos/200/300?image=0" alt="five" />
        </a>
      </div>
    </div>
  );
}

export default PlayerOne;
