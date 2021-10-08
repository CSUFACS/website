import { Flex, Text, Image } from "@chakra-ui/react";
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
      fontSize={{ lg: "25px", base: "20px" }}
      // marginBottom="10px"
    >
      <Text padding="20px">2021</Text>
      <Image
        src={"./logo.svg"}
        alt=""
        width={{ lg: "60px", base: "50px" }}
        height={{ lg: "60px", base: "50px" }}
      ></Image>
      <Text padding="20px">ACS</Text>
    </Flex>
  );
}
