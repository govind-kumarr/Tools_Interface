import React from "react";
import { Box, Text } from "@chakra-ui/react";

const ToolsOutput = ({ output }) => {
  return (
    <Box maxH={"50vh"} p={"2"} textAlign={"justify"} m={"1"}>
      <Text fontSize={"2xl"}>Tools Output</Text>
      <Textarea
        size={"md"}
        maxH={"30vh"}
        placeholder="Output will appear here..."
        value={output}
        textAlign={"justify"}
        readOnly={true}
      />
    </Box>
  );
};

export default ToolsOutput;
