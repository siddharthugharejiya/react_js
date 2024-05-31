import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
         <header>
        <a href="#" class="logo">Foods</a>
        <div class="bx bx-menu" id="menu-icon"></div>
        <ul class="navbar">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>services</li>
            <li>Contact</li>
 </ul>
    </header>
    
    <section class="home" id="home">
        <div class="home-text">
            <h1>Full Website</h1>
            <h2>Food the <br/> most precious things </h2>
            <a href="#" class="btn">Today's menu</a>
        </div>
        <div class="home-img">
            <img src="img/home.png" alt=""/>

        </div>

    </section>


    <section class="about" id="about">

        <div class="about-img">
            <img src="img/about.png" alt=""/>
        </div>
        <div class="about-text">
            <span>About us</span>
            <h2>we speak the good <br/> food language</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem libero magnam voluptatibus nam doloremque
                praesentium, dolore eum exercitationem quia iusto aperiam sed perspiciatis officiis vero dolorem culpa
                quisquam ex explicabo.</p>
            {/* <a href="#" class="btn">Learn More</a> */}
        </div>
    </section>
    <section class="menu" id="menu">
        <div class="heading">
            <span>Food Menu</span>
            <h2> Fresh taste and great price </h2>
        </div>
        <div class="menu-container">
            <div class="box">
                <div class="box-img">
                    <img src="img/food1.png" alt=""/>
                </div>
                <h2>Chicken Burger </h2>
                <h3>Tasty Food</h3>
                <span>$99.99</span>
                <i class='bx bx-cart'></i>
            </div>

            <div class="box">
                <div class="box-img">
                    <img src="img/food2.png" alt=""/>
                </div>
                <h2>Special Beef Burger </h2>
                <h3>Tasty Food</h3>
                <span>$99.99</span>
                <i class='bx bx-cart'></i>
            </div>


            <div class="box">
                <div class="box-img">
                    <img src="img/food3.png" alt=""/>
                </div>
                <h2>Chicken Fry </h2>
                <h3>Tasty Food</h3>
                <span>$99.99</span>
                <i class='bx bx-cart'></i>
            </div>
        </div>
    </section>
    </div>
  );
}

export default App;
