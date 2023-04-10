import React from "react";
import Box from "@mui/material/Box";
import LoginForm from "../Components/LoginForm";

const Login = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e1f5fe",
      }}
    >
      <LoginForm />
    </Box>
  );
};

export default Login;
