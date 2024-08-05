import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SignupAction } from '../Redux/action';
import { useNavigate } from 'react-router-dom';


const Singup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    pass: '',
  });
  let nav=useNavigate()

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const Submit = (e) => {
    e.preventDefault();
    dispatch(SignupAction(formState,nav));
    
  };

  return (
    <form onSubmit={Submit}>
      <input
        type="text"
        name="username"
        value={formState.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="email"
        name="email"
        value={formState.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="pass"
        value={formState.pass}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit" className='btn btn-dark'>Signup</button>
    </form>
  );
};

export default Singup;
