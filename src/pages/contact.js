import * as React from "react";
import { Helmet } from "react-helmet";
import { Navbar } from "../components/Navbar";
import { Img, Flex, Link } from "@chakra-ui/react";
import HeadingWithLogo from "../components/HeadingWithLogo";
import { Footer } from "../components/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import {
  faDiscord,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
config.autoAddCss = false;

const BoardPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="icon" href="logo.svg"></link>
        <title>CSUFACS</title>
      </Helmet>
      <Flex flexDirection="column">
        <Navbar></Navbar>
        <Flex paddingTop="20px" alignItems="center"></Flex>
        <Flex flexDirection="column">
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            // height="80vh"
          >
            <HeadingWithLogo>Connect with us!</HeadingWithLogo>
            <Img
              src="../img3.jpg"
              height={{ lg: "400px", md: "300px", base: "200px" }}
              marginBottom="20px"
            ></Img>
            <Flex
              alignContent="center"
              justifyContent="center"
              textAlign="center"
              flexDirection="column"
              fontSize={{ lg: "25px", base: "20px" }}
            >
              We meet every Tuesday @ 4pm at the TSU Alvarado!<br></br>
              Follow us on social media and join our Discord server where we
              post the lastest announcements and updates.
            </Flex>
            <Flex
              flexDirection="row"
              justifyContent="center"
              fontSize="50px"
              paddingBottom="10%"
            >
              <Flex justifyContent="space-around" width="50vw">
                <Link href="https://www.instagram.com/csufacs/">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link href="https://discord.gg/7uaJmDQ">
                  <FontAwesomeIcon icon={faDiscord} />
                </Link>
                <Link href="https://www.facebook.com/groups/ACSCSUF/">
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Footer></Footer>
      </Flex>
    </>
  );
};

export default BoardPage;
