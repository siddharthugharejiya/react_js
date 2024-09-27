import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

function Navbar_1() {
  const [activeCategory, setActiveCategory] = useState("Dairy & Bakery");

  const categories = {
    "Dairy & Bakery": {
      Dairy: ["Milk", "Ice Cream", "Cheese", "Frozen Custard", "Frozen Yogurt"],
      Bakery: [
        "Cake And Pastry",
        "Rusk Toast",
        "Bread & Buns",
        "Chocolate Brownie",
        "Cream Roll",
      ],
    },
    "Fruits & Vegetables": {
      Fruits: ["Apples", "Bananas", "Oranges"],
      Vegetables: ["Carrots", "Broccoli", "Spinach"],
    },
    "Snack & Spice": {
      Snacks: ["Chips", "Popcorn", "Nuts"],
      Spice: ["Cumin", "Coriander", "Turmeric"],
    },
    "Juice & Drinks": {
      Juice: ["Orange Juice", "Apple Juice", "Grape Juice"],
      Drinks: ["Soda", "Water", "Tea"],
    },
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="container-fluid">
      <Navbar expand="lg" className="flex-wrap">
        <div id="con">
          
          <Navbar.Brand as={Link} to={"/"}>
            <img
              src="./image/logo.png"
              className="img-fluid rounded-top"
              alt="Logo"
            />
          </Navbar.Brand>

          <div className="col-12 col-lg-4 col-md-7 col-sm-12 d-flex align-items-center">
            <input
              type="search"
              placeholder="Search for items..."
              id="search"
          
            />
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" style={{ background: "transparent", color: "black" }}>
                All Categories
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Men</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Women</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Electronics</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="col-1 glass fs-light">
              <i
                className="fa-solid fa-magnifying-glass"
                style={{ color: "#ffffff" }}
              ></i>
            </div>
          </div>

          <div className="col-12 col-lg-3 d-flex justify-content-around align-items-center">
            <div className="d-flex align-items-center">
              <i className="ri-user-line" style={{ fontSize: "20px", margin: "0px 5px" }}></i>
              <div>
                <div className="paste-button">
                  <button className="button" style={{ fontWeight: 500 }}>Account</button>
                  <div className="dropdown-content">
                    <Link id="top" to={"/signup"}>Register</Link>
                    <Link id="middle" to={"/checkout"}>Checkout</Link>
                    <Link id="bottom" to={"/login"}>Login</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <i className="ri-heart-line" style={{ color: "black", margin: "0px 5px", fontSize: "20px" }}></i>
              <div>Wishlist</div>
            </div>

            <div className="d-flex align-items-center">
              <i className="ri-shopping-cart-line" style={{ color: "black", margin: "0px 5px", fontSize: "20px" }}></i>
              <div>Cart</div>
            </div>
          </div>
          <div className="bor"></div>
          </div>

          <Container>
          <div className="col-12 col-lg-4">
            <div className="paste-button">
              <button className="button" style={{ fontWeight: 500 }}>
                Category Menu
              </button>
              <div className="dropdown-content">
                <div className="container">
                  <div className="navbar-section">
                    <div className="tabs">
                      {Object.keys(categories).map((category) => (
                        <button
                          key={category}
                          className={`tab-btn ${activeCategory === category ? "active" : ""}`}
                          onClick={() => handleCategoryClick(category)}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                    <div className="tab-content">
                      {Object.keys(categories[activeCategory]).map((subCategory) => (
                        <div key={subCategory} id="tab-c">
                          <h4>{subCategory}</h4>
                          <ul>
                            {categories[activeCategory][subCategory].map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar_1;
