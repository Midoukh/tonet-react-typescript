import React, { FC, useEffect, useState } from "react";
import { Box, Flex, Text, List, ListItem, Heading } from "@chakra-ui/react";
import { v4 as uuid } from "uuid";
import { LocalStrge } from "../../utils/helpers/localStrge";
import { FcInfo } from "react-icons/fc";
import { useSelector } from "react-redux";
import UploadedItem from "./UploadedItem/UploadedItem";

const UserUploads: FC = () => {
  const { TargetImage } = useSelector((state: StoreState) => state);
  const localStrge = new LocalStrge();
  const [uploads, setUploads] = useState(
    JSON.parse(localStrge.get("targets") || "[]") || []
  );
  const [empty, setEmpty] = useState<boolean>(uploads.length === 0);
  const handleRemoveItem = (id: string) => {
    localStrge.remove("targets", id);
  };

  useEffect(() => {
    //rerender after the deletion of one item
    setUploads([]);
    const uptadetedUserUploads =
      JSON.parse(localStrge.get("targets") || "[]") || [];
    setUploads(uptadetedUserUploads);
    console.log("Rerendering the comp [UserUploads]");
  }, [uploads.length, TargetImage]);
  return (
    <Box p="1rem 0" maxH="75vh" overflowY="scroll">
      {empty ? (
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
          {uploads.map(
            ({ base64, id, name, date }: UploadedItem, i: number) => (
              <ListItem key={uuid()}>
                <UploadedItem
                  handleRemoveItem={handleRemoveItem}
                  src={base64}
                  id={id}
                  date={date}
                  name={name}
                  active={i === uploads.length - 1}
                />
              </ListItem>
            )
          )}
        </List>
      )}
    </Box>
  );
};

export default UserUploads;
