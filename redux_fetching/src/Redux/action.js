const fetching_data_from_api = (dispatch) => {
    dispatch({ type: "loading" });
    fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())
        .then((res) => {
            dispatch({ type: "data", payload: res });
        })
        .catch((error) => {
            dispatch({ type: "error" });
        });
};

export default fetching_data_from_api;
