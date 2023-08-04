import React from "react";
import { Input, Text, Box, Textarea } from "@chakra-ui/react";

const ToolsInput = ({ query, setQuery, systemMessage, setSystemMessage }) => {
  return (
    <Box p={"2"}>
      <Text fontSize={"2xl"}>Prompt</Text>
      <Textarea
        p={"20px"}
        placeholder="Enter the prompt here..."
        value={systemMessage}
        textAlign={"justify"}
        onChange={(e) => setSystemMessage(e.target.value)}
      />
      <Text fontSize={"2xl"}>Tools Input</Text>
      <Input
        placeholder="Enter the query"
        variant="outline"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </Box>
  );
};

export default ToolsInput;
