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
   const navigate = useNavigate()
   const navigates = useNavigate()
  const dispatch = useDispatch()
 const product=useSelector(state=>state.product.data)

 
  
  useEffect(()=>{
     dispatch(product_action())
  },[dispatch])

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const settingss = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
                src="/image/69c6589653afdb9a.png"
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
                        src="./public/image/7c6cf1a109b087d2.jpg"
                        alt=""
                        id="img"
                      />
                    </h3>
                  </div>
                  <div>
                    <h3>
                      <img
                        src="./public/image/668e0875ca6dca50.png"
                        alt=""
                        id="img"
                      />
                    </h3>
                  </div>
                  <div>
                    <h3>
                      <img
                        src="./public/image/01c63eaa43ccb5ed.jpg"
                        alt=""
                        id="img"
                      />
                    </h3>
                  </div>
                  <div>
                    <h3>
                      <img
                        src="./public/image/d9290fb51138d286.png"
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
      <div className="container-fluid mt-5">
        <div className="sub-slider">
          <h1 className="ms-5">Best of Electronics</h1>
          <div className="sub-slider-1">
            <div className="slider-container">
              <Slider {...settingss}>
                <div className="text-center">
                  <Card style={{ width: "15rem" }} id="card">
                    <Card.Img
                      variant="top"
                      src="../public/image/ultra-pods-in-ear-earbuds-headphones-noise-canceling-haiidra-original-imahfk4fpzwufzts.jpeg"
                      // className="a"
                      style={{
                        width: "145px",
                        height: "170px",
                        margin: "20px",
                      }}
                    />
                    <Card.Body id="card-body">
                      <Card.Title>Best Truewireless...</Card.Title>
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
                      src="../public/image/1.jpg"
                      className="a"
                    />
                    <Card.Body id="card-body">
                      <Card.Title>Noice SmartWatchies</Card.Title>
                      <Card.Text>
                        <b>
                          frome <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                          1,999
                        </b>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="text-center">
                  <Card style={{ width: "15rem" }} id="card">
                    <Card.Img
                      variant="top"
                      src="../public/image/i9-pro-10-ei9027-led-projector-egate-original-imah3tzkr5jkzhyq.jpeg"
                      className="a"
                    />
                    <Card.Body id="card-body">
                      <Card.Title>projector</Card.Title>
                      <Card.Text>
                        <b>
                          frome <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                          6,999
                        </b>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                <div className="text-center">
                  <Card style={{ width: "15rem" }} id="card">
                    <Card.Img
                      variant="top"
                      src="../public/image/-original-imahf4rbgwtzquxh.jpeg"
                      className="a"
                    />
                    <Card.Body id="card-body">
                      <Card.Title>Monitor dabbo</Card.Title>
                      <Card.Text>
                        <b>
                          frome <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                          7495
                        </b>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <div className="text-center">
                    <Card style={{ width: "15rem" }} id="card">
                      <Card.Img
                        variant="top"
                        src="../public/image/-original-imagfykthgudy4qz.jpeg"
                        className="a"
                      />
                      <Card.Body id="card-body">
                        <Card.Title>Geared Cycles</Card.Title>
                        <Card.Text>
                          <b>
                            Up to 70% off
                            {/* frome <i class="fa-solid fa-indian-rupee-sign"></i>{" "} */}
                          </b>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
                <div>
                  <div className="text-center">
                    <Card style={{ width: "15rem" }} id="card">
                      <Card.Img
                        variant="top"
                        src="../public/image/eos-r100-24-1-eos-r100-kit-canon-original-imagqeydhsxgacxp.jpeg"
                        className="a"
                      />
                      <Card.Body id="card-body">
                        <Card.Title>Mirrorless Cameras</Card.Title>
                        <Card.Text>
                          <b>
                            Shop Now!
                            {/* frome <i class="fa-solid fa-indian-rupee-sign"></i>{" "} */}
                          </b>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>

                <div className="text-center">
                  <Card style={{ width: "15rem" }} id="card">
                    <Card.Img
                      variant="top"
                      src="../public/image/-original-imagn53zhtyzh4tn.jpeg"
                      className="a"
                    />
                    <Card.Body id="card-body">
                      <Card.Title>boAt Smartwatches</Card.Title>
                      <Card.Text>
                        <b>
                          frome <i class="fa-solid fa-indian-rupee-sign"></i>{" "}
                          1,099
                        </b>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="text-center">
                  <Card style={{ width: "15rem" }} id="card">
                    <Card.Img
                      variant="top"
                      src="./public/image/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg"
                      // className="a"
                      style={{ width: "95px", height: "170px", margin: "20px" }}
                    />
                    <Card.Body id="card-body">
                      <Card.Title>Best of Shavers</Card.Title>
                      <Card.Text>
                        <b>
                          frome <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                          1,099
                        </b>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Slider>
            </div>
          </div>
          <div className="sub-sid"></div>
        </div>
      </div>

  <div className="container-fluid mt-3">
  <h2>Products</h2>
  <div className="sub-slider-1-1">
    <div className="container-fluid">
    <div className="slider-container">
      <Slider {...settingss}>
        {product.map((el) => (
          <div className="text-center" key={el.id}>
            <Card style={{ width: "19rem" }} id="card" onClick={()=>handleclick(el.id)}>
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


<div className="container-fluid mt-3">
  <h2>Products</h2>
  <div className="sub-slider-1-1">
    <div className="container-fluid">
    <div className="slider-container">
      <Slider {...settingss}>
        {product.map((el) => (
          <div className="text-center" key={el.id}>
            <Card style={{ width: "19rem" }} id="card" onClick={()=>handleclick(el.id)}>
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


<div className="container-fluid mt-3">
  <h2>Products</h2>
  <div className="sub-slider-1-1">
    <div className="container-fluid">
    <div className="slider-container">
      <Slider {...settingss}>
        {product.map((el) => (
          <div className="text-center" key={el.id}>
            <Card style={{ width: "19rem" }} id="card" onClick={()=>handleclick(el.id)}>
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




<div className="container-fluid mt-3">
  <h2>Products</h2>
  <div className="sub-slider-1-1">
    <div className="container-fluid">
    <div className="slider-container">
      <Slider {...settingss}>
        {product.map((el) => (
          <div className="text-center" key={el.id}>
            <Card style={{ width: "19rem" }} id="card" onClick={()=>handleclick(el.id)}>
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

  <Top/>
  <Footerd/>
    </>
  );
};

export default Home;
