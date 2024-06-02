// import h from "public\img\h.webp"
import img from "../src/img/hero-1.jpg.webp";
function Portfolio() {

  var stake="FULLSTACK WEBDEVLOPER"
  let name ="sidhdhdarth ugharejiya"
  return (
    <div className="main_in_port">
      <div className="main-portfolio">
        <div
          style={{
            width: "100%",
            // height: "200px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <header>
            <div className="logo">
              <img src={require("./img/logo.png.webp")} alt="" />
            </div>
            <nav>
              <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>PORTFOLIO</li>
                <li>SERVICES</li>
                <li>PAGES</li>
                <li>CONTACT</li>
              </ul>
            </nav>
          </header>
          <div className="menu">
            <div className="menu-h">
              <p style={{ color: "white" }}>MENU</p>
            </div>
          </div>

          <div className="aside">
            <aside>
              <p>FOR WEBSITE AND VIDEO EDITING</p>
              <p style={{ fontSize: "40px", fontWeight: "700" }}>
                {stake} <br />
                {name} <br />
                PORTFOLIO
              </p>

              <div class="box">
                <p>SEE MORE ABOUT US</p>
              </div>
            </aside>
          </div>

          <div className="sec">
            <div className="sec-1">
              <div className="sec-1-1">
                <h3 style={{ margin: "20px" }}>OUR SERVICES</h3>
                <p className="what">WHAT WE DO ?</p>
                <p style={{ margin: "20px" }}>
                  If you hire a videographer of our team you will get a video
                  professional to make a custom video for your business and,
                  once the project is over.
                </p>
                <div class="box " style={{margin:"0px 20px"}}>
                <p>VIEW ALL SEVICES</p>
              </div>
              </div>
            </div>

            <div className="sec-2">
              <div class="card">
               <div className="card-img">
                <img class="card-img-top" src={require("./img/si-1.png.webp")} alt="Title" />
               </div>
                <div class="card-body">
                  <h4 class="card-title" style={{margin:"10px 0px"}}>Motion graphics</h4>
                  <p class="card-text">Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.</p>
                </div>
              </div>

              <div class="card">
               <div className="card-img">
                <img class="card-img-top" src={require("./img/si-2.png.webp")} alt="Title" />
               </div>
                <div class="card-body">
                  <h4 class="card-title" style={{margin:"10px 0px"}}>Scriptwriting and editing</h4>
                  <p class="card-text">Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.</p>
                </div>
              </div>


              <div class="card">
               <div className="card-img">
                <img class="card-img-top" src={require("./img/si-3.png.webp")} alt="Title" />
               </div>
                <div class="card-body">
                  <h4 class="card-title" style={{margin:"10px 0px"}}>Video distribution</h4>
                  <p class="card-text">Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.</p>
                </div>
              </div>


              <div class="card">
               <div className="card-img">
                <img class="card-img-top" src={require("./img/si-4.png.webp")} alt="Title" />
               </div>
                <div class="card-body">
                  <h4 class="card-title" style={{margin:"10px 0px"}}>Video hosting</h4>
                  <p class="card-text">Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
