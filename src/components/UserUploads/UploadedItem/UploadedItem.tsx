import React, { FC } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ReactImage from "../../Image/Image";
import { LocalStrge } from "../../../utils/helpers/localStrge";

interface Props {
  src: string;
  date: Date;
  name: string;
  id: string;
  active?: boolean;
}
const Item: FC<Props> = ({ src, date, name, id, active = false }) => {
  const localStrge = new LocalStrge();
  const handleRemoveItem = () => {
    localStrge.remove("targets", id);
  };
  return (
    <Flex
      align="flex-start"
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
        maxH="90px"
        height="auto"
        width="auto"
        radius="10px"
      />
      <Flex direction="column">
        <span
          style={{
            margin: "0 1rem",
          }}
        >
          {date}
        </span>
        <Text>{name}</Text>
      </Flex>
      <AiOutlineCloseCircle
        onClick={handleRemoveItem}
        size={40}
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