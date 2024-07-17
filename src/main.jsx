import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routers from './Components/Routes/routers.jsx'
import Main from './Components/Layout/Main.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routers}>
      <Main />
    </RouterProvider>
  </React.StrictMode>,
)
