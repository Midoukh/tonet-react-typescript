import React, { FC } from "react";
import ReactImage from "../Image/Image";
interface Props {
  src: string;
}

const Comp: FC<Props> = ({ src }) => {
  return <ReactImage srcImg={src} height="100%" />;
};

export default Comp;
