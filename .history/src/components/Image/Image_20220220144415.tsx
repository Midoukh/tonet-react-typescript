import React, { FC } from "react";
import { Img } from "react-image";

interface ImageTypes {
  srcImg: string;
  height: string;
}

const MyImageComponent: FC<ImageTypes> = ({ srcImg, height }) => {
  const h = height === "md" ? "60px" : "30";
  return <Img src={[srcImg]} height={height} />;
};

export default MyImageComponent;

// export default function MyComponent() {
//   return (
//     <Suspense>
//       <MyImageComponent />
//     </Suspense>
//   )
// }
