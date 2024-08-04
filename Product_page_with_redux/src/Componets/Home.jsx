import React, { useRef }  from 'react';
import "../App.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
import img6 from "./assets/image/player-client-img-6.png";
import img55 from "./assets/image/player-client-img-5-hover.png";
import img66 from "./assets/image/player-client-img-6-hover.png";
import s1 from "./assets/image/h1-gallery-img-1.jpg"
import s2 from "./assets/image/h1-gallery-img-2.jpg"
import s3 from "./assets/image/h1-gallery-img-3.jpg"
import team from "./assets/image/h1-team-img-1.jpg"
import team2 from "./assets/image/h1-team-img-2.jpg"
import team3 from "./assets/image/h1-team-img-3.jpg"
import blog1 from "./assets/image/h1-blog-img-1.jpg"
import blog2 from "./assets/image/h1-blog-img-2.jpg"
import blog3 from "./assets/image/h1-blog-img-3.jpg"
import blog4 from "./assets/image/h1-blog-img-4.jpg"
import blog5 from "./assets/image/h1-blog-img-5.jpg"
import footer from "./assets/image/footer-logo-img.png"
// import s5 from "./assets/image/h1-gallery-img-5.jpg"
import s4 from "./assets/image/h1-gallery-img-4.jpg"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import NavbarMain from "./NavbarMain"

const Home = () => {
  const progressCircle = useRef(null);
const progressContent = useRef(null);

const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current && progressContent.current) {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
};

    return (
       <>
        <div className="container-fluid">
          <div className="main d-flex flex-sm-column flex-md-column flex-lg-row justify-content-evenly">
            <div className="col-lg-4 galary h-100">
              <img src={img} alt="Thumbnail" className='img-fluid' />
            </div>

            <div className="col-lg-5 h-100 text-light">
              <div className="main-text">
                <p className='game'>THE GAME</p>
                <p className='display-6 fw-bold'>
                  SEE WHAT NEW VIDEO GAMES ARE OUT THIS MONTH & <strike>ENJOY</strike>
                </p>
                <p style={{letterSpacing:"2px"}}>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atqueSed ut perspiciatis unde omnis iste natus.
                </p>
                <button className='fill'>READ MORE</button>
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
            <div className="twitch-video">
              {/* Content for Twitch video */}
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="new text-light">
            <div className="new-text">
              <div className="display-6">
                New items for your setup & in-game content.
              </div>
              <p className='mt-2'>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.
              </p>
              <h4 className='new-text-a'>shop</h4>
            </div>
          </div>
        </div>

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

        <div className="container-fluid">
                <div className="s">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
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
                            <img src={s1} alt="Nature 1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={s2} alt="Nature 2" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={s3} alt="Nature 3" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={s4} alt="Nature 4" />
                        </SwiperSlide>
                        {/* Add more SwiperSlides as needed */}
                        <div className="autoplay-progress" slot="container-end">
                            <svg viewBox="0 0 48 48" ref={progressCircle}>
                                <circle cx="24" cy="24" r="20"></circle>
                            </svg>
                            <span ref={progressContent}></span>
                        </div>
                    </Swiper>
                </div>
            </div>

            <div className="container-fluid">
          <div className="new text-light">
            <div className="new-text ">
              <div className="display-6 mt-4">
              Meet Our Ultimate Team
              the “Junior Coons”
              </div>
             
              <h4 className='new-text-a '>TEAM</h4>
            </div>
          </div>
        </div>

        <div className="cotaier-fluid">
          <div className="men">
          <Card className='card'>
      <Card.Img variant="top" src={team} />
      <Card.Body>
        <Card.Title>
        Gerald Timmons</Card.Title>
        <Card.Text>
        Creator
        </Card.Text>
      <Card.Text>
        <i className="fa-brands fa-twitch m-2"></i>
        <i className="fa-brands fa-youtube"></i>

      </Card.Text>
      <Card.Text style={{margin:"10px"}}>
        {/* <i class="fa-brands fa-twitch"></i> */}

      </Card.Text>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img variant="top" src={team2} />
      <Card.Body>
        <Card.Title>
        Melita Hwang</Card.Title>
        <Card.Text>
        Developer
        </Card.Text>
      <Card.Text>
        <i className="fa-brands fa-twitch m-2"></i>
        <i className="fa-brands fa-youtube"></i>

      </Card.Text>
      <Card.Text style={{margin:"10px"}}>
        {/* <i class="fa-brands fa-twitch"></i> */}

      </Card.Text>
      </Card.Body>
    </Card>

    <Card className='card'>
      <Card.Img variant="top" src={team3} />
      <Card.Body>
        <Card.Title>
        Hinrik Gylfason</Card.Title>
        <Card.Text>
        Animator
        </Card.Text>
      <Card.Text>
        <i className="fa-brands fa-twitch m-2"></i>
        <i className="fa-brands fa-youtube"></i>

      </Card.Text>
      <Card.Text style={{margin:"10px"}}>
        {/* <i class="fa-brands fa-twitch"></i> */}

      </Card.Text>
      </Card.Body>
    </Card>
          </div>
        </div>
        <div className="container-fluid">
          <div className="new text-light">
            <div className="new-text ">
              <div className="display-5 ms-4">
              Subscribe to our newsletter for latest updates
              </div>
             
              <h4 className='new-text-a '>JOIN US</h4>
            </div>
          </div>
        </div>

        <div className="main-card-2">

        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={blog1} />
      <Card.Body>
        <Card.Title>Nysd confirmed for cdb7 league</Card.Title>
        <Card.Text style={{color:"gray"}}>
        October 24. 2022 / Games
        </Card.Text>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={blog2} />
      <Card.Body>
        <Card.Title>a 
        Rise of gaming market in Japan</Card.Title>
        <Card.Text style={{color:"gray"}}>
        October 24. 2022 / Games
        </Card.Text>
      </Card.Body>
    </Card>



    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={blog3} />
      <Card.Body>
        <Card.Title>Wave of one: Dr8 & XD4 unites</Card.Title>
        <Card.Text style={{color:"gray"}}>
        October 24. 2022 / Games
        </Card.Text>
      </Card.Body>
    </Card>




    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={blog4} />
      <Card.Body>
        <Card.Title>All things can be conjoined</Card.Title>
        <Card.Text style={{color:"gray"}}>
        October 24. 2022 / Games
        </Card.Text>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={blog5} />
      <Card.Body>
        <Card.Title>The matchups for the W022/23</Card.Title>
        <Card.Text style={{color:"gray"}}>
        October 24. 2022 / Games
        </Card.Text>
      </Card.Body>
    </Card>
        </div>

        <div className="container-fluid">
          <div className="container">
            <div className="footer">
              <div className="footer-logo">

              <img src={footer} alt="" />
              </div>
              <div className="footer-nav">
              <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
              </div>
            </div>
          </div>
        </div>
       </>
    );
}

export default Home;
