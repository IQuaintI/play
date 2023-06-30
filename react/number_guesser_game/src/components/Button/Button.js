import React from "react";
import Output from "../Output/Output";
import "./Button.css";

function Button() {
  return (
    <div>
      <button onClick={Output}>Submit</button>
    </div>
  );
}

export default Button;
