import React, {
  FC,
  CSSProperties,
  useEffect,
  ReactComponentElement,
} from "react";
import { Image, Box } from "@chakra-ui/react";
import "./Image.style.css";
import { WaterFilling } from "../CSSSpinnters";

type imgHeights = "md" | "xd" | "xl" | "sm" | "100%" | "auto";

interface ImageProps {
  srcImg: string;
  height: imgHeights;
  maxH?: string;
  width?: string;
  animated?: boolean;
  show?: string;
  radius?: string;
  onLoad?(e: object): any;
  placeholderColor?: string;
  customBorder?: boolean;
  selected?: boolean;
  onClick?(e: object): any;
  loading?: boolean;
  cStyle?: CSSProperties;
}

const MyImageComponent: FC<ImageProps> = ({
  srcImg,
  height,
  animated,
  width,
  radius = "unset",
  maxH = "unset",
  placeholderColor = "#ccc",
  customBorder,
  selected,
  onClick,
  loading,
  cStyle,
}) => {
  const h =
    height === "md"
      ? "60px"
      : height === "xd"
      ? "120px"
      : height === "xl"
      ? "180px"
      : height === "100%"
      ? "100%"
      : height === "auto"
      ? "auto"
      : height === "sm"
      ? "30px"
      : "unset";
  const w = width === "fit" ? "100%" : width === "auto" ? "auto" : "auto";

  // let placeHolderHeight = h.replace("px", "");
  const color = placeholderColor.replace("#", "");

  const selectedSourceImageStyle = selected
    ? "2px solid #28D1EB"
    : "2px solid transparent";

  return (
    <Box pos="relative">
      <Image
        className={animated ? "bipit" : ""}
        src={srcImg}
        h={h}
        w={w}
        maxH={maxH}
        borderRadius={radius}
        fallbackSrc={`http://via.placeholder.com/180/${color}/${color}`}
        border={customBorder ? selectedSourceImageStyle : "unset"}
        onClick={onClick && onClick}
        filter={selected ? "grayscale(80%)" : "unset"}
        style={cStyle && cStyle}
      />
      {loading && selected && <WaterFilling />}
    </Box>
  );
};

export default MyImageComponent;
