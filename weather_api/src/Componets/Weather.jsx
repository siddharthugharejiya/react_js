import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import img from "./image/1680838681_pictures-pibig-info-p-risunok-veterok-krasivo-64-removebg-preview.png";
import img1 from "./image/humidity.png";
import img2 from "./image/wind.png";
import { useState, useEffect } from 'react';

function Weather() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null); 
    const [style, setStyle] = useState(false);

    useEffect(() => {
        if (city) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0fc51330036f0e688be4013d660fcd6b&units=metric`)
                .then(response => response.json())
                .then(data => {
                    setWeather(data);
                })
                .catch(error => console.error('Error fetching weather data:', error));
        }
    }, [city]);
    console.log(weather);

    return (
        <>
            <div className="main">
                <div className="main-sec">
                    <div className='d-flex justify-content-center'>
                        <input 
                            type="text" 
                            placeholder="Enter city name"
                            onChange={(e) => {
                                setCity(e.target.value);
                                setStyle(false);
                                setWeather(null);
                            }} 
                            className='form-control mt-1'
                        />
                        <button className='btn btn-primary ms-2' id='btn' onClick={() => setStyle(true)}>
                            <i className="fa-solid fa-magnifying-glass text-light"></i>
                        </button>
                    </div>
                    <div className='weathers text-center mt-4'>
                        {
                            style && weather ? (
                                <div className='weather-card'>
                                    <div className="weathers-img mb-3">
                                        <img src={img} alt="Weather icon" />
                                    </div>
                                    <div>
                                        <h1 className="display-4">{weather.main?.temp}°C</h1>
                                        <h2 className="mb-3">{weather?.name}</h2>
                                        <h3 className="text-capitalize">{weather.weather[0]?.description}</h3>
                                    </div>
                                    <div className="weather-details mt-4 d-flex justify-content-around">
                                        <div className="d-flex align-items-center">
                                            <img src={img1} alt="Humidity" className="me-2" />
                                            <div className="fs-5">{weather.main?.humidity}%</div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <img src={img2} alt="Wind Speed" className="me-2" />
                                            <div className="fs-5">{weather.wind?.speed} km/h</div>
                                        </div>
                                    </div>
                                </div>
                            ) : ( 
                                <div className='er'>

                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Weather;
