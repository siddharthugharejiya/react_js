import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../App.css"

const SinglePage = () => {
  const [state, setState] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setState(data);
      });

    
    const initCloudZoom = () => {
      if (window.jQuery) {
        window.jQuery('.cloud-zoom-big').CloudZoom();
      } else {
        console.error('jQuery is required for Cloud Zoom');
      }
    };


    setTimeout(() => {
      initCloudZoom();
    }, 1000);
  }, [id]);

  return (
    <div className='main-single'>
      <div className="image-side">
      <img
        src={state.image}
        alt="Product"
        height="300px"
        width="300px"
        className="cloud-zoom-big"
      />
      </div>

      <div className="main-single-text">
      <div className="card h-50 w-75">
                {/* <img
                      src={state.image}
                      alt={state.title}
                      className="card-img-top img-fluid"
                      style={{ height: "200px", objectFit: "cover", width: "100%" }}
                    /> */}
                    <div className="card-body bb">
                      <p className="card-text">
                        <i className="fa-regular fa-star" style={{ color: "#FFD43B" }}></i>
                        <i className="fa-regular fa-star" style={{ color: "#FFD43B" }}></i>
                        <i className="fa-regular fa-star" style={{ color: "#FFD43B" }}></i>
                        <i className="fa-regular fa-star" style={{ color: "#FFD43B" }}></i>
                      </p>
                      <h5 className=" mt-4">{state.title}</h5>
                      <p className="card-text">{state.description}</p>
                      <p className="card-text">
                        <span style={{ color: "orange" }}>${state.price}</span>
                      </p>
                    </div>
                  </div>
      </div>
      
    </div>
  );
};

export default SinglePage;
