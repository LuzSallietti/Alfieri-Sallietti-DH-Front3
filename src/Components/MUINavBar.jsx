import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MUILogout from "./utils/MUILogout";


import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const drawerWidth = "100%";

function MUINavBar(props) {
  const { state, dispatch } = useContext(ContextGlobal);
  const {name, color, navbar} = state.theme;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleTheme = () => {
    dispatch({ type: "THEME"})
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navItems = [
    <Link style={{color:color}} to="/home">
      Home
    </Link>,
    <Link style={{color:color}} to="/contact">
      Contact
    </Link>,
    <Link style={{color:color}} to="/favs">
      Favs
    </Link>,
    <MUILogout />,
  ];

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: navbar }}
    >
      <Typography variant="h6" sx={{ my: 2, color: color }}>
        Odonto Index
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={Math.random()} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{backgroundColor: navbar}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Odonto Index
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: color,
              borderRadius: 1,
              p: 3,
            }}
          >
            {name} mode
            <IconButton
              sx={{ sm: 1 }}
              onClick={handleTheme}
              color="inherit"
            >
              {name === "Dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={Math.random()}>{item}</Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

MUINavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default MUINavBar;
