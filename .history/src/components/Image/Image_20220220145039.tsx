import React, { FC, Suspense } from "react";
import { Img, useImage } from "react-image";

interface ImageTypes {
  srcImg: string;
  height: string;
}

const MyImageComponent: FC<ImageTypes> = ({ srcImg, height }) => {
  const h = height === "md" ? "60px" : "30";
  const { src } = useImage({
    srcList: srcImg,
  });
  return <img src={src} height={height} />;
};

const MyComp: FC<ImageTypes> = ({ srcImg, height }) => {
  return (
    <Suspense fallback="src">
      <MyImageComponent srcImg={srcImg} height={height} />
    </Suspense>
  );
};
export default MyComp;
