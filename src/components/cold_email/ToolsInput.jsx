import React from "react";
import { Input, Text, Box, Textarea } from "@chakra-ui/react";

const ToolsInput = ({
  ourInfo,
  setOurInfo,
  bussinessInfo,
  setBusinessInfo,
  prompt,
  setPrompt,
}) => {
  return (
    <Box p={"2"}>
      <Text fontSize={"2xl"}>Tool Prompt</Text>
      <Textarea
        p={"10px"}
        placeholder="Enter the prompt here..."
        value={prompt}
        textAlign={"justify"}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <Text fontSize={"2xl"}>Tools Input</Text>
      <Box display={"flex"} flexDirection={"column"} gap={"2"}>
        <Input
          placeholder="Enter the info of your company..."
          variant="outline"
          value={ourInfo}
          onChange={(e) => setOurInfo(e.target.value)}
        />
        <Input
          placeholder="Enter the summary of business..."
          variant="outline"
          value={bussinessInfo}
          onChange={(e) => setBusinessInfo(e.target.value)}
        />
      </Box>
    </Box>
  );
};

export default ToolsInput;
