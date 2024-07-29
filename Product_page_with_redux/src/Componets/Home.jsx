import React from 'react';
import "../App.css";
import img from "../assets/image/h1-img-1-800x913.jpg";
const Home = () => {
    return (
       <>
        <div className="container-fluid">
          <div className="main d-flex flex-sm-column flex-md-column flex-lg-row justify-content-evenly">
            <div className="col-lg-4 galary h-100">
              <img src={img} alt="" className='img-fluid' />
            </div>

            <div className="col-lg-5 h-100 text-light">
              <div className="main-text">
                <p className='game'>THE GAME</p>
                <p className='display-6 fw-bold'>SEE WHAT NEW VIDEO GAMES ARE OUT THIS MONTH & <strike>ENJOY</strike></p>
                <p style={{letterSpacing:"2px"}}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atqueSed ut perspiciatis unde omnis iste natus.</p>
                <button className='fill'>READ MORE</button>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="twitch">
            <div className="row">
              <div className="col-9">
                <div className="col-2 d-flex justify-content-center align-items-center  border border-1 border-white p-2 twi">
                  <span>TWITCH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
       </>
    );
}

export default Home;
