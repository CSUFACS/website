import { Flex, Image, Text } from "@chakra-ui/react";
import logo from "../../static/logo.svg";
import React from "react";

export function Header() {
  return (
    <Flex height="92vh" flexDirection="row" alignItems="center">
      <Flex
        flexDirection={{ lg: "row", md: "column", sm: "column" }}
        textAlign={{ lg: "left", md: "center", sm: "center" }}
        textColor="white"
        alignItems="center"
      >
        <Image
          src={logo}
          margin="10px"
          height={{ lg: "200px", md: "180px", sm: "150px" }}
          width={{ lg: "200px", md: "180px", sm: "150px" }}
        ></Image>
        <Flex
          flexDirection="column"
          // fontSize={["sm", "40px", "40px", "50px", "70px"]}
          fontSize={{ lg: "70px", md: "50px", sm: "40px" }}
          fontWeight="bold"
        >
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
