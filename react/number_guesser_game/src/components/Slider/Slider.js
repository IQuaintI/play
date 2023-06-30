import React from "react";
import { useState } from "react";
import "./Slider.css";

const MAX = 5;

export default function Slider() {
  const [value, setValue] = useState(0);

  const getBackgroundSize = () => {
    return { backgroundSize: `${(value * 100) / MAX}% 100%` };
  };

  return (
    <div className="App">
      <input
        type="range"
        min="0"
        max={MAX}
        onChange={(e) => setValue(e.target.value)}
        style={getBackgroundSize()}
        value={value}
      />
      <output>{value}</output>
    </div>
  );
}

export const Output = Slider.value;
