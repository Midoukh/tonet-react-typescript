import React, { FC } from "react";
import ReactImage from "../Image/Image";
import { Box, Text } from "@chakra-ui/react";

interface props {
  src: string;
  label: string;
}

const ImageCard: FC<props> = ({ src, label }) => {
  return (
    <Box position="relative" cursor="pointer">
      <ReactImage height="xl" srcImg={src} />
      <Text
        color="#f5f5f5"
        fontWeight={700}
        fontSize="1.2em"
        textShadow="2px 2px 30px #000000a6"
        position="absolute"
        top="45%"
        left="15%"
      >
        {label}
      </Text>
    </Box>
  );
};

export default ImageCard;
