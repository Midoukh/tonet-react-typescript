import React, { FC, useState } from "react";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import { v4 as uuid } from "uuid";
import { LocalStrge } from "../../utils/helpers/localStrge";
import ReactImage from "../Image/Image";

const UserUploads: FC = () => {
  const localStrge = new LocalStrge();
  const uploads = JSON.parse(localStrge.get("targets") || "[]") || [];
  const [empty] = useState<boolean>(true);
  return (
    <Box>
      {empty ? (
        <Heading>You didn't upload anything</Heading>
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
