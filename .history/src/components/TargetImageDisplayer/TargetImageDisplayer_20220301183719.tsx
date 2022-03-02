import React, { FC, useEffect, useState } from "react";
import ReactImage from "../Image/Image";
import { Box } from "@chakra-ui/react";
import GridLoader from "react-spinners/GridLoader";
import { pixelsApi } from "src/lib/axios";

const Comp: FC = ({}) => {
  const [imageSrc, setImageSrc] = useState("");
  const [imageMainColor, setImageMainColor] = useState("");
  const handleGetCuratedPhoto = async (signal: any) => {
    try {
      const response = await pixelsApi.get("/curated", {
        signal,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    handleGetCuratedPhoto(signal);
    return () => abortController.abort();
  }, []);

  return (
    <Box h="100%" w="100%">
      {imageSrc === "" ? (
        <GridLoader size={15} margin={1} color={imageMainColor} />
      ) : (
        <ReactImage srcImg={imageSrc} height="100%" />
      )}
    </Box>
  );
};

export default Comp;
