import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from '../Componets/Product'
import Home from '../Componets/Home'
import { Dashboard } from '../Componets/Dashboard'
import Addproducts from '../Componets/Addproducts'


export const MainRouter = () => {
  return (
    <div>
     
      <Routes>
        <Route path='/Product' element={<Product/>}></Route>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/Addproducts' element={<Addproducts/>}></Route>
      </Routes>
   
    </div>
  )
}

