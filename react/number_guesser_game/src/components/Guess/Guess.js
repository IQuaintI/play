import React from "react";
import Button from "../Slider/Slider";

export const computerGuess = Math.floor(Math.random() * 5) + 1;

function Guess() {
  return (
    <div>
      <p>Computer Guess: {computerGuess}</p>
    </div>
  );
}

export default Guess;
