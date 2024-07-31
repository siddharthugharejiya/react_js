import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchingData from '../Redux/action';

const Product = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchingData());
  }, [dispatch]);

  const add = () => {
    dispatch(fetchingData());
  };

  return (
    <div>
      {data && data.length > 0 ? (
        data.map((e) => (
          <h1 key={e.id}>{e.price}</h1> 
        ))
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={add}>Fetch Data</button>
    </div>
  );
};

export default Product;
