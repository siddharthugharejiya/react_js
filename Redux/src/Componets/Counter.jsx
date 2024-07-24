import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { INC } from '../Redux/actionType';

const Counter = () => {
    const value = useSelector((state) => state.count);
    const value1 = useSelector((state1)=>state1.count1)
    const dispatch = useDispatch();
    const dispatch1 = useDispatch();

    const add = () => {
        dispatch({
            type: INC,
        });
    };
    const add1 = () =>{
           dispatch1({
            type: INC,
           })
    }
    return (
        <div>

            {/* <h1>{value}</h1> */}
            <h1>{value1.count1}</h1>
            <button onClick={add}>+</button>
           
            <button onClick={add1}>+</button>
        
        
        
        </div>
    );
};

export default Counter;
