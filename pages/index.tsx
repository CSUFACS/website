import * as React from "react";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { About } from "../components/About";
import { Footer } from "../components/Footer";

const IndexPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="logo.svg"></link>
        <title>CSUFACS</title>
      </Head>
      <Flex
        backgroundImage={"./background.jpg"}
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundAttachment="fixed"
        flexDirection="column"
      >
        <Navbar></Navbar>
        <Header></Header>
        <Flex
          paddingTop="30px"
          backgroundColor="white"
          alignItems="center"
          flexDirection="column"
        >
          <About></About>
        </Flex>
        <Footer></Footer>
      </Flex>
    </>
  );
};

export default IndexPage;
