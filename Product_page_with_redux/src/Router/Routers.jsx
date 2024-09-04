import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Componets/Home';
import Product from '../Componets/Product';
import Error from '../Componets/Error';
import Singup from '../Componets/Singup';
import Login from '../Componets/Login';
import PrivateRoute from './PrivateRoute';
import Singlepage from '../Componets/Singlepage';
import Cart from '../Componets/Cart';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/product" element={
                <PrivateRoute>
                    <Product/>
                </PrivateRoute>
            }></Route>
            <Route path="*" element={<Error/>}></Route>
            <Route path="/singup" element={<Singup/>}></Route>
            <Route path="/product/:id" element={<Singlepage/>}></Route> 
            <Route path="/login" element={<Login/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
    );
}

export default Routers;
