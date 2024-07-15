import React from 'react'
import Home from "../Componets/Home"
import Login from '../Componets/Login'
import { Route , Routes  } from 'react-router-dom'
import Product from '../Componets/Product'
import Singlepage from '../Componets/Singlepage'
import Singup from '../Componets/Singup'
import PrivateRoute from '../Routes/Private_Com'; 
const Main_Routes = () => {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/Product/'  element={
          <PrivateRoute>
           <Product/>
          </PrivateRoute>
          
          }></Route>

        <Route path='/Singup' element={<Singup/>}></Route>
        <Route path='/Product/:id' element={<Singlepage/>}></Route>
    </Routes>
    </div>
  )
}

export default Main_Routes
