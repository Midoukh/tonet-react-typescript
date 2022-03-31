import React, { FC } from "react";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import Editor from "../../components/Editor/Editor";
import TargetImageDisplayer from "../../components/TargetImageDisplayer/TargetImageDisplayer";
import ReportBug from "../../components/ReportBug/ReportBug";
import CollectReviews from "../../components/CollectReviews/CollectReviews";
import Share from "../../components/Share/Share";
interface props {}

const Layout: FC = ({}) => {
  const { reportBugVis, reviewVis, shareVis } = useSelector(
    (state: StoreState) => state
  );

  return (
    <Box bg="#2A4365" w="100%" h="100%" d="grid" gridTemplateColumns="60% 40%">
      <TargetImageDisplayer />
      <Editor />
      <ReportBug isOpen={reportBugVis} />
      <CollectReviews isOpen={reviewVis} />
      <Share isOpen={shareVis} />
    </Box>
  );
};

export default Layout;
