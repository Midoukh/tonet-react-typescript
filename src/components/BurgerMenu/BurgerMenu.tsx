import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { bubble as Menu } from "react-burger-menu";
import { List, ListItem, Button } from "@chakra-ui/react";
import { AiOutlineBug } from "react-icons/ai";
import { BsEmojiExpressionless } from "react-icons/bs";
import logo from "../../assets/logo.png";
import ReactImage from "../Image/Image";
import Upload from "../Upload/Upload";
import {
  toggleReportBugVis,
  toggleReviewVis,
} from "../../store/actionCreators";
import "./style.css";

const BurgerMenu: FC = ({}) => {
  const dispatch = useDispatch();

  const handleShowReportBug = () => {
    dispatch(toggleReportBugVis(true));
  };
  const handleShowReview = () => {
    dispatch(toggleReviewVis(true));
  };
  return (
    <Menu pageWrapId="page-wrap" outerContainerId="App">
      <div className="menu-item">
        <ReactImage srcImg={logo} height="md" />
      </div>
      <div className="menu-item">
        <Upload />
      </div>
      <List>
        <ListItem className="menu-item" w="100%" mb="0.5rem">
          <Button
            onClick={handleShowReportBug}
            color="blue.400"
            w="100%"
            display="flex"
            justifyContent="flex-start"
          >
            <AiOutlineBug
              size={25}
              style={{
                marginRight: ".5rem",
              }}
            />
            Report a Bug
          </Button>
        </ListItem>
        <ListItem w="100%">
          <Button
            onClick={handleShowReview}
            color="blue.400"
            w="100%"
            display="flex"
            justifyContent="flex-start"
          >
            <BsEmojiExpressionless
              size={25}
              style={{
                marginRight: ".5rem",
              }}
            />
            Feedback
          </Button>
        </ListItem>
      </List>

      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
      <a className="menu-item--small" href="">
        Settings
      </a>
    </Menu>
  );
};

export default BurgerMenu;
