import React, { FC } from "react";
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

export default MyImageComponent;

// export default function MyComponent() {
//   return (
//     <Suspense>
//       <MyImageComponent />
//     </Suspense>
//   )
// }
