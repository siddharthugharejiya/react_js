import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "../App.css";

import Card from 'react-bootstrap/Card';
import Navbar1 from './Navbar_1';
import { CardBody, CardText } from 'react-bootstrap';


const Singlepage = () => {
    const [state, setState] = useState(null);
    const [finaldata, setFinalData] = useState([]);
    const [filteredData, setFilteredData] = useState([]); 
    const [brands, setBrands] = useState([]); 
    const [searchTerm, setSearchTerm] = useState(""); 
    const [sortType, setSortType] = useState("none");
    const [selectedRating, setSelectedRating] = useState(0);
    const [priceRange, setPriceRange] = useState([0, 5000]);
    const { id } = useParams();
    const navigate = useNavigate(); 

    useEffect(() => {
        fetch(`https://mock-server-rea1.onrender.com/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setState(data);
                return fetch(`https://mock-server-rea1.onrender.com/product?category=${data.category}`);
            })
            .then(res => res.json())
            .then((data) => {
                setFinalData(data);
                setFilteredData(data); 
            })
            .catch(error => console.error("Error fetching data:", error));
    }, [id]);

    useEffect(() => {
        applyFilters(); 
    }, [brands, searchTerm, sortType, selectedRating, priceRange]);

    const applyFilters = () => {
        let tempData = finaldata;
        
        if (brands.length > 0) {
            tempData = tempData.filter(product => brands.includes(product.brand));
        }
        if (selectedRating > 0) {
            tempData = tempData.filter(product => product.rating.rate >= selectedRating);
        }
        tempData = tempData.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1]);

        if (searchTerm) {
            tempData = tempData.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
        }

        if (sortType === "priceLowToHigh") {
            tempData = tempData.sort((a, b) => a.price - b.price);
        } else if (sortType === "priceHighToLow") {
            tempData = tempData.sort((a, b) => b.price - a.price);
        } else if (sortType === "ratingHighToLow") {
            tempData = tempData.sort((a, b) => b.rating.rate - a.rating.rate);
        }

        setFilteredData(tempData);
    };

    const BrandChange = (brand) => {
        if (brands.includes(brand)) {
            setBrands(brands.filter(b => b !== brand));
        } else {
            setBrands([...brands, brand]);
        }
    };

    if (!state) {
        return <div>Loading...</div>;
    }

    const change = (id) => {
        const selectedProduct = finaldata.find(product => product.id === id);
        navigate(`/product/${id}`, { state: { product: selectedProduct } });
    };
    

    return (
        <div>
            <div className="container-fluid">
                <Navbar1 />
                <div className="d-flex">
                    <div className="aside" style={{borderRadius:"10px",margin:"10px 0"}}>
                       
                        <div className="filter-section">
                            <h5>PRICE</h5>
                            <div className="price-range">
                                <input
                                    type="range"
                                    min="0"
                                    max="5000"
                                    value={priceRange[1]}
                                    onChange={(e) => setPriceRange([0, e.target.value])}
                                />
                                <div>
                                    ₹{priceRange[0]} to ₹{priceRange[1]}
                                </div>
                            </div>
                        </div>

                        <div className="brand-section">
                            <h5>BRAND</h5>
                            <input
                                type="text"
                                placeholder="Search Product"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <ul>
                                <li><input type="checkbox" onChange={() => BrandChange("Home & Kitchen")} /> Home & Kitchen</li>
                                <li><input type="checkbox" onChange={() => BrandChange("gaming")} /> Gaming</li>
                                <li><input type="checkbox" onChange={() => BrandChange("electronics")} /> Electronics</li>
                                <li><input type="checkbox" onChange={() => BrandChange("furniture")} /> Furniture</li>
                                <li><input type="checkbox" onChange={() => BrandChange("HOUSE OF COMMON")} /> HOUSE OF COMMON</li>
                                <li><input type="checkbox" onChange={() => BrandChange("Headphones")} /> Headphones</li>
                            </ul>
                        </div>

                        <div className="sort-section">
                            <h5>SORT BY</h5>
                            <select onChange={(e) => setSortType(e.target.value)}>
                                <option value="none">None</option>
                                <option value="priceLowToHigh">Price: Low to High</option>
                                <option value="priceHighToLow">Price: High to Low</option>
                                <option value="ratingHighToLow">Rating: High to Low</option>
                            </select>
                        </div>

                        <div className="rating-section">
                            <h5>CUSTOMER RATINGS</h5>
                            <ul>
                                <li><input type="checkbox" name="rating" onChange={() => setSelectedRating(4)} /> 4★ & above</li>
                                <li><input type="checkbox" name="rating" onChange={() => setSelectedRating(3)} /> 3★ & above</li>
                                <li><input type="checkbox" name="rating" onChange={() => setSelectedRating(2)} /> 2★ & above</li>
                                <li><input type="checkbox" name="rating" onChange={() => setSelectedRating(1)} /> 1★ & above</li>
                            </ul>
                        </div>
                    </div>

                    <div className="left">
                        {filteredData.length > 0 ? (
                            filteredData.map((el) => (
                                <Card style={{ width: '18rem' ,margin:"5px"}} key={el.id} onClick={() => change(el.id)}>
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
