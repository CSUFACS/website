import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export function Navbar() {
  return (
    <Flex justifyContent="space-between" boxShadow="md">
      <Flex alignItems="center" fontSize="40px" fontWeight="black">
        <Image src="./static/logo.svg" width="50px" height="50px"></Image>
        CSUF<Text color="acsgreen">ACS</Text>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="space-evenly"
        minWidth="50%"
        fontSize="25px"
        fontWeight="normal"
      >
        <Text>Home</Text>
        <Text>Membership</Text>
        <Text>Board</Text>
        <Text>Families</Text>
        <Text>Contact</Text>
      </Flex>
    </Flex>
  );
}
