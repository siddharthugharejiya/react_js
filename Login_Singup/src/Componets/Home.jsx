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

  
  <div className="free">
    <div className="free-head">
      <div className="free-img text-light"><i class="fa-solid fa-taxi"></i></div>
      <div className="free-text text-light">
      <div>Free Delivery</div>
      <div>Free shipping on all order</div>

      </div>
    </div>

    <div className="free-head">
      <div className="free-img text-light"><i class="fa-solid fa-money-bill"></i></div>
      <div className="free-text text-light">
      <div>Money Return</div>
      <div>Back Guarantee in 7 days</div>

      </div>
    </div>


    <div className="free-head">
      <div className="free-img text-light"><i class="fa-solid fa-percent"></i></div>
      <div className="free-text text-light">
      <div>Member Discount</div>
      <div>On every order over $130.00</div>

      </div>
    </div>


    <div className="free-head">
      <div className="free-img text-light"><i class="fa-solid fa-rotate-left"></i></div>
      <div className="free-text text-light">
      <div>Return Policy</div>
      <div>Support 24 hours a day</div>

      </div>
    </div>
  </div>

   <div className="bg-main text-light">
    
    <div className="bg-main-1">
      <div className="bg-main-1-text">
        <div>

        <p>Best Action Game</p>
      <p className='bold'>DEAD RISING ZOMBIES</p>
      <div className="btn text-light border border-1 p-2" style={{marginLeft:"10px"}}>Shop Now</div>
        </div>
    </div>
   </div>

   <div className="bg-main-2">
      <div className="bg-main-2-text">
        <div>

      <p>3D Pixel Racing</p>
      <p className='bold'>FAST DRVING RACCING</p>
      <div className="btn text-light border border-1 p-2" style={{marginLeft:"10px"}}>Shop Now</div>
        </div>
    </div>
   </div>
   </div>
      
    </>
  )
}

export default Home;
