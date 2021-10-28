import { Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

interface HeadingWithLogoProps {
  children: React.ReactNode;
}

export default function HeadingWithLogo({ children }: HeadingWithLogoProps) {
  return (
    <Flex flexDirection="row" justifyContent="center">
      <Image src={"/logo.svg"} alt="" width="40px" height="40px"></Image>
      <Heading paddingLeft="10px" paddingRight="10px">
        {children}
      </Heading>
      <Image src={"/logo.svg"} width="40px" height="40px"></Image>
    </Flex>
  );
}
