import React, { FC } from "react";
import { Image } from "@chakra-ui/react";
import "./Image.style.css";

interface ImageTypes {
  srcImg: string;
  height: string;
  width?: string;
  animated?: boolean;
}

const MyImageComponent: FC<ImageTypes> = ({
  srcImg,
  height,
  animated,
  width,
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

  return <Image className={animated ? "bipit" : ""} src={srcImg} h={h} w={w} />;
};

export default MyImageComponent;
