import React, { useState } from "react";
import { Button, Box } from "@chakra-ui/react";
import { MdBuild } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ToolButtons = ({ setToolsOutput, query, systemMessage }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const callTool = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await axios.post(
        "https://1124-124-253-56-106.ngrok-free.app/test/user_info",
        {
          query,
          system_message: systemMessage,
        }
      );
      const output = response.data;
      setToolsOutput(output);
      setIsLoading(false);
    } catch (error) {
      console.log("error executing tool", error);
      setIsLoading(false);
      setIsError(true);
    }
  };
  return (
    <Box display={"flex"} justifyContent={"center"} gap={"2"}>
      <Button
        colorScheme="linkedin"
        leftIcon={<MdBuild />}
        isLoading={isLoading}
        onClick={() => callTool()}
      >
        Execute Tool
      </Button>
      <Button
        colorScheme="orange"
        leftIcon={<HiOutlineDocumentText />}
        onClick={() => navigate("/user_info/docs")}
      >
        Documentation
      </Button>
    </Box>
  );
};

export default ToolButtons;
