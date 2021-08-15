import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export function Header() {
  return (
    <Flex height="92vh" flexDirection="row" alignItems="center">
      <Flex flexDirection="row" textColor="white" alignItems="center">
        <img src="/static/logo.svg" height="200px" width="200px"></img>
        <Flex flexDirection="column" fontSize="80px" fontWeight="bold">
          <Text>We are the</Text>
          <Flex>
            <Text>
              Assocation of Chinese Students at{" "}
              <Text as="span" textColor="acsgreen">
                CSUF
              </Text>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
