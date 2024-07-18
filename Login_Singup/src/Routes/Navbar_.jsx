import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import "../App.css";
import img from "../image/logo_3_200x.png";
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar1() {
  return (
    // <div className="container-fluid">
      <Navbar expand="lg" className='bg-dark'>
        <Container>
          <Navbar.Brand>
            <img
              src={img}
              width="100%"
              height="auto"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link as={Link} to="/" className='text-light'>Home</Nav.Link>
              <Nav.Link as={Link} to="/fortnight" className='text-light'>Fortnight</Nav.Link>
              <Nav.Link as={Link} to="/minecraft" className='text-light'>Minecraft</Nav.Link>
              <Nav.Link as={Link} to="/sports" className='text-light'>Sports</Nav.Link>
              <Nav.Link as={Link} to="/product" className='text-light'>Product</Nav.Link>
              <Nav.Link as={Link} to="/singup" className='text-light'>singup</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <i className="fa-solid fa-magnifying-glass text-light"></i>
          <Dropdown>
            <Dropdown.Toggle className='bg-dark border-0'>
              <i className="fa-solid fa-user text-light"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/login">Login</Dropdown.Item>
              <Dropdown.Item as={Link} to="/singup">Signup</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    // </div>
  );
}

export default Navbar1;
