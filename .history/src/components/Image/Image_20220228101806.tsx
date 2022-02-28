import React, { FC } from "react";
import { Image } from "@chakra-ui/react";
import "./Image.style.css";

interface ImageTypes {
  srcImg: string;
  height: string;
  animated?: boolean;
}

const MyImageComponent: FC<ImageTypes> = ({ srcImg, height, animated }) => {
  const h = height === "md" ? "60px" : height === "xd" ? "120px" : "30px";

  return <Image className={animated ? "bipit" : ""} src={srcImg} h={h} />;
};

export default MyImageComponent;
