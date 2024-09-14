import React, { useEffect, useState } from 'react';

const Product = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        fetch(`https://mock-server-rea1.onrender.com/product`)
            .then(res => res.json())
            .then(res => {
                setState(res);
                  console.log(res)
            })
            .catch(err => console.error(err)); 
    }, []);

    return (
        <div>
            <h1>Product</h1>
            {state.map((el) => (
                <div key={el.id}>{el.title}</div>
            ))}
        </div>
    );
};

export default Product;
