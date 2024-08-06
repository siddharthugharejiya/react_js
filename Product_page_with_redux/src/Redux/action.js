
import { useParams } from "react-router-dom";
import { DATA, DATA_ERROR, EMAIL, ERROR, L_EMAIL, L_PASSWORD, PASSWORD, SINGLEPAGE, USERNAME } from "./actionType";

export const fetchingData = () => (dispatch)=> {
    fetch(`http://localhost:9595/product`)
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
        if(res[0].pass==login.password)
          {
            alert("login successfully")
            localStorage.setItem("Login",true)
            nav_login("/")
          }
          else{
          alert("invalid email or password")

          }
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

export const Singlepage_action = (id) => (dispatch) => {
  fetch(`http://localhost:9595/product/${id}`) // Ensure the endpoint matches your API
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      dispatch({ type: 'FETCH_SINGLE_PAGE_DATA_SUCCESS', payload: data });
    })
    .catch((error) => {
      dispatch({ type: 'FETCH_SINGLE_PAGE_DATA_FAILURE', error: error.message });
    });
};
