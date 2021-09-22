import * as React from "react";
import { Helmet } from "react-helmet";
import { Navbar } from "../components/Navbar";
import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { About } from "../components/About";
import { Footer } from "../components/Footer";
import background from "../../static/background.jpg";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CSUFACS</title>
      </Helmet>
      <Flex
        backgroundImage={background}
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
