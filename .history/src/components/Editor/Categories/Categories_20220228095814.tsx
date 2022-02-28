import React, { FC } from "react";
import { Grid } from "@chakra-ui/react";
import { IMAGES_CATEGORIES } from "src/utils/constants";

import ImageCard from "../../ImageCard/ImageCard";

const Categories: FC = () => {
  return (
    <Grid>
      {IMAGES_CATEGORIES.map((cat) => (
        <ImageCard src={cat.src} label={cat.label} />
      ))}
    </Grid>
  );
};

export default Categories;
