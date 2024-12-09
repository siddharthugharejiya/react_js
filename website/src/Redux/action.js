
import { CART_ADD, CART_FETCH, DATA, EMAIL, L_EMAIL, L_PASSWORD, PASSWORD,  SINGLE,  USERNAME } from "./action_type";

export const product_action = () => (dispatch) => {
    fetch('https://data-3-hyvi.onrender.com/products')
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
export const single_action = (id) => (dispatch) => {
    fetch(`https://data-3-hyvi.onrender.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            dispatch({
                type: SINGLE,
                payload: data
            });
        })
        .catch((error) => {
            console.error("Error fetching single product:", error);
        });
};
export const addToCart = (product) => async (dispatch) => {
    console.log("Sending product to cart:", product);

    try {
        
        const response = await fetch(`https://data-3-hyvi.onrender.com/cart`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        });

        if (!response.ok) {
      
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Product added to cart:", data);

        dispatch({
            type: CART_ADD,
            payload: data
        });
    } catch (error) {
        console.error("Error adding product to cart:", error);
        alert("Failed to add product to cart. Please try again.");
    }
};



export const fetchCartData = () => (dispatch) => {
    fetch(`https://mock-server-rea1.onrender.com/cart`)
    .then((res) => res.json())
    .then((data) => {
        console.log("Cart data fetched", data);
        dispatch({
            type: CART_FETCH, 
            payload: data
        });
    })
    .catch((error) => {
        console.error("Error fetching cart data:", error);
    });
};
export const signup_action = (userData, navigate) => (dispatch) => {
   
    fetch('https://data-3-hyvi.onrender.com/username', {
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

export const login_action = (login,nav)=> (dispatch)=>{
    if(login.email && login.password)
    {
        
        fetch(`https://data-3-hyvi.onrender.com/username?email=${login.email}`)
        .then(res=>res.json())
        .then(res=>{
           if(res.length > 0)
           {
            if(res[0].password ==  login.password)
            {
                alert("Login successfully ")
                nav("/")
            }
            else{
                alert("invid email or password")
            }
           }
           else{
            alert("invid email or password")

           }
         dispatch({
             type:L_EMAIL,
             payload:res.email
           })
           dispatch({
             type:L_PASSWORD,
             payload:res.password
           })
     
           
        })
    }
    else{
        alert("invalid email or password")
    }
     
}