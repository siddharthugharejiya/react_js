import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../App.css";
import "./Single.css";
import  "./Money.css"

const SinglePage = () => {
  const [state, setState] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setState(data);
      })})

  return (
    <div className='main-single'>
      <div className="image-side mt-3">
        <img
          src={state.image}
          alt="Product"
          height="300px"
          width="300px"
          className="cloud-zoom-big"
        />
      </div>

      <div className="main-single-text">
        <div className="card" id='c'>
          <div className="card-body bb">
            <p className="card-text">
              <i className="fa fa-star" style={{ color: "#FFD43B" }}></i>
              <i className="fa fa-star" style={{ color: "#FFD43B" }}></i>
              <i className="fa fa-star" style={{ color: "#FFD43B" }}></i>
              <i className="fa fa-star" style={{ color: "#FFD43B" }}></i>
            </p>
            <h5 className="mt-4">{state.title}</h5>
            <p className="card-text">{state.description}</p>
            <p className="card-text">
              <span style={{ color: "orange" }}>${state.price}</span> <span style={{ textDecoration: 'line-through' }}>${state.oldPrice}</span> <span style={{ color: 'red' }}>SAVE {state.discount}%</span>
            </p>
            <p>No Need to Wait-Plugged and connected, the white gaming mic is instantly recognized by your device. The plug-and-play USB microphone is compatible with Windows, Mac OS and PS4/5. No redundant steps like software downloads, you just start speaking away. Simple...</p>
            <p>Type: Fighting games</p>
            <p>Size: <button>S</button> <button>M</button> <button>L</button></p>
            <p>Color: <button style={{ backgroundColor: 'red', borderRadius: '50%', width: '20px', height: '20px' }}></button> <button style={{ backgroundColor: 'white', borderRadius: '50%', width: '20px', height: '20px' }}></button></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
