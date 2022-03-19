import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import ReactImage from "../../Image/Image";
interface Props {
  srcImg: string;
  width: string;
  show: string;
  placeholderColor: string;
  id: number;
  selectedSourceImageId: number;
  handleSelectSourceImage(): void;
  loading: boolean;
}

const SourceImage: FC<Props> = ({
  srcImg,
  width,
  id,
  show,
  placeholderColor,
  handleSelectSourceImage,
  selectedSourceImageId,
  loading,
}) => {
  useEffect(() => {}, [selectedSourceImageId]);
  return (
    <ReactImage
      srcImg={srcImg}
      height="xl"
      width={width}
      show={show}
      placeholderColor={placeholderColor}
      customBorder
      onClick={handleSelectSourceImage}
      selected={selectedSourceImageId === id}
      loading={loading}
      radius="10px"
    />
  );
};

export default SourceImage;
