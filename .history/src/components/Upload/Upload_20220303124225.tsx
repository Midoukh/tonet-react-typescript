import React, { ChangeEvent, FC, useState } from "react";
import { Box, Heading, Flex, Text, Input } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { BsImageAlt } from "react-icons/bs";
import { LocalStrge } from "../../utils/helpers/localStrge";

import { uploadTargetImage as uploadImageAction } from "../../store/actionCreators";

type InputEvent = ChangeEvent<HTMLInputElement>;

const Upload: FC = ({}) => {
  const [imageName, setImageName] = useState("");
  const dispatch = useDispatch();
  const localStrge = new LocalStrge();
  const targetImages: any = JSON.parse(localStrge.get("targets") || "[]") || [];

  const handleOnImageChange = async (e: InputEvent): Promise<void> => {
    const uploadedImage = e.target.files![0];
    // const reader = new FileReader();
    // reader.onload = () => {};
    // const buffer = Buffer.from(await new Response(uploadedImage).arrayBuffer());
    // const imageUrl = `data:${uploadedImage.type};base64, ${buffer.toString(
    //   "base64"
    // )}`;
    const localImageUrl = window.URL.createObjectURL(uploadedImage);
    dispatch(uploadImageAction(localImageUrl));
    setImageName(uploadedImage.name);
    const newTargetImages = [...new Set(targetImages)];
    newTargetImages.push(localImageUrl);
    localStrge.set("targets", JSON.stringify(newTargetImages));
  };
  return (
    <Box m="1rem 0">
      <Heading as="h3" color="white">
        Upload
      </Heading>
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
      />
    </Box>
  );
};

export default Upload;
