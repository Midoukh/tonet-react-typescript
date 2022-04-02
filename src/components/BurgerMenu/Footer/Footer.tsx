import React, { FC } from "react";
import { Text, Flex } from "@chakra-ui/react";
import logo from "../../../assets/logo.png";
import ReactImage from "../../Image/Image";

const Footer: FC = ({}) => {
  return (
    <footer
      style={{
        margin: "2rem 0",
      }}
    >
      <Flex direction="column">
        <ReactImage
          srcImg={logo}
          height="sm"
          selected
          cStyle={{
            marginBottom: ".5rem",
          }}
        />
        <Text mb="3rem">
          Created by <b color="#3498db">Ahmed Khelili</b>. All rights reserved.
        </Text>
      </Flex>
    </footer>
  );
};

export default Footer;
