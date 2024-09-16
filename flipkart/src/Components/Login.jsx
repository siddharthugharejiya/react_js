// Login.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Login_Action } from '../Redux/action';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import '../App.css';  
import Navbar1 from './Navbar_1';
import Footerd from './Footerd';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, setLogin] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Login_Action(login, navigate));
    setLogin({ email: "", password: "" }); 
  };

  return (
    <div>
      <Navbar1 />
      <div className="container d-flex justify-content-center mt-4">
        <div className="login">
          <div className="login-design">
            <div className="container text-light">
              <h1>Login</h1>
              <p>Access your account and manage your preferences.</p>
            </div>
          </div>
          <div className="login-left">
            <form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={login.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={login.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Footerd />
    </div>
  );
}

export default Login;
