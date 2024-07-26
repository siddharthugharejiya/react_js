import { DATA, DATA_ERROR } from "./actionType";

const initialstate = {
  data: [],
  error: null,
};

const reducer = (state = initialstate, action) => {
  console.log('Action:', action);
  console.log('State:', state);
  switch (action.type) {
    case DATA:
      return {
        ...state,
        data: action.payload,
        error: null,
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
