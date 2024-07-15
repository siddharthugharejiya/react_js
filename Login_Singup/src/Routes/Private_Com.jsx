import React from "react";
import { Navigate } from "react-router-dom";

const Private_Com = ({ children }) => {
    let isLogin = localStorage.getItem('Login');
    return (
        <>
            {isLogin === "true" ? children : <Navigate to="/login" />}
        </>
    );
}

export default Private_Com;
