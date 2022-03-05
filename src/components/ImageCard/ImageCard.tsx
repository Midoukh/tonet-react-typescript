import React, { FC, useState, useRef, useEffect } from "react";
import ReactImage from "../Image/Image";
import { Box, Text, Skeleton, CircularProgress } from "@chakra-ui/react";
import GridLoader from "react-spinners/GridLoader";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchImageCategory,
  getSingleImageContent,
  setCurrentImageCategory,
} from "../../store/actionCreators";
import { pixelsApi } from "../../lib/axios";
import { FilteringArrOfObjs } from "../../utils/helpers/arrays";

interface props {
  src: string;
  label: string;
  skeletonColor: string;
  endpoint: string;
}

const ImageCard: FC<props> = ({ src, label, skeletonColor, endpoint }) => {
  const [ImageLoaded, setImageLoaded] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const componentMounted = useRef(true);

  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);

  const hanldeLoadingImage = (e: object) => {
    setImageLoaded((prev) => true);
  };
  const handleFetchCategoryContent = async () => {
    setIsFetching(true);
    dispatch(setCurrentImageCategory(label));
    try {
      const response = await pixelsApi.get(
        `${endpoint}?type=Photo&per_page=60&width=3607`
      );
      dispatch(fetchImageCategory(true));
      const filteredArrayOfObj = FilteringArrOfObjs(response.data.media, [
        "url",
        "src",
        "id",
        "height",
        "width",
        "type",
      ]);
      dispatch(getSingleImageContent(filteredArrayOfObj));
      setIsFetching(false);
    } catch (error) {
      console.log(error);
      setIsFetching(false);
    }
  };
  useEffect(() => {}, []);
  return (
    <Box
      position="relative"
      cursor="pointer"
      onClick={handleFetchCategoryContent}
    >
      <ReactImage
        height="xl"
        srcImg={src}
        show={ImageLoaded ? "visible" : "hidden"}
        onLoad={hanldeLoadingImage}
      />
      {!ImageLoaded && (
        <Skeleton height={180} startColor="#ccc" endColor={skeletonColor} />
      )}
      {isFetching ? (
        <div
          style={{
            position: "absolute",
            top: "38%",
            left: "26%",
          }}
        >
          <GridLoader size={15} margin={1} color={skeletonColor} />
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
