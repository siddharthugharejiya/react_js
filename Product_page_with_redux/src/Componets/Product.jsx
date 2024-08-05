import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchingData } from '../Redux/action';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "../App.css"
// import './Product.css'; // Create a CSS file for custom styles

const Product = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);

  useEffect(() => {
    dispatch(fetchingData());
  }, [dispatch]);

  const add = () => {
    console.log(data);
  };

  return (
    <div className="container mt-4">
      <Row>
        {data && data.map((el) => (
          <Col key={el.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="product-card h-100">
              <Card.Img variant="top" src={el.image} className="product-image" />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{el.title}</Card.Title>
                <Card.Text className="mt-auto">${el.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {/* <Button variant="dark" onClick={add}>Add</Button> */}
    </div>
  );
};

export default Product;
