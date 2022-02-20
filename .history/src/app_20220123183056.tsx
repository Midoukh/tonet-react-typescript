import React, { FC } from "react";

interface appTypes {
  title?: string;
}

const App: FC<appTypes> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default App;
