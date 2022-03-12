import React, { FC, useState } from "react";
import ReactImage from "../../Image/Image";

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
  const [selectedSourceImageId, setSelectedSourceImageId] = useState<number>(0);

  const handleSelectSourceImage = (id: number): void => {
    setSelectedSourceImageId(id);
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
