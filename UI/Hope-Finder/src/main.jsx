import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Analysis from './Pages/Analysis/analysis.jsx';
import Dashboard from './Pages/Dashboard/dashboard.jsx';
import './scss/styles.scss';
import * as bootstrap from 'bootstrap';

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
