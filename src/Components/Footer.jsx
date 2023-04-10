import React, { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import logo from "../img/DH.png";
import { Paper, Typography } from "@mui/material";

const Footer = () => {
  const { state } = useContext(ContextGlobal);
  const { footer, secondary_color } = state.theme;
  return (
    <Paper
      square
      elevation={2}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      style={{ padding: "15px", backgroundColor: footer }}
    >
      <Typography variant="body2" sx={{ color: secondary_color }}>
        &copy;Powered by
      </Typography>
      <img
        src={logo}
        alt="DH-logo"
        style={{ width: "150px", height: "auto" }}
      />
    </Paper>
  );
};

export default Footer;
