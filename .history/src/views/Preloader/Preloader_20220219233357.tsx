import React from "react";
import { Container } from "@chakra-ui/react";

import logo from "@assets/logo.JPG";
import ReactImage from "@components/Image/Image";

const Preloader = ({}) => {
  return (
    <Container>
      <ReactImage srcImg={logo} />
    </Container>
  );
};

export default Preloader;
