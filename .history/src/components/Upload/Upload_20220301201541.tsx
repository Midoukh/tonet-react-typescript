import React, { FC } from "react";
import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import { BsImageAlt } from "react-icons/bs";

const Upload: FC = ({}) => {
  return (
    <Box m="1rem 0">
      <Heading as="h3">Upload</Heading>
      <Box border="1px dashed white">
        <Flex direction="column" align="center">
          <BsImageAlt size={20} color="white" />
          <Text>Drag and Drop or Browse</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Upload;
