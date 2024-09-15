import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../App.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Navbar1 from './Navbar_1';
import { CardBody, CardText } from 'react-bootstrap';

const Singlepage = () => {
    const [state, setState] = useState(null); 
    const [finaldata, setFinalData] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        fetch(`https://mock-server-rea1.onrender.com/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setState(data);
                return fetch(`https://mock-server-rea1.onrender.com/product?category=${data.category}`);
            })
            .then(res => res.json())
            .then(setFinalData)
            .catch(error => console.error("Error fetching data:", error));
    }, [id]); 

    if (!state) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="container-fluid">
            <Navbar1/>
            <div className="d-flex">
            <div className="aside">

            </div>
            <div className="left">
            {finaldata.length > 0 ? (
                finaldata.map((el) => (
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={el.image} id='m' />
                    <Card.Body id='ss'>
                      <Card.Title>{el.title}</Card.Title>
                      <Card.Text style={{background:"#388e3c"}} id='cc'>
                         {el.rating.rate} <i class="fa-solid fa-star"></i>
                      </Card.Text>
                      <Card.Text>

                      <i class="fa-solid fa-indian-rupee-sign"></i> {el.price}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))
            ) : (
                <div>No related products found.</div>
            )}
            </div>
            </div>
            </div>
        </div>
    );
};

export default Singlepage;
