import React from "react";
import logo from "../img/DH.png";
import { Paper, Typography } from "@mui/material";

const MUIFooter = () => {
  return (
    <Paper
      square
      elevation={2}
      sx={{ display: 'flex' , alignItems:"center", justifyContent:"center"}}
      style={{ padding: "15px", backgroundColor: "#f5f5f5"}}
    >
      
      <Typography variant="body2" color="textSecondary" >
        &copy;Powered by</Typography>
        <img
          src={logo}
          alt="DH-logo"
          style={{ width: "150px" , height:"auto"}}
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
