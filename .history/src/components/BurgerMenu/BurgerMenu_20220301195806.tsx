import React from "react";
import { bubble as Menu } from "react-burger-menu";
import logo from "../../assets/logo.png";
import ReactImage from "../Image/Image";

import "./style.css";

const BurgerMenu = ({}) => {
  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
  return (
    <Menu pageWrapId="page-wrap" outerContainerId="App">
      <div className="menu-item">
        <ReactImage srcImg={logo} height="md" />
      </div>
      <a id="home" className="menu-item" href="/">
        Home
      </a>
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
