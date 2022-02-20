import React from "react";
import { Container, Box } from "@chakra-ui/react";

import ReactImage from "../../components/Image/Image";

const Preloader = ({}) => {
  return (
    <Container maxW="container.xl" h="100vh" centerContent>
      <Box bg="red" alignItems={"center"} h="100%" w="100%">
        {/* <ReactImage srcImg={"logo"} /> */}
        There are many benefits to a joint design and development system. Not
        only does it bring benefits to the design team.
      </Box>
    </Container>
  );
};

export default Preloader;