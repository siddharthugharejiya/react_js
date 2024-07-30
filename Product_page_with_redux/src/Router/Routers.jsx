import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Componets/Home';
import Product from '../Componets/Product';
import Error from '../Componets/Error';
import Singup from '../Componets/Singup';
import Login from '../Componets/Login';


const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/product" element={<Product/>}></Route>
            <Route path='*' element={<Error/>}></Route>
            <Route path='/singup' element={<Singup/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
        </Routes>
    );
}

export default Routers;
