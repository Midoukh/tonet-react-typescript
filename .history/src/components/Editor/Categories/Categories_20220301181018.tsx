import React, { FC, useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { v4 as uuid } from "uuid";

import { IMAGES_CATEGORIES } from "../../../utils/constants";
import ImageCard from "../../ImageCard/ImageCard";

const Categories: FC = () => {
  useEffect(() => {}, []);
  console.log("[Categories] rerender");
  return (
    <Grid
      templateColumns="repeat(3, auto)"
      gap={4}
      maxH="75vh"
      overflowY="scroll"
    >
      {IMAGES_CATEGORIES.map((cat) => (
        <GridItem key={uuid()}>
          <ImageCard
            src={cat.src}
            label={cat.label}
            skeletonColor={cat.skeletonColor}
            endpoint={cat.endpoint}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default Categories;
