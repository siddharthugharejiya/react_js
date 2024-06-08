import React, { useState } from "react";
import "../App.css";

function Project() {
  const [arr, setArr] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");
  const [showData, setShowData] = useState(false);

  function add() {
    const obj = {
      name: name,
      price: price,
      description: description,
      category: category,
      quantity: quantity,
      image: image,
    };
    setArr([...arr, obj]);
  }

  console.log(arr);
  function show1() {
    setShowData(true);
  }

  return (
    <div className="main">
      <div className="sec">
        <div className="head">
          <h1>Product Details</h1>
        </div>
        <div className="box">
          <input
            type="text"
            placeholder="Product Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="box">
          <input
            type="text"
            placeholder="Product Price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="box">
          <input
            type="text"
            placeholder="Product Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="box">
          <input
            type="text"
            placeholder="Product Category"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="box">
          <input
            className="product-image"
            type="text"
            align="center"
            placeholder="Product Image URL"
            value={image} 
            onChange={(e) => setImage(e.target.value)}
          />
          <br />
        </div>
        <div className="box">
          <input
            type="number"
            placeholder="Stock Quantity"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="box">
          <button onClick={add} className="btn btn-dark">
            add product
          </button>
        </div>
        <div className="box">
          <button onClick={show1} className="btn btn-dark">
            show
          </button>
        </div>
        {showData && (
          <div className="show">
            {arr.map((el) => (
              <div className="h" >
                <p>Name: {el.name}</p>
                <p>Price: {el.price}</p>
                <p>Quantity: {el.quantity}</p> 
                <p>Image URL: {el.image}</p>
                <img src={el.image} style={{ width: "14%", height: "25vh" }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Project;
