import { DATA, DATA_ERROR } from "./actionType";

const initialstate = {
  data: [],
  error: false,
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case DATA:
      return {
        ...state,
        data: action.payload,
        error: false,
      };
    case DATA_ERROR:
      return {
        ...state,
        error: action.payload, 
      };
    default:
      return state;
  }
};

export default reducer;
