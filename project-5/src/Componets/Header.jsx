import React from 'react'

function Header() {
  return (
    <div>
        <div className="main container-fluid">
        <nav class="navbar navbar-expand-lg ">
  <div class="container">
    <a class="navbar-brand" href="#"><img src={require("./Img/logo.webp")} alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link text-light fs-5" >HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light fs-5" href="#">MATCH</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link text-light fs-5" href="#">PAGES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light fs-5" href="#">BLOG</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link text-light fs-5" href="#">CONTACT</a>
        </li>
        
      </ul>
       <div className='singup p-3' >SIGN UP</div>
    </div>
  </div>
</nav>
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center ">
            <div className="col-5 col-sm-12 col-md-12 col-lg-5">
              <div className="main-text mt-3 fs-sm ">
              BEST GAME PLAYING TODAY.
              </div>
            <div className="col-12"><p className='text-light fs-3 fw-bold'>Simply text of the printing and typesetting industry.</p></div>
            <div className="col-5">
              <div className='singup p-4 mt-1'>PLAY NOW</div>
            </div>
            </div>
          <div className="col-5 col-sm-12 col-md-6 col-lg-5 main-image">
          </div>
        </div>
      </div>
        </div>
   
    </div>
  )
}

export default Header
