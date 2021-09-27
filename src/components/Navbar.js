import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Flex, Image, Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "gatsby";
import React, { useEffect } from "react";
import logo from "../../static/logo.svg";

const MotionFlex = motion(Flex);

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const controls = useAnimation();
  const toggle = () => setIsOpen(!isOpen);

  // TODO: animation stuff
  // const list = {
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       when: "beforeChildren",
  //       staggerChildren: 0.3,
  //     },
  //   },
  //   hidden: {
  //     opacity: 0,
  //     transition: {
  //       when: "afterChildren",
  //     },
  //   },
  // }

  // useEffect(() => {
  //   if (isOpen) {
  //     controls.start(list.visible);
  //   }
  //   else {
  //     controls.start({
  //       opacity: "0%"
  //     });
  //   }
  // }, [controls, isOpen]);

  return (
    <Flex
      justifyContent="space-between"
      boxShadow="md"
      backgroundColor="white"
      flexDir={{ base: "column", lg: "row" }}
      minHeight="6vh"
    >
      <Flex
        alignItems="center"
        fontSize={{ lg: "40px", base: "40px" }}
        fontWeight="900"
        justifyContent="space-between"
      >
        <Flex>
          <Image
            src={logo}
            paddingLeft="10px"
            width={{ base: "60px" }}
            height={{ base: "60px" }}
          ></Image>
          <Flex paddingLeft="10px">
            CSUF
            <Text color="acsgreen">ACS</Text>
          </Flex>
        </Flex>
        <Flex display={{ base: "flex", lg: "none" }} onClick={() => toggle()}>
          {isOpen ? (
            <CloseIcon boxSize="20px"></CloseIcon>
          ) : (
            <HamburgerIcon height="30px"></HamburgerIcon>
          )}
        </Flex>
      </Flex>
      <MotionFlex
        animate={controls}
        // initial={{ opacity: "0%" }}
        alignItems="center"
        justifyContent="space-evenly"
        minWidth="50%"
        fontSize={{ base: "20px" }}
        fontWeight="light"
        flexDir={{ base: "column", lg: "row" }}
        display={{ base: !isOpen ? "none" : "flex", lg: "flex" }}
      >
        <Link to="../">Home</Link>
        <Link to="../membership">Membership</Link>
        <Link to="../board">Board</Link>
        <Link to="../contact">Contact</Link>
      </MotionFlex>
    </Flex>
  );
}
