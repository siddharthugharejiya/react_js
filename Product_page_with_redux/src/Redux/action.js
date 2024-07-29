import { DATA, DATA_ERROR } from "./actionType";

const fetchingData = () => {
  return (dispatch) => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: DATA,
          payload: data,
        });
      })
      .catch((error) =>
        dispatch({
          type: DATA_ERROR,
          payload: error,
        })
      );
  };
};

export default fetchingData;
