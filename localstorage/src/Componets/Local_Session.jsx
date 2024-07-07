import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import "../App.css";

function Local_Session() {
  const [light, setLight] = useState(sessionStorage.getItem("data") || "light");
  const [lang, setLang] = useState(localStorage.getItem("lang") || "");

  const change = (e) => {
    setLight(e.target.value);
  };

  const language = (e) => {
    setLang(e.target.value);
  };

  useEffect(() => {
    sessionStorage.setItem("data", light);
    document.body.style.backgroundColor =
      light === "light" ? "#FAF7F7" : "#343a40";
  }, [light]);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <>
      <div className="main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 d-flex justify-content-evenly align-items-center mt-3">
              <p>
                <i className="fa-brands fa-facebook text-light"></i>
              </p>
              <p>
                <i className="fa-brands fa-instagram text-light"></i>
              </p>
              <p>
                <i className="fa-brands fa-twitter text-light"></i>
              </p>
            </div>
            <div className="col-lg-7 main-logo d-flex justify-content-center align-items-center ms-5">
              <img src={require("./img/logo.png")} alt="logo" />
            </div>
            <div className="col-lg-2 d-flex justify-content-center align-items-center ms-5">
              <div className="call d-flex justify-content-center align-items-center">
                <div className="text-light">Call Us: +91 1234 5678 90</div>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <a
                    className="nav-link text-light"
                    aria-current="page"
                    href="#"
                  >
                    {lang === "Hindi"
                      ? "होम"
                      : lang === "Gujrati"
                      ? "હોમ"
                      : "HOME"}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                    {lang === "Hindi"
                      ? "केक"
                      : lang === "Gujrati"
                      ? "કેક"
                      : "CAKE"}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light">
                    {lang === "Hindi"
                      ? "ब्लॉग"
                      : lang === "Gujrati"
                      ? "બ્લોગ"
                      : "BLOG"}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <Form.Select onChange={change} value={light}>
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                    </Form.Select>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <Form.Select onChange={language} value={lang}>
                      <option value="">Select Language</option>
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                      <option value="Gujrati">Gujrati</option>
                    </Form.Select>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="row" style={{ margin: "100px 90px" }}>
            <div className="col-5 main-text ms-2 text-light">
              <h1 style={{ margin: "20px 40px" }}>
                {lang === "Hindi"
                  ? "स्वस्थ बनाया"
                  : lang === "Gujrati"
                  ? "સ્વસ્થ બનાવેલું"
                  : "Healthy Made"}
              </h1>
              <h1 style={{ margin: "0px 40px" }}>
                {lang === "Hindi"
                  ? "स्वादिष्ट केक"
                  : lang === "Gujrati"
                  ? "સ્વાદિષ્ટ કેક"
                  : "Delicious Cake"}
              </h1>
              <div
                style={{ margin: "30px 40px" }}
                className={`p-3 main-text-o col-4 d-flex justify-content-center align-items-center ${
                  light === "dark" ? "text-white" : ""
                }`}
              >
                {lang === "Hindi"
                  ? "अभी आदेश दें"
                  : lang === "Gujrati"
                  ? "હવે ઓર્ડર કરો"
                  : "ORDER NOW"}
              </div>
            </div>
          </div>
        </div>
        <div
          className="sec"
          style={{ backgroundColor: light === "light" ? "white" : "#343a40" }}
        >
          <div className="sec-1">
            <div className="text-center d-flex justify-content-center">
              <p className={`p fs-1 ${light === "dark" ? "text-white" : ""}`}>
                {lang === "Hindi"
                  ? "यह शिलर्स है। अद्भुत भोजन थीम। इसे खरीदें और बर्गर खाएं।"
                  : lang === "Gujrati"
                  ? "આ સ્કિલર્સ છે. અદ્ભુત ખોરાક થીમ. તેને ખરીદો અને બર્ગર ખાઓ."
                  : "This is Schilers. Awesome Food Theme. Purchase it and eat Burgers."}
              </p>
            </div>
          </div>
          <div className="sec-2">
            <div className="container d-flex">
              <div className="sec-2-1 p-5">
                <p id="sec-p">
                  {lang === "Hindi"
                    ? "यह शिलर्स है। बहुत बढ़िया भोजन थीम। इसे खरीदें और बर्गर खाएं।"
                    : lang === "Gujrati"
                    ? "આ સ્કિલર્સ છે. અદ્ભુત ખોરાક થીમ."
                    : "This is Schilers. Awesome Food Theme. Purchase it and eat Burgers."}
                </p>
                <p
                  style={{
                    color: light === "light" ? "black" : "white",
                  }}
                >
                  {lang === "Hindi"
                    ? "यह शिलर्स है। बहुत बढ़िया भोजन थीम। इसे खरीदें और बर्गर खाएं।\n\nलोरेम इप्सम डोलोर सिट अमेट, कंसेटेचर एडिपिसिंग एलीट, सेड डू ईयूस्मोड टेम्पोर डन यूट लेबर एट डोलोर मैग्ना अलिका। यूटी एनिम एड मिनिम वेनियम, क्विस नोस्ट्रूड एक्सरसाइज टीन उलामको लेबोरिस निसी यूटी एलिक्विप एक्स ईए कमोडो कॉन्सक्वेट। डुइस अउते डोलर इन रेप्रेहेन डेरिट इन वोलुप्टेट वेलिट एस्से सिलम।"
                    : lang === "Gujrati"
                    ? "આ સ્કિલર્સ છે. અદ્ભુત ખોરાક થીમ. તેને ખરીદો અને બર્ગર ખાઓ.\n\nલોરેમ ઇપ્સમ ડોલર સીટ એમેટ, કન્સેક્ટેટર એડિપિસિંગ એલિટ, સેડ ડુ ઇયુસ્મોડ ટેમ્પોર ડુન યુટ લેબોર એટ ડોલોર મેગ્ના અલિકા. યુટી એનિમ એડ મિનિમ વેનિયમ, ક્વિસ નોસટ્રૂડ એક્સરસાઇઝ ટીન ઉલામકો લેબોરિસ નિસી યુટી એલિક્વિપ એક્સ ઈએ કોમોડો કોન્સેક્વેટ. ડ્યુઇસ અઉતે ડોલોર ઇન રેપરીહેન ડેરિટ ઇન વોલુપ્ટેટ વેલિટ એસ્સે સિલ્લમ."
                    : "This is Schilers.  Awesome Food Theme. Purchase it and eat Burgers.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."}
                </p>
              </div>
              <div className="sec-2-2"></div>
            </div>
          </div>
        </div>
        <div className="video">
          <div className="container">
            <div className="video-sec">
              <div className="video-sec-1">
                <i className="fa-solid fa-play"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <a className="navbar-brand" href="#">
                <img src={require("./img/logo.png")} alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <a
                      className={`nav-link fs-5 ${
                        light === "dark" ? "text-white" : ""
                      }`}
                    >
                      HOME
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link fs-5 ms-3 ${
                        light === "dark" ? "text-white" : ""
                      }`}
                      href="#"
                    >
                      CAKES
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link fs-5 ms-3 ${
                        light === "dark" ? "text-white" : ""
                      }`}
                      href="#"
                    >
                      ABOUT
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link fs-5 ms-3 ${
                        light === "dark" ? "text-white" : "black"
                      }`}
                    >
                      BLOG
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className={`nav-link  fs-5 ms-3 ${
                        light === "dark" ? "text-white" : "black"
                      }`}
                    >
                      CONTACT
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="footer-1 row justify-content-evenly align-items-center">
            <div className="col-5">
              <p
                style={{
                  color: light === "light" ? "black" : "white",
                }}
              >
                {lang === "Hindi"
                  ? "प्रशिक्षण पाठ्यक्रम प्राप्त करना संभव होगा, लेकिन मैं काम करने के लिए इतना समय और कुछ बड़े कष्ट दूंगा। चूँकि मैं सबसे छोटी बात पर आना चाहता हूँ, किसी को भी किसी भी प्रकार का कार्य तब तक नहीं करना चाहिए जब तक कि उसे उससे कुछ लाभ न प्राप्त हो।"
                  : lang === "Gujrati"
                  ? "વિદ્યાર્થી માટે શિક્ષિત થવું શક્ય છે, પરંતુ હું તેને એક મહાન પ્રયાસ અને પીડા જેવો સમય આપું છું. હું સૌથી નાની વિગત પર આવું છું, કોઈ પણ વ્યક્તિએ કોઈપણ પ્રકારનું કામ કરવું જોઈએ નહીં સિવાય કે તે તેનાથી થોડો ફાયદો મેળવે."
                  : "Consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat."}
              </p>
              <div className="row d-flex justify-content-around align-items-center">
                <div className="col-3">
                  <div
                    className="row"
                    style={{ border: "1px solid ", padding: "10px" }}
                  >
                    <div className="col-2 d-flex justidy-content-center align-items-center">
                      <i className="fa-brands fa-instagram text-light"></i>
                    </div>
                    <div className="col-6 d-flex justidy-content-center align-items-center">
                      <span
                        style={{
                          color: light === "light" ? "black" : "white",
                        }}
                      >
                        {lang === "Hindi"
                          ? "इंस्टाग्राम"
                          : lang === "Gujrati"
                          ? "ઇન્સ્ટાગ્રામ"
                          : "Instagram"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-3">
                  <div
                    className="row"
                    style={{ border: "1px solid ", padding: "10px" }}
                  >
                    <div className="col-2 d-flex justidy-content-center align-items-center">
                      <i className="fa-brands fa-facebook text-light"></i>
                    </div>
                    <div className="col-6 d-flex justidy-content-center align-items-center">
                      <span
                        style={{
                          color: light === "light" ? "black" : "white",
                        }}
                      >
                        {lang === "Hindi"
                          ? "फेसबुक"
                          : lang === "Gujrati"
                          ? "ફેસબુક"
                          : "Facebook"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-3 ">
                  <div
                    className="row"
                    style={{ border: "1px solid ", padding: "10px" }}
                  >
                    <div className="col-2 d-flex justidy-content-center align-items-center">
                      <i className="fa-brands fa-twitter text-light"></i>
                    </div>
                    <div className="col-6 d-flex justidy-content-center align-items-center">
                      <span
                        style={{
                          color: light === "light" ? "black" : "white",
                        }}
                      >
                        {lang === "Hindi"
                          ? "ट्विटर"
                          : lang === "Gujrati"
                          ? "ટ્વિટર"
                          : "Twitter"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-3 ">
              <div className="icon">
                <i
                  className="fa-solid fa-location-arrow"
                  style={{ color: "#FFD43B;" }}
                ></i>
              </div>
              <div className="col-12">
                <span className="icon">
                  {lang === "Hindi"
                    ? "स्थान"
                    : lang === "Gujrati"
                    ? "સ્થાન"
                    : "Location"}
                </span>
              </div>
              <div className="col-5">
                <span
                  style={{
                    color: light === "light" ? "black" : "white",
                  }}
                >
                  4736 Poe Lane, HOT SPRINGS, Montana-59845
                </span>
              </div>
            </div>

            <div className="col-3 text-light">
              <div className="icon mb-1">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="col-12">
                <span className="icon">
                  {lang === "Hindi"
                    ? "स्थान"
                    : lang === "Gujrati"
                    ? "સ્થાન"
                    : "Contact"}
                </span>
              </div>
              <div className="col-5 mb-5">
                <span
                  style={{
                    color: light === "light" ? "black" : "white",
                  }}
                >
                913-473-7000
                </span>
              </div>
            </div>
          </div>
          <p
            className="text-center mt-1"
            style={{
              color: light === "light" ? "black" : "white",
            }}
          >
            Copyright ©2024 All rights reserved | This template is made by
            Siddharth ugharejiya
          </p>
        </div>
      </div>
    </>
    
  );
}

export default Local_Session;
