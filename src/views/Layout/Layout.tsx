import React, { FC } from "react";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import Editor from "../../components/Editor/Editor";
import TargetImageDisplayer from "../../components/TargetImageDisplayer/TargetImageDisplayer";
import ReportBug from "../../components/ReportBug/ReportBug";
import CollectReviews from "../../components/CollectReviews/CollectReviews";
interface props {}

const Layout: FC = ({}) => {
  const { reportBugVis, reviewVis } = useSelector((state: StoreState) => state);

  return (
    <Box bg="#2A4365" w="100%" h="100%" d="grid" gridTemplateColumns="60% 40%">
      <TargetImageDisplayer />
      <Editor />
      <ReportBug isOpen={reportBugVis} />
      <CollectReviews isOpen={reviewVis} />
    </Box>
  );
};

export default Layout;
