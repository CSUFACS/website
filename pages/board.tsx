import * as React from "react";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Flex } from "@chakra-ui/react";
import HeadingWithLogo from "../components/HeadingWithLogo";
import { Footer } from "../components/Footer";
import { BoardCard } from "../components/BoardCard";

const BoardPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="logo.svg"></link>
        <title>CSUFACS</title>
      </Head>
      <Flex flexDirection="column">
        <Navbar></Navbar>
        <Flex paddingTop="20px"></Flex>
        <HeadingWithLogo>Board</HeadingWithLogo>
        <Flex flexDirection="column" width="100%" alignItems="center">
          <Flex
            flexDirection="row"
            flexWrap="wrap"
            maxWidth={{ lg: "80%", base: "100%" }}
            alignItems="center"
            alignContent="center"
            justifyContent="center"
            gridGap={{ lg: "120px", md: "50px", base: "30px" }}
            marginTop="30px"
            marginBottom="30px"
          >
            <BoardCard
              name="Brandon Dugas"
              imageUrl="../board/brandon.jpg"
              position="President"
            ></BoardCard>
            <BoardCard
              name="Amy Mohamed"
              imageUrl="../board/amy.jpg"
              position="Internal Vice President"
            ></BoardCard>
            <BoardCard
              name="Joseph Phung"
              imageUrl="../board/joseph.jpg"
              position="External Vice President"
            ></BoardCard>
            <BoardCard
              name="Amanda Nunez"
              imageUrl="../board/amanda.jpg"
              position="Secretary"
            ></BoardCard>
            <BoardCard
              name="Jason Wong"
              imageUrl="../board/jason.jpg"
              position="Treasurer"
            ></BoardCard>
            <BoardCard
              name="Benson Lee"
              imageUrl="../board/benson.jpg"
              position="Marketing Director"
            ></BoardCard>
            <BoardCard
              name="Cathy Tang"
              imageUrl="../board/cathy.jpg"
              position="Culture Night Chair"
            ></BoardCard>
            <BoardCard
              name="Hailey Riddle"
              imageUrl="../board/hailey.jpg"
              position="Creative Director"
            ></BoardCard>
            <BoardCard
              name="Joann Lee"
              imageUrl="../board/joann.jpg"
              position="Historian"
            ></BoardCard>
          </Flex>
          <HeadingWithLogo>Interns</HeadingWithLogo>
          <Flex
            flexDirection="row"
            flexWrap="wrap"
            maxWidth={{ lg: "80%", base: "100%" }}
            alignItems="center"
            alignContent="center"
            justifyContent="center"
            gridGap={{ lg: "120px", md: "50px", base: "30px" }}
            marginTop="30px"
            marginBottom="30px"
          >
            <BoardCard
              name="Amy Eng"
              imageUrl="../interns/amy.jpg"
              position="Event Coordinator Intern"
            ></BoardCard>
            <BoardCard
              name="Leona Wong"
              imageUrl="../interns/leona.jpg"
              position="Marketing Director Intern"
            ></BoardCard>
            <BoardCard
              name="John Nguyen"
              imageUrl="../interns/john.jpg"
              position="Culture Night Chair Intern"
            ></BoardCard>
            <BoardCard
              name="Wei Chong"
              imageUrl="../interns/wei.jpg"
              position="Creative Director Intern"
            ></BoardCard>
            <BoardCard
              name="James Shan"
              imageUrl="../interns/james.jpg"
              position="Historian Intern"
            ></BoardCard>
          </Flex>
        </Flex>
        <Footer></Footer>
      </Flex>
    </>
  );
};

export default BoardPage;
