import React, { FC } from "react";
import Calculator from "./views/calculator";
interface appTypes {
  title?: string;
}

const App: FC<appTypes> = ({ title }) => {
  return (
    <div>
      <Calculator />
    </div>
  );
};

export default App;
