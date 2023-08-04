import React, { useState } from "react";
import { Button, Box } from "@chakra-ui/react";
import { MdBuild } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ToolButtons = ({ setToolsOutput, bussinessInfo, ourInfo, prompt }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const callTool = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await axios.post(
        "http://localhost:3000/generate_email",
        {
          our_company: ourInfo,
          target_company_info: bussinessInfo,
          prompt,
        }
      );
      const output = response.data;
      setToolsOutput(output.result);
      setIsLoading(false);
    } catch (error) {
      console.log("error executing tool", error);
      setIsLoading(false);
      setIsError(true);
    }
  };
  return (
    <Box display={"flex"} gap={"2"} justifyContent={"center"}>
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
        onClick={() => navigate("/generate_email/docs")}
      >
        Documentation
      </Button>
    </Box>
  );
};

export default ToolButtons;
