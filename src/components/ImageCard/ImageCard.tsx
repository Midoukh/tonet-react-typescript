import React, { FC, useState, useRef, useEffect } from "react";
import ReactImage from "../Image/Image";
import { Box, Text, Skeleton, CircularProgress } from "@chakra-ui/react";
import GridLoader from "react-spinners/GridLoader";
import { useSelector, useDispatch } from "react-redux";

import { fetchImageCategory } from "../../store/actionCreators";
import { pixelsApi } from "../../lib/axios";
import { FilteringArrOfObjs } from "../../utils/helpers/arrays";

interface props {
  src: string;
  label: string;
  placeholderColor?: string;
  endpoint: string;
}

const ImageCard: FC<props> = ({
  src,
  label,
  placeholderColor = "#ccc",
  endpoint,
}) => {
  const [ImageLoaded, setImageLoaded] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const componentMounted = useRef(true);

  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);

  const handleFetchCategoryContent = async () => {
    setIsFetching(true);
    try {
      const response = await pixelsApi.get(
        `${endpoint}?type=Photo&per_page=60&width=3607`
      );
      console.log(response.data);
      const filteredArrayOfObj: Image[] = FilteringArrOfObjs(
        response.data.media,
        ["url", "src", "id", "height", "width", "type", "avg_color"]
      );
      const newFetchCategoryState: FetchCategory = {
        isFetched: true,
        currentImageCategory: label,
        SingleImageCategoriesListOfImages: filteredArrayOfObj,
      };
      dispatch(fetchImageCategory(newFetchCategoryState));
      setIsFetching(false);
    } catch (error) {
      console.log(error);
      setIsFetching(false);
    }
  };

  return (
    <Box
      position="relative"
      cursor="pointer"
      onClick={handleFetchCategoryContent}
    >
      <ReactImage
        height="xl"
        srcImg={src}
        placeholderColor={placeholderColor}
      />
      {isFetching ? (
        <div
          style={{
            position: "absolute",
            top: "38%",
            left: "26%",
          }}
        >
          <GridLoader size={15} margin={1} color={placeholderColor} />
        </div>
      ) : (
        <Text
          color="#f5f5f5"
          fontWeight={700}
          fontSize="1.2em"
          textShadow="2px 2px 30px #000000a6"
          position="absolute"
          top="45%"
          left="15%"
          userSelect="none"
        >
          {label}
        </Text>
      )}
    </Box>
  );
};

export default ImageCard;
