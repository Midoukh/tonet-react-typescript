import React, { FC } from "react";
import { Container, Flex, Grid } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/tabs";

const StyledTab: FC = ({ children }) => {
  return <Tab bg="#90CDF4">{children}</Tab>;
};

const Editor = ({}) => {
  return (
    <Container w="35%" h="100vh">
      <Tabs
        variant="soft-rounded"
        colorScheme="green"
        bg="#1A365D"
        h="100%"
        padding="16"
      >
        <TabList>
          <Tab>Images</Tab>
          <StyledTab>Tab 2</StyledTab>
          <StyledTab>Tab 3</StyledTab>
          <StyledTab>Tab 4</StyledTab>
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
