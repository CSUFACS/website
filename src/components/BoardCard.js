
import { Img } from "@chakra-ui/image";
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
    >
      <Flex flexDirection="column" alignItems="center">
        <Heading fontSize="15px" fontWeight="bold">
          {props.position}
        </Heading>
        <Text fontSize="15px">{props.name}</Text>
      </Flex>
      <Img
        borderRadius="full"
        boxSize="220px"
        src={props.imageUrl}
        alt={props.name}
      />
    </Flex>
  );
}
