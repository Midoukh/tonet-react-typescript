import React, { FC } from "react";
import { Flex, Text } from "@chakra-ui/react";
import ReactImage from "../../Image/Image";

interface Props {
  src: string;
  date?: Date;
}
const Item: FC<Props> = ({ src, date = new Date().toDateString() }) => {
  return (
    <Flex align="flex-start">
      <ReactImage srcImg={src} height="auto" />
      <Flex direction="column">
        <span>{date}</span>
      </Flex>
    </Flex>
  );
};

export default Item;
