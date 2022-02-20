import React from "react";
import { Container, Center } from "@chakra-ui/react";

import ReactImage from "../../components/Image/Image";
import logo from "../../assets/logo.JPG";

const Preloader = ({}) => {
  return (
    <Container
      maxW="container.xl"
      h="100vh"
      centerContent
      alignItems={"center"}
    >
      <Center bg="red" h="100%" w="100%">
        <ReactImage srcImg={logo} />
        There are many benefits to a joint design and development system. Not
        only does it bring benefits to the design team.
      </Center>
    </Container>
  );
};

export default Preloader;
