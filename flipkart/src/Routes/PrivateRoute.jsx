import React from 'react';
import { Navigate } from 'react-router-dom';
import S_up from '../Components/S_up';

const PrivateRoute = ({ children }) => {
    let isLogin = localStorage.getItem('Login');
    
    return (
        <>
            {
                isLogin === "true" 
                ? children 
                : <Navigate to="/Signup" />  
            }
        </>
    );
};

export default PrivateRoute;
