import React from "react";
import { bubble as Menu } from "react-burger-menu";
import { List, ListItem, Button } from "@chakra-ui/react";
import { AiOutlineBug } from "react-icons/ai";
import logo from "../../assets/logo.png";
import ReactImage from "../Image/Image";
import Upload from "../Upload/Upload";

import "./style.css";

const BurgerMenu = ({}) => {
  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
  return (
    <Menu pageWrapId="page-wrap" outerContainerId="App">
      <div className="menu-item">
        <ReactImage srcImg={logo} height="md" />
      </div>
      <div className="menu-item">
        <Upload />
      </div>
      <List>
        <ListItem className="menu-item">
          <Button>
            <AiOutlineBug />
            Report a Bug
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
