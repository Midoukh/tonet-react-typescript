import React, { FC } from "react";
import { Img } from "react-image";

interface ImageTypes {
  srcImage: string;
}

const MyImageComponent: FC<ImageTypes> = (srcImg) => {
  return <Img src={srcImg} />;
};

export default MyImageComponent;

// export default function MyComponent() {
//   return (
//     <Suspense>
//       <MyImageComponent />
//     </Suspense>
//   )
// }
