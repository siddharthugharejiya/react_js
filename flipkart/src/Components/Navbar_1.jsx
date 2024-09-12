import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../App.css";
import { BsPerson, BsCart } from "react-icons/bs";
import { MdStoreMallDirectory } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
// import logo from "../assets/image/fkheaderlogo_exploreplus_mobile-39120d.svg";

const Navbar1 = () => {
  return (
    <div className="navbar_1">
      <div className="container-fluid">
        <div className="container">
        <Navbar expand="lg" className="custom-navbar bg-light">
          <Container fluid>
            <Navbar.Brand href="#">
              <img src="public/image/fkheaderlogo_exploreplus_mobile-39120d.svg" className="img-fluid logo" alt="Brand Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Form className="d-flex search-bar mx-auto">
                <Form.Control
                  type="search"
                  placeholder="Search for Products, Brands and More"
                  className="me-2 search-input"
                  id="in"
                  aria-label="Search"
                />
              </Form>
              <Nav className="ms-auto nav-icons">
                <NavDropdown
                  title={
                    <>
                      <BsPerson />
                      Login
                    </>
                  }
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#action3">My Account</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Orders</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">Wishlist</NavDropdown.Item>
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
