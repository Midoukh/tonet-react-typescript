import React, { FC } from "react";
import { Box } from "@chakra-ui/react";
import "./style.css";

const Comp: FC = ({}) => {
  return (
    <Box position="absolute" top="38%" left="29%">
      <Box className="loading-wrapper">
        <Box className="loading-pouring"></Box>
      </Box>
    </Box>
  );
};

export default Comp;
