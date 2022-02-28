import React, { FC } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import ReactImage from "../Image/Image";

const Content: FC = ({}) => {
  const gState = useSelector((state: StoreState) => state);
  console.log(gState);
  if (!gState.SingleImageCategoriesListOfImages.length)
    return <h1>Empty List</h1>;
  return (
    <Grid>
      {gState.SingleImageCategoriesListOfImages.map((image) => (
        <GridItem>
          <ReactImage srcImg="{image.}" height="md" />
        </GridItem>
      ))}
    </Grid>
  );
};

export default Content;
