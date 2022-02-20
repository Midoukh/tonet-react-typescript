import React, { FC } from "react";
import { Container, Flex, Box } from "@chakra-ui/react";
import ProgressBar from "@ramonak/react-progress-bar";

import ReactImage from "../../components/Image/Image";
import logo from "../../assets/logo.png";

interface preLoaderProps {
  value?: number;
}

const Preloader: FC<preLoaderProps> = ({ value }) => {
  return (
    <Container
      maxW="container.xl"
      h="100vh"
      centerContent
      alignItems={"center"}
    >
      <Flex
        bg="#231A2F"
        h="100%"
        w="100%"
        align={"center"}
        justify={"center"}
        direction="column"
      >
        <Box>
          <ReactImage srcImg={logo} height="md" />
        </Box>
        <br />
        <Box>
          <ProgressBar
            labelColor="transparent"
            completed={60}
            width="10vw"
            height="1vh"
            bgColor="#41526F"
            customLabel="loding"
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default Preloader;
