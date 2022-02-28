import React, { FC, CSSProperties } from "react";
import { Image, ResponsiveValue } from "@chakra-ui/react";
import "./Image.style.css";

interface ImageProps {
  srcImg: string;
  height: string;
  width?: string;
  animated?: boolean;
  show?: string;
}

const MyImageComponent: FC<ImageProps> = ({
  srcImg,
  height,
  animated,
  width,
  show,
}) => {
  const h =
    height === "md"
      ? "60px"
      : height === "xd"
      ? "120px"
      : height === "xl"
      ? "180px"
      : "30px";
  const w = width === "fit" ? "100%" : "initial";
  const imageVisibility = show ? show : "visible";
  //this style object need to type check with CSSProperties
  const additionalStyles: CSSProperties = {
    visibility: imageVisibility,
  };
  return <Image className={animated ? "bipit" : ""} src={srcImg} h={h} w={w} />;
};

export default MyImageComponent;
