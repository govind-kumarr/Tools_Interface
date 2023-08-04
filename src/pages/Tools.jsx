import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Tools = () => {
  return (
    <Box p={"2"}>
      <Heading textAlign={"center"}>Tools Available</Heading>
      <Box border={"2px"} p={"2"} display={"flex"} gap={"2"}>
        <Box
          border={"1px"}
          borderRadius={"md"}
          width={"200px"}
          textAlign={"center"}
          p={"2"}
          bg={"blue.400"}
          color={"white"}
        >
          <Link to={"/user_info"}>User Info Tool</Link>
        </Box>
        <Box
          border={"1px"}
          borderRadius={"md"}
          width={"200px"}
          textAlign={"center"}
          p={"2"}
          bg={"blue.400"}
          color={"white"}
        >
          <Link to={"/generate_email"}>Cold Email Tool</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Tools;
