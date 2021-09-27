import * as React from "react";
import { Helmet } from "react-helmet";
import { Navbar } from "../components/Navbar";
import { Flex } from "@chakra-ui/react";
import HeadingWithLogo from "../components/HeadingWithLogo";
import { Footer } from "../components/Footer";
import { BoardCard } from "../components/BoardCard";

const BoardPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CSUFACS</title>
      </Helmet>
      <Flex flexDirection="column">
        <Navbar></Navbar>
        <Flex paddingTop="30px"></Flex>
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
              imageUrl="./brandon.jpg"
              position="President"
            ></BoardCard>
            <BoardCard
              name="Amy Mohamed"
              imageUrl="./amy.jpg"
              position="Internal Vice President"
            ></BoardCard>
            <BoardCard
              name="Joseph Phung"
              imageUrl="./joseph.jpg"
              position="External Vice President"
            ></BoardCard>
            <BoardCard
              name="Amanda Nunez"
              imageUrl="./amanda.jpg"
              position="Secretary"
            ></BoardCard>
            <BoardCard
              name="Jason Wong"
              imageUrl="./jason.jpg"
              position="Treasurer"
            ></BoardCard>
            <BoardCard
              name="Rue Nguyen"
              imageUrl="./rue.jpg"
              position="Event Coordinator"
            ></BoardCard>
            <BoardCard
              name="Benson Lee"
              imageUrl="./benson.jpg"
              position="Marketing Director"
            ></BoardCard>
            <BoardCard
              name="Cathy Tang"
              imageUrl="./cathy.jpg"
              position="Culture Night Chair"
            ></BoardCard>
            <BoardCard
              name="Hailey Riddle"
              imageUrl="./hailey.jpg"
              position="Creative Director"
            ></BoardCard>
            <BoardCard
              name="Joann Lee"
              imageUrl="./joann.jpg"
              position="Historian"
            ></BoardCard>
          </Flex>
        </Flex>
        <Footer></Footer>
      </Flex>
    </>
  );
};

export default BoardPage;
