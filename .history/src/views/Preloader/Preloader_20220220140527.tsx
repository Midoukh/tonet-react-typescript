import React from "react";
import { Container, Box } from "@chakra-ui/react";

import ReactImage from "../../components/Image/Image";

const Preloader = ({}) => {
  return (
    <Container maxW="container.xl" centerContent alignItems>
      <Box bg="red" maxW="3xl">
        {/* <ReactImage srcImg={"logo"} /> */}
        There are many benefits to a joint design and development system. Not
        only does it bring benefits to the design team.
      </Box>
    </Container>
  );
};

export default Preloader;
