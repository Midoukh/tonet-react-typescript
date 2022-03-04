import React, { ChangeEvent, FC, useState } from "react";
import { Box, Heading, Flex, Text, Input } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { BsImageAlt } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
import { LocalStrge } from "../../utils/helpers/localStrge";
import { lengthLimiter } from "../../utils/helpers/arrays";

import { uploadTargetImage as uploadImageAction } from "../../store/actionCreators";
import { imageToBase64 } from "../../utils/helpers/imageMan";

interface Props {
  label?: string;
}
type InputEvent = ChangeEvent<HTMLInputElement>;

const Upload: FC<Props> = ({ label }) => {
  const [imageName, setImageName] = useState("");
  const dispatch = useDispatch();
  const localStrge = new LocalStrge();
  const targetImages: any = lengthLimiter(
    JSON.parse(localStrge.get("targets") || "[]") || [],
    3
  );

  const handleOnImageChange = async (e: InputEvent): Promise<void> => {
    //get the image file from the user
    const uploadedImage = e.target.files![0];

    //convert it to a base64 so we can store it locally
    const base64 = (await imageToBase64(uploadedImage)) || "";

    //create a URL from the image to be use as a src for <img />
    //because base64 are to fucking ugly and big
    const localImageUrl = window.URL.createObjectURL(uploadedImage);
    dispatch(uploadImageAction(localImageUrl));
    setImageName(uploadedImage.name);

    //add the new target image to local storage and make sure there
    //is no duplicates
    targetImages.push(base64);
    const newTargetImages = [...new Set(targetImages)];
    localStrge.set("targets", JSON.stringify(newTargetImages));
  };
  return (
    <Box m="1rem 0">
      <Heading as="h3" color="white">
        Upload
      </Heading>
      {label && (
        <Flex align="center" m="0.5rem">
          <IoIosAddCircleOutline color="white" />
          <Text color="whiteAlpha.700" ml="0.5rem">
            {label}
          </Text>
        </Flex>
      )}
      {imageName && (
        <Text mt=".5rem" maxWidth="13vw" fontSize=".57em">
          Image name: {imageName}
        </Text>
      )}
      <label htmlFor="upload-input">
        <Box border="1px dashed rgba(255,255,255,.8)" m="1rem 0" p=".8rem">
          <Flex
            direction="column"
            align="center"
            justify="center"
            textAlign="center"
            cursor="pointer"
          >
            <BsImageAlt size={20} color="white" />
            <Text>Drag and Drop or Browse</Text>
          </Flex>
        </Box>
      </label>
      <Input
        type="file"
        accept="image/*"
        onChange={handleOnImageChange}
        visibility="hidden"
        position="absolute"
        id="upload-input"
        width="unset"
      />
    </Box>
  );
};

export default Upload;
