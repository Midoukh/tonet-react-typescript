import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/tabs";
import { IoIosImages } from "react-icons/io";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { ImFolderUpload } from "react-icons/im";
import { MdFavorite } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { HeartSwitch } from "@anatoliygatt/heart-switch";
import { v4 as uuid } from "uuid";
import { IoArrowBackSharp as GoBackIcon } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";

import Categories from "./Categories/Categories";
import SingleImageContent from "../SingleImageCategoryContent/SingleImageCategoryContent";
import { fetchImageCategory } from "../../store/actionCreators";
import Upload from "../Upload/Upload";
import UserUploads from "../UserUploads/UserUploads";
import Favorites from "../Favorites/Favorites";
import { IMAGES_CATEGORIES } from "../../utils/constants/index";
import { LocalStrge } from "../../utils/helpers/localStrge";

const StyledTab: FC = ({ children }) => {
  return <Tab bg="#2A4365">{children}</Tab>;
};

const Editor = ({}) => {
  const notify = (message: string) => toast(message);
  const localStrge = new LocalStrge();
  const dispatch = useDispatch();
  const gState: StoreState = useSelector((state: StoreState) => state);
  const [checked, setChecked] = useState(false);

  const [favs, setFavs] = useState(
    JSON.parse(localStrge.get("favs-sources") || "[]") || []
  );
  const handleGoBack = () => {
    const newFetchCategoryState: FetchCategory = {
      isFetched: false,
      currentImageCategory: "",
      SingleImageCategoriesListOfImages: [],
    };
    dispatch(fetchImageCategory(newFetchCategoryState));
    setChecked(false);
  };
  const handleFavsList = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    const label: string = gState.fetchCategory.currentImageCategory;
    let categoryToBeAddedToFavs: any = {};

    if (label) {
      IMAGES_CATEGORIES.forEach((obj) => {
        if (obj!.label === label) {
          categoryToBeAddedToFavs = { ...obj, id: uuid() };
        }
      });
      //add the favorite item to local storage if checked is true
      if (e.target.checked) {
        try {
          const oldFavs =
            JSON.parse(localStrge.get("favs-sources") || "[]") || [];
          const newFavs: Favorite[] = [
            ...new Set(oldFavs),
            categoryToBeAddedToFavs,
          ];

          localStrge.set("favs-sources", JSON.stringify(newFavs));
          notify("Added to your Favorites");
        } catch (error) {
          console.log(error);
        }
      }
      //remove from favorites if checked is false
      else {
        try {
          const oldFavs =
            JSON.parse(localStrge.get("favs-sources") || "[]") || [];
          const newFavs = oldFavs.filter(
            (fav: Favorite) => fav.label !== label
          );
          localStrge.set("favs-sources", JSON.stringify(newFavs));
          notify("Removed from your Favorites");
        } catch (error) {
          console.log(error);
        }
      }
    }
  };
  const checkIfCategoryIsInFavorites = (label: string): void => {
    console.log("checking favs");
    //1) get the current displayed category

    let isFav = false;
    //2) check if it exist in favorites
    favs.forEach((fav: Favorite) => {
      console.log(fav);
      if (label === fav.label) {
        setChecked(true);
        isFav = true;
      }
    });
    console.log(label, isFav);
  };
  // useEffect(() => {
  //   checkIfCategoryIsInFavorites();
  // }, [gState.fetchCategory.isFetched]);
  return (
    <Box h="100vh">
      <Tabs
        variant="soft-rounded"
        colorScheme="blue"
        bg="#1A365D"
        h="100%"
        padding="16"
      >
        {gState.fetchCategory.isFetched ? (
          <Flex direction="row" alignItems="center" cursor="pointer">
            <GoBackIcon size={30} color="#e2e2e2" onClick={handleGoBack} />
            <Text m="0 .5rem" color="#e2e2e2">
              {gState.fetchCategory.currentImageCategory}
            </Text>
            <HeartSwitch
              size="sm"
              inactiveTrackFillColor="#cffafe"
              inactiveTrackStrokeColor="#22d3ee"
              activeTrackFillColor="#06b6d4"
              activeTrackStrokeColor="#0891b2"
              inactiveThumbColor="#ecfeff"
              activeThumbColor="#ecfeff"
              checked={checked}
              onChange={handleFavsList}
            />
          </Flex>
        ) : (
          <TabList justifyContent="space-between" w="16vw">
            <StyledTab>
              <IoIosImages color="white" />
            </StyledTab>
            <StyledTab>
              <AiOutlineFolderAdd color="white" />
            </StyledTab>
            <StyledTab>
              <ImFolderUpload color="white" />
            </StyledTab>
            <StyledTab>
              <MdFavorite color="white" />
            </StyledTab>
          </TabList>
        )}
        <TabPanels>
          <TabPanel>
            {gState.fetchCategory.isFetched ? (
              <SingleImageContent />
            ) : (
              <Categories checkIfFav={checkIfCategoryIsInFavorites} />
            )}
          </TabPanel>
          <TabPanel>
            <Upload label="Add your custom images" />
          </TabPanel>
          <TabPanel>
            <UserUploads />
          </TabPanel>
          <TabPanel>
            {gState.fetchCategory.isFetched ? (
              <SingleImageContent />
            ) : (
              <Favorites />
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
      <ToastContainer />
    </Box>
  );
};

export default Editor;
