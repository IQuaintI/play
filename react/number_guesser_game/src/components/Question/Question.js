import React from "react";
import "./Question.css";

const question = {
  question: "Guess a number between 1 and 5",
};

class Question extends React.Component {
  render() {
    return (
      <div className="Question">
        <h2>{question.question}</h2>
      </div>
    );
  }
}

export default Question;
