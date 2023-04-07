import React from "react";
import { Navigate, Outlet } from "react-router";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

export const ProtectedRoutes = () => {
  const { state } = useContext(ContextGlobal);
  return state?.isLogged ? <Outlet /> : <Navigate to="/login" />;
};
