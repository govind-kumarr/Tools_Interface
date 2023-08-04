import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import ToolHeading from "../components/cold_email/ToolHeading";
import ToolInfo from "../components/cold_email/ToolInfo";
import ToolButtons from "../components/cold_email/ToolButtons";
import ToolsOutput from "../components/cold_email/ToolsOutput";
import ToolsInput from "../components/cold_email/ToolsInput";
import ToolApis from "../components/cold_email/ToolApis";
import { toolsEndpoints } from "../endpoints/endpoints";

const ColdEmail = () => {
  const [toolsOutput, setToolsOutput] = useState("");
  const [ourInfo, setOurInfo] = useState("");
  const [bussinessInfo, setBusinessInfo] = useState("");
  const [prompt, setPrompt] = useState(toolsEndpoints[1].default_prompt);

  return (
    <Box>
      <ToolHeading />
      <ToolInfo
        info={
          "This tool is used to generate cold email based on the summary of business"
        }
      />
      {/* <ToolApis /> */}
      <ToolsInput
        ourInfo={ourInfo}
        setOurInfo={setOurInfo}
        bussinessInfo={bussinessInfo}
        setBusinessInfo={setBusinessInfo}
        prompt={prompt}
        setPrompt={setPrompt}
      />
      <ToolsOutput output={toolsOutput} />
      <ToolButtons
        setToolsOutput={setToolsOutput}
        ourInfo={ourInfo}
        bussinessInfo={bussinessInfo}
        prompt={prompt}
      />
    </Box>
  );
};

export default ColdEmail;
