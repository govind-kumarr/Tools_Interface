import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const User_info_Doc = () => {
  return (
    <Box>
      <Heading textAlign={"center"}>User Info Research Tool</Heading>
      <Text fontSize={"xl"}>
        Description : This tool is used to do research about anyone and anything
        <br />
      </Text>
      <Text fontSize={"xl"}>API :- http://3.88.173.73/user_info</Text>
      <Text fontSize={"xl"}>Method :- POST</Text>
      <Text fontSize={"xl"}>
        Body:-{" "}
        {`{
          query: "Your query here"
        }`}
      </Text>
    </Box>
  );
};

export default User_info_Doc;
