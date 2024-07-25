import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetching_data_from_api from "../Redux/action";

const Fetching_Data = () => {
    const dispatch = useDispatch();
    const fetch_data = useSelector((data) => data);

    useEffect(() => {
        fetching_data_from_api(dispatch);
    }, [dispatch]);

    const add = () => {
        console.log(fetch_data);
    };

    return (
        <> 

        

            <button onClick={add}>fetch_data</button>
        </>
    );
};

export default Fetching_Data;
