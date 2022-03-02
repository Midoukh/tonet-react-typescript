import React, { FC, CSSProperties, useEffect } from "react";
import { Image } from "@chakra-ui/react";
import "./Image.style.css";

interface ImageProps {
  srcImg: string;
  height: string;
  width?: string;
  animated?: boolean;
  show?: string;
  onLoad?(e: object): any;
}

const MyImageComponent: FC<ImageProps> = ({
  srcImg,
  height,
  animated,
  width,
  show = "visible",
  onLoad,
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
      : "30px";
  const w = width === "fit" ? "100%" : width === "auto" ? "auto" : "initial";

  //this style object need to type check with CSSProperties
  const additionalStyles: CSSProperties = {
    visibility: show === "visible" ? "visible" : "hidden",
  };
  return (
    <Image
      className={animated ? "bipit" : ""}
      src={srcImg}
      h={h}
      w={w}
      visibility={additionalStyles.visibility}
      position={
        additionalStyles.visibility === "visible" ? "initial" : "absolute"
      }
      onLoad={onLoad}
    />
  );
};

export default MyImageComponent;