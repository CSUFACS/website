import { Flex, Text } from "@chakra-ui/react";
import React from "react";

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
    >
      <Text padding="20px">2021</Text>
      <img src="/static/logo.svg" width="70px" height="70px"></img>
      <Text padding="20px">ACS</Text>
    </Flex>
  );
}
