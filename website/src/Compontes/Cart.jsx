import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { cart_action } from '../Redux/action';

const Product = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart.data);
    console.log(products);

    const [state,setstate]=useState()
    

    useEffect(() => {
        dispatch(cart_action(state));
    }, [dispatch]);

    return (
        <div>
            <h2>Products</h2>
            {products && products.length > 0 ? (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No products available</p>
            )}
        </div>
    );
};

export default Product;
