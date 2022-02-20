import React, { FC, useState } from "react";
import "./calculator.css";
import Calculatric from "../lib/calculatric";
const Calculator: FC = (props) => {
  const [input, setInput] = useState("");
  const handleInput = (e: any) => {
    const newCalculator = new Calculatric();
    const btn = e.target.closest("button");
    const operation = btn.innerHTML;

    const isPressedKeyOperator = newCalculator.checkIfKeyIsOperator(operation);

    console.log(isPressedKeyOperator);

    setInput((prev) => prev + operation);
    console.log(newCalculator.parseOperation(operation));
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="screen">
          <p>{input}</p>
        </div>
        <div className="keys" onClick={handleInput}>
          <button className="key">C</button>
          <button className="key">/</button>
          <button className="key">+</button>
          <button className="key">X</button>
          <button className="key">7</button>
          <button className="key">8</button>
          <button className="key">9</button>
          <button className="key">-</button>
          <button className="key">4</button>
          <button className="key">5</button>
          <button className="key">6</button>
          <button className="key longer">+</button>
          <button className="key">1</button>
          <button className="key">2</button>
          <button className="key">3</button>
          <button className="key">0</button>
          <button className="key">.</button>
          <button className="key wider">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
