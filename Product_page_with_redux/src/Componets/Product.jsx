import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchingData from '../Redux/action';

const Product = () => {
  const dispatch = useDispatch();
  const {data} = useSelector((state) => state);
  
  
  
  useEffect(() => {
    dispatch(fetchingData()); 
  }, [dispatch]);
  const add=()=>{
 }

  return (
    <div>
      {
        data.map((e)=>(
          <h1>{e.price}</h1>
        ))
      }
      <button onClick={add}>Fetch_Data</button>
    </div>
  );
}

export default Product;
