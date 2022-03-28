import React, { FC, useState, MouseEvent } from "react";
import ReactImage from "../Image/Image";
import { Box, Text } from "@chakra-ui/react";
import GridLoader from "react-spinners/GridLoader";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { fetchImageCategory } from "../../store/actionCreators";
import { pixelsApi } from "../../lib/axios";
import { FilteringArrOfObjs } from "../../utils/helpers/arrays";

interface props {
  src: string;
  label: string;
  placeholderColor?: string;
  endpoint: string;
  isFav?: boolean;
  removeFromFavs?(): void;
  checkIfFav?(label: string): void;
}

const ImageCard: FC<props> = ({
  src,
  label,
  placeholderColor = "#ccc",
  endpoint,
  isFav,
  removeFromFavs,
  checkIfFav,
}) => {
  const [isFetching, setIsFetching] = useState(false);
  const dispatch = useDispatch();
  const gState = useSelector((state: StoreState) => state);

  const handleFetchCategoryContent = async (e: any) => {
    if (e.target.tagName === "svg") return;
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
      if (checkIfFav) checkIfFav(label);
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
      {isFav && (
        <AiOutlineCloseCircle
          onClick={removeFromFavs}
          size={35}
          color="#fff"
          style={{
            position: "absolute",
            top: ".5rem",
            right: ".5rem",
            opacity: ".8",
            cursor: "pointer",
          }}
        />
      )}
    </Box>
  );
};

export default ImageCard;
