import { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginData } from "../LoginReducer/action"; // Ensure this path is correct

const Login = () => {
    const [state, setState] = useState({
        email: "Sincere@april.biz",
        username: "Bret"
    });

    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(LoginData(state));
    };

    return (
        <div>   
            <h1>Email: {state.email}</h1>
            <h1>Username: {state.username}</h1>
            <button onClick={handleChange}>Login</button>
        </div>
    );
};

export default Login;
