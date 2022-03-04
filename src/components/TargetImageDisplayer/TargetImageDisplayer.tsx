import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Flex, Image } from "@chakra-ui/react";
import ReactImage from "../Image/Image";
import GridLoader from "react-spinners/GridLoader";
import { pixelsApi } from "../../lib/axios";
import { generateRandomNumber } from "../../utils/helpers/generator";

const Comp: FC = ({}) => {
  const [imageMainColor, setImageMainColor] = useState("");
  const { TargetImage } = useSelector((state: StoreState) => state);
  const [imageSrc, setImageSrc] = useState("");

  const handleGetCuratedPhoto = async (signal: any) => {
    try {
      const response = await pixelsApi.get("/curated", {
        signal,
      });
      const { photos } = response.data;
      const randomIndex = generateRandomNumber(0, photos.length - 1);
      const photoSrc = photos[randomIndex].src.large;
      setImageSrc(photoSrc);
      setImageMainColor(photoSrc.avg_color);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    if (!TargetImage) handleGetCuratedPhoto(signal);
    console.log("rerendering the targetImageDisplayer");
    console.log(TargetImage);
    if (TargetImage) setImageSrc(TargetImage);
    return () => abortController.abort();
  }, [TargetImage]);

  return (
    <Flex h="100%" w="100%" justify="center" align="center">
      {imageSrc === "" ? (
        <GridLoader size={15} margin={1} color={imageMainColor} />
      ) : (
        <Image maxH="100vh" h="auto" w="auto" src={imageSrc} />
      )}
    </Flex>
  );
};

export default Comp;
