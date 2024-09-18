import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Components/Home';
import Product from '../Components/Product';
import Singlepage from '../Components/Singlepage';
import Login from '../Components/Login';
import S_up from '../Components/S_up';
import Add from '../Components/Add';
import PrivateRoute from './PrivateRoute';

const Mainroutes = () => {
    return (
       <>
         <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<Product />} path='/product/:id' />
            <Route element={<S_up />} path='/Signup' />
            <Route element={<Login />} path='/login' />
            <Route 
              element={
                <PrivateRoute>
                  <Singlepage />
                </PrivateRoute>
              } 
              path='/Singlepage/:id' 
            />
            <Route element={<Add/>} path='/add'/>
         </Routes>
       </>
    );
}

export default Mainroutes;
