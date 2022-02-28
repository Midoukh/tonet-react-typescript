import React, { FC } from "react";
import Editor from "../../components/Editor/Editor";
import { Container, Box } from "@chakra-ui/react";
interface props {}

const Layout = ({}) => {
  return (
    <Container maxW="container.xl" h="100vh">
      <Box bg="#2A4365" w="100%" h="100%">
        <Editor />
      </Box>
    </Container>
  );
};

export default Layout;
