import React, { FC } from "react";
import { Image } from "@chakra-ui/react";
import "./Image.style.css";

interface ImageTypes {
  srcImg: string;
  height: string;
  animated?: boolean;
}

const MyImageComponent: FC<ImageTypes> = ({ srcImg, height, animated }) => {
  const h = height === "md" ? "60px" : "30";

  return <Image className={animated ? "bipit" : ""} src={srcImg} h={h} />;
};

export default MyImageComponent;
