import React, { FC } from "react";
import { Flex, Text } from "@chakra-ui/react";
import ReactImage from "../../Image/Image";

interface Props {
  src: string;
  date?: Date;
}
const Item: FC<Props> = ({ src, date = new Date().toDateString() }) => {
  return (
    <Flex
      align="flex-start"
      bg="#152e52"
      p=".5rem"
      borderRadius="10px"
      boxShadow="2px 2px 27px #0f223cab"
    >
      <ReactImage srcImg={src} height="xd" radius="10px" />
      <Flex direction="column">
        <span>{date}</span>
      </Flex>
    </Flex>
  );
};

export default Item;
