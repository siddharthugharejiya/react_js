import React from 'react';
import { Route , Router, Routes } from 'react-router-dom';
// import Home from '../Componets/Home';
import { Recipe_Data } from '../Componets/Racipe_Data';
import { Home } from '../Componets/Home';
const MainRouter = () => {
    return (
       <>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/recipe' element={<Recipe_Data/>}></Route>
   
       </Routes>
       </>
    );
}

export default MainRouter;
