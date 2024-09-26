import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

function Navbar_1() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary flex-wrap">
      <Container id="con">
        <Navbar.Brand to={"/"}>
          <img
            src="./public/image/logo.png"
            class="img-fluid rounded-top"
            alt=""
          />
        </Navbar.Brand>

        <div className="col-xl-5 col-lg-5 col-md-8 col-sm-8 d-flex in">
          <input type="search" placeholder="Search for items..." id="search" />
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              All Catogaries
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Men</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Woman</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Electronics</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <div className="col-1 glass fs-light">
            <i
              class="fa-solid fa-magnifying-glass"
              style={{ color: "#ffffff" }}
            ></i>
          </div>
          <div>
        </div>
        </div>
        <div className="col-3 d-flex justify-content-around">
        <div className="row">
          <div className="col-xl-12 d-flex " style={{ height: "25px" }}>
          <i class="ri-user-line"
              style={{fontWeight:400,  margin:"0px 5px" ,fontSize:"20px"}}
            ></i>

            <div className="col-xl-9">
              <div class="paste-button">
                <button className="button" style={{fontWeight:500}}>Account</button>
                <div class="dropdown-content">
                  <Link id="top" to={"/signup"}>
                    Register
                  </Link>
                  <Link id="middle" to={"/checkout"}>
                    Checkout
                  </Link>
                  <Link id="bottom" to={"/login"}>
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12 d-flex " style={{ height: "25px" }}>
            <div>
            <i class="ri-heart-line"
                style={{ color: "black",margin:"0px 5px" ,fontSize:"20px"}}
              ></i>
            </div>
            <div className="col-xl-9">Wishlist</div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12 d-flex " style={{ height: "25px" }}>
            <div>
            <i class="ri-shopping-cart-line"
                style={{ color: "black",margin:"0px 5px" ,fontSize:"20px"}}
              ></i>
            </div>
            <div className="col-xl-9">cart</div>
          </div>
        </div>
        </div>
      
        <div className="row">
          <div className="col-12">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/"}>Home</Link>
            <Link to={"/product"}>Product</Link>
            <Link to={"/signup"}>Signup</Link>
            <Link to={"/login"}>Login</Link>
          </Nav>
        </Navbar.Collapse>
          </div>
        </div>
       
      </Container>
      
    </Navbar>
  );
}

export default Navbar_1;
