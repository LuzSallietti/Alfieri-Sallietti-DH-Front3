import React, { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import logo from "../img/DH.png";
import { Paper, Typography } from "@mui/material";

const MUIFooter = () => {
  const { state } = useContext(ContextGlobal);
  const { name, color, body, footer, navbar, secondary_color } = state.theme;
  return (
    <Paper
      square
      elevation={2}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      style={{ padding: "15px",backgroundColor: footer }}
    >
      <Typography variant="body2" sx={{color: secondary_color}}>
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

export default MUIFooter;

/*
const Footer = () => {
  return (
    <footer>
        <p>Powered byy</p>
        <img src={logo} alt='DH-logo' />
    </footer>
  )
}

export default Footer
*/
