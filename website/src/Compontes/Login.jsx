import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login_action } from '../Redux/action';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Login = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        email: "",
        password: "",
        checkbox: false
    });

    const nav = useNavigate();

    const change = (e) => {
        const { name, value, type, checked } = e.target;
        setState({
            ...state,
            [name]: type === 'checkbox' ? checked : value 
        });
    };

    const submit = (e) => {
        e.preventDefault();
        dispatch(login_action(state, nav));
    };

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <Form className='border border-1 p-5' style={{ width: "30%" }} onSubmit={submit}>
                <div className="row justify-content-center align-items-center">
                    <div className="col-5 mb-5 d-flex justify-content-center align-items-center">
                        <img src="./image/logo.png" alt="Logo" />
                    </div>
                </div>
                <Row className='flex-column'>
                    <Col className='mb-4'>
                        <label htmlFor="">Email</label>
                        <Form.Control 
                            type="email" 
                            value={state.email} 
                            onChange={change} 
                            name="email" 
                            placeholder="Enter email" 
                        />
                    </Col>
                    <Col className='mb-4'>
                        <label htmlFor="">Password</label>
                        <Form.Control 
                            type="password" 
                            name='password' 
                            value={state.password} 
                            onChange={change} 
                            placeholder="Password" 
                        />
                    </Col>
                </Row>

                <Form.Group className="mb-4" controlId="formGridCheckbox">
                    <Form.Check 
                        type="checkbox" 
                        label="Check me out" 
                        name="checkbox" 
                        checked={state.checkbox} 
                        onChange={change} 
                    />
                </Form.Group>

                <Button className='btn btn-success' type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;
