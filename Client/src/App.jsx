import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Header from './components/header/header';
import TestLogo from './assets/TestLogo.svg';
import ReactSwitch from "react-switch";
import { createContext, useState } from 'react';
import Form from './Pages/form/sform';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }
 
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}>
        {/* ---------------------- Navbar -----------------------------*/}
        <div className='navbar'>
          <div>
            <img src={TestLogo} alt="Logo" className='logo'/>
            <div children='divcenter'>
              <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            </div>
          </div>
          
          <div className='mid'>
            <Navbar route="Dashboard" theme={theme}/>
            <Navbar route="Analysis" theme={theme}/>
            <Navbar route="Health" theme={theme}/>
          </div>

          <div className='bottem'>
            <Navbar route="History" theme={theme}/>
            <Navbar route="Setting" theme={theme}/>
            <Navbar route="LogOut" theme={theme}/>
          </div>
          {/* -------------------------------------------------------*/}  
        </div>
       
        <Outlet/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
