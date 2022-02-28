import React, { FC, useState } from "react";
import ReactImage from "../Image/Image";
import { Box, Text, Skeleton, CircularProgress } from "@chakra-ui/react";
import { sleep } from "../../utils/helpers/time";

interface props {
  src: string;
  label: string;
  skeletonColor: string;
}

const ImageCard: FC<props> = ({ src, label, skeletonColor }) => {
  const [ImageLoaded, setImageLoaded] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const hanldeLoadingImage = (e: object) => {
    setImageLoaded((prev) => true);
  };
  const handleFetchCategoryContent = async () => {
    setIsFetching(true);
    await sleep(2000);
    console.log("fetched");
  };
  return (
    <Box
      position="relative"
      cursor="pointer"
      onClick={handleFetchCategoryContent}
    >
      <ReactImage
        height="xl"
        srcImg={src}
        show={ImageLoaded ? "visible" : "hidden"}
        onLoad={hanldeLoadingImage}
      />
      {!ImageLoaded && (
        <Skeleton height={180} startColor="#ccc" endColor={skeletonColor} />
      )}
      {isFetching ? (
        <CircularProgress position="absolute" top="45%" left="15%" />
      ) : (
        <Text
          color="#f5f5f5"
          fontWeight={700}
          fontSize="1.2em"
          textShadow="2px 2px 30px #000000a6"
          position="absolute"
          top="45%"
          left="15%"
          userSelect="none"
        >
          {label}
        </Text>
      )}
    </Box>
  );
};

export default ImageCard;
