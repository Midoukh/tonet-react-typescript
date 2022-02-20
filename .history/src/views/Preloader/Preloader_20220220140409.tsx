import React from "react";
import { Container, Box } from "@chakra-ui/react";

import ReactImage from "../../components/Image/Image";

const Preloader = ({}) => {
  return (
    <Container maxW="container.xl" centerContent>
      <Box bg="red">
        <ReactImage srcImg={"logo"} />
      </Box>
    </Container>
  );
};

export default Preloader;
