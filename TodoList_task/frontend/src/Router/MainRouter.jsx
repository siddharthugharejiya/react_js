import React from 'react'
import Register from '../Components/Register'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login'
import Todo from '../Components/Todo'
import {PrivateRoute} from './privateRoute'


function MainRouter() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} ></Route>
      <Route path="/login" element={<Login />} ></Route>
      <Route path="/"
        element={
         <PrivateRoute>
          <Todo />
         </PrivateRoute>
        }
      ></Route>
    </Routes>
  )
}

export default MainRouter