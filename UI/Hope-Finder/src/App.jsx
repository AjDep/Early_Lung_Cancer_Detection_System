
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Header from './components/header/header';
import TestLogo from './assets/TestLogo.svg';
import ReactSwitch from "react-switch";
import { createContext,useState } from 'react';

export const TheamContext = createContext(null);

function App() {


  const [theme,setTheam] = useState("light");

  const toggleTheam = () => {
    setTheam((curr) => (curr === "light" ? "dark" : "light"));
  }
 
  if(theme === "dark"){
    return (
      <TheamContext.Provider value={{theme, toggleTheam}}>
        <div className="App" id={theme}>

          {/* ---------------------- Navbar -----------------------------*/}
          <div className='navbar'>
            <div >
              <img src={TestLogo} alt="Logo" className='logo'/>
                <div children='divcenter'>
                <ReactSwitch onChange={toggleTheam} checked={theme === "dark"}/>
                </div>
            </div>
           

            <div className='mid'>
              <Navbar route="Dashboard" theme="dark"/>
              <Navbar route="Analysis" theme="dark"/>
              <Navbar route="Health" theme="dark"/>
            </div>

            <div className='bottem'>
              <Navbar route="History" theme="dark"/>
              <Navbar route="Setting" theme="dark"/>
              <Navbar route="LogOut" theme="dark"/>
            </div>

        {/* -------------------------------------------------------*/}  

          </div>
          <Outlet/>
        </div>
      </TheamContext.Provider>
    );
  }else if(theme === "light"){
    return (
      <TheamContext.Provider value={{theme, toggleTheam}}>
        <div className="App" id={theme}>

          {/* ---------------------- Navbar -----------------------------*/}
          <div className='navbar'>
            <div className='withswitch'>
              <img src={TestLogo} alt="Logo" className='logo'/>
              <div children='divcenter'>
                <ReactSwitch onChange={toggleTheam} checked={theme === "dark"}/>
              </div>
            </div>

            <div className='mid'>
              <Navbar route="Dashboard" theme="light"/>
              <Navbar route="Analysis" theme="light"/>
              <Navbar route="Health" theme="light"/>
            </div>

            <div className='bottem'>
              <Navbar route="History" theme="light"/>
              <Navbar route="Setting" theme="light"/>
              <Navbar route="LogOut" theme="light"/>
            </div>

        {/* -------------------------------------------------------*/}  

          </div>
          <Outlet/>
        </div>
      </TheamContext.Provider>
    );
  }
}

export default App