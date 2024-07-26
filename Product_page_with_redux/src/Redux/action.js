import { DATA, DATA_ERROR } from "./actionType";

const fetching_data = (dispatch) => {
  return (dispatch) => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: DATA,
          payload: data,
        });
      })
      .catch((err) =>
        dispatch({
          type: DATA_ERROR,
          payload: err.message,
        })
      );
  };
};

export default fetching_data;
