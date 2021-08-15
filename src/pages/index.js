import * as React from "react";
import { Helmet } from "react-helmet";
import { Navbar } from "../components/Navbar";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import HeadingWithLogo from "../components/HeadingWithLogo";
import { About } from "../components/About";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CSUFACS</title>
      </Helmet>
      <Box
        backgroundImage="/static/background.jpg"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundAttachment="fixed"
      >
        <Navbar></Navbar>
        <Header></Header>
        <Flex
          height="100vh"
          backgroundColor="white"
          alignItems="center"
          flexDirection="column"
          padding="3%"
        >
          <HeadingWithLogo>Who we are</HeadingWithLogo>
          <About></About>
        </Flex>
      </Box>
    </>
  );
};

export default IndexPage;
