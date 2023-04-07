import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ContextProvider from "./Components/utils/global.context";
//import Footer from "./Components/Footer";
//import Navbar from "./Components/Navbar";
import { routes, Login, Layout } from "./Navigation/Routes";
import { ProtectedRoutes } from "./Navigation/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoutes />}>
              <Route element={<Layout />}>
                {routes.map(({ id, path, Component }) => (
                  <Route key={id} path={path} element={<Component />} />
                ))}
              </Route>
            </Route>
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
