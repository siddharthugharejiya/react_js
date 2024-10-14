import { DATA, EMAIL, L_EMAIL, L_PASSWORD, PASSWORD, USERNAME } from "./action_type";

export const product_action = () => (dispatch) => {
    fetch('http://localhost:9595/products')
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

export const login_action = (login,nav)=> (dispatch)=>{
    if(login.email && login.password)
    {
        
        fetch(`http://localhost:9595/username?email=${login.email}`)
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