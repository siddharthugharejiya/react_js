
import { DATA, DATA_ERROR, EMAIL, ERROR, L_EMAIL, L_PASSWORD, PASSWORD, USERNAME } from "./actionType";

export const fetchingData = () => (dispatch)=> {
    fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())
        .then((res) => {
            dispatch({
                type: DATA,
                payload: res
            });
        })
        .catch((error) =>
            dispatch({
                type: DATA_ERROR,
                payload: error,
            })
        );
};

export const SignupAction = (formState, navigate) => (dispatch) => {
  fetch('http://localhost:9595/username', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formState),
  })
  .then(response => response.json())
  .then(data => {
    if (data) {
      alert("Successfully submitted data");
      navigate("/login"); 
    }
    dispatch({
      type: USERNAME,
      payload: data.username,
    });
    dispatch({
      type: EMAIL,
      payload: data.email,
    });
    dispatch({
      type: PASSWORD,
      payload: data.password,
    });
  })
  .catch(error => {
    dispatch({
      type: ERROR,
      payload: error.message,
    });
    console.log(error);
  });
};

export const Login_Action=(login,nav_login)=>{
  if(login.email && login.password)
    {
      fetch(`http://localhost:9595/username?email=${login.email}`)
      .then(response => response.json())
      .then(res=>{
        if(res.length>0){
          alert("login successfully")
          localStorage.setItem("Login",true)
          nav_login("/")
        }
        else{
          alert("invalid email or password")
        }
          
      })

      .catch(error=>{
              console.log(error);
              
      })
    }
 
}