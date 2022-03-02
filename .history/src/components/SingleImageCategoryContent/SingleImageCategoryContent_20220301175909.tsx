import React, { FC, useEffect, useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import ReactImage from "../Image/Image";
import "./style.css";
const Content: FC = ({}) => {
  const gState = useSelector((state: StoreState) => state);
  const [Images] = useState(gState.SingleImageCategoriesListOfImages || []);

  return (
    <div>
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
    </div>
  );
};

export default Content;
