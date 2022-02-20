import React from "react";
import { Container, Center } from "@chakra-ui/react";
import ProgressBar from "@ramonak/react-progress-bar";

import ReactImage from "../../components/Image/Image";
import logo from "@assets/logo.png";

const Preloader = ({}) => {
  return (
    <Container
      maxW="container.xl"
      h="100vh"
      centerContent
      alignItems={"center"}
    >
      <Center bg="#231A2F" h="100%" w="100%" alignItems={"center"}>
        <ReactImage srcImg={logo} height="md" />
        <ProgressBar completed={60} />
      </Center>
    </Container>
  );
};

export default Preloader;
