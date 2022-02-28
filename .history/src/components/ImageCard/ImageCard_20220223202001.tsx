import React, { FC } from "react";
import ReactImage from "../Image/Image";
import { Box, Text } from "@chakra-ui/react";

interface props {
  src: string;
  label: string;
}

const ImageCard: FC<props> = ({ src, label }) => {
  return (
    <Box>
      <ReactImage height="md" srcImg={src} />
      <Text>{label}</Text>
    </Box>
  );
};
