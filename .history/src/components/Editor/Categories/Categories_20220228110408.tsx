import React, { FC } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { IMAGES_CATEGORIES } from "../../../utils/constants";

import ImageCard from "../../ImageCard/ImageCard";

const Categories: FC = () => {
  return (
    <Grid templateColumns="repeat(3, auto)" gap={4} maxH="60vh">
      {IMAGES_CATEGORIES.map((cat) => (
        <GridItem>
          <ImageCard src={cat.src} label={cat.label} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default Categories;
