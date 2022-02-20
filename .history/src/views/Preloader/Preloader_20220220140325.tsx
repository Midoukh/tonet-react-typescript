import React from "react";
import { Container, Box } from "@chakra-ui/react";

import ReactImage from "../../components/Image/Image";

const Preloader = ({}) => {
  return (
    <Container maxW="container.xl">
      <Box>
        <ReactImage srcImg={"logo"} bg="red" />
      </Box>
    </Container>
  );
};

export default Preloader;
