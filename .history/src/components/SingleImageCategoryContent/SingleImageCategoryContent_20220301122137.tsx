import React, { FC, useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import ReactImage from "../Image/Image";

const Content: FC = ({}) => {
  const gState = useSelector((state: StoreState) => state);
  console.log("[SingleImage]", gState);

  return (
    <Grid>
      {gState.SingleImageCategoriesListOfImages.length === 0 ? (
        <h1>Empty List</h1>
      ) : (
        gState.SingleImageCategoriesListOfImages.map((image) => (
          <GridItem key={uuid()}>
            <ReactImage
              srcImg="https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              height="md"
            />
          </GridItem>
        ))
      )}
    </Grid>
  );
};

export default Content;
