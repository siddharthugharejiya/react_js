import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Cart_items } from '../Redux/action';

const Cart = () => {

  const dispatch=useDispatch()
  const cart = useSelector(state=> state.cart)
  console.log(cart);
   useEffect(()=>{

     dispatch(Cart_items())
   },[dispatch])

  const submit = () =>{
  }
    return (
        <>
        {cart && cart.length > 0 ? (
        cart.map((el, index) => (
          <h1 key={index}>{el}</h1> 
        ))
      ) : (
        <p>No items in the cart</p>
      )}
        <button onClick={submit}>add_cart</button>
        </>
    );
}

export default Cart;
