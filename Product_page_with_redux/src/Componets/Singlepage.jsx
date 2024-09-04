import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Singlepage_action } from '../Redux/action';
import './singlepage.css';

const Singlepage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const singlePageData = useSelector((state) => state.singlePage.singlePageData);

  useEffect(() => {
    if (id) {
      dispatch(Singlepage_action(id));
    }
  }, [dispatch, id]);

  const add_cart = () => {
    const cartData = {
      id: singlePageData.id,
      title: singlePageData.title,
      price: singlePageData.price,
      quantity: 1,  
    };

    fetch(`https://mock-server-rea1.onrender.com/cart`, {  
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log("Item added to cart:", data);
    })
    .catch(error => {
      console.error("Error adding item to cart:", error.message);
    });
  };

  return (
    <div className="singlepage-container">
      <div className="image-section">
        <img src={singlePageData.image} alt={singlePageData.title} className="product-image" />
      </div>

      <div className="details-section">
        <div className="card">
          <div className="card-body">
            <div className="rating">
              {[...Array(5)].map((_, index) => (
                <i
                  key={index}
                  className="fa fa-star"
                  style={{ color: singlePageData.rating?.rate >= index + 1 ? "#FFD43B" : "#ddd" }}
                ></i>
              ))}
            </div>
            <h2 className="product-title">{singlePageData.title}</h2>
            <p className="product-description">{singlePageData.description}</p>
            <p className="pricing">
              <span className="current-price">${singlePageData.price}</span>
              <span className="old-price">${singlePageData.oldPrice}</span>
              <span className="discount">SAVE {singlePageData.discount}%</span>
            </p>
            <p className="additional-info">
              No Need to Wait-Plugged and connected, the white gaming mic is instantly recognized by your device. The plug-and-play USB microphone is compatible with Windows, Mac OS, and PS4/5. No redundant steps like software downloads, you just start speaking away. Simple...
            </p>
            <p className="product-category">Category: {singlePageData.category}</p>
            <div>
              <button onClick={add_cart}>ADD_cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singlepage;
