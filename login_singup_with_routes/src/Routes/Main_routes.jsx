import React from 'react'
import { Routes,Route } from 'react-router-dom'
// import About from "../Componets/About";
import Home from '../Componets/Home';
import Login from '../Componets/Login';
import Product from '../Componets/Product';
import Single_page from '../Componets/Single_page';
import Singup from '../Componets/Singup';
const Main_routes = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Product' element={<Product/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/Singup' element={<Singup/>}></Route>
          <Route path='/product/Single_page' element={<Single_page/>}></Route>

      </Routes>
    </div>
  )
}

export default Main_routes
