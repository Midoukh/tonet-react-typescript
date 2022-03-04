import React, { ChangeEvent, FC } from "react";
import { Box, Heading, Flex, Text, Input } from "@chakra-ui/react";
import { BsImageAlt } from "react-icons/bs";
import { LocalStrge } from "../../utils/helpers/localStrge";

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const Upload: FC = ({}) => {
  const localStrge = new LocalStrge();
  const targetImages: any = localStrge.get("targets") || [];

  const handleOnImageChange = (e: InputEvent): void => {
    const uploadedImage = e.target.files?.length && e.target.files[0];
    const newTargetImages = [...targetImages];
    newTargetImages.push(uploadedImage);
    new LocalStrge().set("targets", newTargetImages);
  };
  return (
    <Box m="1rem 0">
      <Heading as="h3" color="white">
        Upload
      </Heading>
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
