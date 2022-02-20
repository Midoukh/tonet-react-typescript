import React, { FC } from "react";
import Preloader from "./views/Preloader/Preloader";
import { sleep } from "@/utils/helpers/time";

interface appTypes {
  title?: string;
}

let documentLoaded = false;

document.addEventListener("load", () => {});

const App: FC<appTypes> = ({ title }) => {
  return <div>{documentLoaded ? "Hi bitches" : <Preloader />}</div>;
};

export default App;
