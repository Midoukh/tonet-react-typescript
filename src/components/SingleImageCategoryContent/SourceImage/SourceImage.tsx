import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { base64ToURL } from "../../../utils/helpers/imageMan";

import ReactImage from "../../Image/Image";
interface Props {
  srcImg: string;
  width: string;
  show: string;
  placeholderColor: string;
  id: number | string;
  selectedSourceImageId: number | string;
  handleSelectSourceImage(): void;
  loading: boolean;
  promise?: boolean;
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
  promise,
}) => {
  const [srcImgPromise, setSrcImgPromise] = useState<string>("");

  const handlePromisedSrcImg = async (): Promise<any> => {
    if (promise) {
      setSrcImgPromise(await base64ToURL(srcImg));
    }
  };

  useEffect(() => {
    handlePromisedSrcImg();
  }, [selectedSourceImageId]);
  return (
    <ReactImage
      srcImg={srcImgPromise || srcImg}
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
