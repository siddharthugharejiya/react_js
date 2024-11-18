import Carousel from "react-bootstrap/Carousel";
import "animate.css";
import "./section.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { styled, width } from "@mui/system";
import { Tabs as BaseTabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
import "swiper/css";
import "swiper/css/pagination";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { product_action } from "../Redux/action";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const dispatch = useDispatch()
  const product = useSelector(state => state.product.data)
  console.log(product);



  useEffect(() => {
    dispatch(product_action())
  }, [dispatch])
  const nav = useNavigate()

  const [filter, setFilter] = useState("All");

  const buttonClick = (category) => {
    setFilter(category)
  }
  console.log(filter)


  const getFilteredProducts = () => {
    if (filter === 'All') {
      return product;
    }
    else if (filter === 'Snacks') {
      return product.filter(el => el.category === 'Snacks');
    }
    else if (filter === "Fruits") {
      return product.filter(el => el.category === "Fruits")
    }
    else if (filter === 'Bakery') {
      return product.filter(el => el.category === 'Bakery');
    }
    else if (filter === "Vegetables") {
      return product.filter(el => el.category === "Vegetables")
    }
    else {
      return [];
    }
  };

  const filteredProducts = getFilteredProducts();
  const handleclick = (id) => {
    console.log(id)

    nav(`/${id}`)
  }


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
          dots: true,
        },
      },
      {
        // Large devices (lg)
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        // Medium devices (md)
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        // Small devices (sm)
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        // Extra small devices (xs)
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
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
          dots: true,
        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        // Extra large desktops (xl)
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        // Large devices (lg)
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        // Medium devices (md)
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        // Small devices (sm)
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        // Extra small devices (xs)
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  const blue = {
    50: "#F0F7FF",
    100: "#C2E0FF",
    200: "#80BFFF",
    300: "#66B2FF",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    700: "#0059B2",
    800: "#004C99",
    900: "#003A75",
  };

  const grey = {
    50: "#F3F6F9",
    100: "#E5EAF2",
    200: "#DAE2ED",
    300: "#C7D0DD",
    400: "#B0B8C4",
    500: "#9DA8B7",
    600: "#6B7A90",
    700: "#434D5B",
    800: "#303740",
    900: "#1C2025",
  };

  const Tab = styled(BaseTab)`
    font-family: "IBM Plex Sans", sans-serif;
    // color: white;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: bold;
    background-color: #f7f7f8;
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 7px;
    display: flex;
    justify-content: center;

    &:hover {
      background-color: #f7f7f8 !important;
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
      color: black;
    }
  `;

  const TabPanel = styled(BaseTabPanel)`
    width: 100%;
    font-family: "IBM Plex Sans", sans-serif;
    font-size: 0.875rem;
  `;

  const Tabs = styled(BaseTabs)`
    display: flex;
    gap: 16px;
    width: 200px;
  `;

  const TabsList = styled(BaseTabsList)`
    min-width: 80px;
    color: black;
    border-radius: 12px;
    margin-bottom: 16px;
    display: flex;
    padding: 6px;
    gap: 12px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    box-shadow: 0px 4px 8px
      ${(props) => (props === "dark" ? grey[900] : grey[200])};
  `;

  function updateCountdown() {
    const targetDate = new Date("2025-01-01T00:00:00");
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      document.getElementById("months").innerText = "00";
      document.getElementById("days").innerText = "00";
      document.getElementById("hours").innerText = "00";
      document.getElementById("minutes").innerText = "00";
      document.getElementById("seconds").innerText = "00";
      return;
    }

    const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
    );
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("months").innerText = String(months).padStart(2, "0");
    document.getElementById("days").innerText = String(days).padStart(2, "0");
    document.getElementById("hours").innerText = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerText = String(minutes).padStart(
      2,
      "0"
    );
    document.getElementById("seconds").innerText = String(seconds).padStart(
      2,
      "0"
    );
  }

  setInterval(updateCountdown, 1000);

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
                        style={{
                          animationDuration: "1s",
                          animationDelay: "1s",
                        }}
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
                        style={{
                          animationDuration: "2s",
                          animationDelay: "2s",
                        }}
                      >
                        <h1 className="display-3" style={{ fontWeight: "700" }}>
                          Explore fresh & juicy fruits.
                        </h1>
                      </div>
                    </div>

                    <div className="row">
                      <div
                        className="col-12 animate__animated animate__fadeInUp"
                        style={{
                          animationDuration: "3s",
                          animationDelay: "3s",
                        }}
                      >
                        <p style={{ width: "70%" }}>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Amet reiciendis beatae consequuntur.
                        </p>
                      </div>
                    </div>

                    <div className="row">
                      <div
                        className="col-12 animate__animated animate__fadeInUp"
                        style={{
                          animationDuration: "4s",
                          animationDelay: "4s",
                        }}
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
                        style={{
                          animationDuration: "1s",
                          animationDelay: "1s",
                        }}
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
                        style={{
                          animationDuration: "2s",
                          animationDelay: "2s",
                        }}
                      >
                        <h1 className="display-3" style={{ fontWeight: "700" }}>
                          Explore fresh & juicy fruits.
                        </h1>
                      </div>
                    </div>

                    <div className="row">
                      <div
                        className="col-12 animate__animated animate__fadeInUp"
                        style={{
                          animationDuration: "3s",
                          animationDelay: "3s",
                        }}
                      >
                        <p style={{ width: "70%" }}>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Amet reiciendis beatae consequuntur.
                        </p>
                      </div>
                    </div>

                    <div className="row">
                      <div
                        className="col-12 animate__animated animate__fadeInUp"
                        style={{
                          animationDuration: "4s",
                          animationDelay: "4s",
                        }}
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
        <Tabs
          defaultValue={0}
          orientation="vertical"
        // style={{ flexWrap: "wrap" }}
        >
          <TabsList className="tabs-list col-lg-4 col-sm-12 col-12">
            <Tab>
              Cake and Milk <br />
              (65 Items)
            </Tab>
            <Tab>
              Fresh Meat <br />
              (30 Items)
            </Tab>
            <Tab>
              Vegetable <br />
              (25 items)
            </Tab>
            <Tab>
              Apple &amp; Mango <br />
              (25 items)
            </Tab>
            <Tab>
              Strawberry <br />
              (68 Items)
            </Tab>
            <Tab>
              Vegetable <br />
              (25 items)
            </Tab>
          </TabsList>

          <TabPanel value={0} className="tab-panel">
            <div className="tab-image row justify-content-around">
              <div className="col-lg-5 col-md-6 col-sm-12 col-12 mb-3 d-flex justify-content-around">
                <div
                  className="card car"
                  style={{
                    backgroundImage: `url("./image/3.jpg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className="tt text-light d-flex p-3"
                    style={{ flexWrap: "wrap" }}
                  >
                    <div style={{ fontSize: "50px" }}>50</div>
                    <div className="d-flex flex-column justify-content-center align-items-center p-1 mt-1">
                      <h5>%</h5>
                      <h5>OFF</h5>
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title text-light">Cake</h3>
                    <button
                      className="btn"
                      style={{ background: "#64B496", color: "white" }}
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-6 col-sm-12 col-12 mb-3 d-flex justify-content-center">
                <div
                  className="card car "
                  style={{
                    backgroundImage: `url("./image/4.jpg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className="tt text-light d-flex p-3"
                    style={{ flexWrap: "wrap" }}
                  >
                    <div style={{ fontSize: "50px" }}>50</div>
                    <div className="d-flex flex-column justify-content-center align-items-center p-1 mt-1">
                      <h5>%</h5>
                      <h5>OFF</h5>
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title text-light">Cake</h3>
                    <button
                      className="btn"
                      style={{ background: "#64B496", color: "white" }}
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel value={1} className="tab-panel">
            <div className="tab-image row justify-content-around">
              <div className="col-lg-5 col-md-6 col-sm-12 mb-3 d-flex justify-content-around">
                <div
                  className="card car"
                  style={{
                    backgroundImage: `url("./image/1.jpg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className="tt text-light d-flex p-3"
                    style={{ flexWrap: "wrap" }}
                  >
                    <div style={{ fontSize: "50px" }}>50</div>
                    <div className="d-flex flex-column justify-content-center align-items-center p-1 mt-1">
                      <h5>%</h5>
                      <h5>OFF</h5>
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title text-light">Fish Meat</h3>
                    <button
                      className="btn"
                      style={{ background: "#64B496", color: "white" }}
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-6 col-sm-12 mb-3 d-flex justify-content-around">
                <div
                  className="card car"
                  style={{
                    backgroundImage: `url("./image/2.jpg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className="tt text-light d-flex p-3"
                    style={{ flexWrap: "wrap" }}
                  >
                    <div style={{ fontSize: "50px" }}>50</div>
                    <div className="d-flex flex-column justify-content-center align-items-center p-1 mt-1">
                      <h5>%</h5>
                      <h5>OFF</h5>
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title text-light">Fresh Meat</h3>
                    <button
                      className="btn"
                      style={{ background: "#64B496", color: "white" }}
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel value={2} className="tab-panel">
            <div className="tab-image row justify-content-around">
              <div className="col-lg-5 col-md-6 col-sm-12 mb-3 d-flex justify-content-around">
                <div
                  className="card car"
                  style={{
                    backgroundImage: `url("./image/5.jpg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className="tt text-light d-flex p-3"
                    style={{ flexWrap: "wrap" }}
                  >
                    <div style={{ fontSize: "50px" }}>50</div>
                    <div className="d-flex flex-column justify-content-center align-items-center p-1 mt-1">
                      <h5>%</h5>
                      <h5>OFF</h5>
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title text-light">Coriander</h3>
                    <button
                      className="btn"
                      style={{ background: "#64B496", color: "white" }}
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-6 col-sm-12 mb-3 d-flex justify-content-around">
                <div
                  className="card car"
                  style={{
                    backgroundImage: `url("./image/6.jpg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className="tt text-light d-flex p-3"
                    style={{ flexWrap: "wrap" }}
                  >
                    <div style={{ fontSize: "50px" }}>50</div>
                    <div className="d-flex flex-column justify-content-center align-items-center p-1 mt-1">
                      <h5>%</h5>
                      <h5>OFF</h5>
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title text-light">Broccoli</h3>
                    <button
                      className="btn"
                      style={{ background: "#64B496", color: "white" }}
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel value={3} className="tab-panel">
            <div className="tab-image row justify-content-around">
              <div className="col-lg-5 col-md-6 col-sm-12 mb-3 d-flex justify-content-around">
                <div
                  className="card car"
                  style={{
                    backgroundImage: `url("./image/5.jpg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className="tt text-light d-flex p-3"
                    style={{ flexWrap: "wrap" }}
                  >
                    <div style={{ fontSize: "50px" }}>50</div>
                    <div className="d-flex flex-column justify-content-center align-items-center p-1 mt-1">
                      <h5>%</h5>
                      <h5>OFF</h5>
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title text-light">Coriander</h3>
                    <button
                      className="btn"
                      style={{ background: "#64B496", color: "white" }}
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-6 col-sm-12 mb-3 d-flex justify-content-around">
                <div
                  className="card car"
                  style={{
                    backgroundImage: `url("./image/6.jpg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className="tt text-light d-flex p-3"
                    style={{ flexWrap: "wrap" }}
                  >
                    <div style={{ fontSize: "50px" }}>50</div>
                    <div className="d-flex flex-column justify-content-center align-items-center p-1 mt-1">
                      <h5>%</h5>
                      <h5>OFF</h5>
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title text-light">Broccoli</h3>
                    <button
                      className="btn"
                      style={{ background: "#64B496", color: "white" }}
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel value={4} className="tab-panel">
            <div className="tab-image row justify-content-around">
              <div className="col-lg-5 col-md-6 col-sm-12 mb-3 d-flex justify-content-center">
                <div
                  className="card car"
                  style={{
                    backgroundImage: `url("./image/5.jpg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className="tt text-light d-flex p-3"
                    style={{ flexWrap: "wrap" }}
                  >
                    <div style={{ fontSize: "50px" }}>50</div>
                    <div className="d-flex flex-column justify-content-center align-items-center p-1 mt-1">
                      <h5>%</h5>
                      <h5>OFF</h5>
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title text-light">Coriander</h3>
                    <button
                      className="btn"
                      style={{ background: "#64B496", color: "white" }}
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-6 col-sm-12 mb-3 d-flex justify-content-center">
                <div
                  className="card car"
                  style={{
                    backgroundImage: `url("./image/6.jpg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className="tt text-light d-flex p-3"
                    style={{ flexWrap: "wrap" }}
                  >
                    <div style={{ fontSize: "50px" }}>50</div>
                    <div className="d-flex flex-column justify-content-center align-items-center p-1 mt-1">
                      <h5>%</h5>
                      <h5>OFF</h5>
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title text-light">Broccoli</h3>
                    <button
                      className="btn"
                      style={{ background: "#64B496", color: "white" }}
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel value={5} className="tab-panel">
            <div className="tab-image row justify-content-around">
              <div className="col-lg-5 col-md-6 col-sm-12 mb-3 d-flex justify-content-center">
                <div
                  className="card car"
                  style={{
                    backgroundImage: `url("./image/5.jpg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className="tt text-light d-flex p-3"
                    style={{ flexWrap: "wrap" }}
                  >
                    <div style={{ fontSize: "50px" }}>50</div>
                    <div className="d-flex flex-column justify-content-center align-items-center p-1 mt-1">
                      <h5>%</h5>
                      <h5>OFF</h5>
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title text-light">Coriander</h3>
                    <button
                      className="btn"
                      style={{ background: "#64B496", color: "white" }}
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-6 col-sm-12 mb-3 d-flex justify-content-center">
                <div
                  className="card car"
                  style={{
                    backgroundImage: `url("./image/6.jpg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className="tt text-light d-flex p-3"
                    style={{ flexWrap: "wrap" }}
                  >
                    <div style={{ fontSize: "50px" }}>50</div>
                    <div className="d-flex flex-column justify-content-center align-items-center p-1 mt-1">
                      <h5>%</h5>
                      <h5>OFF</h5>
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title text-light">Broccoli</h3>
                    <button
                      className="btn"
                      style={{ background: "#64B496", color: "white" }}
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>

      <div className="container d-flex justify-content-center align-items-center">
        <div className="fresh">
          <div className="row">
            <div className="slider-container" data-aos="fade-up">
              <Slider {...settings} data-aos="fade-up">
                <div className="d-flex justify-content-center align-items-center">
                  <div
                    className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                    style={{ padding: "3px" }}
                  >
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
                          <h6
                            style={{
                              color: "rgba(119, 119, 119, 1)",
                              margin: "0px 10px",
                            }}
                          >
                            on first order
                          </h6>
                        </div>
                        <span>
                          <button
                            className="btn"
                            style={{ background: "#198754", color: "white" }}
                          >
                            Shop Now
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-center align-items-center">
                  <div
                    className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                    style={{ padding: "3px" }}
                  >
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
                          <h6
                            style={{
                              color: "rgba(119, 119, 119, 1)",
                              margin: "0px 10px",
                            }}
                          >
                            on first order
                          </h6>
                        </div>
                        <span>
                          <button
                            className="btn"
                            style={{ background: "#198754", color: "white" }}
                          >
                            Shop Now
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-center align-items-center">
                  <div
                    className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                    style={{ padding: "3px" }}
                  >
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
                          <h6
                            style={{
                              color: "rgba(119, 119, 119, 1)",
                              margin: "0px 10px",
                            }}
                          >
                            on first order
                          </h6>
                        </div>
                        <span>
                          <button
                            className="btn"
                            style={{ background: "#198754", color: "white" }}
                          >
                            Shop Now
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-center align-items-center">
                  <div
                    className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                    style={{ padding: "3px" }}
                  >
                    <div
                      className="product"
                      style={{
                        background: ` url("./image/3 (2).jpg")`,
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
                          <h6
                            style={{
                              color: "rgba(119, 119, 119, 1)",
                              margin: "0px 10px",
                            }}
                          >
                            on first order
                          </h6>
                        </div>
                        <span>
                          <button
                            className="btn"
                            style={{ background: "#198754", color: "white" }}
                          >
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
        <div className="row">
          <div className="slid-1" data-aos="fade-up">
            <Slider {...settings1}>
              <div
                className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12"
                id="pro-1"
              >
                <div className="packing">
                  <div className="paking-body">
                    <i
                      className="ri-store-3-fill"
                      style={{ color: "#52a57b" }}
                      id="icon"
                    ></i>
                    <h4>Product Packing</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                  </div>
                </div>
              </div>

              <div
                className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 "
                id="pro-1"
              >
                <div className="packing">
                  <div className="paking-body">
                    <i
                      className="ri-customer-service-2-line"
                      style={{ color: "#52a57b" }}
                      id="icon"
                    ></i>
                    <h4>24X7 Support</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                  </div>
                </div>
              </div>

              <div
                className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 "
                id="pro-1"
              >
                <div className="packing">
                  <div className="paking-body">
                    <i
                      className="ri-truck-line"
                      style={{ color: "#52a57b" }}
                      id="icon"
                    ></i>
                    <h4>24X7 Support</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                  </div>
                </div>
              </div>

              <div
                className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12"
                id="pro-1"
              >
                <div className="packing">
                  <div className="paking-body">
                    <i
                      className="ri-store-3-fill"
                      style={{ color: "#52a57b" }}
                      id="icon"
                    ></i>
                    <h4>Product Packing</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                  </div>
                </div>
              </div>

              <div
                className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 "
                id="pro-1"
              >
                <div className="packing">
                  <div className="paking-body">
                    <i
                      className="ri-customer-service-2-line"
                      style={{ color: "#52a57b" }}
                      id="icon"
                    ></i>
                    <h4>24X7 Support</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                  </div>
                </div>
              </div>

              <div
                className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 "
                id="pro-1"
              >
                <div className="packing">
                  <div className="paking-body">
                    <i
                      className="ri-truck-line"
                      style={{ color: "#52a57b" }}
                      id="icon"
                    ></i>
                    <h4>24X7 Support</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <div className="food">
        <div className="col-xxl-5 m-5">
          <div
            className="food-count col-xxl-11  col-xl-6 col-lg-7 col-sm-8 col-12 "
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <div className="col-12 d-flex">
              <p
                style={{
                  borderBottom: "2px solid #4CAF50",
                  color: "#4CAF50",
                }}
              >
                35%
              </p>
              <b style={{ fontSize: "18px", margin: "0 10px" }}>OFF</b>
            </div>
            <h2>Great deal on organic food.</h2>
            <p style={{ color: "#7a7a7a" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              maecenas accumsan lacus vel facilisis.
            </p>
            <div className="food-timer">
              <div className="countdown">
                <div>
                  <span id="months">00</span>
                  <div className="label">Months</div>
                </div>
                <div>
                  <span id="days">00</span>
                  <div className="label">Days</div>
                </div>
                <div>
                  <span id="hours">00</span>
                  <div className="label">Hours</div>
                </div>
                <div>
                  <span id="minutes">00</span>
                  <div className="label">Minutes</div>
                </div>
                <div>
                  <span id="seconds">00</span>
                  <div className="label">Seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-silder row mt-5">
        <div className="col-xxl-12 d-flex justify-content-center">
          <div className="bottom-text d-flex justify-content-center flex-column align-items-center">
            <h1>Great Words From People</h1>
            <div className="d-flex justify-content-center">
              <p
                className="text-center"
                style={{ color: "rgb(122 122 122 / 1", width: "70%" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore lacus vel facilisis.
              </p>
            </div>
          </div>
        </div>
        <Slider {...settings} data-aos="fade-up">
          <div className="col-xl-3">
            <article>
              <figure>
                <img src="./image/1 (3).jpg" />
              </figure>

              <div>
                <p>Co Founder</p>
                <b> Stephen Smith</b>
                <p>
                  “eiusmpsu dolor sit amet, conse cte tur ng elit, sed do
                  eiusmod tem lacus velfacilisis.”
                </p>
                <p>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: " #FFD43B" }}
                  ></i>{" "}
                  <i
                    className="fa-solid fa-star"
                    style={{ color: " #FFD43B" }}
                  ></i>{" "}
                  <i
                    className="fa-solid fa-star"
                    style={{ color: " #FFD43B" }}
                  ></i>{" "}
                  <i
                    className="fa-solid fa-star"
                    style={{ color: " #FFD43B" }}
                  ></i>{" "}
                  <i
                    className="fa-solid fa-star"
                    style={{ color: " #FFD43B" }}
                  ></i>
                </p>
              </div>
            </article>
          </div>

          <div className="col-xl-3">
            <article>
              <figure>
                <img src="./image/2 (3).jpg" />
              </figure>

              <div>
                <p>Manger</p>
                <b>Lorem Robinson</b>

                <p>
                  “eiusmpsu dolor sit amet, conse cte tur ng elit, sed do
                  eiusmod tem lacus velfacilisis.”
                </p>
                <p>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: " #FFD43B" }}
                  ></i>{" "}
                  <i
                    className="fa-solid fa-star"
                    style={{ color: " #FFD43B" }}
                  ></i>{" "}
                  <i
                    className="fa-solid fa-star"
                    style={{ color: " #FFD43B" }}
                  ></i>{" "}
                  <i
                    className="fa-solid fa-star"
                    style={{ color: " #FFD43B" }}
                  ></i>{" "}
                  <i
                    className="fa-solid fa-star"
                    style={{ color: " #FFD43B" }}
                  ></i>
                </p>
              </div>
            </article>
          </div>

          <div className="col-xl-3">
            <article>
              <figure>
                <img src="./image/3 (3).jpg" />
              </figure>

              <div>
                <p>Team Leader</p>
                <b>Saddika Alard</b>

                <p>
                  “eiusmpsu dolor sit amet, conse cte tur ng elit, sed do
                  eiusmod tem lacus velfacilisis.”
                </p>
                <p>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: " #FFD43B" }}
                  ></i>{" "}
                  <i
                    className="fa-solid fa-star"
                    style={{ color: " #FFD43B" }}
                  ></i>{" "}
                  <i
                    className="fa-solid fa-star"
                    style={{ color: " #FFD43B" }}
                  ></i>{" "}
                  <i
                    className="fa-solid fa-star"
                    style={{ color: " #FFD43B" }}
                  ></i>{" "}
                  <i
                    className="fa-solid fa-star"
                    style={{ color: " #FFD43B" }}
                  ></i>
                </p>
              </div>
            </article>
          </div>

          <div className="col-xl-3">
            <article>
              <figure>
                <img src="./image/1 (3).jpg" />
              </figure>

              <div>
                <p>Co Founder</p>
                <b> Stephen Smith</b>
                <p>
                  “eiusmpsu dolor sit amet, conse cte tur ng elit, sed do
                  eiusmod tem lacus velfacilisis.”
                </p>
                <p>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: " #FFD43B" }}
                  ></i>{" "}
                  <i
                    className="fa-solid fa-star"
                    style={{ color: " #FFD43B" }}
                  ></i>{" "}
                  <i
                    className="fa-solid fa-star"
                    style={{ color: " #FFD43B" }}
                  ></i>{" "}
                  <i
                    className="fa-solid fa-star"
                    style={{ color: " #FFD43B" }}
                  ></i>{" "}
                  <i
                    className="fa-solid fa-star"
                    style={{ color: " #FFD43B" }}
                  ></i>
                </p>
              </div>
            </article>
          </div>
        </Slider>
      </div>

      <div className="latest-news">
        <div className="col-xxl-12 d-flex justify-content-center">
          <div className="bottom-text d-flex justify-content-center flex-column align-items-center">
            <h1>Latest News</h1>
            <div className="d-flex justify-content-center">
              <p
                className="text-center"
                style={{ color: "rgb(122 122 122 / 1", width: "70%" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore lacus vel facilisis.
              </p>
            </div>
          </div>
        </div>

        <Slider {...settings} data-aos="fade-up">
          <div className="col-xl-12 col-md-12">
            <Card id="card">
              <Card.Body id="card-body">
                <p style={{ color: "rgb(122 122 122 / 1)", fontSize: "14px" }}>
                  By Admin | Snacks
                </p>

                <b>Urna pretium elit mauris cursus at elit Vestibulum.</b>

                <div>
                  <button className="cta">
                    <span>Hover me</span>
                    <svg width="15px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </button>
                </div>
              </Card.Body>
              <div className="img">
                <Card.Img variant="top" id="card-img" src="./image/1 (4).jpg" />
                <div className="box">
                  <span>10</span>
                  <span>oct</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="col-xl-12">
            <Card id="card">
              <Card.Body id="card-body">
                <p style={{ color: "rgb(122 122 122 / 1)", fontSize: "14px" }}>
                  By Admin | Snacks
                </p>

                <b>Urna pretium elit mauris cursus at elit Vestibulum.</b>

                <div>
                  <button className="cta">
                    <span>Hover me</span>
                    <svg width="15px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </button>
                </div>
              </Card.Body>
              <div className="img">
                <Card.Img variant="top" id="card-img" src="./image/2 (4).jpg" />
                <div className="box">
                  <span>10</span>
                  <span>oct</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="col-xl-12">
            <Card id="card">
              <Card.Body id="card-body">
                <p style={{ color: "rgb(122 122 122 / 1)", fontSize: "14px" }}>
                  By Admin | Snacks
                </p>

                <b>Urna pretium elit mauris cursus at elit Vestibulum.</b>

                <div>
                  <button className="cta">
                    <span>Hover me</span>
                    <svg width="15px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </button>
                </div>
              </Card.Body>
              <div className="img">
                <Card.Img variant="top" id="card-img" src="./image/3 (4).jpg" />
                <div className="box">
                  <span>10</span>
                  <span>oct</span>
                </div>
              </div>
            </Card>
          </div>
        </Slider>
      </div>

      <div className="footer">
        <div className="container-fluid">
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4">
                <img src="./image/logo.png" alt="Logo" className="img-fluid" />
                <div style={{ color: "rgb(122, 122, 122)" }}>
                  <p>
                    Carrot is the biggest market of grocery products. Get your daily
                    needs from our store.
                  </p>
                  <div className="d-flex align-items-center mb-2">
                    <i
                      className="fa-solid fa-location-dot"
                      style={{ color: "#64b496", marginRight: "8px" }}
                    ></i>
                    <p>
                      51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.
                    </p>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <i
                      className="fa-regular fa-envelope"
                      style={{ color: "#64b496", marginRight: "8px" }}
                    ></i>
                    <p>example@email.com</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <i
                      className="fa-solid fa-phone"
                      style={{ color: "#64b496", marginRight: "8px" }}
                    ></i>
                    <p>+91 123 4567890</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 mb-4">
                <b>Company</b>
                <div style={{ color: "rgb(122, 122, 122)" }}>
                  <p>About Us</p>
                  <p>Delivery Information</p>
                  <p>Privacy Policy</p>
                  <p>Terms & Conditions</p>
                  <p>Contact Us</p>
                  <p>Support Center</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 mb-4">
                <b>Category</b>
                <div style={{ color: "rgb(122, 122, 122)" }}>
                  <p>Dairy & Bakery</p>
                  <p>Fruits & Vegetables</p>
                  <p>Snack & Spice</p>
                  <p>Juice & Drinks</p>
                  <p>Chicken & Meat</p>
                  <p>Fast Food</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <b>Subscribe Our Newsletter</b>
                <div className="input-container mt-3 d-flex">
                  <input required placeholder="Email Address" type="email" className="form-control" />
                  <button className="btn invite-btn" type="button">
                    <i className="fa-regular fa-paper-plane"></i>
                  </button>
                </div>
                <div className="d-flex justify-content-between mt-3">
                  <ul className="d-flex list-unstyled">
                    <li className="me-3">
                      <span className="tooltip">Facebook</span>
                      <svg
                        viewBox="0 0 320 512"
                        height="1.2em"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                      </svg>
                    </li>
                    <li className="me-3">
                      <span className="tooltip">Twitter</span>
                      <svg
                        height="1.2em"
                        fill="currentColor"
                        viewBox="0 0 48 48"
                        xmlns="http://www.w3.org/2000/svg"
                        className="twitter"
                      >
                        <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
                      </svg>
                    </li>
                    <li>
                      <span className="tooltip">Instagram</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1.2em"
                        fill="currentColor"
                        className="bi bi-instagram"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.165 1.204-.275 1.486a2.472 2.472 0 0 1-.598.919c-.28.281-.546.454-.92.598-.282.11-.706.24-1.485.276-.844.038-1.097.047-3.232.047s-2.389-.009-3.232-.047c-.78-.036-1.204-.166-1.486-.276a2.47 2.47 0 0 1-.92-.598 2.472 2.472 0 0 1-.598-.92c-.11-.282-.24-.705-.276-1.485-.038-.844-.046-1.097-.046-3.232s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486a2.48 2.48 0 0 1 .598-.92 2.478 2.478 0 0 1 .92-.598c.282-.11.705-.24 1.485-.276.843-.038 1.096-.047 3.231-.047zM8 3.89a4.11 4.11 0 1 0 0 8.22 4.11 4.11 0 0 0 0-8.22zm0 6.77a2.66 2.66 0 1 1 0-5.32 2.66 2.66 0 0 1 0 5.32zm4.271-6.77a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92z"></path>
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-12 border-top mt-3 text-center">
                © 2024 Carrot, All rights reserved.
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="row fruits">
        <div className="col-xl-4 col-12">
          <div className="side col-xl-12 col-lg-10 col-12">
            <div className="side-1 col-xl-10 col-lg-7 col-sm-5 col-12">
              <div className="row">
                <div className="col-xl-12 col-lg-10 col-md-12 col-sm-12 col-11">
                  <div className="arr col-xl-11 col-lg-12 col-md-12 col-sm-12 col-12 border" onClick={() => buttonClick("All")}>
                    <span>All</span>
                    <i className="fa-solid fa-arrow-right" style={{ color: "black" }}></i>
                  </div>
                </div>

                <div className="col-xl-12 col-lg-10 col-md-12 col-sm-12 col-11">
                  <div className="arr col-xl-11 col-lg-12 col-md-12 col-sm-12 col-12 border" onClick={() => buttonClick("Bakery")}>
                    <span>Bakery</span>
                    <i className="fa-solid fa-arrow-right" style={{ color: "black" }}></i>
                  </div>
                </div>

                <div className="col-xl-12 col-lg-10 col-md-12 col-sm-12 col-11">
                  <div className="arr col-xl-11 col-lg-12 col-md-12 col-sm-12 col-12 border" onClick={() => buttonClick("Snacks")}>
                    <span>Snacks</span>
                    <i className="fa-solid fa-arrow-right" style={{ color: "black" }}></i>
                  </div>
                </div>

                <div className="col-xl-12 col-lg-10 col-md-12 col-sm-12 col-11">
                  <div className="arr col-xl-11 col-lg-12 col-md-12 col-sm-12 col-12 border" onClick={() => buttonClick("Vegetables")}>
                    <span>Vegetable</span>
                    <i className="fa-solid fa-arrow-right" style={{ color: "black" }}></i>
                  </div>
                </div>

                <div className="col-xl-12 col-lg-10 col-md-12 col-sm-12 col-11">
                  <div className="arr col-xl-11 col-lg-12 col-md-12 col-sm-12 col-12 border" onClick={() => buttonClick("Fruits")}>
                    <span>Fruits</span>
                    <i className="fa-solid fa-arrow-right" style={{ color: "black" }}></i>
                  </div>
                </div>

              </div>
            </div>
            <div className="side-2 col-xxl-12 col-xl-12 col-lg-5 col-sm-6 col-6">
              <div className="side-2-sub">
                <div className="side-2-sub-text p-3 py-5 ">
                  <span className="text-light" style={{ fontSize: "35px" }}>Juicy</span>
                  <span className="fs-2 mt-1" style={{ textTransform: "uppercase", color: "rgb(247 232 170 /1)", fontWeight: "800" }}>Fruits</span>
                  <span className="text-light" style={{ fontSize: "14px" }}>100% Natural</span>
                  <button className="btn btn-success mt-1">Shop Now</button>
                </div>
              </div>
            </div>

          </div>
        </div>
       
        <div className="col-xl-6">
          <div className="button-content">


            {filteredProducts.map((el) => (
               <Card id="card-product">
               <Card.Img variant="top" src={el.image} id="image-id" />
               <div id="shop">
                 <i className="fa-solid fa-bag-shopping"></i>
               </div>
               <div id="product-icon">
                 <i className="fa-regular fa-eye p-3"></i>
                 <i className="fa-regular fa-heart p-3"></i>
               </div>
               <Card.Body id="card-body-1">
                 <Card.Title>{el.title || 'Card Title'}</Card.Title>
                 <Card.Text>{el.description || 'Description goes here.'}</Card.Text>
                 <Button variant="primary">Go somewhere</Button>
               </Card.Body>
             </Card>

            ))}
          </div>


        </div>

      </div>

    </>
  );
}
export default Home;