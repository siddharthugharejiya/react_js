import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { home_action } from '../Redux/action';

export const Home = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.products); 
    console.log("Products:", data);

    const [state, setState] = useState({
        product: "",
        price: "",
        image: ""
    });

    const change = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };

    const submit = (e) => {
        e.preventDefault();
        dispatch(home_action(state)); 
        console.log('Data submitted:', state);

        setState({
            product: "",
            price: "",
            image: "",
        });
    };

    return (
        <>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Product Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        name="product"
                        onChange={change}
                        placeholder="Product Name"
                        value={state.product}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Price</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput2"
                        name="price"
                        onChange={change}
                        placeholder="Price"
                        value={state.price}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput3" className="form-label">Image URL</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput3"
                        name="image"
                        onChange={change}
                        placeholder="Image URL"
                        value={state.image}
                    />
                </div>

                <button type="submit" className="btn btn-dark">Submit</button>
            </form>

            {data.map((el, index) => (
                <div key={index}>
                    <h1>{el.product}</h1>
                    <h2>{el.price}</h2>
                    <img src={el.image} alt={el.product} />
                </div>
            ))}
        </>
    );
};