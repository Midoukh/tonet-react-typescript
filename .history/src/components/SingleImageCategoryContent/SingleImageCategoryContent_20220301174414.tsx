import React, { FC, useEffect, useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import ReactImage from "../Image/Image";

const Content: FC = ({}) => {
  const gState = useSelector((state: StoreState) => state);
  const [Images] = useState(gState.SingleImageCategoriesListOfImages || []);

  return (
    <Grid>
      {Images.length === 0 ? (
        <h1>Empty List</h1>
      ) : (
   
          Images.map((image) => (
            <ReactImage
              key={uuid()}
              srcImg={image.src ? image.src.medium : image.url}
              height="xl"
              width="auto"
              show="visible"
            />
          ))
  
      )}
    </Grid>
  );
};

export default Content;
