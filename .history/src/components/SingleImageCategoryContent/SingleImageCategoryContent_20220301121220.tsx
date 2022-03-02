import React, { FC } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import ReactImage from "../Image/Image";

const Content: FC = ({}) => {
  const gState = useSelector((state: StoreState) => state);
  console.log("[SingleImage]", gState);
  return (
    <Grid>
      {/* {gState.SingleImageCategoriesListOfImages.length === 0 ? (
        <h1>Empty List</h1>
      ) : (
        gState.SingleImageCategoriesListOfImages.map((image) => (
          <GridItem key={uuid()}>
            <ReactImage srcImg={image.src.original} height="md" />
          </GridItem>
        ))
      )} */}
      <h1>Empty List</h1>
    </Grid>
  );
};

export default Content;
