import { Box, Button, Input } from "@chakra-ui/react";
import React from "react";

const Login = () => {
  return (
    <Box
      maxW={"500"}
      m={"auto"}
      display={"flex"}
      flexDirection={"column"}
      gap={"3"}
      border={"2px"}
      p={"2"}
      borderColor={"blue.400"}
      borderRadius={"1"}
    >
      <Input variant={"outline"} placeholder="Enter Email Address" />
      <Input variant={"outline"} placeholder="Enter Password" />
      <Button w={"100%"} colorScheme="linkedin">
        Login
      </Button>
    </Box>
  );
};

export default Login;
