import React, { FC } from "react";
import Editor from "../../components/Editor/Editor";
import { Container, Box } from "@chakra-ui/react";
interface props {}

const Layout = ({}) => {
  return (
    <Container maxW="container.xl" h="100vh" bg="Blue.700">
      <Box bg="Blue.700">
        <Editor />
      </Box>
    </Container>
  );
};

export default Layout;
