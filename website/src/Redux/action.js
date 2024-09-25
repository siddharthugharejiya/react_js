import { DATA, EMAIL, PASSWORD, USERNAME } from "./action_type";

export const product_action = () => (dispatch) => {
    fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            dispatch({
                type: DATA,
                payload: data
            });
        })
        .catch((error) => {
            console.error("Error fetching products:", error);
        });
};

export const signup_action = (userData, navigate) => (dispatch) => {
    fetch('http://localhost:9595/username', {
        method: "POST",
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(data => {
        if (data) {
            alert("Successful signup");
            navigate("/login");
            dispatch({
                type: USERNAME,
                payload: data.username
            });
            dispatch({
                type: EMAIL,
                payload: data.email
            });
            dispatch({
                type: PASSWORD,
                payload: data.password
            });
        }
    })
    .catch((error) => {
        console.error("Error during signup:", error);
    });
};
