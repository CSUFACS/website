
import { Image } from "@chakra-ui/image";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";

export function BoardCard(props) {
  return (
    <Flex
      flexDirection="column-reverse"
      alignItems="center"
      justifyContent="space-evenly"
      width="300px"
      height="330px"
      // borderRadius="10px"
      // border="1px solid lightgrey"
      // boxShadow="1px 1px 10px lightgrey"
    >
      <Flex flexDirection="column" alignItems="center">
        <Heading fontSize="15px" fontWeight="bold">
          {props.position}
        </Heading>
        <Text fontSize="15px">{props.name}</Text>
      </Flex>
      <Image
        borderRadius="full"
        boxSize="220px"
        src={props.imageUrl}
        alt={props.name}
      />
    </Flex>
  );
}
