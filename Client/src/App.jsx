import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Header from "./components/header/header";
import TestLogo from "./assets/TestLogo.svg";
import ReactSwitch from "react-switch";
import { createContext, useState } from "react";
import Form from "./Pages/form/sform";
import { Row, Col } from "react-bootstrap";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div  className="App mx-0 my-0  d-grid" id={theme}>
        {/* ---------------------- Navbar -----------------------------*/}
        <Col className="navbar">
          <Row>
            <img src={TestLogo} alt="Logo" className="logo" />{/*
            <Row children="divcenter">
              <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            </Row>*/}
          </Row>

          <Row className="mid">
            <Navbar route="Dashboard" theme={theme} />
            <Navbar route="Analysis" theme={theme} />
            <Navbar route="Health" theme={theme} />
          </Row>

          <Row className="bottem">
            <Navbar route="History" theme={theme} />
            <Navbar route="Setting" theme={theme} />
            <Navbar route="LogOut" theme={theme} />
          </Row>
          {/* -------------------------------------------------------*/}
        </Col>

        <Col>
          <Outlet />
        </Col>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
