import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';
import "../App.css";

const Product = () => {
  const userCollection = collection(db, "products");
  const [arr, setArr] = useState([]);
  const [filteredArr, setFilteredArr] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [sortOption, setSortOption] = useState(""); 

  const get = async () => {
    const d = await getDocs(userCollection);
    const data = d.docs.map((el) => ({
      id: el.id,
      ...el.data()
    }));
    setArr(data);
    setFilteredArr(data); 
  };

  useEffect(() => {
    get();
  }, []);

  const filterAndSortProducts = () => {
    let filtered = [...arr]; 

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterCategory) {
      filtered = filtered.filter((product) => product.category === filterCategory);
    }


    if (sortOption === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredArr(filtered);
  };


  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  
  const handleFilter = (e) => {
    setFilterCategory(e.target.value);
  };

  const handleSort = (e) => {
    setSortOption(e.target.value);
  };

  useEffect(() => {
    filterAndSortProducts();
  }, [searchTerm, filterCategory, sortOption, arr]);

  return (
    <>
      <div className="filters">
        
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
        />

   
        <select onChange={handleFilter} value={filterCategory}>
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Furniture">Furniture</option>
        </select>

       
        <select onChange={handleSort} value={sortOption}>
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      <div className="main-1">
        {filteredArr.length > 0 ? (
          filteredArr.map((el) => (
            <div key={el.id} className="product-item">
              <img src={el.imageUrl} alt={el.name} />
              <div>Name: {el.name}</div>
              <div>Price: ${el.price}</div>
              <div>Category: {el.category}</div>
            </div>
          ))
        ) : (
          <div>No products found</div>
        )}
      </div>
    </>
  );
};

export default Product;
