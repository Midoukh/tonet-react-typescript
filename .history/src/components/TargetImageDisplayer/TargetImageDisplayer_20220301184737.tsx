import React, { FC, useEffect, useState } from "react";
import ReactImage from "../Image/Image";
import { Box } from "@chakra-ui/react";
import GridLoader from "react-spinners/GridLoader";
import { pixelsApi } from "../../lib/axios";
import { generateRandomNumber } from "../../utils/helpers/generator";

const Comp: FC = ({}) => {
  const [imageSrc, setImageSrc] = useState("");
  const [imageMainColor, setImageMainColor] = useState("");
  const handleGetCuratedPhoto = async (signal: any) => {
    try {
      const response = await pixelsApi.get("/curated", {
        signal,
      });
      const { photos } = response.data;
      const randomIndex = generateRandomNumber(0, photos.length - 1);
      const photoSrc = photos[randomIndex].src.original;
      setImageSrc(photoSrc);
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
