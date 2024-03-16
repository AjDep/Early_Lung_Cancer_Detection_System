import { useState } from 'react'
import './App.css'
import Analysis from './Pages/Analysis/analysis';
//import Dashboard from './Pages/Dashboard/dashnoard';
//import Health from './Pages/Health/health';
//import HealthBoot from './Pages/HealthBoot/health_boot'
//import Sign from './Pages/Signin/sign';
//import Create_account from './Pages/Create_account/create_account'
//import Create_account_boot from './Pages/Create_account_boot/create_account_boot'
//import Signin_boot from './Pages/Signin_boot/signin_boot'
//import HealthSecond from './Pages/HealthSecond/health_second'
//import CreateSecond from './Pages/CreateSecond/create_second'
import SignSecond from './Pages/SignSecond/sign_second'


function App() {
  return (
    <div className="App">
      {/*<Analysis/>
      <Dashboard/>*/}
      
      <SignSecond/>
    </div>
      
  );
}

export default App;
