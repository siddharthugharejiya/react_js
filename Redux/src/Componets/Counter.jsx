import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { INC } from '../Redux/actionType';

const Counter = () => {
    const value = useSelector((state) => state.count);
    const dispatch = useDispatch();

    const add = () => {
        dispatch({
            type: INC,
        });
    };

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={add}>+</button>
        </div>
    );
};

export default Counter;
