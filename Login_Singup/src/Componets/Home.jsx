import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img from '../image/main-banner-1_1903x.jpg'; 
import img1 from "../image/main-banner-2_1903x.jpg";
import "../App.css";

function Home() {
  return (
   <>
    <div className="slider">
    <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Star Wars Up Coming</h3>
            <p className='display-2 mb-5'>GAME GUIDE UNOFFICIAL</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Best Shooting Game</h3>
            <p className='display-2 mb-5'>SHADOWGUN WAR GAMES</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>

      
    </>
  )
}

export default Home;
