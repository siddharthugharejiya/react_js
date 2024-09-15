import React from 'react';
import Navbar1 from './Navbar_1';
import { Button, Container, Row, Col } from 'react-bootstrap';

import "../App.css"
import { useParams ,useLocation } from 'react-router-dom';

const Add = () => {
  const location = useLocation();
  console.log(location);
  
  const { product, quantity } = location.state || {}; 
    return (
        <div>
            <Navbar1/>
            <Container className="my-5">
      {product ? (
        <Row>
          <Col md={6}>
            <img src={product.image} alt={product.title} className="img-fluid" />
          </Col>
          <Col md={6}>
            <h2>{product.title}</h2>
            <p>Price: ₹{product.price}</p>
            <p>Quantity: {quantity}</p>
            <Button variant="danger">Proceed to Checkout</Button>
          </Col>
        </Row>
      ) : (
        <p>No items in the cart.</p>
      )}
    </Container>
        </div>
    );
}

export default Add;
