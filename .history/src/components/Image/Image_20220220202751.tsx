import React, { FC } from "react";

interface ImageTypes {
  srcImg: string;
  height: string;
}

const MyImageComponent: FC<ImageTypes> = ({ srcImg, height }) => {
  const h = height === "md" ? "60px" : "30";

  return <img src={srcImg} height={h} />;
};

export default MyImageComponent;
