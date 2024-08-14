import React from 'react';

function Header() {
  return (
    <div>
      <div className="main container-fluid">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#"><img src={require("./Img/logo.webp")} alt="BonX Gaming Logo" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link text-light fs-5">HOME</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light fs-5" href="#">MATCH</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light fs-5" href="#">PAGES</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light fs-5" href="#">BLOG</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light fs-5" href="#">CONTACT</a>
                </li>
              </ul>
              <div className="singup p-3">SIGN UP</div>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center">
            <div className="col-5 col-sm-12 col-md-12 col-lg-5">
              <div className="main-text mt-3 fs-sm">
                BEST GAME PLAYING TODAY.
              </div>
              <div className="col-12">
                <p className="text-light fs-3 fw-bold">Simply text of the printing and typesetting industry.</p>
              </div>
              <div className="col-5">
                <div className="singup p-4 mt-1">PLAY NOW</div>
              </div>
            </div>
            <div className="col-5 col-sm-12 col-md-6 col-lg-5 main-image"></div>
          </div>
        </div>
      </div>
      <div className="container text-light">
        <div className="row d-flex justify-content-center align-items-center p-5">
          <div className="col-lg-8 d-flex justify-content-center align-items-center" style={{ textAlign: "center" }}>
            <h1 className="display-3">YOU ARE MOST WELCOME IN GAMING WORLD.</h1>
          </div>
        </div>
      </div>
      <div className="container">
      <div className="row text-light justify-content-evenly align-items-center ">
        <div className="col-3">
          <div className="card text-center" style={{ width: "22rem", background:`url(${require("./Img/gaming-world-bg1.webp")})`}}>
           <img src={require("./Img/gaming-world1.webp")} alt="" className='card-img-top' />
            <div className="card-body text-light text-center">
              <h5 className="card-title mt-4 fs-3">Live Streaming</h5>
              <p className="card-text">When unknown printer took type and scrambled it to make type specimen book centuries</p>
            </div>
          </div>
        </div>


        <div className="col-3">
          <div className="card text-center" style={{ width: "22rem", background:`url(${require("./Img/gaming-world-bg1.webp")})`}}>
           <img src={require("./Img/gaming-world2.webp")} alt="" className='card-img-top' />
            <div className="card-body text-light text-center">
              <h5 className="card-title mt-4 fs-3">Game News</h5>
              <p className="card-text">When unknown printer took type and scrambled it to make type specimen book centuries</p>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="card text-center" style={{ width: "22rem", background:`url(${require("./Img/gaming-world-bg1.webp")})`}}>
           <img src={require("./Img/gaming-world3.webp")} alt="" className='card-img-top' />
            <div className="card-body text-light text-center">
              <h5 className="card-title mt-4 fs-3">Game Tournaments</h5>
              <p className="card-text">When unknown printer took type and scrambled it to make type specimen book centuries</p>
            </div>
          </div>
        </div>


      </div>
      </div>
  
    </div>
  );
}

export default Header;
