import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { product_action } from '../Redux/action';

const Product = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.product.data);

    useEffect(() => {
        dispatch(product_action());
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