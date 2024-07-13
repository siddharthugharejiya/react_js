import { Link } from "react-router-dom";

function Navbar1() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"> 
          <Link to={"/"} className="nav-link">Home</Link>
          </li>
          <li class="nav-item">
                 <Link to={"/Product"} className="nav-link"></Link>
          </li>
         
          <li class="nav-item">
                 <Link to={"/Product"} className="nav-link">Product</Link>
          </li>
         
        </ul>
        
      </div>
    </div>
  </nav>
  );
}

export default Navbar1;