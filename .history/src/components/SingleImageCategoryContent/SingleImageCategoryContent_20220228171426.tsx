import React, { FC } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Content: FC = ({}) => {
  const gState = useSelector((state: StoreState) => state);
  console.log(gState);
  return <Grid>Content</Grid>;
};

export default Content;
