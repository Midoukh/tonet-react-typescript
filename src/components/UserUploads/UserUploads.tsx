import React, { FC, useEffect, useState } from "react";
import { Box, Flex, Text, List, ListItem, Heading } from "@chakra-ui/react";
import { v4 as uuid } from "uuid";
import { LocalStrge } from "../../utils/helpers/localStrge";
import { base64ToURL } from "../../utils/helpers/imageMan";
import { FcInfo } from "react-icons/fc";
import { useSelector, useDispatch } from "react-redux";
import UploadedItem from "./UploadedItem/UploadedItem";
import { uploadTargetImage } from "../../store/actionCreators";
const UserUploads: FC = () => {
  const { TargetImage } = useSelector((state: StoreState) => state);
  const dispatch = useDispatch();
  const localStrge = new LocalStrge();
  const [uploads, setUploads] = useState(
    JSON.parse(localStrge.get("targets") || "[]") || []
  );
  const [empty, setEmpty] = useState<boolean>(uploads.length === 0);
  const handleRemoveItem = (id: string) => {
    const newUploads = uploads.filter((upl: UploadedItem) => upl.id !== id);
    localStrge.set("targets", JSON.stringify(newUploads));
    setUploads(newUploads);
    setEmpty(newUploads.length === 0);
  };
  const updateUploadsAfterANewUpload = () => {
    const newUploads = JSON.parse(localStrge.get("targets") || "[]") || [];
    console.log("new upload");
    console.table(newUploads);
    setUploads(newUploads);
    setEmpty(newUploads.length === 0);
  };

  const handleSetActiveItem = async (
    id: string,
    base64: string
  ): Promise<any> => {
    const uploads = JSON.parse(localStrge.get("targets") || "[]") || [];
    const updatedUploads = uploads.map((item: UploadedItem) => {
      if (item.id === id) item.active = true;
      else item.active = false;
      return item;
    });
    localStrge.set("targets", JSON.stringify(updatedUploads));
    setUploads(updatedUploads);
    dispatch(uploadTargetImage(await base64ToURL(base64)));
  };

  useEffect(() => {
    updateUploadsAfterANewUpload();
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
            ({ base64, id, name, date, active }: UploadedItem, i: number) => (
              <ListItem key={uuid()}>
                <UploadedItem
                  handleRemoveItem={handleRemoveItem}
                  src={base64}
                  id={id}
                  date={date}
                  name={name}
                  active={active}
                  setActiveItem={handleSetActiveItem}
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
