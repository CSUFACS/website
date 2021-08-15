import { Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";

export function Navbar() {
  return (
    <Flex justifyContent="space-between" boxShadow="md" backgroundColor="white" height="8vh">
      <Flex alignItems="center" fontSize="40px" fontWeight="900">
        <img src="/static/logo.svg" width="50px" height="50px"></img>
        <Flex paddingLeft="10px">
          CSUF
          <Text color="acsgreen" fontFamily="Poppins">
            ACS
          </Text>
        </Flex>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="space-evenly"
        minWidth="50%"
        fontSize="25px"
        fontWeight="light"
      >
        <Link>Home</Link>
        <Text>Membership</Text>
        <Text>Board</Text>
        <Text>Families</Text>
        <Text>Contact</Text>
      </Flex>
    </Flex>
  );
}
