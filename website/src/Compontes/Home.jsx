import React, { useState } from "react";
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
const Home = () => {

  AOS.init({
    duration: 1200,
  })
  
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


    </>
  );
};

export default Home;
  