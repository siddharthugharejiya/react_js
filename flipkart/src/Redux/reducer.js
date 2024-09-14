// reducer.js
// import { DATA } from './actionTypes';

import { DATA } from "./actiontype";

const product_initial = {
  data: []
};

export const product_reducer = (state = product_initial, action) => {
  switch (action.type) {
    case DATA:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};
