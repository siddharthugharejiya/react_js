import  { useState } from "react";
import Container from "react-bootstrap/Container";

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
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{ background: "transparent", color: "black" }}
              >
                All Categories
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Men</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Women</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Electronics</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="col-2 col-sm-2 glass fs-light">
              <i
                className="fa-solid fa-magnifying-glass"
                style={{ color: "#ffffff" }}
              ></i>
            </div>
          </div>

          <div className="col-12 col-lg-3 d-flex justify-content-around align-items-center" >
            <div className="d-flex align-items-center">
              <i
                className="ri-user-line"
                style={{ fontSize: "20px", margin: "0px 5px" }}
              ></i>
              <div>
                <div className="paste-button">
                  <button className="button" style={{ fontWeight: 500 }}>
                    Account
                  </button>
                  <div className="dropdown-content">
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

            <div className="d-flex align-items-center">
              <i
                className="ri-heart-line"
                style={{ color: "black", margin: "0px 5px", fontSize: "20px" }}
              ></i>
              <div>Wishlist</div>
            </div>

            <div className="d-flex align-items-center">
              <i
                className="ri-shopping-cart-line"
                style={{ color: "black", margin: "0px 5px", fontSize: "20px" }}
              ></i>
              <div>Cart</div>
            </div>
          </div>
          <div className="bor"></div>
        </div>

        <Container className="d-flex flex-wrap justify-content-between align-items-center bb" >
      <div className="col-3 col-lg-1 d-flex " style={{margin:"-20px"}} id="hide">
        <div className="paste-button">
          <button className="button" style={{ fontWeight: 500 }}>
            <i
              className="ri-bar-chart-horizontal-line border p-2"
              style={{ borderRadius: "4px" }}
            ></i>
          </button>
          <div className="dropdown-content">
            <div className="container">
              <div className="navbar-section">
                <div className="tabs">
                  {Object.keys(categories).map((category) => (
                    <button
                      key={category}
                      className={`tab-btn ${
                        activeCategory === category ? "active" : ""
                      }`}
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                <div className="tab-content">
                  {Object.keys(categories[activeCategory]).map(
                    (subCategory) => (
                      <div key={subCategory} id="tab-c">
                        <h4>{subCategory}</h4>
                        <ul>
                          {categories[activeCategory][subCategory].map(
                            (item) => (
                              <li key={item}>{item}</li>
                            )
                          )}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

 
      <div className="col-12 col-lg-8 col-xl-6 drop">
        <nav className="nav2 d-flex justify-content-center">
          <ul className="d-flex justify-content-between">
            <li>
              <div className="paste-button">
                <button className="button d-flex">
                  Home <i className="ri-arrow-down-s-line arrow-icon"></i>
                </button>
                <div className="dropdown-content">
                  <a id="top" href="#">
                  Grocery
                  </a>
                  <a id="middle" href="#">
                   Fashion
                  </a>
                  {/* <a id="bottom" href="#">
                    Keep text only
                  </a> */}
                </div>
              </div>
            </li>
            <li>
              <div className="paste-button">
                <button className="button d-flex">
                  Category <i className="ri-arrow-down-s-line arrow-icon"></i>
                </button>
                <div className="dropdown-content">
                  <a id="top" href="#">
                  Shop Left sidebar
                  </a>
                  <a id="middle" href="#">
                  Shop Right sidebar
                  </a>
                  <a id="bottom" href="#">
                  Full Width
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="paste-button">
                <button className="button d-flex">
                  Products <i className="ri-arrow-down-s-line arrow-icon"></i>
                </button>
                <div className="dropdown-content">
                  <a id="top" href="#">
                  product Left sidebar 
                  </a>
                  <a id="middle" href="#">
                  product Right sidebar 
                  </a>
                  <a id="bottom" href="#">
                  Product Full Width 
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="paste-button">
                <button className="button d-flex">
                  Pages <i className="ri-arrow-down-s-line arrow-icon"></i>
                </button>
                <div className="dropdown-content">
                  <a id="top" href="#">
                  About Us
                  </a>
                  <a id="middle" href="#">
                  Contact Us
                  </a>
                  <a id="bottom" href="#">
                  Cart
                  </a>
                  <a id="bottom" href="#">
                  Checkout
                  </a>
             
                </div>
              </div>
            </li>
            <li>
              <div className="paste-button">
                <button className="button d-flex">
                  Blog <i className="ri-arrow-down-s-line arrow-icon"></i>
                </button>
                <div className="dropdown-content">
                  <a id="top" href="#">
                    Keep source formatting
                  </a>
                  <a id="middle" href="#">
                    Merge formatting
                  </a>
                  <a id="bottom" href="#">
                    Keep text only
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="paste-button">
                <button className="button d-flex">
                  Elements <i className="ri-arrow-down-s-line arrow-icon"></i>
                </button>
                <div className="dropdown-content">
                  <a id="top" href="#">
                    Keep source formatting
                  </a>
                  <a id="middle" href="#">
                    Merge formatting
                  </a>
                  <a id="bottom" href="#">
                    Keep text only
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>

  
      <div className="col-xl-2 col-lg-4 col-md-4 d-flex justify-content-center align-items-center" id="phone">
        <i className="ri-phone-line"></i> +123 (456) (7890)
      </div>
    </Container>
      </Navbar>
    </div>
  );
}

export default Navbar_1;
