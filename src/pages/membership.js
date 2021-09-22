import * as React from "react";
import { Helmet } from "react-helmet";
import { Navbar } from "../components/Navbar";
import { Box, Flex, Image, Link } from "@chakra-ui/react";
import HeadingWithLogo from "../components/HeadingWithLogo";
import { Footer } from "../components/Footer";
import img2 from "../../static/img2.jpg";

const MembershipPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CSUFACS</title>
      </Helmet>
      <Flex flexDirection="column">
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
            fontSize={{ lg: "20px", base: "20px" }}
          >
            <Image
              marginTop="20px"
              objectFit="contain"
              height={{ lg: "400px", md: "300px", base: "200px" }}
              src={img2}
            ></Image>
            <Box
              marginTop="20px"
              fontSize={{ lg: "20px", md: "17px", base: "15px" }}
            >
              ACS is always open to new members! Whether you're a freshman, a
              recent graduate, or attend another school, you are welcome to join
              us at our meetings!
              <br></br>
              <br></br>
              <b>
                Official membership for the entire year is $10 and includes:
              </b>
              <UnorderedList>
                <ListItem>Ride priority to aftersocials</ListItem>
                <ListItem>Discounts for official ACS merch</ListItem>
                <ListItem>Access to winter retreat</ListItem>
                <ListItem>
                  Opportunities to join our big & little program
                </ListItem>
                <ListItem>
                  Opportunities to join our internship program
                </ListItem>
                <ListItem>
                  Opportunities to run for and vote for board positions
                </ListItem>
              </UnorderedList>
              <br></br>
              While our events and meetings are free and open to the general
              public, only official members will receive the above benefits.
              Want to know more? come out to our next meeting or shoot us a
              message on Instagram{" "}
              <Link
                textDecoration="underline"
                href="https://www.instagram.com/csufacs/"
              >
                @CSUFACS
              </Link>
            </Box>
            <Box marginTop="20px" marginBottom="30px">
              <Link
                textDecoration="underline"
                href="https://forms.gle/Zn68386HbLgSx6CE6"
              >
                Apply here!
              </Link>
            </Box>
          </Flex>
        </Flex>
        <Footer></Footer>
      </Flex>
    </>
  );
};

export default MembershipPage;
