import React, { FC, useState } from "react";
import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { v4 as uuid } from "uuid";
import { LocalStrge } from "../../utils/helpers/localStrge";
import ReactImage from "../Image/Image";
import { FcInfo } from "react-icons/fc";

const UserUploads: FC = () => {
  const localStrge = new LocalStrge();
  const uploads = JSON.parse(localStrge.get("targets") || "[]") || [];
  const [empty] = useState<boolean>(true);
  return (
    <Box>
      {empty ? (
        <Flex w="100%" h="70vh" justify="center" align="center">
          <FcInfo />
          <Text ml=".5rem" color="whatsapp.800">
            You didn't upload anything
          </Text>
        </Flex>
      ) : (
        <Grid>
          {uploads.map((item: string) => (
            <GridItem key={uuid()}>
              <ReactImage srcImg={item} height="xl" />
            </GridItem>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default UserUploads;
