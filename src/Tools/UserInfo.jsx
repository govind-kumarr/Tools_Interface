import React, { useState } from "react";
import ToolHeading from "../components/user_info/ToolHeading";
import ToolInfo from "../components/user_info/ToolInfo";
import ToolButtons from "../components/user_info/ToolButtons";
import ToolsOutput from "../components/user_info/ToolsOutput";
import ToolsInput from "../components/user_info/ToolsInput";
import ToolApis from "../components/user_info/ToolApis";
import { toolsEndpoints } from "../endpoints/endpoints";

const UserInfo = () => {
  const [toolsOutput, setToolsOutput] = useState("");
  const [query, setQuery] = useState("");
  const [systemMessage, setSystemMessage] = useState(
    toolsEndpoints[0].default_prompt
  );
  return (
    <div>
      <ToolHeading heading={"Gather User Info"} />
      <ToolInfo
        info={"This tool is used to gather information of the user we pass"}
      />
      {/* <ToolApis /> */}
      <ToolsInput
        query={query}
        setQuery={setQuery}
        systemMessage={systemMessage}
        setSystemMessage={setSystemMessage}
      />
      <ToolsOutput output={toolsOutput} />
      <ToolButtons
        setToolsOutput={setToolsOutput}
        query={query}
        systemMessage={systemMessage}
      />
    </div>
  );
};

export default UserInfo;
