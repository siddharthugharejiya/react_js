import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

const Home = () => {
  return (
    <div>
      <div className="slider-1">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <div className="juicy juicy-left">
              <div className="container">
                <div className="row ">
                  <div className="col-lg-6 col-md-10 col-sm-12 juicy-left-main">
                    <div className="row">
                      <div className="col-12 d-flex m-1 animate__animated animate__fadeInUp" 
                           style={{ animationDuration: "1s", animationDelay: "1s" }}>
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

          {/* Second Slide */}
          <Carousel.Item>
            <div className="juicy juicy-left1 ">
              <div className="container ">
                <div className="row ">
                  <div className="col-lg-6 col-md-10 col-sm-12 juicy-left-main">
                    <div className="row">
                      <div className="col-12 d-flex m-1 animate__animated animate__fadeInUp" 
                           style={{ animationDuration: "1s", animationDelay: "1s" }}>
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
    </div>
  );
};

export default Home;
