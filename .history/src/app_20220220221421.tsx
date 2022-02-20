import React, { FC, useState, useEffect } from "react";
import Preloader from "./views/Preloader/Preloader";
import { sleep } from "./utils/helpers/time";

interface appTypes {
  title?: string;
}

const App: FC<appTypes> = ({ title }) => {
  const [documentLoaded, setDocumentLoaded] = useState(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    window.addEventListener("load", async () => {
      await sleep(4);
      setDocumentLoaded(true);
      console.log(documentLoaded);
    });
  }, [documentLoaded]);
  return (
    <div>{documentLoaded ? "Hi bitches" : <Preloader value={value} />}</div>
  );
};

export default App;
