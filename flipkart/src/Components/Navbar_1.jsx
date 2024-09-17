import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { BsPerson, BsCart } from "react-icons/bs";
import { MdStoreMallDirectory } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import "../App.css";

const Navbar1 = () => {
  return (
    <div className="navbar_1">
      <div className="container-fluid">
        <div className="container">
          <Navbar expand="lg" className="custom-navbar bg-light">
            <Container fluid>
              <Navbar.Brand href="#">
                <img
                  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
                  className="img-fluid logo"
                  alt="Brand Logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="ms-auto nav-icons">
                  <NavDropdown
                    title={
                      <>
                        <BsPerson /> Login
                      </>
                    }
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item>
                      <Link to="/login">Login</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/signup">Sign Up</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#cart">
                    <BsCart /> Cart
                  </Nav.Link>
                  <Nav.Link href="#seller">
                    <MdStoreMallDirectory /> Become a Seller
                  </Nav.Link>
                  <Nav.Link href="#more">
                    <BiDotsVerticalRounded />
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
