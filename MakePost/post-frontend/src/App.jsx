import { useEffect, useState } from "react"
import { Navbar } from "./components/Header/Navbar"
import { Login } from "./pages/Auth/Login"
import { SignUp } from "./pages/Auth/SignUp"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Feeds } from "./pages/Feed/Feeds"
import { SinglePost } from "./pages/Feed/SinglePost"
import { AuthContextProvider } from "./store/AuthContext"
import { MyPosts } from "./pages/Feed/MyPosts"
import { ProtectedRoutes } from "./components/ProtectedRoutes"


function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <Navbar />, children: [
        { path: "/", index: true, element: <Feeds /> },
        { path: '/login', element: <Login /> },
        { path: '/signup', element: <SignUp /> },
        {
          path: '/', element: <ProtectedRoutes />,
          children: [
            { path: '/singlepost', element: <SinglePost /> },
            { path: '/myposts', element: <MyPosts /> }
          ]
        }
      ]
    }
  ])



  return (
    <>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </>
  )
}

export default App
