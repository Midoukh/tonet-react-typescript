import React, { FC, useState } from "react";
import ReactImage from "../Image/Image";
import { Box, Text, Skeleton } from "@chakra-ui/react";

interface props {
  src: string;
  label: string;
}

const ImageCard: FC<props> = ({ src, label }) => {
  const [ImageLoaded, setImageLoaded] = useState(false);
  return (
    <Box position="relative" cursor="pointer">
      <ReactImage
        height="xl"
        srcImg={src}
        show={!ImageLoaded ? "visible" : "hidden"}
      />
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
