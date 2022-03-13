import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";

import ReactImage from "../../Image/Image";
import { setSourceImage } from "../../../store/actionCreators";
import { expressApi } from "../../../lib/axios";
interface Props {
  srcImg: string;
  width: string;
  show: string;
  placeholderColor: string;
  id: number;
}

const SourceImage: FC<Props> = ({
  srcImg,
  width,
  id,
  show,
  placeholderColor,
}) => {
  const dispatch = useDispatch();
  const [selectedSourceImageId, setSelectedSourceImageId] = useState<number>(0);

  const handleSelectSourceImage = (id: number): void => {
    setSelectedSourceImageId(id);
    dispatch(setSourceImage(srcImg));
  };

  const handleSendSourceAndTargetImage = async () => {
    try {
      const formData = new FormData();
      await expressApi.post("");
    } catch (error) {}
  };

  return (
    <ReactImage
      srcImg={srcImg}
      height="xl"
      width={width}
      show={show}
      placeholderColor={placeholderColor}
      customBorder
      onClick={() => handleSelectSourceImage(id)}
      selected={selectedSourceImageId === id}
      radius="10px"
    />
  );
};

export default SourceImage;
