import React, { FC } from "react";
import Preloader from "./views/Preloader/Preloader";
interface appTypes {
  title?: string;
}

const App: FC<appTypes> = ({ title }) => {
  return (
    <div>
      <Preloader />
    </div>
  );
};

export default App;