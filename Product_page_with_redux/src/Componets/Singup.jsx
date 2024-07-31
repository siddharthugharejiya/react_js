import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { email, password, username } from '../Redux/actionType';

const Signup = () => {
  const dispatch = useDispatch();
  const [sing, setsing] = useState({
    username: "",
    email: "",
    password: ""
  });

  const change = (e) => {
    setsing({
      ...sing,
      [e.target.name]: e.target.value
    });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch({
      type: username,
      payload: sing.username
    });
    dispatch({
      type: email,
      payload: sing.email
    });
    dispatch({
      type: password,
      payload: sing.password
    });

    setsing({
      username: "",
      email: "",
      password: ""
    })
  };

  return (
    <>
      <form onSubmit={submit}>
        <input
          type="text"
          name="username"
          value={sing.username}
          onChange={change}
          placeholder="Username"
        />
        <input
          type="email"
          name="email"
          value={sing.email}
          onChange={change}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={sing.password}
          onChange={change}
          placeholder="Password"
        />
        <button type="submit" className='btn btn-dark'>Submit</button>
      </form>
    </>
  );
}

export default Signup;
