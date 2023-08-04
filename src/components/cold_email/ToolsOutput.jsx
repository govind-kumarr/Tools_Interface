import React from "react";
import { Box, Text } from "@chakra-ui/react";

const ToolsOutput = ({ output }) => {
  return (
    <Box
      maxH={"50vh"}
      p={"2"}
      textAlign={"justify"}
      m={"1"}
    >
      <Text fontSize={"2xl"}>Tools Output</Text>
      <Box
        maxH={"50vh"}
        border={"2px"}
        borderRadius={"1xl"}
        borderColor={"gray"}
        p={"2"}
        textAlign={"justify"}
        m={"1"}
      >
        Output: {output}
      </Box>
    </Box>
  );
};

export default ToolsOutput;
