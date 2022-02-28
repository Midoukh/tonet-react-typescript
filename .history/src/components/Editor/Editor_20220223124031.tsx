import React, { FC } from "react";
import { Container, Flex, Grid, Box } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/tabs";
import { IoIosImages } from "react-icons/io";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { ImFolderUpload } from "react-icons/im";
import { MdFavorite } from "react-icons/md";
const StyledTab: FC = ({ children }) => {
  return <Tab bg="#90CDF4">{children}</Tab>;
};

const Editor = ({}) => {
  return (
    <Box h="100vh">
      <Tabs
        variant="soft-rounded"
        colorScheme="green"
        bg="#1A365D"
        h="100%"
        padding="16"
      >
        <TabList>
          <StyledTab>
            <IoIosImages />
          </StyledTab>
          <StyledTab>
            <AiOutlineFolderAdd />
          </StyledTab>
          <StyledTab>
            <ImFolderUpload />
          </StyledTab>
          <StyledTab>
            <MdFavorite />
          </StyledTab>
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
    </Box>
  );
};

export default Editor;
