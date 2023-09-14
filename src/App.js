import React from 'react'
import Layout from './Component/Layout/Layout'
import About from './Component/About/About'
import Portfolio from './Component/Portfolio/Portfolio'
import Contact from './Component/Contact/Contact'
import Home from './Component/Home/Home'
import NotFound from './Component/Notfound/NotFound'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

export default function App() {

  const routers = createBrowserRouter([
    {
      path: '/Start-Framework', element: <Layout />, children: [
        { index: true, element: <Home></Home> },
        { path: "/Start-Framework/about", element: <About></About> },
        { path: "/Start-Framework/portfolio", element: <Portfolio></Portfolio> },
        { path: "/Start-Framework/contact", element: <Contact></Contact> },
        {path:'/Start-Framework/*',element:<NotFound></NotFound>}
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

