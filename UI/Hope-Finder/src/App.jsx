import { useState } from 'react'
import './App.css'
//import Analysis from './Pages/Analysis/analysis';
//import Dashboard from './Pages/Dashboard/dashnoard';
import Health from './Pages/Health/health';
import HealthBoot from './Pages/HealthBoot/health_boot'
import Sign from './Pages/Signin/sign';
import Create_account from './Pages/Create_account/create_account'
import Create_account_boot from './Pages/Create_account_boot/create_account_boot'
import Signin_boot from './Pages/Signin_boot/signin_boot'



function App() {
  return (
    <div className="App">
      {/*<Analysis/>
      <Dashboard/>*/}
      
      <Create_account_boot/>
    </div>
      
  );
}

export default App
