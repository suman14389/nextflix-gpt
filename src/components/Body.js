import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from './Browse'
import Login from './login'

const Body = () => {

  const Router = createBrowserRouter([
    {
        path: '/',
        element: <Login/>
    },
    {
        path: '/browse',
        element: <Browse/>
    }
  ])

   

  return (
    <RouterProvider router={Router}/>
  )
}

export default Body