import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchingData } from '../Redux/action';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "../App.css";

const Product = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    gaming: false,
    electronics: false,
    furniture: false,
  });
  const [sortOrder, setSortOrder] = useState('ASC');

  const data = useSelector((state) => state.data.data);

  useEffect(() => {
    dispatch(fetchingData());
  }, [dispatch]);

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  // Handle sort order change
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Apply filters, sorting, and searching
  const filteredData = data
    .filter((item) => {
      if (searchQuery && !item.title.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      if (Object.values(selectedFilters).some((isChecked) => isChecked)) {
        return selectedFilters[item.category] || false;
      }
      return true;
    })
    .sort((a, b) => {
      if (sortOrder === 'ASC') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

  return (
    <>
      <div className="container">
        <form className="form-container text-light">
          <div className="form-group">
            <label>
              <input type="checkbox" name="gaming" checked={selectedFilters.gaming} onChange={handleFilterChange} />
              <span className="text-light">Gaming</span>
            </label>
            <label>
              <input type="checkbox" name="electronics" checked={selectedFilters.electronics} onChange={handleFilterChange} />
              <span className="text-light">Electronics</span>
            </label>
            <label>
              <input type="checkbox" name="furniture" checked={selectedFilters.furniture} onChange={handleFilterChange} />
              <span className="text-light">Furniture</span>
            </label>
          </div>
         
          <div className="form-group ms-3">
            <input type="text" className="form-search" placeholder="Search..." value={searchQuery} onChange={handleSearchChange} />
          </div>
          <div className="form-group ms-1">
            {/* <label>Sort by price</label> */}
            <select className="form-select" value={sortOrder} onChange={handleSortChange}>
              <option value="ASC">Low to High</option>
              <option value="DESC">High to Low</option>
            </select>
          </div>
        </form>
      </div>

      <div className="container mt-4 text-light">
        <Row>
          {filteredData.length > 0 ? (
            filteredData.map((el) => (
              <Col key={el.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <Card className="product-card h-100">
                  <Card.Img variant="top" src={el.image} className="product-image" />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{el.title}</Card.Title>
                    <Card.Text className="mt-auto">${el.price}</Card.Text>
                    {/* <Button variant="primary" onClick={add}>Add to Cart</Button> */}
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>No products found...</p>
          )}
        </Row>
      </div>
    </>
  );
};

export default Product;
