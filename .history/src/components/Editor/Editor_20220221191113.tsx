import React, { FC } from "react";
import { Container, Flex, Grid } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/tabs";

const StyledTab: FC = ({ children }) => {
  return (
    <Tab padding="10" borderRadius="20px" bg="#90CDF4" border="none">
      {children}
    </Tab>
  );
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
        <TabList variant="enclosed-colored">
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
