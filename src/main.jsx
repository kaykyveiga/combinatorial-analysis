import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from './pages/Home/Home.jsx';
import FactorialNumber from './pages/FactorialNumber/FactorialNumber.jsx';
import FactorialDivision from './pages/FactorialDivision/FactorialDivision.jsx';
import FactorialArrangement from './pages/FactorialArrangement/FactorialArrangement.jsx';
import FactorialCombination from './pages/FactorialCombination/FactorialCombination.jsx';


import { createHashRouter, RouterProvider } from "react-router-dom"

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "FactorialNumber",
        element: <FactorialNumber />,
      },
      {
        path : "FactorialDivision",
        element: <FactorialDivision/>,
      },
      {
        path : "FactorialArrangement",
        element : <FactorialArrangement/>,
      },
      {
        path : "FactorialCombination",
        element : <FactorialCombination/>,
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
