import React from "react";
import "./App.css";
import logo from "./logo.svg";
import Question from "../Question/Question";
import Slider from "../Slider/Slider";
import Guess from "../Guess/Guess";
import Button from "../Button/Button";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Guessing Game</h1>
        <Question />
        <Slider />
        <Button />
        <Guess />
      </div>
    );
  }
}

export default App;
