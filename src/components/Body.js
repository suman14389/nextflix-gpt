import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from './Browse'
import Login from './login'
import GptSearch from './GptSearch'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Body = () => {

  const AppLayout = () => {
    return <>
      <Header/>
      <Outlet/>
    </>
  }

  const Router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children: [
          {
            path: '/',
            element: <Login/>
          },
          {
            path: '/gpt',
            element: <GptSearch/>
          },
          {
            path: '/browse',
            element: <Browse/>
          }
        ]
    },
  ])

   

  return (
    <RouterProvider router={Router}/>
  )
}

export default Body