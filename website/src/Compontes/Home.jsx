import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "animate.css";
import "./section.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { styled } from '@mui/system';
import { Tabs as BaseTabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
import { useDispatch, useSelector } from "react-redux";
import { product_action } from "../Redux/action";
import { color } from "framer-motion";
import 'swiper/css';
import 'swiper/css/pagination';
import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// import $ from "jquary"
const Home = () => {

  const dispatch = useDispatch();
  const products = useSelector(state => state.product.data);

  useEffect(() => {
      dispatch(product_action());
  }, [dispatch]);

  AOS.init({
    duration: 1500,
  })

 var settings = {
    dots: true,
    infinite: true, 
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        // Extra large desktops (xl)
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        // Large devices (lg)
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        // Medium devices (md)
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0
        }
      },
      {
        // Small devices (sm)
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        // Extra small devices (xs)
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

  var settings1 = {
    dots: true,
    infinite: true, 
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
      
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
      
        breakpoint: 1700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
     
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        // Extra large desktops (xl)
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        // Large devices (lg)
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        // Medium devices (md)
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0
        }
      },
      {
        // Small devices (sm)
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        // Extra small devices (xs)
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };
  
const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Tab = styled(BaseTab)`
  font-family: 'IBM Plex Sans', sans-serif;
  // color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color:#F7F7F8;
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #F7F7F8 !important;
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${blue[200]};
  }

  &.${buttonClasses.focusVisible} {
    background-color: #fff;
    color: ${blue[600]};
  }

  &.${tabClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.${tabClasses.selected} {
    // background-color: #fff;
    color:black;
  }
`;

const TabPanel = styled(BaseTabPanel)`
  width: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
`;

const Tabs = styled(BaseTabs)`
  display: flex;
  gap: 16px;
  width: 200px;
`;

const TabsList = styled(BaseTabsList)`
  min-width: 80px;
  color:black;
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  padding: 6px;
  gap: 12px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 8px ${props => props.theme.palette.mode === 'dark' ? grey[900] : grey[200]};
`;

  return (
    <>  
      <div className="slider-1">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <div className="juicy juicy-left">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-10 col-sm-12 juicy-left-main">
                    <div className="row">
                      <div
                        className="col-12 d-flex m-1 animate__animated animate__fadeInUp"
                        style={{ animationDuration: "1s", animationDelay: "1s" }}
                      >
                        <p
                          style={{
                            borderBottom: "2px solid #4CAF50",
                            color: "#4CAF50",
                          }}
                        >
                          100%
                        </p>
                        <b style={{ fontSize: "18px", margin: "0 10px" }}>
                          Organic Vegetables
                        </b>
                      </div>
                    </div>

                    <div className="row">
                      <div
                        className="col-12 animate__animated animate__fadeInUp"
                        style={{ animationDuration: "2s", animationDelay: "2s" }}
                      >
                        <h1 className="display-3" style={{ fontWeight: "700" }}>
                          Explore fresh & juicy fruits.
                        </h1>
                      </div>
                    </div>

                    <div className="row">
                      <div
                        className="col-12 animate__animated animate__fadeInUp"
                        style={{ animationDuration: "3s", animationDelay: "3s" }}
                      >
                        <p style={{ width: "70%" }}>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Amet reiciendis beatae consequuntur.
                        </p>
                      </div>
                    </div>

                    <div className="row">
                      <div
                        className="col-12 animate__animated animate__fadeInUp"
                        style={{ animationDuration: "4s", animationDelay: "4s" }}
                      >
                        <button className="btn btn-success">Shop Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="juicy juicy-left1">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-10 col-sm-12 juicy-left-main">
                    <div className="row">
                      <div
                        className="col-12 d-flex m-1 animate__animated animate__fadeInUp"
                        style={{ animationDuration: "1s", animationDelay: "1s" }}
                      >
                        <p
                          style={{
                            borderBottom: "2px solid #4CAF50",
                            color: "#4CAF50",
                          }}
                        >
                          100%
                        </p>
                        <b style={{ fontSize: "18px", margin: "0 10px" }}>
                          Organic Vegetables
                        </b>
                      </div>
                    </div>

                    <div className="row">
                      <div
                        className="col-12 animate__animated animate__fadeInUp"
                        style={{ animationDuration: "2s", animationDelay: "2s" }}
                      >
                        <h1 className="display-3" style={{ fontWeight: "700" }}>
                          Explore fresh & juicy fruits.
                        </h1>
                      </div>
                    </div>

                    <div className="row">
                      <div
                        className="col-12 animate__animated animate__fadeInUp"
                        style={{ animationDuration: "3s", animationDelay: "3s" }}
                      >
                        <p style={{ width: "70%" }}>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Amet reiciendis beatae consequuntur.
                        </p>
                      </div>
                    </div>

                    <div className="row">
                      <div
                        className="col-12 animate__animated animate__fadeInUp"
                        style={{ animationDuration: "4s", animationDelay: "4s" }}
                      >
                        <button className="btn btn-success">Shop Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
<div className="t" data-aos="fade-up">
  <Tabs defaultValue={0} orientation="vertical" style={{ flexWrap: "wrap" }}>
    <TabsList className="tabs-list col-lg-4 col-sm-12 col-12">
      <Tab>Cake and Milk <br />(65 Items)</Tab>
      <Tab>Fresh Meat <br />(30 Items)</Tab>
      <Tab>Vegetable <br />(25 items)</Tab>
      <Tab>Apple &amp; Mango  <br />(25 items)</Tab>
      <Tab>Strawberry <br />(68 Items)</Tab>
      <Tab>Vegetable <br />(25 items)</Tab>

    </TabsList>

    <TabPanel value={0} className="tab-panel">
      <div className="tab-image row justify-content-center">
     <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-3 d-flex justify-content-center">
          <div
            className="card car"
            style={{
              backgroundImage: `url("./image/3.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="tt text-light d-flex p-3" style={{ flexWrap: "wrap" }}>
              <div style={{ fontSize: "50px" }}>50</div>
              <div className="d-flex flex-column justify-content-center align-items-center p-1 mt-1">
                <h5>%</h5>
                <h5>OFF</h5>
              </div>
            </div>
            <div className="card-body">
              <h3 className="card-title text-light">Cake</h3>
              <button className="btn" style={{ background: "#64B496", color: "white" }}>
                Shop Now
              </button>
            </div>
          </div>
        </div>

 
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-3 d-flex justify-content-center">
          <div
            className="card car "
            style={{
              backgroundImage: `url("./image/4.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="tt text-light d-flex p-3" style={{ flexWrap: "wrap" }}>
              <div style={{ fontSize: "50px" }}>50</div>
              <div className="d-flex flex-column justify-content-center align-items-center p-1 mt-1">
                <h5>%</h5>
                <h5>OFF</h5>
              </div>
            </div>
            <div className="card-body">
              <h3 className="card-title text-light">Cake</h3>
              <button className="btn" style={{ background: "#64B496", color: "white" }}>
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </TabPanel>

    <TabPanel value={1} className="tab-panel">
      <div className="tab-image row">
        <div className="col-lg-6 col-md-6 col-sm-12 mb-3 d-flex justify-content-center">
          <div
            className="card car"
            style={{
              backgroundImage: `url("./image/1.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="tt text-light d-flex p-3" style={{ flexWrap: "wrap" }}>
              <div style={{ fontSize: "50px" }}>50</div>
              <div className="d-flex flex-column justify-content-center align-items-center p-1 mt-1">
                <h5>%</h5>
                <h5>OFF</h5>
              </div>
            </div>
            <div className="card-body">
              <h3 className="card-title text-light">Fish Meat</h3>
              <button className="btn" style={{ background: "#64B496", color: "white" }}>
                Shop Now
              </button>
            </div>
          </div>
        </div>

     
        <div className="col-lg-6 col-md-6 col-sm-12 mb-3 d-flex justify-content-center">
          <div
            className="card car"
            style={{
              backgroundImage: `url("./image/2.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="tt text-light d-flex p-3" style={{ flexWrap: "wrap" }}>
              <div style={{ fontSize: "50px" }}>50</div>
              <div className="d-flex flex-column justify-content-center align-items-center p-1 mt-1">
                <h5>%</h5>
                <h5>OFF</h5>
              </div>
            </div>
            <div className="card-body">
              <h3 className="card-title text-light">Fresh Meat</h3>
              <button className="btn" style={{ background: "#64B496", color: "white" }}>
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </TabPanel>

    <TabPanel value={2} className="tab-panel">
    <div className="tab-image row">
        <div className="col-lg-6 col-md-6 col-sm-12 mb-3 d-flex justify-content-center">
          <div
            className="card car"
            style={{
              backgroundImage: `url("./image/5.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="tt text-light d-flex p-3" style={{ flexWrap: "wrap" }}>
              <div style={{ fontSize: "50px" }}>50</div>
              <div className="d-flex flex-column justify-content-center align-items-center p-1 mt-1">
                <h5>%</h5>
                <h5>OFF</h5>
              </div>
            </div>
            <div className="card-body">
              <h3 className="card-title text-light">Coriander</h3>
              <button className="btn" style={{ background: "#64B496", color: "white" }}>
                Shop Now
              </button>
            </div>
          </div>
        </div>

     
        <div className="col-lg-6 col-md-6 col-sm-12 mb-3 d-flex justify-content-center">
          <div
            className="card car"
            style={{
              backgroundImage: `url("./image/6.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="tt text-light d-flex p-3" style={{ flexWrap: "wrap" }}>
              <div style={{ fontSize: "50px" }}>50</div>
              <div className="d-flex flex-column justify-content-center align-items-center p-1 mt-1">
                <h5>%</h5>
                <h5>OFF</h5>
              </div>
            </div>
            <div className="card-body">
              <h3 className="card-title text-light">Broccoli</h3>
              <button className="btn" style={{ background: "#64B496", color: "white" }}>
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </TabPanel>


    <TabPanel value={3} className="tab-panel">
    <div className="tab-image row">
        <div className="col-lg-6 col-md-6 col-sm-12 mb-3 d-flex justify-content-center">
          <div
            className="card car"
            style={{
              backgroundImage: `url("./image/5.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="tt text-light d-flex p-3" style={{ flexWrap: "wrap" }}>
              <div style={{ fontSize: "50px" }}>50</div>
              <div className="d-flex flex-column justify-content-center align-items-center p-1 mt-1">
                <h5>%</h5>
                <h5>OFF</h5>
              </div>
            </div>
            <div className="card-body">
              <h3 className="card-title text-light">Coriander</h3>
              <button className="btn" style={{ background: "#64B496", color: "white" }}>
                Shop Now
              </button>
            </div>
          </div>
        </div>

     
        <div className="col-lg-6 col-md-6 col-sm-12 mb-3 d-flex justify-content-center">
          <div
            className="card car"
            style={{
              backgroundImage: `url("./image/6.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="tt text-light d-flex p-3" style={{ flexWrap: "wrap" }}>
              <div style={{ fontSize: "50px" }}>50</div>
              <div className="d-flex flex-column justify-content-center align-items-center p-1 mt-1">
                <h5>%</h5>
                <h5>OFF</h5>
              </div>
            </div>
            <div className="card-body">
              <h3 className="card-title text-light">Broccoli</h3>
              <button className="btn" style={{ background: "#64B496", color: "white" }}>
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </TabPanel>


    
    <TabPanel value={4} className="tab-panel">
    <div className="tab-image row">
        <div className="col-lg-6 col-md-6 col-sm-12 mb-3 d-flex justify-content-center">
          <div
            className="card car"
            style={{
              backgroundImage: `url("./image/5.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="tt text-light d-flex p-3" style={{ flexWrap: "wrap" }}>
              <div style={{ fontSize: "50px" }}>50</div>
              <div className="d-flex flex-column justify-content-center align-items-center p-1 mt-1">
                <h5>%</h5>
                <h5>OFF</h5>
              </div>
            </div>
            <div className="card-body">
              <h3 className="card-title text-light">Coriander</h3>
              <button className="btn" style={{ background: "#64B496", color: "white" }}>
                Shop Now
              </button>
            </div>
          </div>
        </div>

     
        <div className="col-lg-6 col-md-6 col-sm-12 mb-3 d-flex justify-content-center">
          <div
            className="card car"
            style={{
              backgroundImage: `url("./image/6.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="tt text-light d-flex p-3" style={{ flexWrap: "wrap" }}>
              <div style={{ fontSize: "50px" }}>50</div>
              <div className="d-flex flex-column justify-content-center align-items-center p-1 mt-1">
                <h5>%</h5>
                <h5>OFF</h5>
              </div>
            </div>
            <div className="card-body">
              <h3 className="card-title text-light">Broccoli</h3>
              <button className="btn" style={{ background: "#64B496", color: "white" }}>
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </TabPanel>



    <TabPanel value={5} className="tab-panel">
    <div className="tab-image row">
        <div className="col-lg-6 col-md-6 col-sm-12 mb-3 d-flex justify-content-center">
          <div
            className="card car"
            style={{
              backgroundImage: `url("./image/5.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="tt text-light d-flex p-3" style={{ flexWrap: "wrap" }}>
              <div style={{ fontSize: "50px" }}>50</div>
              <div className="d-flex flex-column justify-content-center align-items-center p-1 mt-1">
                <h5>%</h5>
                <h5>OFF</h5>
              </div>
            </div>
            <div className="card-body">
              <h3 className="card-title text-light">Coriander</h3>
              <button className="btn" style={{ background: "#64B496", color: "white" }}>
                Shop Now
              </button>
            </div>
          </div>
        </div>

     
        <div className="col-lg-6 col-md-6 col-sm-12 mb-3 d-flex justify-content-center">
          <div
            className="card car"
            style={{
              backgroundImage: `url("./image/6.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="tt text-light d-flex p-3" style={{ flexWrap: "wrap" }}>
              <div style={{ fontSize: "50px" }}>50</div>
              <div className="d-flex flex-column justify-content-center align-items-center p-1 mt-1">
                <h5>%</h5>
                <h5>OFF</h5>
              </div>
            </div>
            <div className="card-body">
              <h3 className="card-title text-light">Broccoli</h3>
              <button className="btn" style={{ background: "#64B496", color: "white" }}>
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </TabPanel>
  </Tabs>
</div>


{/* <div className="pro">
  <div className="container">

<div className="row">
  <div className="col-lg-3">
    {products.map((el) => (
        <div className="card c" style={{ width: '13rem' }} key={el.id}>
          <img src={el.image} className="card-img-top" alt={el.title} />
          <div className="card-body">
            <h5 className="card-title">{el.category}</h5>
            <p className="card-text">{el.description}</p>
            <p className="card-text">{el.star}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    
    ))}
  </div>
</div>

  </div>
</div> */}
<div className="container d-flex justify-content-center align-items-center" >

  <div className="fresh">
    <div className="row">

    
    <div className="slider-container" data-aos="fade-up">
  <Slider {...settings} data-aos="fade-up">
    <div className="d-flex justify-content-center align-items-center">
      <div className="col-xxl-11 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" style={{ padding: "3px" }}>
        <div
          className="product"
          style={{
            background: `url("./image/3 (2).jpg")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="product-body">
            <div className="product-t">
              <strong>Fresh &amp; healthy</strong>
              <br />
              <strong>Organic Fruits</strong>
            </div>
            <div className="d-flex align-items-center">
              <h2 style={{ color: "#198754" }}>35%</h2>
              <h6 style={{ color: "rgba(119, 119, 119, 1)", margin: "0px 10px" }}>on first order</h6>
            </div>
            <span>
              <button className="btn" style={{ background: "#198754", color: "white" }}>
                Shop Now
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>

   

    <div className="d-flex justify-content-center align-items-center">
      <div className="col-xxl-11 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" style={{ padding: "3px" }}>
        <div
          className="product"
          style={{
            background: `url("./image/1 (2).jpg")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="product-body">
            <div className="product-t">
              <strong>Fresh &amp; healthy</strong>
              <br />
              <strong>Organic Fruits</strong>
            </div>
            <div className="d-flex align-items-center">
              <h2 style={{ color: "#198754" }}>35%</h2>
              <h6 style={{ color: "rgba(119, 119, 119, 1)", margin: "0px 10px" }}>on first order</h6>
            </div>
            <span>
              <button className="btn" style={{ background: "#198754", color: "white" }}>
                Shop Now
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="d-flex justify-content-center align-items-center">
      <div className="col-xxl-11 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" style={{ padding: "3px" }}>
        <div
          className="product"
          style={{
            background: `url("./image/2 (2).jpg")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="product-body">
            <div className="product-t">
              <strong>Fresh &amp; healthy</strong>
              <br />
              <strong>Organic Fruits</strong>
            </div>
            <div className="d-flex align-items-center">
              <h2 style={{ color: "#198754" }}>35%</h2>
              <h6 style={{ color: "rgba(119, 119, 119, 1)", margin: "0px 10px" }}>on first order</h6>
            </div>
            <span>
              <button className="btn" style={{ background: "#198754", color: "white" }}>
                Shop Now
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="d-flex justify-content-center align-items-center">
      <div className="col-xxl-11 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" style={{ padding: "3px" }}>
        <div
          className="product"
          style={{
            background: `url("./image/3 (2).jpg")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="product-body">
            <div className="product-t">
              <strong>Fresh &amp; healthy</strong>
              <br />
              <strong>Organic Fruits</strong>
            </div>
            <div className="d-flex align-items-center">
              <h2 style={{ color: "#198754" }}>35%</h2>
              <h6 style={{ color: "rgba(119, 119, 119, 1)", margin: "0px 10px" }}>on first order</h6>
            </div>
            <span>
              <button className="btn" style={{ background: "#198754", color: "white" }}>
                Shop Now
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="d-flex justify-content-center align-items-center">
      <div className="col-xxl-11 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" style={{ padding: "3px" }}>
        <div
          className="product"
          style={{
            background: `url("./image/1 (2).jpg")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="product-body">
            <div className="product-t">
              <strong>Fresh &amp; healthy</strong>
              <br />
              <strong>Organic Fruits</strong>
            </div>
            <div className="d-flex align-items-center">
              <h2 style={{ color: "#198754" }}>35%</h2>
              <h6 style={{ color: "rgba(119, 119, 119, 1)", margin: "0px 10px" }}>on first order</h6>
            </div>
            <span>
              <button className="btn" style={{ background: "#198754", color: "white" }}>
                Shop Now
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="d-flex justify-content-center align-items-center">
      <div className="col-xxl-11 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" style={{ padding: "3px" }}>
        <div
          className="product"
          style={{
            background: `url("./image/2 (2).jpg")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="product-body">
            <div className="product-t">
              <strong>Fresh &amp; healthy</strong>
              <br />
              <strong>Organic Fruits</strong>
            </div>
            <div className="d-flex align-items-center">
              <h2 style={{ color: "#198754" }}>35%</h2>
              <h6 style={{ color: "rgba(119, 119, 119, 1)", margin: "0px 10px" }}>on first order</h6>
            </div>
            <span>
              <button className="btn" style={{ background: "#198754", color: "white" }}>
                Shop Now
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </Slider>
</div>

  </div>
</div>
</div>
  
<div className="pro">
<div className="container">

  <div className="row">
  <Slider {...settings1} data-aos="fade-up">

    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-5 border" style={{gap:"10px !important"}}>
         <div className="packing">
           <div className="paking-body">
           <i class="ri-store-3-fill" style={{color:"#52a57b"}} id="icon"></i>
             <h4>Product Packing</h4>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
           </div>
         </div>
    </div>
  


    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-5 border" style={{gap:"10px !important"}}>
         <div className="packing">
           <div className="paking-body">
           <i class="ri-customer-service-2-line" style={{color:"#52a57b"}} id="icon"></i>
             <h4>24X7 Support</h4>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
           </div>
         </div>
    </div>

    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-5 border" style={{gap:"10px !important"}}>
         <div className="packing">
           <div className="paking-body">
           <i class="ri-truck-line" style={{color:"#52a57b"}} id="icon"></i>
             <h4>24X7 Support</h4>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
           </div>
         </div>
    </div>
    </Slider>
  </div>
</div>
</div>



    </>

  );
}
export default Home;
