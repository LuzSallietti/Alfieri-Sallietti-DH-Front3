import React from "react";
import MUILogin from "../Components/MUILogin";
import Box from "@mui/material/Box";

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
      <MUILogin />
    </Box>
  );
};

export default Login;
