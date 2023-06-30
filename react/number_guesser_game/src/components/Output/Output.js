import React from "react";
import Slider from "../Slider/Slider";
import Guess from "../Guess/Guess";

function Output() {
  if (Guess === Slider) {
    return alert("Correct!");
  } else {
    return alert("Incorrect!");
  }
}

export default Output;
