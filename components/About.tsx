import { Flex, Image, Box, Link } from "@chakra-ui/react";
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
          src={"./img1.jpg"}
          alt=""
        ></Image>
      </Flex>
      <Box marginTop="50px">
        <HeadingWithLogo>Join us!</HeadingWithLogo>
        <Flex
          alignContent="center"
          justifyContent="center"
          textAlign="center"
          flexDirection="column"
          fontSize={{ lg: "25px", base: "20px" }}
          marginBottom="70px"
        >
          <span>
            We meet every Tuesday @ 4pm at the TSU Alvarado!
            <br />
            Follow us on our{" "}
            <Link href="../contact" style={{ textDecoration: "underline" }}>
              social media
            </Link>{" "}
            for the latest updates!
          </span>
        </Flex>
      </Box>
    </Flex>
  );
}
