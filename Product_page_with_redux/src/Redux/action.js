
import { useParams } from "react-router-dom";
import { DATA, DATA_ERROR, EMAIL, ERROR, FETCH_SINGLEPAGE_FAILURE, FETCH_SINGLEPAGE_SUCCESS, L_EMAIL, L_PASSWORD, PASSWORD, SINGLEPAGE, USERNAME } from "./actionType";
import Swal from "sweetalert2";
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
      Swal.fire({
        title: "Good job!",
        text: "successfully Singup the data",
        icon: "success"
      });
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
          
            Swal.fire({
              title: "Good job!",
              text: "Successfully Login the data",
              icon: "success"
            });
            localStorage.setItem("Login",true)
            nav_login("/")
          }
          else{
          // alert("invalid email or password")
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid Email And Password",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
          

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
  fetch(`http://localhost:9595/product/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      dispatch({ type: FETCH_SINGLEPAGE_SUCCESS, payload: data });
    })
    .catch(error => {
      dispatch({ type: FETCH_SINGLEPAGE_FAILURE, error: error.message });
    });
};