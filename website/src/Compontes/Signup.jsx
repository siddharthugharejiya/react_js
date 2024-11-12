import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
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
    <div className="d-flex justify-content-center align-items-center mt-md-3">
      <Form className=" p-4 p-md-2" style={{ width: "90%", maxWidth: "500px" }} onSubmit={submit}>
        <Row className="justify-content-center align-items-center">
          <Col xs={6} className="mb-4 d-flex justify-content-center align-items-center">
            <img src="./image/logo.png" alt="Logo" className="img-fluid" />
          </Col>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} xs={12} md={6} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={state.email} onChange={change} name="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} xs={12} md={6} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={state.password} onChange={change} placeholder="Password" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control name="address" value={state.address} onChange={change} placeholder="Please enter your address" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} xs={12} md={6} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control name="city" value={state.city} onChange={change} />
          </Form.Group>

          <Form.Group as={Col} xs={6} md={3} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select name="state" value={state.state} onChange={change}>
              <option>Choose...</option>
              <option>India</option>
              <option>U.S.A</option>
              <option>Korea</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} xs={6} md={3} controlId="formGridZip">
            <Form.Label>Post Code</Form.Label>
            <Form.Control name="zip" value={state.zip} onChange={change} style={{margin:"0px 5px"}} />
          </Form.Group>
        </Row>

        <Row className="mb-4">
          <Col className="d-flex justify-content-end">
            <Link to="/login" className="btn btn-link">Have An Account?</Link>
          </Col>
        </Row>

        <Button className="btn btn-success w-100" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
