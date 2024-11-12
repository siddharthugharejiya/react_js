import React, { useState } from "react";
import Navbar1 from "./Navbar_1";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import { useEffect } from "react";
// import React from "react";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../App.css";
import { product_action } from "../Redux/action";
import { useDispatch , useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import Top from "./Top";
import Footerd from "./Footerd";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </a>
));

const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");
    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <Form.Control
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);

const Home = () => {

   const navigates = useNavigate()
  const dispatch = useDispatch()
 const product=useSelector(state=>state.product.data)

 
  
  useEffect(()=>{
     dispatch(product_action())
  },[dispatch])
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
  };
  
  const settingss = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  const handleclick = (id) =>{
    
    navigates(`/Singlepage/${id}`)
  }
  return (
    <>
      <Navbar1 />

    
      <div className="main-sub">
        <div className="container-fluid bg-white h-100">
          <div
            className="row justify-content-evenly "
            style={{ background: "fff" }}
          >
            <div
              className="col-12 col-sm-6 col-md-4 col-xl-1 d-flex justify-content-center align-items-center flex-column"
              style={{ margin: "5px 0" }}
            >
              <img
                src="/image/29327f40e9c4d26b.png"
                alt="Grocery"
                style={{ width: "70px", height: "70px" }}
              />
              <span>Grocery</span>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-xl-1 d-flex justify-content-center align-items-center flex-column">
              <img
                src="/image/22fddf3c7da4c4f4.png"
                alt="Mobiles"
                style={{ width: "70px", height: "70px" }}
              />
              <span>Mobiles</span>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-xl-1 d-flex justify-content-center align-items-center flex-column">
              <img
                src="/image/0d75b34f7d8fbcb3.png"
                alt="Dropdown"
                style={{ width: "70px", height: "70px" }}
              />
              <Dropdown>
                <Dropdown.Toggle
                  as={CustomToggle}
                  id="dropdown-custom-components"
                  style={{ margin: "100px 0" }}
                >
                  Fashion
                </Dropdown.Toggle>
                <Dropdown.Menu as={CustomMenu}>
                  <Dropdown.Item eventKey="1">Men's T-shirts</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Men's Raincoat</Dropdown.Item>
                  <Dropdown.Item eventKey="3" active>
                    Men's Suit
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="4">Man's kurtas</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-xl-1 d-flex justify-content-center align-items-center flex-column">
              <img
                src="https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100"
                alt="Dropdown"
                style={{ width: "70px", height: "70px" }}
              />
              <Dropdown>
                <Dropdown.Toggle
                  as={CustomToggle}
                  id="dropdown-custom-components"
                >
                  Electronics
                </Dropdown.Toggle>
                <Dropdown.Menu as={CustomMenu}>
                  <Dropdown.Item eventKey="1">Men's T-shirts</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Men's Raincoat</Dropdown.Item>
                  <Dropdown.Item eventKey="3" active>
                    Men's Suit
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="4">Man's kurtas</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-xl-2 d-flex justify-content-center align-items-center flex-column">
              <img
                src="/image/ab7e2b022a4587dd.jpg"
                alt="Dropdown"
                style={{ width: "70px", height: "70px" }}
              />
              <Dropdown>
                <Dropdown.Toggle
                  as={CustomToggle}
                  id="dropdown-custom-components"
                >
                  Home and Furniture
                </Dropdown.Toggle>
                <Dropdown.Menu as={CustomMenu}>
                  <Dropdown.Item eventKey="1">Men's T-shirts</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Men's Raincoat</Dropdown.Item>
                  <Dropdown.Item eventKey="3" active>
                    Men's Suit
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="4">Man's kurtas</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-xl-1 d-flex justify-content-center align-items-center flex-column">
              <img
                src="/image/0139228b2f7eb413.jpg"
                alt="Dropdown"
                style={{ width: "70px", height: "70px" }}
              />
              <Dropdown>
                <Dropdown.Toggle
                  as={CustomToggle}
                  id="dropdown-custom-components"
                >
                  Appliances
                </Dropdown.Toggle>
                <Dropdown.Menu as={CustomMenu}>
                  <Dropdown.Item eventKey="1">Men's T-shirts</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Men's Raincoat</Dropdown.Item>
                  <Dropdown.Item eventKey="3" active>
                    Men's Suit
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="4">Man's kurtas</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div
              className="col-12 col-sm-6 col-md-4 col-xl-1 d-flex justify-content-center align-items-center flex-column"
              style={{ margin: "5px 0" }}
            >
              <img
                src="./image/71050627a56b4693.png"
                alt="Grocery"
                style={{ width: "70px", height: "70px" }}
              />
              <span>Travel</span>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-xl-2 d-flex justify-content-center align-items-center flex-column">
              <img
                src="/image/dff3f7adcf3a90c6.png"
                alt="Dropdown"
                style={{ width: "70px", height: "70px" }}
              />
              <Dropdown>
                <Dropdown.Toggle
                  as={CustomToggle}
                  id="dropdown-custom-components"
                >
                  Beauty,Toys & more
                </Dropdown.Toggle>
                <Dropdown.Menu as={CustomMenu}>
                  <Dropdown.Item eventKey="1">Men's T-shirts</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Men's Raincoat</Dropdown.Item>
                  <Dropdown.Item eventKey="3" active>
                    Men's Suit
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="4">Man's kurtas</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-xl-2 d-flex justify-content-center align-items-center flex-column">
              <img
                src="/image/05d708653beff580.png"
                alt="Dropdown"
                style={{ width: "70px", height: "70px" }}
              />
              <Dropdown>
                <Dropdown.Toggle
                  as={CustomToggle}
                  id="dropdown-custom-components"
                >
                  Two wheelers
                </Dropdown.Toggle>
                <Dropdown.Menu as={CustomMenu}>
                  <Dropdown.Item eventKey="1">Men's T-shirts</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Men's Raincoat</Dropdown.Item>
                  <Dropdown.Item eventKey="3" active>
                    Men's Suit
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="4">Man's kurtas</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="container-fluid">
            <div className="home-slider">
              <div className="slider-container">
                <Slider {...settings}>
          
                 
                  <div>
                    <h3>
                      <img
                        src="/image/668e0875ca6dca50.png"
                        alt=""
                        id="img"
                      />
                    </h3>
                  </div>
                  <div>
                    <h3>
                      <img
                        src="/image/7c6cf1a109b087d2.jpg"
                        alt=""
                        id="img"
                      />
                    </h3>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
   {/* <div className="container-fluid mt-5">
  <div className="sub-slider">
    <h1 className="ms-5">Best of Electronics</h1>
    <div className="sub-slider-1">
      <div className="slider-container">
        <Slider {...settings}>
      
        <div className="text-center">
            <Card style={{ width: "15rem" }} id="card">
              <Card.Img
                variant="top"
                src="https://yourcdn.com/path-to-image/truewireless.jpg"
                alt="Best True Wireless Earbuds"
                style={{
                  width: "145px",
                  height: "170px",
                  margin: "20px",
                }}
              />
              <Card.Body id="card-body">
                <Card.Title>Best True Wireless</Card.Title>
                <Card.Text>
                  <b>Grab Now</b>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

  
          <div className="text-center">
            <Card style={{ width: "15rem" }} id="card">
              <Card.Img
                variant="top"
                src="https://www.flipkart.com/path-to-image/noise-smartwatch.jpg"
                alt="Noise Smart Watches"
                className="a"
              />
              <Card.Body id="card-body">
                <Card.Title>Noise Smart Watches</Card.Title>
                <Card.Text>
                  <b>from ₹1,999</b>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="text-center">
            <Card style={{ width: "15rem" }} id="card">
              <Card.Img
                variant="top"
                src="https://yourcdn.com/path-to-image/projector.jpg"
                alt="Projector"
                className="a"
              />
              <Card.Body id="card-body">
                <Card.Title>Projector</Card.Title>
                <Card.Text>
                  <b>from ₹6,999</b>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

      
        </Slider>
      </div>
    </div>
    <div className="sub-sid"></div>
  </div>
</div>  */}

<div className="hight">


  <div className="container-fluid mt-3">
  <h2>Products</h2>
  <div className="sub-slider-1-1">
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-12 col-lg-4 col-ms-3 col-sm-12">
        <div className="slider-container">
      <Slider {...settingss}>
        {product.map((el) => (
          <div className="text-center col-lg-12 col-md-3 col-sm-12" key={el.id}>
            <Card style={{ width: "14rem" }} id="card" onClick={()=>handleclick(el.id)}>
              <Card.Img
                variant="top"
                id="c"
                src={el.image}
                style={{
                  width: "70%",
                  height: "200px",
                 
                }}
              />
              <Card.Body style={{height:"160px"}}>
                <Card.Title>{el.title}</Card.Title>
                <Card.Text>
                  <b>Grab Now</b>
                </Card.Text>
                <Card.Text>
                 <p>Price : ${el.price}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
        </div>
      </div>
   
    </div>

  </div>
</div>
</div>



<div className="container-fluid mt-3">
  <h2>Products</h2>
  <div className="sub-slider-1-1">
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-12 col-lg-4 col-ms-3 col-sm-12">
        <div className="slider-container">
      <Slider {...settingss}>
        {product.map((el) => (
          <div className="text-center col-lg-12 col-md-3 col-sm-12" key={el.id}>
            <Card style={{ width: "14rem" }} id="card" onClick={()=>handleclick(el.id)}>
              <Card.Img
                variant="top"
                id="c"
                src={el.image}
                style={{
                  width: "70%",
                  height: "200px",
                 
                }}
              />
              <Card.Body style={{height:"160px"}}>
                <Card.Title>{el.title}</Card.Title>
                <Card.Text>
                  <b>Grab Now</b>
                </Card.Text>
                <Card.Text>
                 <p>Price : ${el.price}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
        </div>
      </div>
   
    </div>

  </div>
</div>






<div className="container-fluid mt-3">
  <h2>Products</h2>
  <div className="sub-slider-1-1">
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-12 col-lg-4 col-ms-3 col-sm-12">
        <div className="slider-container">
      <Slider {...settingss}>
        {product.map((el) => (
          <div className="text-center col-lg-12 col-md-3 col-sm-12" key={el.id}>
            <Card style={{ width: "14rem" }} id="card" onClick={()=>handleclick(el.id)}>
              <Card.Img
                variant="top"
                id="c"
                src={el.image}
                style={{
                  width: "70%",
                  height: "200px",
                 
                }}
              />
              <Card.Body style={{height:"160px"}}>
                <Card.Title>{el.title}</Card.Title>
                <Card.Text>
                  <b>Grab Now</b>
                </Card.Text>
                <Card.Text>
                 <p>Price : ${el.price}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
        </div>
      </div>
   
    </div>

  </div>
</div>







  <Top/>
  <Footerd/>
    </>
  );
};

export default Home;
