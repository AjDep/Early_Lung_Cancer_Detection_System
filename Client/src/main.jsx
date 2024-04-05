import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Analysis from './Pages/Analysis/analysis.jsx';
import Dashboard from './Pages/Dashboard/dashboard.jsx';
import History from "./Pages/History/history.jsx";
import Health from "./Pages/Health/health.jsx";
import Form from './Pages/form/sform.jsx';
import Form2 from './Pages/form/paient.jsx';
import Test from './Pages/Test/test.jsx';
import CreateAccount from './Pages/Create_account/create_account.jsx';
import Signin from './Pages/Signin/sign.jsx';
import Settings from './Pages/Settings/profile.jsx';
// import Settings from "./Pages/Settings/settings.jsx";
// import Profile from "./Pages/Settings/profile.jsx";
const router = createBrowserRouter([
  {
    element:<App/>,
    children:[
      {
        path:"/dashboard",
        element:<Dashboard/>,
      },
      {
        path:"/analysis",
        element:<Analysis/>,
      },
      {
        path:"/health",
        element:<Health/>,
      },
      {
        path:"/history",
        element:<History/>,
      },
      {
        path:"/settings",
        element:<Settings/>,
      },
      {
        path:"/form",
        element:<Form/>
      },
      {
        path:"/form2",
        element:<Form2/>
      },
      {
        path:"/test",
        element:<Test/>
      },
      // {
      //   path:"/Settings",
      //   element:<Profile/>,
      // }
    ],
  },
  {
    path:"/",
    element:<CreateAccount/>,
  },
  {
    path:"/login",
    element:<Signin/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
