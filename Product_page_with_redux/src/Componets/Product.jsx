// Product.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchingData } from '../Redux/action';

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
    <div>
      {
        data && data.map((el) => (  
          <div key={el.id}> 
            <h1>{el.title}</h1>
            <p>Price: {el.price}</p>
            <img src={el.image} alt={el.title} style={{ width: '100px', height: '100px' }} />
          </div>
        ))
      }
      <button className='btn btn-dark' onClick={add}>Add</button>
    </div>
  );
};

export default Product;
