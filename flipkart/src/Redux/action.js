import { DATA, SUCCESS, ERROR, LOGIN } from "./actiontype";
import Swal from "sweetalert2";


export const product_action = () => (dispatch) => {
  fetch(`https://mock-server-rea1.onrender.com/product`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: DATA,
        payload: data,
      });
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
};


export const signup_action = (userData, navigate) => (dispatch) => {
  fetch("https://mock-server-rea1.onrender.com/username", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData), 
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        Swal.fire({
          title: "Good job!",
          text: "Successfully signed up!",
          icon: "success",
        });
        
        dispatch({
          type: "USERNAME",
          payload: data.username,
        });

        dispatch({
          type: "EMAIL",
          payload: data.email,
        });

        dispatch({
          type: "PASSWORD",
          payload: data.password,
        });

        
        navigate("/login");
      }
    })
    .catch((error) => {
      console.error("Signup error:", error);
      dispatch({
        type: "ERROR",
        payload: error.message || "Error during signup",
      });

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong with signup",
      });
    });
};

export const Login_Action = (login, nav_login) => {
  return (dispatch) => {
    const { email, password } = login;

    if (!email || !password) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please enter both email and password.',
      });
      return;
    }

    // Make the fetch request dynamic based on user input
    fetch(`https://mock-server-rea1.onrender.com/username?email=${email}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }
        return response.json();
      })
      .then((res) => {
        console.log(res)
        if (res.length === 0) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No account found with this email address.',
          });
        } else if (res[0].pass === password) { 
          Swal.fire({
            title: 'Success',
            text: 'Logged in successfully.',
            icon: 'success',
          });
          localStorage.setItem('Login', 'true');
          dispatch({
            type: LOGIN,
            payload: { email, password },
          });
          nav_login('/'); 
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Incorrect password.',
            footer: '<a href="#">Forgot your password?</a>',
          });
        }
      })
      .catch((error) => {
        console.error('Login error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Something went wrong during login.',
        });
        dispatch({
          type: ERROR,
          payload: 'Login failed due to an error.',
        });
      });
  };
};
