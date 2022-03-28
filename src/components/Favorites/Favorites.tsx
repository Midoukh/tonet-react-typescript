import React, { FC, useState } from "react";
import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { FcInfo } from "react-icons/fc";

import { LocalStrge } from "../../utils/helpers/localStrge";
import ImageCard from "../ImageCard/ImageCard";
import { v4 as uuid } from "uuid";

const Favs: FC = ({}) => {
  const localStrge = new LocalStrge();

  const [favs, setFavs] = useState(
    JSON.parse(localStrge.get("favs-sources") || "[]") || []
  );
  const [empty, setEmpty] = useState<boolean>(favs.length === 0);
  const handleRemoveCategoryFromFavs = (id: string): void => {
    console.log(favs);
    console.log(id);
    const updatedFavs = [...favs].filter((fav: Favorite) => fav.id !== id);
    localStrge.set("favs-sources", JSON.stringify(updatedFavs));

    //update UI
    setFavs(updatedFavs);
    setEmpty(updatedFavs.length === 0);
  };
  return (
    <Box
      p="1rem 0"
      maxH="75vh"
      overflowY={favs.length > 6 ? "scroll" : "unset"}
    >
      {empty ? (
        <Flex w="100%" h="70vh" justify="center" align="center">
          <FcInfo />
          <Text ml=".5rem" color="whiteAlpha.800">
            You have no Favorites
          </Text>
        </Flex>
      ) : (
        <Grid gridTemplateColumns="repeat(3, 1fr)" maxH="75vh" gap={2}>
          {favs.map((fav: Favorite) => (
            <GridItem key={uuid()}>
              <ImageCard
                {...fav}
                isFav
                removeFromFavs={() => handleRemoveCategoryFromFavs(fav.id)}
              />
            </GridItem>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Favs;
