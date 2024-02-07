import { useState } from 'react'
import './App.css'
import Header from './components/header/header';
import Bottem_card from './components/Analysis/bottem_card';
import Pie_chart from './components/Analysis/pie_chart';
import Navbar from './components/Navbar/navbar';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='home'>
        <Header name="Analysis"/>
        <div className='content'>
          <div className='top_container'>
           <Pie_chart/>
          </div>
          <div className='bottem_container'>
            <Bottem_card Details="asdasdsa" value="213"/>
            <Bottem_card Details="asdasdsa" value="213"/>
            <Bottem_card Details="asdasdsa" value="213"/>
            <Bottem_card Details="asdasdsa" value="213"/>
            <Bottem_card Details="asdasdsa" value="213"/>
            <Bottem_card Details="asdasdsa" value="213"/>
            <Bottem_card Details="asdasdsa" value="213"/>
            <Bottem_card Details="asdasdsa" value="213"/>
          </div>
        </div>
      </div>
    </div>
      
  );
}

export default App
