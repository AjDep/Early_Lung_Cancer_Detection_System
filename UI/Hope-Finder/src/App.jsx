import { useState } from 'react'
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import TestLogo from './assets/TestLogo.svg';


function App() {
  return (
    <div className="App">

      {/* ---------------------- Navbar -----------------------------*/}
      <div className='navbar'>
        <div >
          <img src={TestLogo} alt="Logo" className='logo'/>
        </div>

        <div className='mid'>
          <Navbar route="Dashboard"/>
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
      
  );
}

export default App