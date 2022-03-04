import React, { ChangeEvent, FC } from "react";
import { Box, Heading, Flex, Text, Input } from "@chakra-ui/react";
import { BsImageAlt } from "react-icons/bs";

const Upload: FC = ({}) => {
  const handleOnImageChange = (e: ChangeEvent) => {
    console.log(e.target);
  };
  return (
    <Box m="1rem 0">
      <Heading as="h3" color="white">
        Upload
      </Heading>
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
      <Input type="file" accept="image/*" onChange={handleOnImageChange} />
    </Box>
  );
};

export default Upload;
