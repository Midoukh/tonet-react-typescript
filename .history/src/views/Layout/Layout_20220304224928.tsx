import React, { FC } from "react";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import Editor from "../../components/Editor/Editor";
import TargetImageDisplayer from "../../components/TargetImageDisplayer/TargetImageDisplayer";
import ReportBug from "../../components/ReportBug/ReportBug";
interface props {}

const Layout = ({}) => {
  const { reportBugVis } = useSelector((state: StoreState) => state);

  return (
    <Box bg="#2A4365" w="100%" h="100%" d="grid" gridTemplateColumns="60% 40%">
      <TargetImageDisplayer />
      <Editor />
      <ReportBug isOpen={reportBugVis} />
    </Box>
  );
};

export default Layout;
