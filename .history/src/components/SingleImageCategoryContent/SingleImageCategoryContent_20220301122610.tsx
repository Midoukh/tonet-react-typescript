import React, { FC, useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import ReactImage from "../Image/Image";

const Content: FC = ({}) => {
  const gState = useSelector((state: StoreState) => state);
  const [Images] = useState(gState.SingleImageCategoriesListOfImages || []);
  console.log("[SingleImage]", gState);

  return (
    <Grid
      templateColumns="repeat(3, auto)"
      gap={4}
      maxH="75vh"
      overflowY="scroll"
    >
      {Images.length === 0 ? (
        <h1>Empty List</h1>
      ) : (
        Images.map((image) => (
          <GridItem key={uuid()}>
            <ReactImage
              srcImg="https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              height="xl"
              show="visible"
            />
          </GridItem>
        ))
      )}
    </Grid>
  );
};

export default Content;
