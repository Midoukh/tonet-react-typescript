import React from "react";
import { Container, Center } from "@chakra-ui/react";

import ReactImage from "../../components/Image/Image";
import logo from "../../assets/logo1.jpg";

const Preloader = ({}) => {
  return (
    <Container
      maxW="container.xl"
      h="100vh"
      centerContent
      alignItems={"center"}
    >
      <Center bg="red" h="100%" w="100%">
        <ReactImage srcImg={logo} height="md" />
      </Center>
    </Container>
  );
};

export default Preloader;
