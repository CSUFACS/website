import { Flex, Image, Text } from "@chakra-ui/react";
import logo from "../../static/logo.svg";
import React from "react";

export function Header() {
  return (
    <Flex
      height="92vh"
      flexDirection="row"
      alignItems="center"
      justifyContent={{ lg: "flex-start", base: "center" }}
    >
      <Flex
        flexDirection={{ lg: "row", md: "column", base: "column" }}
        textAlign={{ lg: "left", md: "center", base: "center" }}
        textColor="white"
        alignItems="center"
      >
        <Image
          src={logo}
          margin="10px"
          height={{ lg: "200px", md: "180px", base: "150px" }}
          width={{ lg: "200px", md: "180px", base: "150px" }}
        ></Image>
        <Flex
          flexDirection="column"
          // fontSize={["sm", "40px", "40px", "50px", "70px"]}
          fontSize={{ lg: "55px", md: "50px", base: "30px" }}
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
