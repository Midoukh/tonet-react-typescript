import React, { FC, useEffect, useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import SourceImage from "./SourceImage/SourceImage";
import "./style.css";

const Content: FC = ({}) => {
  const gState = useSelector((state: StoreState) => state);
  const [Images] = useState(
    gState.fetchCategory.SingleImageCategoriesListOfImages || []
  );

  useEffect(() => {}, []);
  return (
    <Grid
      templateColumns="repeat(3, auto)"
      gap={1}
      maxH="75vh"
      overflowY="scroll"
    >
      {Images.length === 0 ? (
        <h1>Empty List</h1>
      ) : (
        Images.map((image) => (
          <GridItem key={uuid()} cursor="pointer">
            <SourceImage
              srcImg={image.src ? image.src.medium : image.url}
              width="auto"
              show="visible"
              placeholderColor={image.avg_color}
              id={image.id}
            />
          </GridItem>
        ))
      )}
    </Grid>
  );
};

export default Content;
