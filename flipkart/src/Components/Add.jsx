import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css'; 
import Navbar1 from './Navbar_1';
import Footerd from './Footerd';

const Add = () => {
    const location = useLocation();
    const { product } = location.state || {}; 
    const nav=useNavigate()

    if (!product) {
        return <div>No product data available</div>;
    }

    const submit = () =>{
      nav("/")
      
    }

    return (
        <>
        <Navbar1/>
        <div className="product-container">
            <div className="product-details">
                <div className="product-info">
                    <h1 className="product-title">{product.title}</h1>
                    <p className="product-description">{product.description}</p>
                    <img className="product-image" src={product.image} alt={product.title} />
                </div>
                <div className="price-section">
                    <div className="price-box">
                        <p className="price">₹{product.price}</p>
                        <p className="discounted-price">Discounted Price: ₹{Math.floor(product.price * 0.8)}</p>
                        <p className="delivery-info">Delivery by: <strong>Sun Sep 22</strong> | Free</p>
                        <p className="offer">1 Offer Applied</p>
                    </div>
                    <div className="total-box">
                        <p className="price-breakdown">Price: ₹{product.price}</p>
                        <p className="discount">Discount: ₹{Math.floor(product.price * 0.2)}</p>
                        <p className="delivery">Delivery: Free</p>
                        <p className="total-amount">Total Amount: ₹{Math.floor(product.price * 0.8)}</p>
                        <p className="savings">You will save ₹{Math.floor(product.price * 0.2)} on this order</p>
                    </div>

                    <button className='btn btn-danger' onClick={submit}>Check Out</button>
                </div>
            </div>
        </div>
        <Footerd/>
        </>
        
    );
};

export default Add;
