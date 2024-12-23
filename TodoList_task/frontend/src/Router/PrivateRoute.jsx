import React from 'react'
import { Navigate } from 'react-router-dom'

export function PrivateRoute({children}) {
    const User_login = localStorage.getItem("login")
  return (
    <>
    {
        User_login === "true" ? children : <Navigate to="/register"/>
    } 
    </>
  )
}

