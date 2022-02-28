import React, { FC } from "react";
import { Container, Flex, Grid } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const Editor = ({}) => {
  return (
    <Container w="35%" height="100%">
      <Flex bg="#1A365D"></Flex>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default Editor;
