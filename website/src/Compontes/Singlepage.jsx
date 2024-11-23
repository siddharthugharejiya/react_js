import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { single_action } from '../Redux/action'
import { useParams } from 'react-router-dom';

export default function Singlepage() {
  const { id } = useParams()
  const dispatch = useDispatch();
  const product = useSelector((state) => state.single.data);

  useEffect(() => {
    dispatch(single_action(id));
  }, [dispatch, id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
   <>
   <div className='d-flex justify-content-between align-items-center' style={{backgroundColor:"rgb(228 242 237 / 1)",padding:"25px"}}>
    <div className="col-xl-2 text-center " style={{fontWeight:"700",fontSize:"20px"}}>
    Product
    </div>
    <div className="col-xl-5 text-center">
    Home - Product
    </div>
   </div>

   <div className="col-xxl-12">
      
   </div>
   </>
  )
}
