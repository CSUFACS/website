import { Flex, Text, Image, Box, Button, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import img1 from "../../static/img1.jpg";
import React from "react";
import HeadingWithLogo from "./HeadingWithLogo";

export function About() {
  return (
    <Flex
      marginTop="30px"
      padding="10px"
      flexDirection="column"
      justifyContent="center"
      width="90vw"
    >
      <HeadingWithLogo>Who we are</HeadingWithLogo>
      <Flex
        flexDirection={{ lg: "row", base: "column" }}
        justifyContent="flex-end"
        paddingBottom="30px"
      >
        <Box
          maxWidth={{ lg: "60%", base: "100%" }}
          textAlign={{ lg: "left", base: "center" }}
          fontSize={{ lg: "25px", base: "20px" }}
        >
          The Association of Chinese Students (ACS) is a social-cultural
          organization on campus for students who are a part of and interested
          in Chinese-American culture. Members of ACS are given opportunities to
          learn, experience, and become culturally aware of Chinese culture as
          well as its lifestyle and values. ACS members also gather for social
          events where they bond and grow closer to one another through their
          interest in Chinese culture. The Association of Chinese Students also
          coordinates an annual performance arts show called Chinese Culture
          Night, which aims to entertain and educate its audience about
          Chinese-American culture through a variety of traditional and modern
          dances, engaging theater performances, and many more.
        </Box>
        <Image
          margin="0 auto"
          boxSize={{ lg: "xl", base: "md" }}
          objectFit="contain"
          src={img1}
        ></Image>
      </Flex>
      <Box marginTop="50px">
        <HeadingWithLogo>Events</HeadingWithLogo>
        <Flex justifyContent="center">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&src=Y3N1Zi5hY3MuZXZlbnRzQGdtYWlsLmNvbQ&color=%23F09300"
            width="800"
            height="600"
            frameborder="0"
            scrolling="no"
          ></iframe>
        </Flex>
      </Box>
      <Box marginTop="50px">
        <HeadingWithLogo>Get Involved</HeadingWithLogo>
        <Flex
          alignContent="center"
          justifyContent="center"
          textAlign="center"
          flexDirection="column"
          fontSize={{ lg: "25px", base: "20px" }}
        >
          Follow us on social media for the latest updates
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
      </Box>
    </Flex>
  );
}
