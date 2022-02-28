import React, { FC, useEffect } from "react";
import { Container, Flex, Box } from "@chakra-ui/react";
import ProgressBar from "@ramonak/react-progress-bar";

import ReactImage from "../../components/Image/Image";
import logo from "../../assets/logo.png";

interface preLoaderProps {
  value: number;
}

const Preloader: FC<preLoaderProps> = ({ value }) => {
  useEffect(() => {}, [value]);
  return (
    <Box
      d="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      h="100vh"
      w="100%"
      bg="#231A2F"
    >
      <Box>
        <ReactImage srcImg={logo} height="sm" animated />
      </Box>
      <br />
      <Box>
        <ProgressBar
          labelColor="transparent"
          completed={value}
          width="10vw"
          height="1vh"
          bgColor="#41526F"
          customLabel="loding"
        />
      </Box>
    </Box>
  );
};

export default Preloader;
