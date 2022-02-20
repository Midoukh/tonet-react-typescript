import React from "react";
import { Container } from "@chakra-ui/react";

import ReactImage from "../../components/Image/Image";

const Preloader = ({}) => {
  return (
    <Container maxW="container.xl" bg="red">
      <ReactImage srcImg={"logo"} />
    </Container>
  );
};

export default Preloader;
