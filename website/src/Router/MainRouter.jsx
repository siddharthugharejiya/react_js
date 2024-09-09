import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Compontes/Home';
import Product from '../Compontes/Product';
import Signup from '../Compontes/Signup';
import Login from '../Compontes/Login';
import Singlepage from '../Compontes/Singlepage';

const MainRouter = () => {
    return(
        <Routes>
         <Route element={<Home/>} path='/'></Route>
         <Route element={<Product/>} path='/product'></Route>
         <Route element={<Signup/>} path='/signup'></Route>
         <Route element={<Login/>} path='/login'></Route>
         <Route element={<Singlepage/>} path='/singlepage'></Route>
        </Routes>
    )
}

export default MainRouter;
