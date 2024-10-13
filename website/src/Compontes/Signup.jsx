import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup_action } from '../Redux/action';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    checkbox: false
  });

  const change = (e) => {
    const { name, value, type, checked } = e.target;
    setState({
      ...state,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(signup_action(state, navigate));
    setState({
      username: "",
      email: "",
      password: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      checkbox: false
    });
  };

  return (
    <div className="container d-flex justify-content-center">
      <Form className='border border-1 p-5' onSubmit={submit}>
        <div className="row justify-content-center align-items-center">
          <div className="col-5 mb-5 d-flex justify-content-center align-items-center">
            <img src="./image/logo.png" alt="Logo" />
          </div>
        </div>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={state.email} onChange={change} name="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' value={state.password} onChange={change} placeholder="Password" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control name='address' value={state.address} onChange={change} placeholder="1234 Main St" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control name="city" value={state.city} onChange={change} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select name="state" value={state.state} onChange={change}>
              <option>Choose...</option>
              <option>India</option>
              <option>U.S.A</option>
              <option>Korea</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Post Code</Form.Label>
            <Form.Control name="zip" value={state.zip} onChange={change} />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" name="checkbox" checked={state.checkbox} onChange={change} />
        </Form.Group>

        <Button className='btn btn-success' type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
