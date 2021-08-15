import { Flex, Heading } from "@chakra-ui/react";
import logo from "../../public/static/logo.svg"
import React from "react";
import logo from "../../static/logo.svg";

export default function HeadingWithLogo({ children }) {
  return (
    <Flex flexDirection="row" justifyContent="center">
      <img src={logo} width="40px" height="40px"></img>
      <Heading paddingLeft="10px" paddingRight="10px">
        {children}
      </Heading>
      <img src={logo} width="40px" height="40px"></img>
    </Flex>
  );
}
