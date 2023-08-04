import { Box } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      borderColor={"blue.400"}
      border={"1px"}
      display={"flex"}
      justifyContent={"space-between"}
    >
      {/* <Box onClick={() => navigate(-1)}>go back</Box> */}
      <Box></Box>
      <Box></Box>
    </Box>
  );
};

export default Navbar;
