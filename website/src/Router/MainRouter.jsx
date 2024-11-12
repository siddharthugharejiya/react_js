
import { Route, Routes } from 'react-router-dom';
import Home from '../Compontes/Home';
import Cart from '../Compontes/Cart';
import Signup from '../Compontes/Signup';
import Login from '../Compontes/Login';
import Singlepage from '../Compontes/Singlepage';


const MainRouter = () => {
    return(
        <Routes>
         <Route element={<Home/>} path='/'></Route>
         <Route element={<Cart/>} path='/cart/:id'></Route>
         <Route element={<Signup/>} path='/signup'></Route>
         <Route element={<Login/>} path='/login'></Route>
         <Route element={<Singlepage/>} path='/:id'></Route>
        
        </Routes>
    )
}

export default MainRouter;
