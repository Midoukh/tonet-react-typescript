import React, { FC } from "react";
import Calculatric from "../lib/calculatric";
const Calculator: FC = (props) => {
  const handleInput = (e: any) => {
    const newCalculator = new Calculatric();
    const operation = e.target.value;
    console.log(newCalculator.parseOperation(operation));
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="screen">
          <input type="text" onChange={handleInput} />
        </div>
        <div className="keys">
          <div className="key">C</div>
          <div className="key">/</div>
          <div className="key">+</div>
          <div className="key">7</div>
          <div className="key">8</div>
          <div className="key">9</div>
          <div className="key">-</div>
          <div className="key">4</div>
          <div className="key">5</div>
          <div className="key">6</div>
          <div className="key longer">+</div>
          <div className="key">1</div>
          <div className="key">2</div>
          <div className="key">3</div>
          <div className="key">0</div>
          <div className="key">.</div>
          <div className="key longer">=</div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
