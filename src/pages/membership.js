import * as React from "react";
import { Helmet } from "react-helmet";
import { Navbar } from "../components/Navbar";
import { Box, Flex, Image, Link } from "@chakra-ui/react";
import { Header } from "../components/Header";
import HeadingWithLogo from "../components/HeadingWithLogo";
import { About } from "../components/About";
import { Footer } from "../components/Footer";
import img2 from "../../static/img2.jpg";

const MembershipPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CSUFACS</title>
      </Helmet>
      <Flex
        flexDirection="column"
      >
        <Navbar></Navbar>
        <Flex justifyContent="center" flexDirection="column">
          <Box marginTop="20px">
            <HeadingWithLogo>Membership</HeadingWithLogo>
          </Box>
          <Flex
            marginTop="20px"
            textAlign="center"
            flexDirection="column"
            paddingLeft="10%"
            paddingRight="10%"
            justifyContent="space-between"
            fontSize={{ lg: "25px", base: "20px" }}
          >
            <Image
              marginTop="20px"
              objectFit="contain"
              height={{ lg: "400px", base: "200px" }}
              src={img2}
            ></Image>
            <Box marginTop="20px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Box>
            <Box marginTop="20px" marginBottom="30px">
              <Link textDecoration="underline">Apply here!</Link>
            </Box>
          </Flex>
        </Flex>
        <Footer></Footer>
      </Flex>
    </>
  );
};

export default MembershipPage;
