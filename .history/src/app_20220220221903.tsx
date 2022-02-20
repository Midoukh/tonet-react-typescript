import React, { FC, useState, useEffect } from "react";
import Preloader from "./views/Preloader/Preloader";
import { sleep } from "./utils/helpers/time";

interface appTypes {
  title?: string;
}

const App: FC<appTypes> = ({ title }) => {
  const [documentLoaded, setDocumentLoaded] = useState(false);
  const [value, setValue] = useState(1);

  useEffect(() => {
    window.addEventListener("load", async () => {
      setValue(25);
      await sleep(42);
      setValue(50);

      await sleep(4);
      setValue(100);
      await sleep(1);

      setDocumentLoaded(true);
      console.log(documentLoaded);
    });
  }, [documentLoaded]);
  return (
    <div>{documentLoaded ? "Hi bitches" : <Preloader value={value} />}</div>
  );
};

export default App;