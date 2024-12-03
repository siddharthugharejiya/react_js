import  { useState } from 'react';
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
        <div className='d-flex justify-content-center align-items-center vh-95'>
            <Form className='border border-1 p-4 p-md-5' style={{ width: "90%", maxWidth: "500px" }} onSubmit={submit}>
                <Row className="justify-content-center align-items-center">
                    <Col xs={6} className="mb-4 d-flex justify-content-center align-items-center">
                        <img src="./image/logo.png" alt="Logo" className="img-fluid" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            value={state.email} 
                            onChange={change} 
                            name="email" 
                            placeholder="Enter email" 
                        />
                    </Col>
                    <Col xs={12} className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            name='password' 
                            value={state.password} 
                            onChange={change} 
                            placeholder="Password" 
                        />
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formGridCheckbox">
                    <Form.Check 
                        type="checkbox" 
                        label="Check me out" 
                        name="checkbox" 
                        checked={state.checkbox} 
                        onChange={change} 
                    />
                </Form.Group>
                  <div>

                <Button className='btn btn-success w-100' type="submit">
                    Submit
                </Button>
                  </div>
            </Form>
        </div>
    );
};

export default Login;
