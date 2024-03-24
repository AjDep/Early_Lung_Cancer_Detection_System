import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Analysis from './Pages/Analysis/analysis.jsx';
import Dashboard from './Pages/Dashboard/dashboard.jsx';
import Form from './Pages/form/sform.jsx';
import Form2 from './Pages/form/paient.jsx'
import Health from './Pages/Health/health.jsx'
const router = createBrowserRouter([
  {
    element:<App/>,
    children:[
      {
        path:"/analysis",
        element:<Analysis/>,
      },
      {
        path:"/",
        element:<Dashboard/>,
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
        path:"/health",
        element:<Health/>
      },
      {
        path:"/form2",
        element:<Form2/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
