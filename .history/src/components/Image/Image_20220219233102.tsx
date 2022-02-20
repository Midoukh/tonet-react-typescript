import React, { Suspense } from "react";
import { useImage } from "react-image";

const MyImageComponent = (srcImg: string) => {
  const { src } = useImage({
    srcList: srcImg,
  });

  return <img src={src} />;
};

export default MyImageComponent;

// export default function MyComponent() {
//   return (
//     <Suspense>
//       <MyImageComponent />
//     </Suspense>
//   )
// }
