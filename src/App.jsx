import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { routes } from "./Navigation/Routes";
import MUINavBar from "./Components/MUINavBar"
import MUIFooter from "./Components/MUIFooter";
function App() {
  return (
    <div className="App">
      {/*Nos falta anidar todo dentro del <Context/> que vamos a crear y exportar */}
      <BrowserRouter>
        <MUINavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          {routes.map(({ id, path, Component }) => (
            <Route key={id} path={path} element={<Component />} />
          ))}
        </Routes>
        <MUIFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;