import React from "react";
import MUINavBar from "../MUINavBar";
import MUIFooter from "../MUIFooter";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <MUINavBar />
      <Outlet />
      <MUIFooter />
    </>
  );
};

export default Layout;