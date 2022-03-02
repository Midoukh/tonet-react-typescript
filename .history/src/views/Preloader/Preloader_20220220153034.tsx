import React from "react";
import { Container, Center, CircularProgress } from "@chakra-ui/react";

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
        <CircularProgress value={50} />
      </Center>
    </Container>
  );
};

export default Preloader;