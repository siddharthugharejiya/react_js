import React from 'react'
import Home from "../Componets/Home"
import Login from '../Componets/Login'
import { Route , Routes } from 'react-router-dom'
import Product from '../Componets/Product'
import Singlepage from '../Componets/Singlepage'
const Main_Routes = () => {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/Product' element={<Product/>}></Route>
        <Route path='Product/Singlepage' element={<Singlepage/>}></Route>
    </Routes>
    </div>
  )
}

export default Main_Routes
