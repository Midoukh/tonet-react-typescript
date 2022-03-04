import React, { FC } from "react";
import { Flex, Text } from "@chakra-ui/react";
import ReactImage from "../../Image/Image";

interface Props {
  src: string;
  date?: Date;
  active?: boolean;
}
const Item: FC<Props> = ({
  src,
  date = new Date().toDateString(),
  active = false,
}) => {
  return (
    <Flex
      align="flex-start"
      bg="#112849"
      p=".5rem"
      borderRadius="10px"
      boxShadow="2px 2px 27px #0f223c82"
      marginBottom="0.5rem"
    >
      <ReactImage srcImg={src} height="xd" radius="10px" />
      <Flex direction="column" color="#ffffffd6">
        <span>{date}</span>
      </Flex>
    </Flex>
  );
};

export default Item;
