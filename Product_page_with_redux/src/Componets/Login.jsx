import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Login_Action } from '../Redux/action';


function Login() {
  const dispatch = useDispatch();
  const nav_login = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const change = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value
    });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(Login_Action(login, nav_login));
    setLogin({
      email: "",
      password: ""
    });
  };

  return (
    <Form onSubmit={submit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email"
          name="email"
          value={login.email}
          onChange={change}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={login.password}
          onChange={change}
        />
      </Form.Group>

      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;
