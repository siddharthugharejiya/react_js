import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetching_data from '../Redux/action';
// import { fetching_data } from "../Redux/action"; 

const Product = () => {
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state); 

  useEffect(() => {
    dispatch(fetching_data()); 
  }, [dispatch]);

  const fetchData = () => {
    console.log(data);
  }

  return (
    <div>
      <button onClick={fetchData}>Fetching_data</button>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div>
          {data && data.map((product) => (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Product;
