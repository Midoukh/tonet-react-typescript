import React, { FC, useEffect, useState } from "react";
import { Box, Flex, Text, List, ListItem, Heading } from "@chakra-ui/react";
import { v4 as uuid } from "uuid";
import { LocalStrge } from "../../utils/helpers/localStrge";
import ReactImage from "../Image/Image";
import { FcInfo } from "react-icons/fc";
import { useSelector } from "react-redux";
import UploadedItem from "./UploadedItem/UploadedItem";
const UserUploads: FC = () => {
  const { TargetImage } = useSelector((state: StoreState) => state);
  const localStrge = new LocalStrge();
  const uploads = JSON.parse(localStrge.get("targets") || "[]") || [];
  const [empty] = useState<boolean>(uploads.length === 0);
  console.log("Rerendering the UserUploads", uploads.length);
  useEffect(() => {}, [TargetImage]);
  return (
    <Box p="1rem 0">
      {empty || !TargetImage ? (
        <Flex w="100%" h="70vh" justify="center" align="center">
          <FcInfo />
          <Text ml=".5rem" color="whiteAlpha.800">
            You didn't upload anything
          </Text>
        </Flex>
      ) : (
        <List>
          <Heading
            as="h3"
            fontSize="2xl"
            marginBottom="0.5rem"
            color="whiteAlpha.900"
          >
            HISTORY
          </Heading>
          {uploads.map(({ base64, id, name, date }: UploadedItem) => (
            <ListItem key={uuid()}>
              <UploadedItem src={base64} id={id} date={date} name={name} />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default UserUploads;