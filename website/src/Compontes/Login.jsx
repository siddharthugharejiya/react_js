import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login_action } from '../Redux/action';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Login = () => {
    const dispatch = useDispatch()
    const [state,setstate]=useState({
        email:"",
        password:""

    })
    const nav=useNavigate()
    const change = (e) =>{
        const {name,value} = e.target
        setstate({
            ...state,
            [name]:value
        })
    }
    const submit = (e) =>{
       e.preventDefault()
       dispatch(login_action(state,nav))
    }
    return (
        <div>
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

       

        <Form.Group className="mb-3" controlId="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" name="checkbox" checked={state.checkbox} onChange={change} />
        </Form.Group>

        <Button className='btn btn-success' type="submit">
          Submit
        </Button>
      </Form>
        </div>
    );
}

export default Login;
