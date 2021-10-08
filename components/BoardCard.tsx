
import { Img } from "@chakra-ui/image";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";

interface BoardCardProps {
  name: string;
  imageUrl: string;
  position: string
}

export function BoardCard({name, imageUrl, position}: BoardCardProps) {
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
          {position}
        </Heading>
        <Text fontSize="15px">{name}</Text>
      </Flex>
      <Img
        borderRadius="full"
        boxSize="220px"
        src={imageUrl}
        alt={name}
      />
    </Flex>
  );
}
