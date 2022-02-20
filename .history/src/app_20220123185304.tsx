import React, { FC } from "react";
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
