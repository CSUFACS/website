import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../../static/logo.svg";

export function Footer() {
  return (
    <Flex
      width="100%"
      height="15vh"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      backgroundColor="acsgreen"
      fontWeight="bold"
      color="white"
      fontSize="30px"
      // marginBottom="10px"
    >
      <Text padding="20px">2021</Text>
      <img src={logo} width="70px" height="70px"></img>
      <Text padding="20px">ACS</Text>
    </Flex>
  );
}
