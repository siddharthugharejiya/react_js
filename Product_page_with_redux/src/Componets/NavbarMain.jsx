import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from "../Componets/assets/image/logo.svg";
import "../icon.css";

const NavbarMain = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary nav2">
        <Container>
          <Navbar.Brand to={"/"}>
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto navbar-nav">
              <Link to={"/"}>Home</Link>
              <Link to={"/product"}>Product</Link>
              {/* <Link to={"/error"}>Error</Link> */}
              <Link to={"/singup"}>Signup</Link>
              <Link to={"/login"}>Login</Link>
              <Link to={"/cart"}>Cart</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarMain;
