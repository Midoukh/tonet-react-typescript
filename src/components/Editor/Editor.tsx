import React, { FC, useEffect } from "react";
import { Container, Flex, Grid, Box, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/tabs";
import { IoIosImages } from "react-icons/io";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { ImFolderUpload } from "react-icons/im";
import { MdFavorite } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";

import { IoArrowBackSharp as GoBackIcon } from "react-icons/io5";
import Categories from "./Categories/Categories";
import SingleImageContent from "../SingleImageCategoryContent/SingleImageCategoryContent";
import { fetchImageCategory } from "../../store/actionCreators";

const StyledTab: FC = ({ children }) => {
  return <Tab bg="#90CDF4">{children}</Tab>;
};

const Editor = ({}) => {
  const dispatch = useDispatch();
  const gState: StoreState = useSelector((state: StoreState) => state);

  const handleGoBack = () => {
    dispatch(fetchImageCategory(false));
  };
  return (
    <Box h="100vh">
      <Tabs
        variant="soft-rounded"
        colorScheme="Blue 900"
        bg="#1A365D"
        h="100%"
        padding="16"
      >
        {gState.isFetched ? (
          <Flex direction="row" alignItems="center" cursor="pointer">
            <GoBackIcon size={30} color="#e2e2e2" onClick={handleGoBack} />
            <Text ml=".5rem" color="#e2e2e2">
              Back
            </Text>
          </Flex>
        ) : (
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
        )}
        <TabPanels>
          <TabPanel>
            {gState.isFetched ? <SingleImageContent /> : <Categories />}
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