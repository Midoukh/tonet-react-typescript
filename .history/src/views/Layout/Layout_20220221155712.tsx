import React, { FC } from "react";
import Editor from "../../components/Editor/Editor";
import { Container } from "@chakra-ui/react";
interface props {}

const Layout = ({}) => {
  return (
    <Container w="100vw" h="100vh" bg="blue.700">
      <Editor />
    </Container>
  );
};

export default Layout;
