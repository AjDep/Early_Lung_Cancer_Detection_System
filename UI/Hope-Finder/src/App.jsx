
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import TestLogo from './assets/TestLogo.svg';

import { createContext,useState } from 'react';

export const TheamContext = createContext(null);

function App() {
  const [theme,setTheam] = useState("dark");

  const toggleTheam = () => {
    setTheam((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <TheamContext.Provider value={{theme, toggleTheam}}>
      <div className="App" id={theme}>

        {/* ---------------------- Navbar -----------------------------*/}
        <div className='navbar'>
          <div >
            <img src={TestLogo} alt="Logo" className='logo'/>
          </div>

          <div className='mid'>
            <Navbar route="Dashboard" id={theme}/>
            <Navbar route="Analysis"/>
            <Navbar route="Health"/>
          </div>

          <div className='bottem'>
            <Navbar route="History"/>
            <Navbar route="Setting"/>
            <Navbar route="LogOut"/>
          </div>

      {/* -------------------------------------------------------*/}  

        </div>
        <Outlet/>
      </div>
    </TheamContext.Provider>
  );
}

export default App