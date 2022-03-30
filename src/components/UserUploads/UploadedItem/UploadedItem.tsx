import React, { FC } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ReactImage from "../../Image/Image";
import { LocalStrge } from "../../../utils/helpers/localStrge";

interface Props {
  src: string;
  date: Date;
  name: string;
  id: string;
  active?: boolean;
  handleRemoveItem(id: string): void;
  setActiveItem(id: string, base64: string): void;
}
const Item: FC<Props> = ({
  src,
  date,
  name,
  id,
  active = false,
  handleRemoveItem,
  setActiveItem,
}) => {
  return (
    <Flex
      align="center"
      bg="#112849"
      color="#ffffffd6"
      p=".5rem"
      borderRadius="10px"
      boxShadow="2px 2px 27px #0f223c82"
      marginBottom="0.5rem"
      position="relative"
    >
      <ReactImage
        srcImg={src}
        maxH="75px"
        height="auto"
        width="auto"
        radius="10px"
      />
      <Flex direction="column" align="center" overflow="hidden">
        <Text m="0 1rem" color="whiteAlpha.500">
          {date}
        </Text>
        <Text m="0 1rem">{name}</Text>

        <Box
          bg="blue.500"
          p=".3rem"
          cursor="pointer"
          borderRadius="10px"
          opacity={active ? "1" : "0.4"}
          onClick={() => setActiveItem(id, src)}
        >
          Active
        </Box>
      </Flex>
      <AiOutlineCloseCircle
        onClick={() => handleRemoveItem(id)}
        size={35}
        style={{
          position: "absolute",
          top: ".5rem",
          right: ".5rem",
          opacity: ".8",
          cursor: "pointer",
        }}
      />
    </Flex>
  );
};

export default Item;
