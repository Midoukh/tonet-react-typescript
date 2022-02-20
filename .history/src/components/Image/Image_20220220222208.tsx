import React, { FC } from "react";

interface ImageTypes {
  srcImg: string;
  height: string;
  animated?: boolean;
}

const MyImageComponent: FC<ImageTypes> = ({ srcImg, height, animated }) => {
  const h = height === "md" ? "60px" : "30";

  return <img className={animated ? "bipit" : ""} src={srcImg} height={h} />;
};

export default MyImageComponent;
