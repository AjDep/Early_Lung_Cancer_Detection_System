import { useState } from 'react'
import './App.css'
//import Analysis from './Pages/Analysis/analysis';
//import Dashboard from './Pages/Dashboard/dashnoard';
import Health from './Pages/Health/health';
import Sign from './Pages/Signin/sign';
import Create_account from './Pages/Create_account/create_account'


function App() {
  return (
    <div className="App">
      {/*<Analysis/>
      <Dashboard/>*/}
      
      <Create_account/>
    </div>
      
  );
}

export default App
