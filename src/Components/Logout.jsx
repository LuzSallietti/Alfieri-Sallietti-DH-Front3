import React, { useContext } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import { Tooltip } from "@mui/material";

const Logout = () => {
  const { dispatch } = useContext(ContextGlobal);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <Link onClick={handleLogout} to="/login">
      <Tooltip title="Salir">
        <LogoutIcon style={{ color: "#fff" }} />
      </Tooltip>
    </Link>
  );
};

export default Logout;
