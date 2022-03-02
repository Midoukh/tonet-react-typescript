import React, { FC } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import ReactImage from "../Image/Image";

const Content: FC = ({}) => {
  const gState = useSelector((state: StoreState) => state);
  console.log("[SingleImageCategoryContent]");
  console.log(gState.SingleImageCategoriesListOfImages);
  return (
    <Grid>
      {gState.SingleImageCategoriesListOfImages.length === 0 ? (
        <h1>Empty List</h1>
      ) : (
        gState.SingleImageCategoriesListOfImages.map((image) => (
          <GridItem>
            <ReactImage srcImg={image.src.large} height="md" />
          </GridItem>
        ))
      )}
    </Grid>
  );
};

export default Content;
