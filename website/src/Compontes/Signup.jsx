import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup_action } from '../Redux/action';

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [state, setState] = useState({
        username: "",
        email: "",
        password: ""
    });

    const change = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        });
    };

    const submit = (e) => {
        e.preventDefault();
        dispatch(signup_action(state, navigate))
                setState({
                    username: "",
                    email: "",
                    password: ""
           
                })
              
           
                
    };

    return (
        <div>
            <form onSubmit={submit}>
                <input
                    type="text"
                    name="username"
                    value={state.username}
                    onChange={change}
                    placeholder="Username"
                />
                <input
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={change}
                    placeholder="Email"
                />
                <input
                    type="password"
                    name="password"
                    value={state.password}
                    onChange={change}
                    placeholder="Password"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Signup;
