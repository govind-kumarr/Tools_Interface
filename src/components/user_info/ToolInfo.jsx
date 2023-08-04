import React from "react";
import { Text, Box } from "@chakra-ui/react";

const ToolInfo = ({ info }) => {
  return (
    <Box p={"2"}>
      <Text size={"lg"} fontSize={"2xl"} m={"auto"}>
        Information: {info}
      </Text>
    </Box>
  );
};

export default ToolInfo;
