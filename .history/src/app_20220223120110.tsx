import React, { FC, useState, useEffect } from "react";
import Preloader from "./views/Preloader/Preloader";
import Layout from "./views/Layout/Layout";
import { sleep } from "./utils/helpers/time";
import { ChakraProvider } from "@chakra-ui/react";

interface appTypes {
  title?: string;
}

const App: FC<appTypes> = ({ title }) => {
  const [documentLoaded, setDocumentLoaded] = useState(false);
  const [value, setValue] = useState(1);

  useEffect(() => {
    window.addEventListener("load", async () => {
      setValue(25);
      await sleep(2);
      setValue(50);
      await sleep(4);
      setValue(100);
      await sleep(1);
      setDocumentLoaded(true);
    });
  }, [documentLoaded]);
  return (
    <ChakraProvider>
      {documentLoaded ? <Layout /> : <Preloader value={value} />}
    </ChakraProvider>
  );
};

export default App;
