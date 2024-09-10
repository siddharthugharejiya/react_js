import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Home from '../Components/Home';
import Product from '../Components/Product';
import Singlepage from '../Components/Singlepage';
import Login from '../Components/Login';
import S_up from '../Components/S_up';
const Mainroutes = () => {
    return (
       <>
         <Routes>
            <Route element={<Home/>} path='/'></Route>
            <Route element={<Product/>} path='/product'></Route> 
            <Route element={<S_up/>} path='/signup'></Route>
            <Route element={<Login/>} path='/login'></Route>
            <Route element={<Singlepage/>} path='/singlepage'></Route>
         </Routes>
       </>
    );
}

export default Mainroutes;
