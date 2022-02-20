import React from "react";
import { Container } from "@chakra-ui/react";

import ReactImage from "../../components/Image/Image";

const Preloader = ({}) => {
  return (
    <Container maxW="container.xl" bg="gray.100">
      <ReactImage srcImg={"logo"} />
      containet
    </Container>
  );
};

export default Preloader;
