import React, { FC } from "react";
import { Container, Flex, Grid } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const StyledTab: FC = ({ children }) => {
  return (
    <Tab padding="20" borderRadius="10px" bg="#90CDF4">
      {children}
    </Tab>
  );
};

const Editor = ({}) => {
  return (
    <Container w="35%" h="100vh">
      <Tabs
        variant="enclosed-colored"
        colorScheme="green"
        bg="#1A365D"
        h="100%"
        padding="16"
      >
        <TabList variant="enclosed-colored">
          <Tab>Images</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
          <Tab>Tab 4</Tab>
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
