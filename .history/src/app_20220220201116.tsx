import React, { FC } from "react";
import Preloader from "./views/Preloader/Preloader";
interface appTypes {
  title?: string;
}

let documentLoaded = false;

const App: FC<appTypes> = ({ title }) => {
  return <div>{documentLoaded ? "Hi bitches" : <Preloader />}</div>;
};

export default App;
