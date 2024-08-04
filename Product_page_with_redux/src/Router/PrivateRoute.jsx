
import React, { children } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    let isLogin=localStorage.getItem('Login')
    return (
        <>
         {
            isLogin === "true" ? children : <Navigate to={"/singup"}/>
        }
        </>
       
    );
}

export default PrivateRoute;
