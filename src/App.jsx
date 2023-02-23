import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import { Product} from './pages/Product'
import { HomePage } from './pages/Home'
import { RootLayout } from './pages/Root'
import './App.css'


const router = createBrowserRouter([
  {
    path:"/",
    element: <RootLayout/>,
    children:[
      {
        path:"/",
        element: <HomePage/>
      },
      {
        path:"/Product",
        element:<Product/>
      },
    ]
  },
])
  
function App() {
  return (
      <RouterProvider router={router}/>
  )
}

export default App
