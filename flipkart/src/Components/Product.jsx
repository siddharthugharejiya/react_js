import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Col, Row, Container } from 'react-bootstrap';
import Navbar1 from './Navbar_1';
import Card from 'react-bootstrap/Card';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
const Product = () => {
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(''); // Added state for selected image
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://mock-server-rea1.onrender.com/product/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setProduct(res);
        setSelectedImage(res.image); // Set initial selected image
        fetch(`https://mock-server-rea1.onrender.com/product?category=${res.category}`)
          .then((response) => response.json())
          .then((allProducts) => {
            setSimilarProducts(allProducts);
            console.log('Filtered Similar Products:', allProducts);
          });
      });
  }, [id]);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    const cartItem = {
      product: product,
      quantity: quantity,
    };
    Swal.fire({
      title: "Good job!",
      text: "Success full add data",
      icon: "success"
    });
    // alert(`Successfully added ${quantity} item(s) to cart`);
    navigate("/add", { state: cartItem });
  };

  return (
    <div>
      <Navbar1 />
      <Container className="my-5 product-container">
        {product ? (
          <Row className="product-details">
            <Col md={6} className="image-section">
              <div className="image-gallery">
                {product.images?.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`product-thumbnail-${idx}`}
                    className={`thumbnail ${selectedImage === img ? 'selected' : ''}`}
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
              <div className="main-image">
                <img
                  src={selectedImage} 
                  alt="Selected Product"
                  className="product-image img-fluid"
                />
              </div>
            </Col>

            <Col md={6} className="details-section">
              <h2 className="product-title">{product.title}</h2>
              <p className="product-rating">⭐ 4.6 (49 Ratings & 6 Reviews)</p>
              <div className="product-price-section">
                <span className="product-price">₹{product.price}</span>
                <span className="original-price">₹{product.originalPrice}</span>
                <span className="discount-percentage">37% off</span>
              </div>

              <div className="offers-section">
                <p><strong>Available Offers</strong></p>
                <ul>
                  <li>Special Price: Get extra 10% off (price inclusive of cashback/coupon)</li>
                  <li>Bank Offer: 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</li>
                  <li>Bank Offer: 10% off up to ₹1,500 on IDFC FIRST Bank Credit EMI Transactions</li>
                  <li>Bank Offer: Flat ₹1,000 off on OneCard Credit Card EMI Transactions</li>
                </ul>
              </div>

              <div className="quantity-section">
                <Button variant="secondary m-3" onClick={handleDecrement}>-</Button>
                <span className="quantity-value">{quantity}</span>
                <Button variant="secondary m-3" onClick={handleIncrement}>+</Button>
              </div>

              <div className="action-buttons">
                <Button variant="warning" className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</Button>
                <Button variant="danger" className="buy-now-btn">Buy Now</Button>
              </div>

              <div className="delivery-section">
                <p>Delivery by 21 Sep, Saturday | Free</p>
                <p>Installation & Demo by 20 Sep, Friday | ₹499</p>
              </div>
            </Col>
          </Row>
        ) : (
          <p>Loading...</p>
        )}
      </Container>
      <Container className="my-5">
  <h3 className="text-center mb-4">Similar Products</h3>
  <Row>
    {similarProducts.map((el, idx) => (
          <Card style={{ width: '18rem' ,margin:"10px"}} key={el.id}>
          <Card.Img variant="top" src={el.image} id='m' />
          <Card.Body id='ss'>
              <Card.Title>{el.title}</Card.Title>
              <Card.Text style={{ background: "#388e3c" }} id='cc'>
                  {el.rating.rate} <i className="fa-solid fa-star"></i>
              </Card.Text>
              <Card.Text>
                  <i className="fa-solid fa-indian-rupee-sign"></i> {el.price}
              </Card.Text>
          </Card.Body>
      </Card>
    ))}
  </Row>
</Container>

    </div>
  );
};

export default Product;
