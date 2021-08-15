import * as React from "react";
import { Helmet } from "react-helmet";
import { Navbar } from "../components/Navbar";
import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import HeadingWithLogo from "../components/HeadingWithLogo";
import { About } from "../components/About";
import { Footer } from "../components/Footer";
import background from "../../public/static/background.jpg";

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
          <HeadingWithLogo>Who we are</HeadingWithLogo>
          <About></About>
        </Flex>
        <Footer></Footer>
      </Flex>
    </>
  );
};

export default IndexPage;
