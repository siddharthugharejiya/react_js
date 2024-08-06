import React, { useRef } from "react";
import "../App.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../icon.css";
import logo from "./assets/image/logo.svg"
import img from "./assets/image/h1-img-1.jpg";
import img1 from "./assets/image/player-client-img-1.png";
import img11 from "./assets/image/player-client-img-1-hover.png";
import img2 from "./assets/image/player-client-img-2.png";
import img22 from "./assets/image/player-client-img-2-hover.png";
import img3 from "./assets/image/player-client-img-3.png";
import img33 from "./assets/image/player-client-img-3-hover.png";
import img4 from "./assets/image/player-client-img-4.png";
import img44 from "./assets/image/player-client-img-4-hover.png";
import img5 from "./assets/image/player-client-img-5.png";
import img55 from "./assets/image/player-client-img-5-hover.png";
import img6 from "./assets/image/player-client-img-6.png";
import img66 from "./assets/image/player-client-img-6-hover.png";
import s1 from "./assets/image/h1-gallery-img-1.jpg";
import s2 from "./assets/image/h1-gallery-img-2.jpg";
import s3 from "./assets/image/h1-gallery-img-3.jpg";
import s4 from "./assets/image/h1-gallery-img-4.jpg";
import footer from "./assets/image/footer-logo-img.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Home = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <>
       <div className="s">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={s1} alt="Gallery Image 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={s2} alt="Gallery Image 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={s3} alt="Gallery Image 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={s4} alt="Gallery Image 4" />
            </SwiperSlide>
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </div>
     

      <div className="container-fluid">
        <div className="main d-flex flex-sm-column flex-md-column flex-lg-row justify-content-evenly" style={{background:"black"}}>
          <div className="col-lg-4 galary h-100">
            <img src={img} alt="Thumbnail" className="img-fluid" />
          </div>

          <div className="col-lg-5 h-100 text-light">
            <div className="main-text">
              <p className="game">THE GAME</p>
              <p className="display-6 fw-bold">
                SEE WHAT NEW VIDEO GAMES ARE OUT THIS MONTH &{" "}
                <strike>ENJOY</strike>
              </p>
              <p style={{ letterSpacing: "2px" }}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atqueSed ut
                perspiciatis unde omnis iste natus.
              </p>
              <button className="fill">READ MORE</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="twitch">
          <div className="row">
            <div className="col-9 d-flex m-2">
              <div className="col-3 d-flex justify-content-center align-items-center border border-1 border-light p-2 twi text-light">
                <span>TWITCH</span>
              </div>

              <div className="col-3 d-flex justify-content-center align-items-center border border-1 border-light p-2 twi text-light">
                <span>YOUTUBE</span>
              </div>

              <div className="col-3 d-flex justify-content-center align-items-center border border-1 border-light p-2 twi text-light">
                <span>DISCORD</span>
              </div>
            </div>
          </div>
          <div className="twitch-video">{/* Content for Twitch video */}</div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="new text-light">
          <div className="new-text">
            <div className="display-6">
              New items for your setup & in-game content.
            </div>
            <p className="mt-2">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque.
            </p>
            <h4 className="new-text-a">shop</h4>
          </div>
        </div>
      </div>
{/* 
      <div className="container-fluid">
        <div className="witch d-flex justify-content-evenly align-items-center">
          {[
            { normal: img1, hover: img11 },
            { normal: img2, hover: img22 },
            { normal: img3, hover: img33 },
            { normal: img4, hover: img44 },
            { normal: img5, hover: img55 },
            { normal: img6, hover: img66 },
          ].map((image, index) => (
            <div className="witch-image" key={index}>
              <div className="normal">
                <img src={image.normal} alt="Player Client" />
              </div>
              <div className="hover-witch">
                <img src={image.hover} alt="Player Client Hover" />
              </div>
            </div>
          ))}
        </div>
      </div> */}


<div className="container-fluid">
          <div className="witch d-flex justify-content-evenly align-items-center">
            <div className="witch-image">
              <div className="normal">
              <img src={img1} alt="Player Client" />
              </div>
              <div className="hover-witch">
                <img src={img11} alt="" />
              </div>
            </div>

            <div className="witch-image">
              <div className="normal">
              <img src={img2} alt="Player Client" />
              </div>
              <div className="hover-witch">
                <img src={img22} alt="" />
              </div>
            </div>



            <div className="witch-image">
              <div className="normal">
              <img src={img3} alt="Player Client" />
              </div>
              <div className="hover-witch">
                <img src={img33} alt="" />
              </div>
            </div>



            <div className="witch-image">
              <div className="normal">
              <img src={img4} alt="Player Client" />
              </div>
              <div className="hover-witch">
                <img src={img44} alt="" />
              </div>
            </div>




            <div className="witch-image">
              <div className="normal">
              <img src={img5} alt="Player Client" />
              </div>
              <div className="hover-witch">
                <img src={img55} alt="" />
              </div>
            </div>


            <div className="witch-image">
              <div className="normal">
              <img src={img6} alt="Player Client" />
              </div>
              <div className="hover-witch">
                <img src={img66} alt="" />
              </div>
            </div>

          </div>
        </div>

      <footer className="container-fluid">
        <div className="footer">
          <div className="footer-logo">
            <img src={footer} alt="Footer Logo" />
          </div>
          <div className="footer-icon">
            <nav className="nav2">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Product</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </nav>

            <nav>
              <div className="fb">
                <div className="border"></div>
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <div className="yt">
                <div className="border"></div>
                <i className="fa-brands fa-youtube"></i>
              </div>
              <div className="twitter">
                <div className="border"></div>
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className="wp">
                <div className="border"></div>
                <i className="fa-brands fa-whatsapp"></i>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
