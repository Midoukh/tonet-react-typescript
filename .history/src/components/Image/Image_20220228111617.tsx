import React, { FC } from "react";
import { Image } from "@chakra-ui/react";
import "./Image.style.css";

interface ImageProps {
  srcImg: string;
  height: string;
  width?: string;
  animated?: boolean;
  visibility?: string;
}

const MyImageComponent: FC<ImageProps> = ({
  srcImg,
  height,
  animated,
  width,
  visibility = "visible",
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

  return (
    <Image
      className={animated ? "bipit" : ""}
      src={srcImg}
      h={h}
      w={w}
      style={{
        visibility: visibility,
      }}
    />
  );
};

export default MyImageComponent;
