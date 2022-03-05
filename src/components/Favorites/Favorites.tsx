import React, { FC, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { FcInfo } from "react-icons/fc";

import { LocalStrge } from "../../utils/helpers/localStrge";

const Favs: FC = ({}) => {
  const localStrge = new LocalStrge();

  const [favs, setFavs] = useState(
    JSON.parse(localStrge.get("favs-sources") || "[]") || []
  );
  const [empty, setEmpty] = useState<boolean>(favs.length === 0);

  return (
    <Box p="1rem 0" maxH="75vh" overflowY="scroll">
      {empty && (
        <Flex w="100%" h="70vh" justify="center" align="center">
          <FcInfo />
          <Text ml=".5rem" color="whiteAlpha.800">
            You have no Favorites
          </Text>
        </Flex>
      )}
    </Box>
  );
};

export default Favs;
