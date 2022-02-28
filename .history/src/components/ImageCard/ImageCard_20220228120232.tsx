import React, { FC, useState } from "react";
import ReactImage from "../Image/Image";
import { Box, Text, Skeleton } from "@chakra-ui/react";

interface props {
  src: string;
  label: string;
  skeletonColor: string;
}

const ImageCard: FC<props> = ({ src, label, skeletonColor }) => {
  const [ImageLoaded, setImageLoaded] = useState(false);

  const hanldeLoadingImage = (e: object) => {};
  return (
    <Box position="relative" cursor="pointer">
      <ReactImage
        height="xl"
        srcImg={src}
        show={ImageLoaded ? "visible" : "hidden"}
        onLoad={hanldeLoadingImage}
      />
      {!ImageLoaded && (
        <Skeleton height={180} startColor="#ccc" endColor={skeletonColor} />
      )}
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
    </Box>
  );
};

export default ImageCard;
