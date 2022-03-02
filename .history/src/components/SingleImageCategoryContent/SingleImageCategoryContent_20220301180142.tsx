import React, { FC, useEffect, useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import ReactImage from "../Image/Image";
import "./style.css";
import { MdGridGoldenratio } from "react-icons/md";
const Content: FC = ({}) => {
  const gState = useSelector((state: StoreState) => state);
  const [Images] = useState(gState.SingleImageCategoriesListOfImages || []);

  return (
    <Grid>
      {Images.length === 0 ? (
        <h1>Empty List</h1>
      ) : (
        Images.map((image) => (
          <GridItem key={uuid()}>
            <ReactImage
              srcImg={image.src ? image.src.medium : image.url}
              height="xl"
              width="auto"
              show="visible"
            />
          </GridItem>
        ))
      )}
    </Grid>
  );
};

export default Content;