import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { single_action } from '../Redux/action'
import { useParams } from 'react-router-dom';

export default function Singlepage() {
  const {id} =useParams()
  const dispatch = useDispatch();
  const product = useSelector((state) => state.single.data);

  useEffect(() => {
      dispatch(single_action(id));
  }, [dispatch, id]);

  if (!product) {
      return <div>Loading...</div>;
  }

  return (
    <div>
    <h1>Product Details</h1>
    <p>ID: {product.id}</p>
    <p>Description: {product.description}</p>
    {/* Render other product details as needed */}
</div>
  )
}
