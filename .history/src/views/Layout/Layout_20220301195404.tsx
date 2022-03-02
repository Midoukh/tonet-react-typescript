import React, { FC } from "react";
import { Box } from "@chakra-ui/react";

import Editor from "../../components/Editor/Editor";
import TargetImageDisplayer from "../../components/TargetImageDisplayer/TargetImageDisplayer";
interface props {}

const Layout = ({}) => {
  return (
    <Box bg="#2A4365" w="100%" h="100%" d="grid" gridTemplateColumns="60% 40%">
      <TargetImageDisplayer />
      <Editor />
    </Box>
  );
};

export default Layout;
