import React, { FC, useState, useEffect } from "react";
import Preloader from "./views/Preloader/Preloader";
import { sleep } from "./utils/helpers/time";

interface appTypes {
  title?: string;
}

const App: FC<appTypes> = ({ title }) => {
  const [documentLoaded, setDocumentLoaded] = useState(false);
  useEffect(() => {
    window.addEventListener("load", async () => {
      await sleep(4);
      setDocumentLoaded(true);
      console.log(documentLoaded);
    });
  }, [documentLoaded]);
  return <div>{documentLoaded ? "Hi bitches" : <Preloader />}</div>;
};

export default App;
