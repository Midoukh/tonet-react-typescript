import React, { FC } from "react";
import Editor from "../../components/Editor/Editor";
import { Container, Box } from "@chakra-ui/react";
interface props {}

const Layout = ({}) => {
  return (
    <Box bg="#2A4365" w="100%" h="100%" d="grid" gridTemplateColumns="60% 40%">
      <div>Display imge</div>
      <Editor />
    </Box>
  );
};

export default Layout;
