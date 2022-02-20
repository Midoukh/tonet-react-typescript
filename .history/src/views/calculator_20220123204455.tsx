import React, { FC, useState } from "react";
import "./calculator.css";
import Calculatric from "../lib/calculatric";
const Calculator: FC = (props) => {
  const [input, setInput] = useState("0");
  const [currentKey, setCurrentKey] = useState("");
  let deleting = false,
    adjacentOps = false;
  const handleInput = (e: any) => {
    const newCalculator = new Calculatric();
    const btn = e.target.closest("button");
    const operation = btn.innerHTML;

    let updatedInput = operation;
    const isPressedKeyOperator: boolean =
      newCalculator.checkIfKeyIsOperator(operation);

    adjacentOps = newCalculator.checkAdjacentOperators(input, updatedInput);
    console.log(adjacentOps);
    if (operation === "X") {
      deleting = true;
      updatedInput = newCalculator.removeOneChar(input);
      console.log(updatedInput);
      setInput(updatedInput);
    }

    if (!adjacentOps) {
      if (isPressedKeyOperator) {
        updatedInput = ` ${updatedInput} `;
        setCurrentKey(operation);
      }
      if (!deleting) setInput((prev) => prev + updatedInput);
    }

    deleting = false;
    adjacentOps = false;
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